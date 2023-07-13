import { MouseEventHandler } from "react";

export interface OverlayTriggerProps
    extends MouseEventHandler<HTMLAnchorElement> {
    children?: React.ReactNode;
    className?: string;
}
