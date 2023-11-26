/**
 * @description memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { cn } from "@/lib/utils";

export const IconArrowPause = memo<React.ComponentProps<"svg">>(function IconArrowPause(
    /**
     * Accessibility to other SVG props
     */
    { fill = "currentColor", fillOpacity, ...props }: SVGProps<SVGSVGElement>
) {
    /**
     * Create className attribute values
     */
    const variants = cn("block grow-0 shrink-0 w-[1.956vw] h-[3.489vh] relative");

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="phosphorIcon-arrowPlay"
            viewBox="0 0 256 256"
            className={cn(variants, props.className)}
            {...props}
        >
            <path
                fill={fill}
                fillOpacity={fillOpacity}
                d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"
            ></path>
        </svg>
    );
});
