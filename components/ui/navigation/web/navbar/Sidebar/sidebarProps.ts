import { ButtonWithLabelProps } from "@/components/ui/button/ButtonWithLabel/buttonWithLabelProps";
import { MutableRefObject } from "react";
import { OverlayNavProps } from "../../overlay/OverlayNav/overlayNavProps";

export interface SidebarProps extends ButtonWithLabelProps, OverlayNavProps {
    className?: string;
    overlayRefProps?: MutableRefObject<HTMLDivElement | null> | undefined;
}
