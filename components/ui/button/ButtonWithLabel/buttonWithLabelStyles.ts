import { cva } from "class-variance-authority";

export const btnWithLblButtonStyles = cva(
    `
`,
    {
        variants: {
            background: {
                default: `
                group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.08)] from-0% via-[rgba(242,242,242,0.13)] from-76.04%
                box-border border-0 grow-0 shrink-0 justify-center items-center w-[3.912vw] h-[6.978vh] relative gap-[13px] py-[9px] px-[9%] rounded-[12.4px] backdrop-blur-[12.4px]
                click:bg-gradient-to-r from-[rgba(255,255,255,0.89)] 1.16% to-[rgba(255,255,255,0.89)] 100.34%
            `,
            },
            defaultVariants: {
                background: `default`,
            },
        },
    }
);
