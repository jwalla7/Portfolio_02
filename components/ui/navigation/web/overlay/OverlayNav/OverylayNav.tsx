import React from "react";
import { cn } from "@/lib/utils";
import { overlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";

export const OverylayNav = React.forwardRef<HTMLMenuElement, overlayNavProps>(
    ({ children }, ref) => {
        return (
            <nav
                className={cn(overlayNavStyles({ background: "default" }))}
                ref={ref}
            >
                {children}
            </nav>
        );
    }
);

OverylayNav.displayName = "OverylayNav";
