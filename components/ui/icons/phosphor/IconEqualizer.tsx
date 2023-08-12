/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { cn } from "@/lib/utils";
import { SVGProps, memo } from "react";

export const IconEqualizer = memo<React.ComponentProps<"svg">>(
    function IconEqualizer(
        /**
         * Accessibility to custom attribute values
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
            <i>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="phosphorIcon-equalizer"
                    viewBox="0 0 256 256"
                    className={variants}
                    {...props}
                >
                    <path
                        fill={fill}
                        fillOpacity={fillOpacity}
                        d="M80,108a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24H68A12,12,0,0,1,80,108ZM68,136H24a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm0,40H24a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm82-40H106a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm0,40H106a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm38-96h44a12,12,0,0,0,0-24H188a12,12,0,0,0,0,24Zm44,16H188a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm0,40H188a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm0,40H188a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Z"
                    ></path>
                </svg>
            </i>
        );
    }
);
