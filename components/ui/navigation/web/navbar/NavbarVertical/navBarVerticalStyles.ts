import { cva } from "class-variance-authority";

export const navBarVerticalStyles = cva(``, {
    variants: {
        rootDiv: {
            default: `
                box-border flex flex-col justify-start items-start w-full h-full box-border flex flex-col justify-start items-start w-[364.78px] h-screen
                `,
        },
        navDiv: {
            default: `
                box-border flex flex-col grow basis-full justify-center items-start w-[331.78px] gap-[55px] px-[39px] pt-[205px]
                `,
        },
        themeDiv: {
            default: `
                box-border flex flex-col grow-0 shrink-0 justify-center items-start self-stretch h-[255px] gap-[55px] px-[39px]
                `,
        },
    },
    defaultVariants: {
        rootDiv: `default`,
        navDiv: `default`,
        themeDiv: `default`,
    },
});
