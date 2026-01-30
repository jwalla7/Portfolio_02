import { RefObject } from "react";

export interface useMouseMoveProps {
    enableMouseMove: boolean;
    attributeRef?: RefObject<HTMLElement | null> | undefined;
    buttonRef?: RefObject<HTMLButtonElement | null> | undefined;
    childrenRef?: RefObject<HTMLElement | null> | undefined;
    traceChildren: boolean;
}
