"use client";

import ThemeMenuDropdown from "@/components/ui/theme/dropdown/ThemeMenuDropdown/ThemeMenuDropdown";
import { ThemeToggleDropdown } from "@/components/ui/theme/dropdown/ThemeToggleDropdown/ThemeToggleDropdown";
import { ThemeToggleGroup } from "@/components/ui/theme/toggle/ThemeToggleGroup/ThemeToggleGroup";

export default function VisitorsPage() {
    return (
        <div
            suppressHydrationWarning
            className="items-center justify-center w-screen"
        >
            <div>visitors page</div>
            <ThemeMenuDropdown>
                <ThemeToggleDropdown />
            </ThemeMenuDropdown>
            <div className="w-[364.78px]">
                <ThemeToggleGroup />
            </div>
        </div>
    );
}
