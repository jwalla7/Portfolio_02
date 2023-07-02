import React from "react";
import { cn } from "@/lib/utils";
import { OverlayProps } from "./overlayRootProps";
import {
    overlayStylesLayerRoot,
    overlayStylesLayer_1,
} from "./overlayRootStyles";

export const OverlayRoot = React.forwardRef<HTMLDivElement, OverlayProps>(
    ({ children }, ref) => {
        return (
            <div
                className={cn(overlayStylesLayerRoot({ background: "root" }))}
                ref={ref}
            >
                <div
                    className={cn(
                        overlayStylesLayer_1({ background: "layer_1" })
                    )}
                    ref={ref}
                >
                    {children}
                </div>
            </div>
        );
    }
);

OverlayRoot.displayName = "OverlayRoot";
