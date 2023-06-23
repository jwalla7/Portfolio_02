"use client";

import ThemeMenu from "@/components/ui/theme/ThemeMenu";
import { ThemeToggleGroup } from "@/components/ui/theme/ThemeToggleGroup";

export default function VisitorsPage() {
    return (
        <div suppressHydrationWarning>
            <div>visitors page</div>
            <ThemeMenu>
                <ThemeToggleGroup />
            </ThemeMenu>
        </div>
    );
}
