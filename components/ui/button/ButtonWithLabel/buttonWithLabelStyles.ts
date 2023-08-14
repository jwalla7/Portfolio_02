import { cva } from "class-variance-authority";

export const buttonWithLabelStyles = cva(
    `
    button
    `,
    {
        variants: {
            rootDiv: {
                default: `
                flex justify-start items-start gap-[21px]
                `,
            },
            buttonDiv: {
                default: `
                group-hover:text-neutral-50
                group-hover:bg-black
                box-border border-0 grow-0 shrink-0 justify-center items-center w-[66.78px] h-[66.78px] relative gap-[13px] p-[9px] rounded-[12.4px] backdrop-blur-[12.4px] active:bg-gradient-to-r from-[rgba(255,255,255,0.89)] from-1.16% to-[rgba(255,255,255,0.89)] from-100.34%
                `,
            },
            labelDiv: {
                default: `
                    flex justify-start items-center relative self-auto grow-0 shrink-0 gap-2.5 px-2.5 pt-[3px]
                `,
            },
            textDiv: {
                default: `
                group-hover:text-neutral-50
                group-hover:bg-black
                group whitespace-pre-line grow-0 shrink-0 font-['Roboto'] text-[1.625rem] leading-normal text-left text-neutral-50/[0.34] 
                `,
            },
        },
        defaultVariants: {
            rootDiv: `default`,
            buttonDiv: `default`,
            labelDiv: `default`,
            textDiv: `default`,
        },
    }
);
