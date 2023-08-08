import { useRef } from "react";
import { cn } from "@/lib/utils";
import { OverlayRootProps } from "./overlayRootProps";
import { OverlayNav } from "../OverlayNav/OverlayNav";
import {
    overlayStylesLayerRoot,
    overlayStylesLayer_1,
} from "./overlayRootStyles";

export const OverlayRoot: React.FC<OverlayRootProps> = ({ children }) => {
    const displayStateRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            className={cn(overlayStylesLayerRoot({ background: "root" }))}
            ref={displayStateRef}
        >
            <div
                className={cn(overlayStylesLayer_1({ background: "layer_1" }))}
            >
                <OverlayNav overlayRefProps={displayStateRef}>
                    {children}
                </OverlayNav>
            </div>
        </div>
    );
};
