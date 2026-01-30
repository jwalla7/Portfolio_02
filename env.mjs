import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Create schema, all env variables from .env files need to be included to avoid errors.
export const env = createEnv({
    server: {
        // Optional: only required if you hit the Audius routes/features.
        AUDIUS_API_KEY: z.string().min(1).optional(),
        AUDIUS_SECRET: z.string().min(1).optional(),

        NEXTAUTH_URL: z.string().url().optional(),
        // Optional: only required if you enable Auth.js/NextAuth in the deployed env.
        NEXTAUTH_SECRET: z.string().min(1).optional(),

        // Optional: only required if you enable the GitHub provider.
        GITHUB_CLIENT_ID: z.string().min(1).optional(),
        GITHUB_CLIENT_SECRET: z.string().min(1).optional(),

        // Optional: only required if you enable the Google provider.
        GOOGLE_CLIENT_ID: z.string().min(1).optional(),
        GOOGLE_CLIENT_SECRET: z.string().min(1).optional(),

        // Optional: only required if you use Prisma/DB-backed features in that environment.
        DATABASE_URL: z.string().min(1).optional(),
        POSTGRES_URL: z.string().min(1).optional(),
        POSTGRES_PRISMA_URL: z.string().min(1).optional(),
        POSTGRES_URL_NO_SSL: z.string().min(1).optional(),
        POSTGRES_URL_NON_POOLING: z.string().min(1).optional(),
        POSTGRES_USER: z.string().min(1).optional(),
        POSTGRES_HOST: z.string().min(1).optional(),
        POSTGRES_PASSWORD: z.string().min(1).optional(),
        POSTGRES_DATABASE: z.string().min(1).optional(),
    },
    client: {
        // NEXT_PUBLIC_URL: z.string().min(1),
    },
    runtimeEnv: {
        AUDIUS_API_KEY: process.env.AUDIUS_API_KEY,
        AUDIUS_SECRET: process.env.AUDIUS_SECRET,

        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,

        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,

        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

        DATABASE_URL: process.env.DATABASE_URL,
        POSTGRES_URL: process.env.POSTGRES_URL,
        POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
        POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL,
        POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
        POSTGRES_USER: process.env.POSTGRES_USER,
        POSTGRES_HOST: process.env.POSTGRES_HOST,
        POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
        POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,

        // SMTP_FROM: process.env.SMTP_FROM,
        // POSTMARK_API_TOKEN: process.env.POSTMARK_API_TOKEN,
        // POSTMARK_SIGN_IN_TEMPLATE: process.env.POSTMARK_SIGN_IN_TEMPLATE,
        // POSTMARK_ACTIVATION_TEMPLATE: process.env.POSTMARK_ACTIVATION_TEMPLATE,

        // STRIPE_API_KEY: process.env.STRIPE_API_KEY,
        // STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        // STRIPE_DONATION_ID: process.env.STRIPE_DONATION_ID,

        // NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
    emptyStringAsUndefined: true,
});
