import { cva } from "class-variance-authority";

export const buttonWithLabelStyles = cva(
    `
    `,
    {
        variants: {
            rootDiv: {
                default: `
                flex justify-start items-start gap-[21px]
                `,
            },
            button: {
                default: `
                bg-green-800 box-border border-0 flex grow-0 shrink-0 justify-center items-center w-[66.78px] h-[66.78px] relative gap-[13px] p-[9px] rounded-[12.4px] backdrop-blur-[12.4px]
                active:bg-gradient-to-r from-[rgba(255,255,255,0.89)] from-1.16% to-[rgba(255,255,255,0.89)] from-100.34%
                `,
            },
            labelDiv: {
                default: `
                    bg-black flex justify-start items-center self-stretch grow-0 shrink-0 relative gap-2.5 px-2.5 pt-[3px] w-[300px]
                `,
            },
            text: {
                default: `
                    whitespace-pre-line grow-0 shrink-0 font-['Roboto'] text-[1.625rem] leading-normal text-left text-neutral-50/[0.34] hover:text-neutral-50 
                `,
            },
        },
        defaultVariants: {
            rootDiv: `default`,
            button: `default`,
            labelDiv: `default`,
            text: `default`,
        },
    }
);
