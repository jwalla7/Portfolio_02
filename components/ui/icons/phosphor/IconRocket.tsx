/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export const IconRocket = memo<
    React.JSX.IntrinsicElements["svg"] & {
        setMotion: boolean;
    }
>(function IconRocket(
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
     * Creates custom values for className attribute
     */
    const variants = cn(
        "block grow-0 shrink-0 w-[1.956vw] h-[3.489vh] relative",
        className
    );
    /**
     * Establishes which variation of `IconRocket` to render
     */
    if (setMotion) {
        return (
            <i className="place-self-stretch">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="phosphorIcon-rocket"
                    viewBox="0 0 256 256"
                    preserveAspectRatio="xMidYMid meet"
                    className={clsx(variants, props.className)}
                >
                    <motion.path
                        /**
                         * @summary From initial to animated, creates a fade-in-with-rotation animation
                         *
                         * @see https://framer.com/motion/transition/##value-specific-transitions
                         */
                        initial={{
                            translateY: 0,
                            rotate: 0,
                            opacity: 0,
                            pathLength: 0,
                        }}
                        animate={{
                            translateY: -34,
                            rotate: 0,
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
                        d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"
                    />
                </motion.svg>
            </i>
        );
    } else {
        return (
            <i className="place-self-stretch">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="phosphorIcon-rocket"
                    viewBox="0 0 256 256"
                    preserveAspectRatio="xMidYMid meet"
                    className={clsx(variants, props.className)}
                    {...props}
                >
                    <path
                        fill={fill}
                        fillOpacity={fillOpacity}
                        d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"
                    ></path>
                </svg>
            </i>
        );
    }
});
