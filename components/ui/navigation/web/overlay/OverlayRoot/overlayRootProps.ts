import { MouseEventHandler, ReactNode } from "react";

export interface OverlayRootProps {
    children?: ReactNode;
    onMouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
    showDisplay?: () => void;
    hideDisplay?: () => void;
}
