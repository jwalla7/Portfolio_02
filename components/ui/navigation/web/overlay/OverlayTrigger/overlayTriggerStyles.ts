import { cva } from "class-variance-authority";

export const overlayTriggerStyles = cva(
    `
    fixed
    flex
    flex-col
    items-start
    justify-start
    w-[364.78px]
    h-screen
    min-h-screen
    z-20
    `,
    {
        variants: {},
    }
);
