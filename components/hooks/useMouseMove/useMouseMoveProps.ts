import { RefObject } from "react";

export interface useMouseMoveProps {
    enableMouseMove: boolean;
    attributeRef?: RefObject<HTMLElement> | undefined;
    buttonRef?: RefObject<HTMLButtonElement> | undefined;
    childrenRef?: RefObject<HTMLElement> | undefined;
    traceChildren: boolean;
}
