"use client";

import { Button } from "@/components/ui/button/Button/Button";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import ThemeMenuDropdown from "@/components/ui/theme/dropdown/ThemeMenuDropdown/ThemeMenuDropdown";
import { ThemeToggleDropdown } from "@/components/ui/theme/dropdown/ThemeToggleDropdown/ThemeToggleDropdown";
import { ThemeToggleGroup } from "@/components/ui/theme/toggle/ThemeToggleGroup/ThemeToggleGroup";

export default function VisitorsPage() {
    return (
        <div className="items-center justify-center w-screen">
            <div>visitors page</div>
            <div className="w-[364.78px]">
                <ThemeToggleGroup />
            </div>
            <ThemeMenuDropdown>
                <ThemeToggleDropdown />
            </ThemeMenuDropdown>
        </div>
    );
}
