import { MutableRefObject } from "react";
import { OverlayTriggerProps } from "../OverlayTrigger/overlayTriggerProps";

export interface OverlayRootProps extends OverlayTriggerProps {
    overlayRefProps?: MutableRefObject<HTMLDivElement | null> | undefined;
    showDisplay?: () => void;
    hideDisplay?: () => void;
}
