import { cva } from "class-variance-authority";

export const overlayTriggerStyles = cva(
    `
    data-trigger
    flex
    flex-col
    items-start
    justify-start
    left-[-0.1%]
    min-h-screen
    relative
    top-0
    left-0
    w-[21.37vw]
    bg-none
    animate-slideRightAndFade
    z-2
    `,
    {
        variants: {
            triggerdiv: {
                active: `
                max-h-screen
                `,
                inactive: `
                h-full
                `,
            },
        },
    }
);
