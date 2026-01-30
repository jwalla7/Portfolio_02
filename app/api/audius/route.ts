export const dynamic = "force-dynamic";

import { env } from "@/env.mjs"; // Adjust the import path as necessary
import { sdk, AudiusSdk } from "@audius/sdk"; // Imported AudiusSdk type
import type { Track } from "@audius/sdk/dist/sdk/api/generated/default/models/Track";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import Cache from "node-cache";

const myCache = new Cache({ stdTTL: 100, checkperiod: 120 }); // TTL in seconds

let audiusSdk: AudiusSdk | null = null;
let sdkInitializationError: Error | null = null;

const AUDIUS_API_KEY = env.AUDIUS_API_KEY;
const AUDIUS_SECRET = env.AUDIUS_SECRET;

// Check if environment variables are set
if (!AUDIUS_API_KEY || !AUDIUS_SECRET) {
    console.error("CRITICAL: Missing Audius API credentials in environment variables.");
    sdkInitializationError = new Error("CRITICAL: Missing Audius API credentials.");
} else {
    // Only attempt to initialize if keys are present
    try {
        audiusSdk = sdk({
            appName: "PortfolioV2",
            apiKey: AUDIUS_API_KEY,
            apiSecret: AUDIUS_SECRET,
        });
        console.log("Audius SDK initialized successfully.");
    } catch (e: any) {
        console.error("CRITICAL: Audius SDK initialization failed!", e);
        sdkInitializationError = e instanceof Error ? e : new Error(`SDK init failed: ${JSON.stringify(e)}`);
        audiusSdk = null; // Ensure SDK is null if init fails
    }
}

type TrackWithStreamLink = Track & { id: string; streamLink: string };

const normalizeAudiusImageUrl = (url?: string): string | undefined => {
    if (!url || typeof url !== "string") return url;
    try {
        const u = new URL(url);
        // Use a stable proxy host that can fetch/cached content from the underlying content nodes.
        u.protocol = "https:";
        u.hostname = "creatornode.audius.co";
        u.port = "";
        return u.toString();
    } catch {
        return url;
    }
};

const normalizeAudiusImageSet = <T>(img: T): T => {
    if (!img || typeof img !== "object") return img;
    const copy: Record<string, unknown> = { ...(img as unknown as Record<string, unknown>) };
    for (const k of ["_150x150", "_480x480", "_1000x1000"] as const) {
        const v = copy[k];
        if (typeof v === "string") {
            copy[k] = normalizeAudiusImageUrl(v);
        }
    }
    return copy as unknown as T;
};

// Function to attach a streaming link to an existing track object
const getTrackWithStreamLink = async (track: Track): Promise<TrackWithStreamLink> => {
    if (!audiusSdk) {
        // This check is crucial now that audiusSdk can be null
        throw new Error("Audius SDK not available due to initialization failure.");
    }
    try {
        const trackId = track.id;
        if (!trackId) {
            throw new Error("Track missing required id.");
        }

        // Get the stream URL. If this call fails intermittently, fall back to the public stream endpoint.
        let streamUrl: string | undefined;
        try {
            streamUrl = await audiusSdk.tracks.getTrackStreamUrl({ trackId });
        } catch (streamError) {
            console.error(`[api/audius] getTrackStreamUrl failed for trackId=${trackId}. Falling back.`, streamError);
            streamUrl = `https://api.audius.co/v1/tracks/${trackId}/stream`;
        }

        const streamLink = streamUrl || `https://api.audius.co/v1/tracks/${trackId}/stream`;
        return {
            ...track,
            id: trackId,
            artwork: normalizeAudiusImageSet(track.artwork),
            user: track.user
                ? {
                      ...track.user,
                      profilePicture: normalizeAudiusImageSet((track.user as any).profilePicture),
                  }
                : track.user,
            streamLink,
        };
    } catch (error) {
        // This catch is for errors from getTrack or if streamTrack re-throws.
        console.error("Error in getTrackWithStreamLink: ", error);
        throw error; // Re-throw to be caught by the main GET handler's catch block
    }
};

// Fetch all tracks by user, get each track's data and streaming link
export const GET = async (req: NextRequest) => {
    if (sdkInitializationError) {
        const errorMsg = "Audius SDK failed to initialize. Please check server logs.";
        console.error("SDK Initialization Error:", sdkInitializationError.message);
        return new NextResponse(
            JSON.stringify({
                error: errorMsg,
                type: "SDKInitializationError",
                details: sdkInitializationError.message,
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }

    if (!audiusSdk) {
        const errorMsg = "Audius SDK is not available. Please check server logs.";
        console.error(errorMsg); // This log indicates a programming error if sdkInitializationError wasn't set
        return new NextResponse(
            JSON.stringify({
                error: errorMsg,
                type: "SDKNotAvailable",
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }

    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId") as string;
        const excludeIds = searchParams.get("excludeIds");
        const stream = searchParams.get("stream");

        if (!userId) throw new Error("Missing required user ID");

        // Create cache key based on parameters
        const cacheKey = `${userId}-${excludeIds || "all"}-${stream || "false"}`;

        // Attempt to fetch from cache first
        const cachedData = myCache.get(cacheKey);
        if (cachedData) {
            return new NextResponse(JSON.stringify(cachedData), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        // Fetch all tracks by the user
        let userTracksResponse;
        try {
            userTracksResponse = await audiusSdk.users.getTracksByUser({ id: userId });
        } catch (e) {
            console.error("Error from audiusSdk.users.getTracksByUser:", e);
            const errMessage = e instanceof Error ? e.message : JSON.stringify(e);
            throw new Error(`Failed during getTracksByUser: ${errMessage}`);
        }
        const { data: userTracks } = userTracksResponse;

        if (!userTracks || userTracks.length === 0) {
            return new NextResponse(JSON.stringify([]), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        // Filter out excluded IDs if provided
        let filteredTracks = userTracks;
        if (excludeIds && excludeIds.trim() !== "") {
            const excludeIdArray = excludeIds.split(",").filter((id) => id.trim());
            if (excludeIdArray.length > 0) {
                filteredTracks = userTracks.filter((track) => !excludeIdArray.includes(track.id));
            }
        }

        // Defensive: drop any invalid/null entries from the SDK response
        const validTracks = filteredTracks.filter(
            (t): t is Track => !!t && typeof (t as Track).id === "string" && (t as Track).id.length > 0,
        );

        // If no tracks after filtering, return empty array
        if (validTracks.length === 0) {
            return new NextResponse(JSON.stringify([]), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        // If stream parameter is true, fetch stream links
        let tracksWithData: unknown;
        if (stream === "true") {
            // Fetch each track's data and streaming link
            tracksWithData = await Promise.all(validTracks.map(async (track) => getTrackWithStreamLink(track)));
        } else {
            tracksWithData = validTracks;
        }

        // Cache the result
        myCache.set(cacheKey, tracksWithData);

        return new NextResponse(JSON.stringify(tracksWithData), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify(error.issues), { status: 422 });
        } else {
            // Restored simpler logging for the main catch block
            console.error("Error in /api/audius GET handler:", error);

            const errorMessage = error instanceof Error ? error.message : "An unknown server error occurred.";
            const errorStack = error instanceof Error ? error.stack : undefined;
            const errorName = error instanceof Error ? error.name : undefined;

            // Construct response body
            const responseBody: {
                error: string;
                type?: string;
                details?: string | undefined;
                name?: string | undefined;
                rawError?: string;
            } = {
                error: errorMessage,
                type: "GenericApiError",
                details: errorStack,
                name: errorName,
            };

            if (!(error instanceof Error)) {
                try {
                    responseBody.rawError = JSON.stringify(error);
                } catch (e) {
                    responseBody.rawError = "Error object could not be stringified.";
                }
            }

            return new NextResponse(JSON.stringify(responseBody), {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
    }
};
