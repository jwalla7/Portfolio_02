import { sdk } from "@audius/sdk";
import { env } from "@/env.mjs";

export const audiusTest = async () => {
    try {
        const apiKey = env.AUDIUS_API_KEY;
        const apiSecret = env.AUDIUS_SECRET;

        // Ensure the SDK is initialized correctly
        if (!apiKey || !apiSecret) {
            throw new Error("API key or secret is missing");
        }

        const audiusSdk = sdk({
            appName: "PortfolioV2",
            apiKey: apiKey,
            apiSecret: apiSecret,
        });

        const { data: track } = await audiusSdk.tracks.getTrack({
            trackId: "1B5ab8z",
        });
        console.log("TRACK FETCHHHH: ", track);

        // const streamTrack = async (trackId: string): Promise<string> => {
        //     const url = await audiusSdk.tracks.streamTrack({
        //         trackId: trackId,
        //     });
        //     console.log("STREAM TRACK: ", url);
        //     return url;
        // };

        const { data: trackResolve } = await audiusSdk.resolve({
            url: "https://audius.co/jwalla7/test-smpl",
        });
        console.log("TRACK RRRRRRESOLVE: ", trackResolve);
    } catch (error) {
        console.error("Error in audiusTest: ", error);
    }
};
