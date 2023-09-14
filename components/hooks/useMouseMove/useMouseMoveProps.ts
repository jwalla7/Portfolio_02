import { RefObject } from "react";

export interface useMouseMoveProps {
    attributeRef?: RefObject<HTMLElement> | undefined;
    buttonRef?: RefObject<HTMLButtonElement> | undefined;
}
