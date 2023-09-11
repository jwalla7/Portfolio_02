import { cva } from "class-variance-authority";

export const btnWithLblButtonStyles = cva(
    `
`,
    {
        variants: {
            buttonDiv: {
                default: `
                flex justify-start items-center gap-x-[1.23vw] gap-y-[2.194vh] group
                `,
            },
            button: {
                default: `
                box-border border-0 grow-0 shrink-0 justify-center items-center place-items-center w-[3.9121265377855887vw] h-[6.9780564263323vh] relative rounded-[12.4px] backdrop-blur-[12.4px] px-[9%]
                4xl:w-[calc(3.9121265377855887vw-5.89%)]:px-[10%]
                `,
                active: `
                group-hover:bg-[#E6E6E6] bg-secondary/80 dark:group-hover:bg-[#E6E6E6] dark:bg-[hsl(240,4.8%,95.9%)]
                `,
                inactive: `
                bg-transparent group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.089)] from-0% via-[rgba(242,242,242,0.13)] from-76.04% to-neutral-50/[0.1]
                `,
            },
            iconDiv: {
                default: `
                place-items-center place-self-stretch justify-self-center self-center items-center justify-center
                `,
            },
            labelDiv: {
                default: `
                bg-transparent hover:bg-transparent flex justify-start items-center relative place-items-center grow-0 shrink-0 gap-2.5 pt-[3px]
                `,
            },
            labelText: {
                default: `
                group-hover:text-neutral-50 text-neutral-50/[0.34] whitespace-pre-line grow-0 shrink-0 text-[1.625rem] leading-normal text-left hover:cursor-auto,
                `,
            },
            background: {
                default: `
                group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.08)] from-0% via-[rgba(242,242,242,0.13)] from-76.04%
                box-border border-0 grow-0 shrink-0 justify-center items-center w-[3.912vw] h-[6.978vh] relative gap-[13px] py-[9px] px-[9%] rounded-[12.4px] backdrop-blur-[12.4px]
                click:bg-gradient-to-r from-[rgba(255,255,255,0.89)] 1.16% to-[rgba(255,255,255,0.89)] 100.34%
            `,
            },
        },
    }
);
