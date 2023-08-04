/**
 * memo bypasses re-rendering a component if its props are unchanged.
 * https://react.dev/reference/react/memo
 */

import { SVGProps, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const IconHouse = memo<
    React.ComponentProps<"svg"> & {
        setMotion: boolean;
    }
>(function IconHouse(
    /**
     * Accessibility to customized attributes setMotion, and className
     */
    { className, setMotion },
    /**
     * Accessibility to other SVG props
     */
    props: SVGProps<SVGSVGElement>
) {
    /**
     * Create custom values for className
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
                data-icon="phosphorIcon-house"
                viewBox="0 0 256 256"
                className={variants}
            >
                <motion.path
                    /**
                     * Initial to animate, creates a fade-in-with-rotation animation
                     * https://framer.com/motion/transition/##value-specific-transitions
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
                    fill="currentColor"
                    d="M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z"
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
                data-icon="phosphorIcon-house"
                viewBox="0 0 256 256"
                className={variants}
                {...props}
            >
                <path
                    fill="currentColor"
                    d="M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z"
                ></path>
            </svg>
        );
    }
});
