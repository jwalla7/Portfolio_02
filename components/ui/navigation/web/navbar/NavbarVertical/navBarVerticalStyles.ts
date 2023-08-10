import { cva } from "class-variance-authority";

export const navBarVerticalStyles = cva(
    `
    box-border flex flex-col justify-start items-start w-[21.370vw] h-screen
    `,
    {
        variants: {
            rootDiv: {
                default: `
                bg-green-800 box-border flex flex-col justify-center items-start flex-grow basis-full gap-[55px] px-[39px] pt-[205px]
                `,
            },
            navDiv: {
                default: `
                bg-purple-500 box-border flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[21px]
                `,
            },
            themeDiv: {
                default: `
                box-border flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[255px] gap-[55px] px-[39px]
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
