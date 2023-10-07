import { cva } from "class-variance-authority";

export const cardGroupStyles = cva(
    `
`,
    {
        variants: {
            root: {
                default: `
                data-[__card-root__]
                absolute
                content-stretch
                h-[85.831vh]
                justify-center
                items-start
                gap-[22.52px]
                inline-flex
                mt-[3%]
                ml-[24%]
                `,
            },
        },
    }
);
