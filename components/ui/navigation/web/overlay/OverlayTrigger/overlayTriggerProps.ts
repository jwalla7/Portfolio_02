import { PopoverTriggerProps } from "@radix-ui/react-popover";
import { MutableRefObject, RefObject } from "react";

export interface OverlayTriggerProps extends PopoverTriggerProps {
    children?: React.ReactNode;
    className?: string;
    overlayRef?: MutableRefObject<HTMLDivElement | null> | undefined;
}
