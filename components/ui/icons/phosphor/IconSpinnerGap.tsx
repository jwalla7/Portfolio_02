/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { cn } from "@/lib/utils";
import { IconDirection } from "@/types/icon";
import clsx from "clsx";
import { SVGProps, memo } from "react";

export const IconSpinnerGap = memo<
    React.ComponentProps<"svg"> & {
        iconDirection: IconDirection;
    }
>(function IconSpinnerGap(
    /**
     * Sets default `iconDirection`value and enables accessibility to className attribute
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
                data-icon="phosphorIcon-spinnerGap"
                viewBox="0 0 256 256"
                className={clsx(variants, props.className)}
                {...props}
            >
                <path
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm84,84H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z"
                ></path>
            </svg>
        </i>
    );
});
