import { MouseEventHandler } from "react";

export interface OverlayTriggerProps {
    children?: React.ReactNode;
    className?: string;
    onMouseLeave: MouseEventHandler<HTMLAnchorElement> | undefined;
}
