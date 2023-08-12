/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { cn } from "@/lib/utils";
import { SVGProps, memo } from "react";

export const IconX = memo<React.JSX.IntrinsicElements["svg"]>(function IconX(
    /**
     * Accessibility to className attribute
     */
    { className },
    /**
     * Accessibility to other SVG props
     */
    { fill = "currentColor", fillOpacity, ...props }: SVGProps<SVGSVGElement>
) {
    /**
     * Creates custom values for className attribute
     */
    const variants = cn(
        "block grow-0 shrink-0 w-[1.956vw] h-[3.489vh] relative",
        className
    );
    return (
        <i>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-X"
                viewBox="0 0 256 256"
                className={variants}
                {...props}
            >
                <path
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
                ></path>
            </svg>
        </i>
    );
});
