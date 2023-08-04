/**
 * memo bypasses re-rendering a component if its props are unchanged.
 * https://react.dev/reference/react/memo
 */
import React, { SVGProps, memo } from "react";

export const IconFile = memo<React.ComponentProps<"svg">>(function IconFile(
    /**
     * Accessibility to other SVG props
     */
    props: SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="phosphorIcon-file"
            viewBox="0 0 256 256"
            {...props}
        >
            <path
                fill="currentColor"
                d="M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Z"
            ></path>
        </svg>
    );
});
