import { cva } from "class-variance-authority";

export const btnWithLblButtonStyles = cva(
    `
`,
    {
        variants: {
            buttonDiv: {
                default: `
                flex
                flex-row
                gap-y-[2.194vh]
                gap-x-[1.23vw]
                group
                justify-start
                items-center
                w-full
                `,
            },
            button: {
                default: `
                4xl:w-[calc(3.9121265377855887vw-5.89%)]
                4xl:max-w-[64px]
                4xl:max-h-[64px]
                backdrop-blur-[12.4px]
                border-0
                grow-0
                h-[6.65vh]
                items-center
                justify-center
                w-[4vw]
                relative
                rounded-[12.4px]
                shrink-0
                min-w-[59.2833px]
                max-w-[64px]
                max-h-[64px]
                `,
                active: `
                group-hover:bg-[#E6E6E6]
                bg-[#FAFAFA]
                dark:bg-[#FAFAFA]
                dark:group-hover:bg-[#E6E6E6]
                `,
                // TODO add a border that is not transparent by default.
                // bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] relative overflow-hidden bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]
                // group-hover:outline-[radial-gradient(5vw_circle_at_var(--x-mouse)_var(--y-mouse),_var(--tw-gradient-stops))] from-[rgba(242,242,242,.13)]
                inactive: `
                bg-transparent
                group-hover:bg-[radial-gradient(5vw_circle_at_var(--x-mouse)_var(--y-mouse),_var(--tw-gradient-stops))] from-[rgba(242,242,242,.13)]
                `,
            },
            iconDiv: {
                default: `
                flex
                items-center
                justify-center
                min-w-[33.7833px]
                `,
                // place-items-center
                // justify-center
                // justify-self-center
                // self-center
                // place-self-stretch
            },
            labelDiv: {
                default: `
                flex
                items-center
                justify-start
                place-items-center
                pt-[3px]
                relative
                grow-0
                shrink-0
                `,
                // gap-2.5
            },
            labelText: {
                default: `
                grow-0
                leading-normal
                shrink-0
                text-[1.625rem]
                text-neutral-50/[0.34]
                whitespace-pre-line
                text-left
                group-hover:text-neutral-50
                `,
            },
        },
    }
);
