/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const IconCircleHalf = memo<
    React.ComponentProps<"svg"> & {
        setMotion: boolean;
    }
>(function IconCircleHalf(
    /**
     * @summary Accessibility to customized attributes setMotion, and className
     */
    { className, setMotion },
    /**
     * @summary Accessibility to other SVG props
     */
    { fill, fillOpacity, ...props }: SVGProps<SVGSVGElement>
) {
    /**
     * @summary Creates custom values for className
     */
    const variants = cn(
        "block flex-grow-0 flex-shrink-0 w-[36px] h-[36px] relative",
        className
    );
    /**
     * @summary Establishes which variation of `IconSun` to render
     */
    if (setMotion) {
        return (
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-circle-half"
                viewBox="0 0 256 256"
                className={variants}
            >
                <motion.path
                    /**
                     * @summary From initial to animated, creates a fade-in-with-rotation animation
                     *
                     * @see https://framer.com/motion/transition/##value-specific-transitions
                     */
                    initial={{
                        opacity: 0,
                        pathLength: 0,
                    }}
                    animate={{
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
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88V216A88.1,88.1,0,0,1,40,128Z"
                />
            </motion.svg>
        );
    } else {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-circle-half"
                viewBox="0 0 256 256"
                className={variants}
                {...props}
            >
                <path
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88V216A88.1,88.1,0,0,1,40,128Z"
                ></path>
            </svg>
        );
    }
});
