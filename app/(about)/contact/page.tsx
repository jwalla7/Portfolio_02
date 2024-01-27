"use client";

import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";

const ContactPage = () => {
    interface style {
        percentage: number;
        fill: string;
    }

    return (
        <div suppressHydrationWarning className="relative min-w-full min-h-screen h-screen overflow-hidden">
            <OverlayTrigger />
        </div>
    );
};

export default ContactPage;
