"use client";

import ThemeMenuDropdown from "@/components/ui/theme/dropdown/ThemeMenuDropdown/ThemeMenuDropdown";
import { ThemeToggle } from "@/components/ui/theme/toggle/ThemeToggle";
import { ThemeToggleGroup } from "@/components/ui/theme/toggle/ThemeToggleGroup/ThemeToggleGroup";

export default function VisitorsPage() {
    return (
        <div className="items-center justify-center w-screen">
            <div>visitors page</div>
            <div className="w-[364.78px]">
                <ThemeToggleGroup />
            </div>
            <ThemeMenuDropdown>
                <ThemeToggle />
            </ThemeMenuDropdown>
        </div>
    );
}
