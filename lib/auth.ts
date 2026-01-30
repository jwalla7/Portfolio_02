import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google,
        GitHub({
            authorization: {
                url: "https://github.com/login/oauth/authorize",
                params: { scope: "repo user:email" },
            },
            async profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url,
                };
            },
        }),
    ],
});
