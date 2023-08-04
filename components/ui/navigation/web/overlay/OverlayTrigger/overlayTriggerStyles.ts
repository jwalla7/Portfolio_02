import { cva } from "class-variance-authority";

export const overlayTriggerStyles = cva(
    `
    bg-red-100
    left-0
    top-0
    relative
    flex
    flex-col
    items-start
    justify-start
    w-[364.78px]
    h-screen
    min-h-screen
    z-1
    `,
    {
        variants: {},
    }
);
