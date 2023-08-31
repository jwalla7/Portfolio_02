import { forwardRef } from "react";
import { OverlayRootProps } from "./overlayRootProps";
import { OverlayNav } from "../OverlayNav/OverlayNav";
import {
    overlayStylesLayerRoot,
    overlayStylesLayer_1,
    overlayStylesLayer_2,
    overlayStylesLayer_3,
} from "./overlayRootStyles";

export const OverlayRoot = forwardRef<HTMLDivElement, OverlayRootProps>(
    ({ children, overlayRefProps }, ref) => {
        console.log(
            "Root overlayRefProps: ",
            overlayRefProps?.current?.classList
        );
        return (
            <div
                className={overlayStylesLayerRoot({ background: "default" })}
                ref={overlayRefProps}
            >
                <div
                    className={overlayStylesLayer_1({ background: "default" })}
                >
                    <div
                        className={overlayStylesLayer_2({ background: "none" })}
                    >
                        <div
                            className={overlayStylesLayer_3({
                                background: "none",
                            })}
                        >
                            <OverlayNav
                                overlayRefProps={overlayRefProps}
                                ref={ref}
                            >
                                {children}
                            </OverlayNav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

OverlayRoot.displayName = "OverlayRoot";
