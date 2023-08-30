import { PopoverTriggerProps } from "@radix-ui/react-popover";
import { MutableRefObject } from "react";

export interface OverlayTriggerProps extends PopoverTriggerProps {
    children?: React.ReactNode;
    className?: string;
    overlayRefProps?: MutableRefObject<HTMLDivElement | null> | undefined;
}
