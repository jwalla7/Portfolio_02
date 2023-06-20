/*
memo bypasses re-rendering a component if its props are unchanged.
https://react.dev/reference/react/memo
*/
import { SVGProps, memo } from "react";
import { IconDirection } from "@/types/icon";
import { cn } from "@/lib/utils";

export const IconEqualizer = memo<
    React.ComponentProps<"svg"> & {
        iconDirection: IconDirection;
    }
>(function IconEqualizer(
    /** Set default `iconDirection` value for iconEqualizer */
    { iconDirection = "0_rotation", className },
    /** Accessibility to other SVG props */
    props: SVGProps<SVGSVGElement>
) {
    /** Create className values */
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
                fill="currentColor"
                d="M80,108a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24H68A12,12,0,0,1,80,108ZM68,136H24a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm0,40H24a12,12,0,0,0,0,24H68a12,12,0,0,0,0-24Zm82-40H106a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm0,40H106a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm38-96h44a12,12,0,0,0,0-24H188a12,12,0,0,0,0,24Zm44,16H188a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm0,40H188a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Zm0,40H188a12,12,0,0,0,0,24h44a12,12,0,0,0,0-24Z"
            ></path>
        </svg>
    );
});
