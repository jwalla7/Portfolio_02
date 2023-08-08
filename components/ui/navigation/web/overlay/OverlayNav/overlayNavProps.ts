import { MutableRefObject, ReactNode } from "react";
import { OverlayRootProps } from "../OverlayRoot/overlayRootProps";

export interface OverlayNavProps extends OverlayRootProps {
    children?: ReactNode;
    overlayRefProps?: MutableRefObject<HTMLDivElement | null>;
}
