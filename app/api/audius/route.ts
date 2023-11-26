import { NextApiRequest, NextApiResponse } from "next";
import { env } from "@/env.mjs"; // Adjust the import path as necessary
import { sdk } from "@audius/sdk";
import { z } from "zod";
import { NextResponse } from "next/server";

const audiusSdk = sdk({
    appName: "PortfolioV2",
    apiKey: env.AUDIUS_API_KEY,
    apiSecret: env.AUDIUS_SECRET,
});

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const userId = "1B5ab8z";

        const { data: track } = await audiusSdk.tracks.getTrack({ trackId: userId });
        console.log("USER TRACKS: ", track);

        res.status(200).json({ track });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new NextResponse(JSON.stringify(error.issues), { status: 422 });
        } else {
            return new NextResponse(null, { status: 500 });
        }
    }
};
