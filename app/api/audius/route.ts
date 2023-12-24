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
        // const playlistId = searchParams.get("playlistId") as string;
        const albumId = searchParams.get("albumId") as string;

        if (!trackId || !userId) throw new Error("Missing required parameters");

        const { data: track } = await audiusSdk.tracks.getTrack({ trackId: trackId });
        const streamTrack = await audiusSdk.tracks.streamTrack({ trackId: trackId });
        const { data: userTracks } = await audiusSdk.users.getTracksByUser({ id: userId });
        // const { data: playlist } = await audiusSdk.playlists.getPlaylist({
        //     playlistId: playlistId,
        // });
        // const { data: album } = await audiusSdk.albums.getAlbumTracks({
        //     albumId: albumId,
        // })

        return new NextResponse(JSON.stringify({ track, userTracks, streamTrack }), { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify(error.issues), { status: 422 });
        } else {
            console.error("Error: ", error);

            return new NextResponse(null, { status: 500 });
        }
    }
};
