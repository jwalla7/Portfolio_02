"use client";

import { Sidebar } from "@/components/ui/navigation/web/sidebar/Sidebar/Sidebar";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import ThemeMenuDropdown from "@/components/ui/theme/dropdown/ThemeMenuDropdown/ThemeMenuDropdown";
import { ThemeToggleDropdown } from "@/components/ui/theme/dropdown/ThemeToggleDropdown/ThemeToggleDropdown";
import { ThemeToggle } from "@/components/ui/theme/toggle/ThemeToggle/ThemeToggle";

export default function VisitorsPage() {
    return (
        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <div>visitors page</div>
            {/* <ThemeToggle /> */}
            <ThemeMenuDropdown>
                <ThemeToggleDropdown />
            </ThemeMenuDropdown>
            {/* <OverlayTrigger> */}
            {/* <Sidebar /> */}
            {/* </OverlayTrigger> */}
        </div>
    );
}
