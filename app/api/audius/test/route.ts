import { env } from "@/env.mjs";
import { sdk } from "@audius/sdk";
import { NextResponse } from "next/server";

export const GET = async () => {
    const apiKey = env.AUDIUS_API_KEY;
    const apiSecret = env.AUDIUS_SECRET;

    // Check environment variables
    const hasApiKey = !!apiKey;
    const hasSecret = !!apiSecret;

    try {
        console.log("Environment check:", { hasApiKey, hasSecret });

        if (!apiKey || !apiSecret) {
            return NextResponse.json(
                {
                    status: "error",
                    envCheck: { hasApiKey, hasSecret },
                    sdkInitialized: false,
                    testCallSuccess: false,
                    error: "Missing Audius API credentials (AUDIUS_API_KEY/AUDIUS_SECRET).",
                },
                { status: 500 },
            );
        }

        // Try to initialize SDK
        const audiusSdk = sdk({
            appName: "PortfolioV2",
            apiKey,
            apiSecret,
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
