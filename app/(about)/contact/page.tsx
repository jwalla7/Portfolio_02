"use client";

import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";

const ContactPage = () => {
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen h-[213vh] overflow-hidden"
        >
            <OverlayTrigger />
        </div>
    );
};

export default ContactPage;
