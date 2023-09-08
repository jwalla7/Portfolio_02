"use client";

import { ThemeToggleGroup } from "@/components/ui/theme/toggle/ThemeToggleGroup/ThemeToggleGroup";

export default function VisitorsPage() {
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[213vh] overflow-hidden"
        >
            <div>visitors page</div>
            <div className="w-[364.78px] bg-slate-800">
                <ThemeToggleGroup />
            </div>
            {/* <OverlayTrigger> */}
            {/* <NavBarVertical /> */}
            {/* </OverlayTrigger> */}
        </div>
    );
}
