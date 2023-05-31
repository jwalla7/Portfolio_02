/*
memo bypasses re-rendering a component if its props are unchanged.
https://react.dev/reference/react/memo
*/
import { SVGProps, memo } from "react";

export const IconSun = memo<React.JSX.IntrinsicElements["svg"]>(
    function IconSun(props: SVGProps<SVGSVGElement>) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-sun"
                viewBox="0 0 256 256"
                {...props}
            >
                <path
                    fill="currentColor"
                    d="M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"
                ></path>
            </svg>
        );
    }
);
