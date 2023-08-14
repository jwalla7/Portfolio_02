import { cva } from "class-variance-authority";

export const navBarVerticalStyles = cva(
    `
box-border flex flex-col justify-center items-start
`,
    {
        variants: {
            root: {
                default: `
            data-root
            w-full
            h-full
            w-[21.37vw]
                `,
            },
            nav: {
                default: `
            data-navbar
            grow
            basis-full
            w-[19.436vw]
            gap-[55px]
            px-[2.285vw]
            pt-[21.421vh]
                `,
            },
            theme: {
                default: `
            data-theme
            grow
            shrink
            self-stretch
            h-[26.646vh]
            gap-[55px]
            px-[2.285vw]
                `,
            },
        },
        defaultVariants: {
            root: `default`,
            nav: `default`,
            theme: `default`,
        },
    }
);
