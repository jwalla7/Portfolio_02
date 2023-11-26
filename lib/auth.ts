import { NextAuthOptions } from "next-auth";
// TODO import EmailProvider from "next-auth/providers/email";
// TODO import client from postmark
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import { env } from "@/env.mjs";
// TODO import { siteConfig } from "@/config/site";
// TODO import db

export const authOptions: NextAuthOptions = {
    // adapter
    // session
    providers: [
        GitHubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        }),
        // TODO EmailProvider implementation
    ],
};
