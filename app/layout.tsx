import "../design/input.css";
import { ThemeProvider } from "@/components/ui/theme/ThemeProvider";
import { cn } from "@/lib/utils";
import { robotoRegular } from "@/design/fontDefaults";
import { LocalStorageProvider } from "@/components/context/storage/LocalStorageProvider";
import { SidebarProvider } from "@/components/context/sidebar/SidebarProvider";

export const metadata = {
    title: "jwalla.dev",
    description: "jwalla.dev",
    icons: {
        icon: "/images/jwalla.png",
    }
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
        <html lang="en" suppressHydrationWarning={true}>
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
                    <LocalStorageProvider>
                        <SidebarProvider>
                            {children}
                        </SidebarProvider>
                    </LocalStorageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
