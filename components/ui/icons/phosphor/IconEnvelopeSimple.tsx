/*
memo bypasses re-rendering a component if its props are unchanged.
https://react.dev/reference/react/memo
*/
import { SVGProps, memo } from "react";
import { IconDirection } from "@/types/icon";
import { cn } from "@/lib/utils";

export const IconEnvelopSimple = memo<
    React.JSX.IntrinsicElements["svg"] & {
        iconDirection: IconDirection;
    }
>(function IconEnvelopSimple(
    /** Set default `iconDirection` value for iconEnvelopeSimple */
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
            data-icon="phosphorIcon-envelopeSimple"
            viewBox="0 0 256 256"
            className={variants}
            {...props}
        >
            <path
                fill="currentColor"
                d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"
            ></path>
        </svg>
    );
});
