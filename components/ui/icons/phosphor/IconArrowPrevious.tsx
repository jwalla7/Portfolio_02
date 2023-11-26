/**
 * @description memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { IconDirection } from "@/types/icon";
import { cn } from "@/lib/utils";

export const IconArrowPrevious = memo<
    React.ComponentProps<"svg"> & {
        iconDirection: IconDirection;
    }
>(function IconArrowPrevious(
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
            data-icon="phosphorIcon-arrowPrevious"
            viewBox="0 0 256 256"
            className={cn(variants, props.className)}
            {...props}
        >
            <path
                fill={fill}
                fillOpacity={fillOpacity}
                d="M232,71.84V184.16a15.92,15.92,0,0,1-24.48,13.34L128,146.86v37.3a15.92,15.92,0,0,1-24.48,13.34L15.33,141.34a15.8,15.8,0,0,1,0-26.68L103.52,58.5A15.91,15.91,0,0,1,128,71.84v37.3L207.52,58.5A15.91,15.91,0,0,1,232,71.84Z"
            ></path>
        </svg>
    );
});
