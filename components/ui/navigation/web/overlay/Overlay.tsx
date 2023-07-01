import { cn } from "@/lib/utils";
import {
    overlayStylesLayerRoot,
    overlayStylesLayer_1,
    overlayStylesLayer_3,
} from "./overlayStyles";
import { OverlayProps } from "./overlayProps";

export const OverlayRoot = React.forwardRef<HTMLDivElement, OverlayProps>(
    ({ children }, ref) => {
        return (
            <div className={cn(overlayStylesLayerRoot({ background: "root" }))}>
                <div
                    className={cn(
                        overlayStylesLayer_1({ background: "layer_1" })
                    )}
                >
                    <div
                        className={cn(
                            overlayStylesLayer_3({ background: "layer_3" })
                        )}
                        ref={ref}
                        aria-label="right aligned"
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
);

OverlayRoot.displayName = "OverlayRoot";
