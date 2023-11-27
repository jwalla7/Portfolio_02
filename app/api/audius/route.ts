import { NextApiRequest } from "next";
import { env } from "@/env.mjs"; // Adjust the import path as necessary
import { sdk } from "@audius/sdk";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

const audiusSdk = sdk({
    appName: "PortfolioV2",
    apiKey: env.AUDIUS_API_KEY,
    apiSecret: env.AUDIUS_SECRET,
});

export const GET = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        const trackId = searchParams.get("trackId") as string;
        const userId = searchParams.get("userId") as string;
        // const trackId = "1B5ab8z";
        // const userId = "oW3lyY7";

        const { data: track } = await audiusSdk.tracks.getTrack({ trackId: trackId });
        console.log("TRACK: ", track);

        const streamTrack = await audiusSdk.tracks.streamTrack({ trackId: trackId });
        console.log("STREAM TRACK: ", streamTrack);

        const { data: userTracks } = await audiusSdk.users.getTracksByUser({ id: userId });
        console.log("USER TRACKS: ", userTracks);

        return new NextResponse(JSON.stringify({ track }), { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify(error.issues), { status: 422 });
        } else {
            return new NextResponse(null, { status: 500 });
        }
    }
};
