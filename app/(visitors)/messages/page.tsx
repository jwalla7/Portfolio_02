"use client";

import ThemeMenuDropdown from "@/components/ui/theme/dropdown/ThemeMenuDropdown";
import ThemeToggle from "@/components/ui/theme/toggle/ThemeToggle";
import { ThemeToggleDropdown } from "@/components/ui/theme/dropdown/ThemeToggleDropdown";
import ThemeToggleGroup from "@/components/ui/theme/toggle/group/ThemeToggleGroup";

export default function VisitorsPage() {
    return (
        <div suppressHydrationWarning>
            <div>visitors page</div>
            <ThemeMenuDropdown>
                <ThemeToggleDropdown />
            </ThemeMenuDropdown>
            <ThemeToggleGroup />
            {/* <ThemeToggle /> */}
        </div>
    );
}
