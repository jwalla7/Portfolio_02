import { cva } from "class-variance-authority";

export const overlayTriggerStyles = cva(
    `
    data-trigger
    flex
    flex-col
    items-start
    justify-start
    left-[-0.1%]
    h-full
    min-h-screen
    relative
    top-0
    left-0
    w-[21.37vw]
    bg-none
    animate-slideRightAndFade
    z-2
    `
);
