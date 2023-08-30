import { MutableRefObject, ReactNode } from "react";
import { OverlayRootProps } from "../OverlayRoot/overlayRootProps";

export interface OverlayNavProps extends OverlayRootProps {
    overlayRefProps?: MutableRefObject<HTMLDivElement | null> | undefined;
    children?: ReactNode;
}
