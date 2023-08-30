/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { motion } from "framer-motion";
import { IconDirection } from "@/types/icon";
import { cn } from "@/lib/utils";
import clsx from "clsx";

export const IconMoon = memo<
    React.ComponentProps<"svg"> & {
        iconDirection: IconDirection;
        setMotion: boolean;
    }
>(function IconMoon(
    /**
     *  Accessibility to attributes iconDirection, setMotion, and className
     */
    { iconDirection = "0_rotation", setMotion, className },
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
        {
            "rotate-0": iconDirection === "0_rotation",
            "rotate-45": iconDirection === "45_rotation",
            "rotate-90": iconDirection === "90_rotation",
            "rotate-180": iconDirection === "180_rotation",
            "-rotate-45": iconDirection === "-45_rotation",
            "-rotate-90": iconDirection === "-90_rotation",
        },
        className
    );
    /**
     *  Establishes which variation of `IconMoon` to render.
     */
    if (setMotion) {
        return (
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="phosphorIcon-moon"
                viewBox="0 0 256 256"
                className={clsx(variants, props.className)}
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
                        duration: 0.34,
                        ease: "anticipate",
                    }}
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"
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
                data-icon="phosphorIcon-moon"
                viewBox="0 0 256 256"
                className={clsx(variants, props.className)}
                {...props}
            >
                <path
                    fill={fill}
                    fillOpacity={fillOpacity}
                    d="M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"
                ></path>
            </svg>
        );
    }
});
