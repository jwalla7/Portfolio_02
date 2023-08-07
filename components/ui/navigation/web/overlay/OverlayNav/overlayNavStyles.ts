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
    w-[21.370vw]
    `,
    {
        variants: {
            background: {
                default: `bg-gradient-to-r from-[rgba(2,13,0,0.89)] via-[rgba(0,5,13,0.88)] from-4.69% via-[rgba(0,5,13,0.86)] from-8.85% via-[rgba(0,5,13,0.82)] from-13.54% via-[rgba(0,5,13,0.71)] from-30.77% via-[rgba(0,5,13,0.38)] from-71.35% to-[rgba(0,5,13,0.01)]`,
                test: `group-display:none hover:bg-blue-100`,
            },
        },
        defaultVariants: {
            background: `default`,
        },
    }
);

export const overlayNavStylesContent = cva(``, {
    variants: {
        display: {
            onMouseEnter: `data-[state=open]:transition-all data-[state=open]:w-full h-screen data:[state=open]:inline-block`,
            onMouseLeave: `data-[state=close]:transition-all data-[state=close]:w-full h-screen data:[state=close]:hidden`,
        },
    },
    defaultVariants: {
        display: `onMouseEnter`,
    },
});
