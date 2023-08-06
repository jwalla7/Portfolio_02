/**
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * https://react.dev/reference/react/memo
 */
import { SVGProps, memo } from "react";
import { IconDirection } from "@/types/icon";
import { cn } from "@/lib/utils";

export const IconArrowCircleLeft = memo<
    React.ComponentProps<"svg"> & {
        iconDirection: IconDirection;
    }
>(function IconArrowCircleLeft(
    /**
     * Set default value for iconDirection
     */
    { iconDirection = "0_rotation", className },
    /**
     * Accessibility to other SVG props
     */
    props: SVGProps<SVGSVGElement>
) {
    /**
     * Create className values
     */
    const variants = cn(
        "block flex-grow-0 flex-shrink-0 w-[33.39px] h-[33.39px] relative",
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
            data-icon="phosphorIcon-arrowCircleLeft"
            viewBox="0 0 256 256"
            className={variants}
            {...props}
        >
            <path
                fill="currentColor"
                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"
            ></path>
        </svg>
    );
});
