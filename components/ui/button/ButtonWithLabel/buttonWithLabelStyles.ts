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
                items-center
                justify-start
                group
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
                // TODO add a border that is not transparent by default.
                // bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] relative overflow-hidden bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]
                inactive: `
                group-hover:outline-[radial-gradient(5vw_circle_at_var(--x-mouse)_var(--y-mouse),_var(--tw-gradient-stops))] from-[rgba(242,242,242,.13)]
                bg-transparent
                dark:bg-transparent
                group-hover:bg-[radial-gradient(5vw_circle_at_var(--x-mouse)_var(--y-mouse),_var(--tw-gradient-stops))] from-[rgba(242,242,242,.13)]
                dark:group-hover:bg-[radial-gradient(5vw_circle_at_var(--x-mouse)_var(--y-mouse),_var(--tw-gradient-stops))] from-[rgba(242,242,242,.13)]
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
                flex
                gap-2.5
                grow-0
                items-center
                justify-start
                place-items-center
                pt-[3px]
                relative
                shrink-0
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
                `,
            },
        },
    }
);
