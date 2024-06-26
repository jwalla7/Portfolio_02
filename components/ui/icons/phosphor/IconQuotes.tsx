/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { memo } from "react";
import { cn } from "@/lib/utils";

interface IconQuotes extends React.ComponentProps<"svg"> {
    active: boolean;
}

export const IconQuotes = memo<IconQuotes>(function IconQuotes(
    /**
     * Accessibility to className attribute
     */
    { className },
    /**
     * Accessibility to other SVG props
     */
    { active, fill = active ? cn("text-black dark:text-black") : "currentColor", fillOpacity, ...props }: IconQuotes
) {
    /**
     * Creates custom values for className attribute
     */
    const variants = cn("block grow-0 shrink-0 w-[1.956vw] h-[3.489vh] min-w-[33.7833px] min-h-[63.6667px] relative", className);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="phosphorIcon-quotes"
            viewBox="0 0 256 256"
            className={cn(variants, props.className)}
            {...props}
        >
            <path
                fill={fill}
                fillOpacity={fillOpacity}
                d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"
            ></path>
        </svg>
    );
});
