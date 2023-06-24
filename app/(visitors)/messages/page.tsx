"use client";

import ThemeMenu from "@/components/ui/theme/ThemeMenu";
import { ThemeToggleDropdown } from "@/components/ui/theme/ThemeToggleDropdown";

export default function VisitorsPage() {
    return (
        <div suppressHydrationWarning>
            <div>visitors page</div>
            <ThemeMenu>
                <ThemeToggleDropdown />
            </ThemeMenu>
        </div>
    );
}
