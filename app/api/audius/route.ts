import { env } from "@/env.mjs"; // Adjust the import path as necessary
import { sdk } from "@audius/sdk";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

const audiusSdk = sdk({
    appName: "PortfolioV2",
    apiKey: env.AUDIUS_API_KEY,
    apiSecret: env.AUDIUS_SECRET,
});

// GET Tracks by User, then parse Ids, then Get tracks by Ids, then Stream tracks by Ids

// export const GET = async (req: NextRequest) => {
//     try {
//         const { searchParams } = new URL(req.url);
//         const trackId = searchParams.get("trackId") as string;
//         const userId = searchParams.get("userId") as string;

//         if (!trackId || !userId) throw new Error("Missing required parameters");

//         const { data: track } = await audiusSdk.tracks.getTrack({ trackId: trackId });
//         const streamTrack = await audiusSdk.tracks.streamTrack({ trackId: trackId });
//         const { data: userTracks } = await audiusSdk.users.getTracksByUser({ id: userId });

//         return new NextResponse(JSON.stringify({ track, userTracks, streamTrack }), { status: 200 });
//     } catch (error) {
//         if (error instanceof z.ZodError) {
//             return new NextResponse(JSON.stringify(error.issues), { status: 422 });
//         } else {
//             console.error("Error: ", error);

//             return new NextResponse(null, { status: 500 });
//         }
//     }
// };

// Function to get track data and its streaming link
const getTrackWithStreamLink = async (trackId: string) => {
    try {
        const { data: trackData } = await audiusSdk.tracks.getTrack({ trackId });
        const streamLink = await audiusSdk.tracks.streamTrack({ trackId });
        return { ...trackData, streamLink };
    } catch (error) {
        console.error("Error fetching track data or stream link: ", error);
        throw error;
    }
};

// Fetch all tracks by user, get each track's data and streaming link
export const GET = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId") as string;

        if (!userId) throw new Error("Missing required user ID");

        // Fetch all tracks by the user
        const { data: userTracks } = await audiusSdk.users.getTracksByUser({ id: userId });
        if (!userTracks) throw new Error("No tracks found for user");

        // Fetch each track's data and streaming link
        const tracksWithLinks = await Promise.all(userTracks.map((track) => getTrackWithStreamLink(track.id)));
        return new NextResponse(JSON.stringify(tracksWithLinks), { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify(error.issues), { status: 422 });
        } else {
            console.error("Error: ", error);
            return new NextResponse(null, { status: 500 });
        }
    }
};
