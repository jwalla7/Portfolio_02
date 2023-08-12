/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const IconSun = memo<
    React.JSX.IntrinsicElements["svg"] & {
        setMotion: boolean;
    }
>(function IconSun(
    /**
     * Accessibility to customized attributes setMotion, className, and to other SVG props
     */
    { setMotion, className },
    /**
     * Accessibility to other SVG props
     */
    { fill = "currentColor", fillOpacity, ...props }: SVGProps<SVGSVGElement>
) {
    /**
     * Creates custom values for className
     */
    const variants = cn(
        "block flex-grow-0 flex-shrink-0 w-[33.39px] h-[33.39px] relative",
        className
    );
    /**
     * Establishes which variation of `IconSun` to render
     */
    if (setMotion) {
        return (
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-sun"
                viewBox="0 0 256 256"
                preserveAspectRatio="xMidYMid meet"
                className={variants}
            >
                <motion.path
                    /**
                     * @summary From initial to animated, creates a fade-in-with-rotation animation
                     *
                     * @see https://framer.com/motion/transition/##value-specific-transitions
                     */
                    initial={{
                        rotate: 0,
                        opacity: 0,
                        pathLength: 0,
                    }}
                    animate={{
                        rotate: 45,
                        opacity: 1,
                        pathLength: 1,
                    }}
                    transition={{
                        delay: 0.08,
                        duration: 0.55,
                        ease: "anticipate",
                    }}
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"
                />
            </motion.svg>
        );
    } else {
        return (
            <i>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="phosphorIcon-sun"
                    viewBox="0 0 256 256"
                    preserveAspectRatio="xMidYMid meet"
                    className={variants}
                    {...props}
                >
                    <path
                        fill={fill}
                        fillOpacity={fillOpacity}
                        d="M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"
                    ></path>
                </svg>
            </i>
        );
    }
});
