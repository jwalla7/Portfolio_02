import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Create schema, all env variables from .env files need to be included to avoid errors.
export const env = createEnv({
    server: {
        // NEXTAUTH_URL: z.string().url().optional(),
        // NEXTAUTH_SECRET: z.string().min(1),
        // GITHUB_ID: z.string().min(1),
        // GITHUB_SECRET: z.string().min(1),
        // GITHUB_ACCESS_TOKEN: z.string().min(1),
        // GOOGLE_CLIENT_ID: z.string().min(1),
        // GOOGLE_CLIENT_SECRET: z.string().min(1),
        AUDIUS_API_KEY: z.string().min(1),
        AUDIUS_SECRET: z.string().min(1),
    },
    client: {
        // NEXT_PUBLIC_URL: z.string().min(1),
    },
    runtimeEnv: {
        AUDIUS_API_KEY: process.env.AUDIUS_API_KEY,
        AUDIUS_SECRET: process.env.AUDIUS_SECRET,
        // NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        // GITHUB_ID: process.env.GITHUB_ID,
        // GITHUB_SECRET: process.env.GITHUB_SECRET,
        // GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
        // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        // GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        // TODO
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
