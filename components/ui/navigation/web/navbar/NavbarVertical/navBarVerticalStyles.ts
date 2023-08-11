import { cva } from "class-variance-authority";

export const navBarVerticalStyles = cva(
    `
    `,
    {
        variants: {
            rootDiv: {
                default: `
                box-border flex flex-col justify-start items-start w-[21.370vw] h-full
                `,
            },
            navDiv: {
                default: `
                box-border flex flex-col justify-center items-start flex-grow basis-full gap-[55px] px-[39px] pt-[205px]    
                `,
            },
            themeDiv: {
                default: `
                `,
            },
        },
        defaultVariants: {
            rootDiv: `default`,
            navDiv: `default`,
            themeDiv: `default`,
        },
    }
);
