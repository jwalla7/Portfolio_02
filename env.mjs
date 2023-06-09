import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// create schema
export const env = createEnv({
    // server: {}
    // client: {},
    runtimeEnv: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        GITHUB_CLIENT_ID: process.env.GITHUB_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_SECRET,
        GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,

        // DATABASE_URL: process.env.DATABASE_URL,
        // SMTP_FROM: process.env.SMTP_FROM,
        // POSTMARK_API_TOKEN: process.env.POSTMARK_API_TOKEN,
        // POSTMARK_SIGN_IN_TEMPLATE: process.env.POSTMARK_SIGN_IN_TEMPLATE,
        // POSTMARK_ACTIVATION_TEMPLATE: process.env.POSTMARK_ACTIVATION_TEMPLATE,
        // STRIPE_API_KEY: process.env.STRIPE_API_KEY,
        // STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        // STRIPE_DONATION_ID: process.env.STRIPE_DONATION_ID,
        // NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
});
