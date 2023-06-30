"use client";

import ThemeMenuDropdown from "@/components/ui/theme/dropdown/ThemeMenuDropdown/ThemeMenuDropdown";
import { ThemeToggleDropdown } from "@/components/ui/theme/dropdown/ThemeToggleDropdown/ThemeToggleDropdown";
import { ThemeToggleGroup } from "@/components/ui/theme/toggle/ThemeToggleGroup/ThemeToggleGroup";

export default function VisitorsPage() {
    return (
        <div suppressHydrationWarning>
            <div>visitors page</div>
            {/* <ThemeToggleGroup /> */}
            <ThemeMenuDropdown>
                <ThemeToggleDropdown />
            </ThemeMenuDropdown>
            {/* <ThemeToggle /> */}
        </div>
    );
}
