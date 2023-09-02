/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { memo } from "react";

interface IconHouseProps extends React.ComponentProps<"svg"> {
    active: boolean;
}

export const IconHouse = memo<IconHouseProps>(function IconHouse(
    /**
     * Accessibility to custom attribute values
     */
    { className },
    /**
     * Accessibility to other SVG props
     */
    {
        active,
        fill = active ? "text-black" : "currentColor",
        fillOpacity,
        ...props
    }: IconHouseProps
) {
    /**
     * Creates custom values for className attribute
     */
    const variants = clsx(
        "block grow-0 shrink-0 w-[1.956vw] h-[3.489vh] relative",
        className
    );
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="phosphorIcon-house"
            viewBox="0 0 256 256"
            className={cn(variants, props.className)}
            {...props}
        >
            <path
                fill={fill}
                fillOpacity={fillOpacity}
                d="M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z"
            ></path>
        </svg>
    );
});
