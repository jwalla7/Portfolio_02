import { cva } from "class-variance-authority";

export const overlayTriggerStyles = cva(
    `
    data-trigger
    flex
    flex-col
    h-full
    items-start
    justify-start
    left-[-0.1%]
    min-h-screen
    relative
    top-0
    w-[21.37vw]
    z-2
    `
);
