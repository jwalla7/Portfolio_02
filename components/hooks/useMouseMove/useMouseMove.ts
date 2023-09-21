/**
 * @description
 *
 * Determines the mouse position within a specified HTML attribute
 *
 * Accepts a RefObject of type HTMLElement
 *
 * Accepts a boolean value to determine whether to trace children nodes or not.
 */

import { useEffect } from "react";
import { useMouseMoveProps } from "./useMouseMoveProps";

export function useMouseMove({ buttonRef, attributeRef, childrenRef, traceChildren }: useMouseMoveProps) {
    useEffect(() => {
        const ref = buttonRef?.current || attributeRef?.current || childrenRef?.current;
        const traceMouseMove = (mouseEvent: MouseEvent) => {
            if (ref) {
                /**
                 * getRectangleBoundary
                 *
                 * Returns a DOMRect object providing information about the size and position relative to the viewport.
                 *
                 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
                 */
                const getRectangleBoundary = ref.getBoundingClientRect();
                /**
                 * clientX
                 *
                 * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
                 */
                const x = mouseEvent.clientX - getRectangleBoundary.left;
                /**
                 * clientY
                 *
                 * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY
                 */
                const y = mouseEvent.clientY - getRectangleBoundary.top;
                /**
                 * Type Guard for current HTMLElement node
                 */
                if (!traceChildren && ref instanceof HTMLElement) {
                    ref.style.setProperty("--x-mouse", `${x}px`);
                    ref.style.setProperty("--y-mouse", `${y}px`);
                }
                /**
                 *  Type Guard for children HTMLElement nodes
                 */
                if (traceChildren && ref instanceof HTMLElement) {
                    Array.from(ref.children).forEach((child: Element) => {
                        if (child instanceof HTMLElement) {
                            child.style.setProperty("--x", `${x}px`);
                            child.style.setProperty("--y", `${y}px`);
                        }
                    });
                }
            }
        };
        ref?.addEventListener("mousemove", traceMouseMove);
        return () => {
            ref?.removeEventListener("mousemove", traceMouseMove);
        };
    });
}
