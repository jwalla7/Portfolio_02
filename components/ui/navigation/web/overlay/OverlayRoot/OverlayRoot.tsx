import { useRef } from "react";
import { cn } from "@/lib/utils";
import { OverlayRootProps } from "./overlayRootProps";
import { OverylayNav } from "../OverlayNav/OverylayNav";
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
                <OverylayNav overlayRefProps={displayStateRef}>
                    {children}
                </OverylayNav>
            </div>
        </div>
    );
};
