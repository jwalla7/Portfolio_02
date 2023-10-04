import { cva } from "class-variance-authority";

export const cardStyles = cva(
    `
`,
    {
        variants: {
            root: {
                default: `
            data-[__card-root__]
            box-border
            flex
            justify-center
            items-start
            w-[95.548vw]
            h-[85.831vh]
            overflow-hidden
            gap-x-[1.319vw]
            gap-y-[2.353vh]
            rounded-[42.4px]
            m-[2%]

            drop-shadow-[0_23.251039505004883px_29.000864028930664px_rgba(0,0,0,0.05)]
            `,
            },
            size: {
                sm: ``,
                md: ``,
                lg: ``,
            },
            position: {
                left: `
            box-border
            flex
            justify-center
            items-start
            self-stretch
            grow-0
            shrink-0
            gap-[13.248456001281738px]
            `,
                center: ``,
                right: ``,
            },
        },
    }
);
