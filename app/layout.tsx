import "../design/input.css";
import { ThemeProvider } from "@/components/ui/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { robotoRegular } from "@/design/fontDefaults";
import React from "react";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        /**
         *
         * `Suppress Hydration Warning` Removes warning of mismatched attributes/content of elements
         *
         * when using server-side React rendering
         *
         * https://legacy.reactjs.org/docs/dom-elements/html
         */
        <React.StrictMode>
            <html lang="en" suppressHydrationWarning={true}>
                <head />
                <body
                    className={cn(
                        robotoRegular.className,
                        "min-w-full min-h-screen m-0 antialiased overflow-x-hidden overscroll-y-none"
                    )}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        /**
                         * `enableSystem` enables system preference and developer tools `toggle theme` simulation for the layout
                         *
                         * when on `system` theme.
                         *
                         * https://github.com/pacocoursey/next-themes
                         */
                        enableSystem={true}
                    >
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </React.StrictMode>
    );
}
