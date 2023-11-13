import { sdk } from "@audius/sdk";
import { env } from "@/env.mjs";

const audiusSdk = sdk({
    appName: "PortfolioV2",
    apiKey: env.AUDIUS_API_KEY,
    apiSecret: env.AUDIUS_SECRET,
});

export const audiusTest = async () => {
    const audius = audiusSdk;
    const { data: track } = await audius.tracks.getTrack({
        trackId: "1B5ab8z",
    });
    console.log("TRACK FETCH: ", track);
};
