"use client";

import { Sidebar } from "@/components/ui/navigation/web/sidebar/Sidebar/Sidebar";
import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import ThemeMenuDropdown from "@/components/ui/theme/dropdown/ThemeMenuDropdown/ThemeMenuDropdown";
import { ThemeToggleDropdown } from "@/components/ui/theme/dropdown/ThemeToggleDropdown/ThemeToggleDropdown";
import { ThemeToggle } from "@/components/ui/theme/toggle/ThemeToggle/ThemeToggle";

export default function VisitorsPage() {
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[213vh] overflow-hidden"
        >
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
