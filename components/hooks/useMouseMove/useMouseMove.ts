/**
 * @description
 *
 * Determines the mouse position within an HTML attribute
 *
 * Accepts an RefObject of type HTMLElement
 */

import { useEffect } from "react";
import { useMouseMoveProps } from "./useMouseMoveProps";

export function useMouseMove({ buttonRef, attributeRef }: useMouseMoveProps) {
    useEffect(() => {
        const ref = buttonRef?.current || attributeRef?.current;
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

                console.log(`X-MouseMove Event: ${x}, Y-MouseMove Event: ${y}`);

                Array.from(ref.children).forEach((child: Element) => {
                    if (child instanceof HTMLElement) {
                        child.style.setProperty("--x", `${x}px`);
                        child.style.setProperty("--y", `${y}px`);
                    }
                });
            }
        };
        console.log("refEvent: ", ref);
        ref?.addEventListener("mousemove", traceMouseMove);

        return () => {
            ref?.removeEventListener("mousemove", traceMouseMove);
        };
    });
}
