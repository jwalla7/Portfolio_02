/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { IconDirection } from "@/types/icon";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export const IconSpinner = memo<
    React.ComponentProps<"svg"> & {
        iconDirection: IconDirection;
    }
>(function IconSpinner(
    /**
     * Sets default `iconDirection` value and enables accessibility to className attribute
     */
    { iconDirection = "0_rotation", className },
    /**
     * Accessibility to other SVG props
     */
    { fill = "currentColor", fillOpacity, ...props }: SVGProps<SVGSVGElement>
) {
    /**
     * Creates className attribute values
     */
    const variants = cn(
        "transition duration-100 ease-in",
        {
            "rotate-0": iconDirection === "0_rotation",
            "rotate-90": iconDirection === "90_rotation",
            "rotate-180": iconDirection === "180_rotation",
            "-rotate-90": iconDirection === "-90_rotation",
        },
        className
    );
    return (
        <i className="place-self-stretch">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-spinner"
                viewBox="0 0 256 256"
                className={clsx(variants, props.className)}
                {...props}
            >
                <path
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25,62.75a12,12,0,0,0,8.49-3.52L204.37,68.6a12,12,0,0,0-17-17L164.77,74.26a12,12,0,0,0,8.48,20.49ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z"
                ></path>
            </svg>
        </i>
    );
});
