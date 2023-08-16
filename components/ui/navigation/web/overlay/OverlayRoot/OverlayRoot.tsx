import { useRef } from "react";
import { OverlayRootProps } from "./overlayRootProps";
import { OverlayNav } from "../OverlayNav/OverlayNav";
import {
    overlayStylesLayerRoot,
    overlayStylesLayer_1,
    overlayStylesLayer_2,
    overlayStylesLayer_3,
} from "./overlayRootStyles";

export const OverlayRoot: React.FC<OverlayRootProps> = ({ children }) => {
    const displayStateRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            className={overlayStylesLayerRoot({ background: "default" })}
            ref={displayStateRef}
        >
            <div className={overlayStylesLayer_1({ background: "default" })}>
                <div
                    className={overlayStylesLayer_2({ background: "default" })}
                >
                    <div
                        className={overlayStylesLayer_3({
                            background: "none",
                        })}
                    >
                        <OverlayNav overlayRefProps={displayStateRef}>
                            {children}
                        </OverlayNav>
                    </div>
                </div>
            </div>
        </div>
    );
};
