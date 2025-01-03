import { cva } from "class-variance-authority";

export const overlayNavStyles = cva(``, {
    variants: {
        nav: {
            default: `
                border-box
                data-nav-overlay
                flex
                flex-col
                flex-grow-0
                flex-shrink-0
                gap-2.5
                h-screen
                items-start
                justify-start
                self-stretch
                w-[21.370vw]
                bg-gradient-to-r from-[rgba(2,13,0,0.89)] via-[rgba(0,5,13,0.88)] from-4.69% via-[rgba(0,5,13,0.86)] from-8.85% via-[rgba(0,5,13,0.82)] from-9.54% via-[rgba(0,5,13,0.71)] from-10.77% via-[rgba(0,5,13,0.38)] from-11.35% to-[rgba(0,5,13,0.01)]
                z-2
                `,
            none: `bg-transparent w-[21.370vw] min-h-screen`,
        },
    },
    defaultVariants: {
        nav: `default`,
    },
});
