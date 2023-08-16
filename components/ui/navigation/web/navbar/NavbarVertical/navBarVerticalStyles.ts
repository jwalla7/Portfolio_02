import { cva } from "class-variance-authority";

export const navBarVerticalRootStyles = cva(``, {
    variants: {
        root: {
            default: `
            data-root
            box-border
            flex
            flex-col
            h-full
            items-start
            justify-center
            w-[21.37vw]
            w-full
            `,
            none: `bg-none`,
        },
    },
    defaultVariants: {
        root: `default`,
    },
});
export const navBarVerticalNavStyles = cva(``, {
    variants: {
        nav: {
            default: `
            data-nav
            basis-full
            box-border
            flex
            flex-col
            gap-[55px]
            grow
            items-start
            justify-center
            pt-[21.421vh]
            px-[2.285vw]
            w-[19.436vw]
            `,
            none: `bg-none`,
        },
    },
    defaultVariants: {
        nav: `default`,
    },
});
export const navBarVerticalThemeStyles = cva(``, {
    variants: {
        theme: {
            default: `
            data-theme
            box-border
            flex
            flex-col
            gap-[55px]
            grow
            h-[26.646vh]
            items-start
            justify-center
            px-[2.285vw]
            self-stretch
            shrink
            `,
            none: `bg-none`,
        },
    },
    defaultVariants: {
        theme: `default`,
    },
});
