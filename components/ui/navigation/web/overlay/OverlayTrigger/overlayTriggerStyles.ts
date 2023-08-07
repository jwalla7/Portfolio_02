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
    w-[21.370vw]
    h-full
    min-h-screen
    z-1
    `
);

export const overlayTriggerStylesContent = cva(``, {
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
