import { cva } from "class-variance-authority";

export const btnWithLblButtonStyles = cva(
    `
`,
    {
        variants: {
            buttonDiv: {
                default: `
                flex
                gap-x-[1.23vw]
                gap-y-[2.194vh]
                group
                items-center
                justify-start
                `,
            },
            button: {
                default: `
                backdrop-blur-[12.4px]
                border-0
                box-border
                grow-0
                h-[6.9780564263323vh]
                items-center
                justify-center
                place-items-center
                px-[9%]
                relative
                rounded-[12.4px]
                shrink-0
                w-[3.9121265377855887vw]
                4xl:px-[10%]
                4xl:w-[calc(3.9121265377855887vw-5.89%)]
                `,
                active: `
                bg-secondary/80
                group-hover:bg-[#E6E6E6]
                dark:group-hover:bg-[#E6E6E6]
                dark:bg-[hsl(240,4.8%,95.9%)]
                `,
                inactive: `
                bg-transparent
                inset-1
                group-hover:transition-opacity
                group-hover:duration-500
                group-hover:opacity-1
                group-hover:bg-[radial-gradient(5vw_circle_at_var(--x-mouse)_var(--y-mouse),_var(--tw-gradient-stops))] from-[rgba(242,242,242,.13)]
                `,
            },
            iconDiv: {
                default: `
                items-center
                justify-center
                justify-self-center
                place-items-center
                place-self-stretch
                self-center
                `,
            },
            labelDiv: {
                default: `
                bg-transparent
                flex
                gap-2.5
                grow-0
                items-center
                justify-start
                place-items-center
                pt-[3px]
                relative
                shrink-0
                hover:bg-transparent
                `,
            },
            labelText: {
                default: `
                grow-0
                leading-normal
                shrink-0
                text-[1.625rem]
                text-left
                text-neutral-50/[0.34]
                whitespace-pre-line
                group-hover:text-neutral-50
                hover:cursor-auto
                `,
            },
            background: {
                default: `
                backdrop-blur-[12.4px]
                border-0
                box-border
                gap-[13px]
                grow-0
                h-[6.978vh]
                items-center
                justify-center
                px-[9%]
                py-[9px]
                relative
                rounded-[12.4px]
                shrink-0
                w-[3.912vw]
                click:bg-gradient-to-r from-[rgba(255,255,255,0.89)] 1.16% to-[rgba(255,255,255,0.89)] 100.34%
                group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.08)] from-0% via-[rgba(242,242,242,0.13)] from-76.04%
            `,
            },
        },
    }
);
