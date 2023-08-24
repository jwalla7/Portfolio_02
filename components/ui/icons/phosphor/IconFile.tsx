/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { cn } from "@/lib/utils";
import clsx from "clsx";
import React, { SVGProps, memo } from "react";

export const IconFile = memo<React.ComponentProps<"svg">>(function IconFile(
    /**
     * Accessibility to custom attribute values
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
        <i className="place-items-center place-self-stretch justify-self-center self-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-file"
                viewBox="0 0 256 256"
                className={clsx(variants, props.className)}
                {...props}
            >
                <path
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Z"
                ></path>
            </svg>
        </i>
    );
});
