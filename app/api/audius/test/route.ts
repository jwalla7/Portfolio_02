import { env } from "@/env.mjs";
import { sdk } from "@audius/sdk";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        // Check environment variables
        const hasApiKey = !!env.AUDIUS_API_KEY;
        const hasSecret = !!env.AUDIUS_SECRET;

        console.log("Environment check:", { hasApiKey, hasSecret });

        // Try to initialize SDK
        const audiusSdk = sdk({
            appName: "PortfolioV2",
            apiKey: env.AUDIUS_API_KEY,
            apiSecret: env.AUDIUS_SECRET,
        });

        // Try a simple API call
        const { data: trending } = await audiusSdk.tracks.getTrendingTracks({ limit: 1 });

        return NextResponse.json({
            status: "ok",
            envCheck: { hasApiKey, hasSecret },
            sdkInitialized: true,
            testCallSuccess: !!trending,
            trendingCount: trending?.length || 0,
        });
    } catch (error) {
        console.error("Test endpoint error:", error);
        return NextResponse.json(
            {
                status: "error",
                error: error instanceof Error ? error.message : "Unknown error",
                stack: error instanceof Error ? error.stack : undefined,
            },
            { status: 500 },
        );
    }
};
