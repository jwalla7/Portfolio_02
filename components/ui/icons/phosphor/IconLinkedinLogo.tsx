/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { cn } from "@/lib/utils";
import { SVGProps, memo } from "react";

export const IconLinkedinLogo = memo<React.ComponentProps<"svg">>(
    function IconLinkedinLogo(
        /**
         * Accessibility to className attribute
         */
        { className },
        /**
         * Accessibility to other SVG props
         */
        {
            fill = "currentColor",
            fillOpacity,
            ...props
        }: SVGProps<SVGSVGElement>
    ) {
        /**
         * Creates custom values for className attribute
         */
        const variants = cn(
            "block grow-0 shrink-0 w-[1.956vw] h-[3.489vh] relative",
            className
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-linkedinLogo"
                viewBox="0 0 256 256"
                className={cn(variants, props.className)}
                {...props}
            >
                <path
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"
                ></path>
            </svg>
        );
    }
);
