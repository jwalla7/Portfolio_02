import { cva } from "class-variance-authority";

export const overlayNavStyles = cva(
    `
    border-box
    flex
    flex-col
    flex-grow-0
    flex-shrink-0
    gap-2.5
    items-start
    justify-start
    self-stretch
    w-[364.78px]c
    `,
    {
        variants: {
            background: {
                default: `bg-gradient-to-r from-[rgba(2,13,0,0.89)] via-[rgba(0,5,13,0.88)] from-4.69% via-[rgba(0,5,13,0.86)] from-8.85% via-[rgba(0,5,13,0.82)] from-13.54% via-[rgba(0,5,13,0.71)] from-30.77% via-[rgba(0,5,13,0.38)] from-71.35% to-[rgba(0,5,13,0.01)]`,
                test: `bg-red-500 hover:bg-blue-100`,
            },
        },
        defaultVariants: {
            background: `default`,
        },
    }
);
