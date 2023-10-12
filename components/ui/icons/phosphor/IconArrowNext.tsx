/**
 * @description memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { IconDirection } from "@/types/icon";
import { cn } from "@/lib/utils";

export const IconArrowNext = memo<
    React.ComponentProps<"svg"> & {
        iconDirection: IconDirection;
    }
>(function IconArrowNext(
    /**
     * Set default value for iconDirection
     */
    { iconDirection = "0_rotation", className },
    /**
     * Accessibility to other SVG props
     */
    { fill = "currentColor", fillOpacity, ...props }: SVGProps<SVGSVGElement>
) {
    /**
     * Create className attribute values
     */
    const variants = cn(
        "block grow-0 shrink-0 w-[1.956vw] h-[3.489vh] relative",
        {
            "rotate-0": iconDirection === "0_rotation",
            "rotate-90": iconDirection === "90_rotation",
            "rotate-180": iconDirection === "180_rotation",
            "-rotate-90": iconDirection === "-90_rotation",
        },
        className
    );

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="phosphorIcon-nextArrow"
            viewBox="0 0 256 256"
            className={cn(variants, props.className)}
            {...props}
        >
            <path
                fill={fill}
                fillOpacity={fillOpacity}
                d="M248,128a15.76,15.76,0,0,1-7.33,13.34L152.48,197.5A15.91,15.91,0,0,1,128,184.16v-37.3L48.48,197.5A15.91,15.91,0,0,1,24,184.16V71.84A15.91,15.91,0,0,1,48.48,58.5L128,109.14V71.84A15.91,15.91,0,0,1,152.48,58.5l88.19,56.16A15.76,15.76,0,0,1,248,128Z"
            ></path>
        </svg>
    );
});
