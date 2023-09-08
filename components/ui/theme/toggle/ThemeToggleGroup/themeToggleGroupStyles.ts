import { cva } from "class-variance-authority";

export const themeToggleGroupStyles = cva(
    `
    `,
    {
        variants: {
            toggleDiv: {
                default: `
                box-border flex grow justify-start items-center place-items-center w-[3.074vw] h-fit gap-y-[2.764vh] gap-x-[1.13vw] mt-[13.13%]
                `,
            },
            itemDiv: {
                default: `
                box-border
                bg-transparent
                border-0
                flex
                flex-col
                justify-start
                items-center
                grow-0
                shrink-0
                w-[3.074vw]
                gap-x-[.428vw]
                gap-y-[2.764vh]
                `,
            },
            labelDiv: {
                default: `
                box-border flex justify-center items-center self-stretch grow-0 shrink-0 relative overflow-hidden p-x-[.118vw] p-y-[.210vh] mb-[8%]
                `,
            },
            label: {
                default: `
                grow
                leading-[normal]
                self-stretch
                text-[1.1418323516845703rem]
                text-center
                whitespace-pre-wrap
                text-neutral-50
                `,
            },
            iconDiv: {
                default: `
                box-border flex justify-center items-center grow-0 shrink-0 w-[3.532vw] h-[6.3vh] relative gap-x-[0.688vw] gap-y-[1.226vh] p-x-[.476vw] p-y-[.849vh] rounded-[11.2px]
                `,
            },
        },
    }
);

// export const themeToggleGroupStylesItem = cva(
//     `
//     box-border
//     bg-transparent
//     border-0
//     flex
//     flex-col
//     justify-start
//     items-center
//     flex-grow-0
//     flex-shrink-0
//     w-[3.074vw]
//     gap-x-[.428vw]
//     gap-y-[2.764vh]
//     `
// );

// export const themeToggleGroupStylesLabel = cva(
//     `
//     flex-grow
//     leading-[normal]
//     self-stretch
//     text-[18.269317626953125px]
//     text-center
//     whitespace-pre-wrap
//     text-neutral-50
//     `
// );

// export const themeToggleGroupStylesLabelDiv = cva(
//     `
//     box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden p-x-[.118vw] p-y-[.210vh] mb-[8%]
//     `
// );

// export const themeToggleGroupStylesIconDiv = cva(
//     `
//     box-border flex justify-center items-center flex-grow-0 flex-shrink-0 w-[3.532vw] h-[6.3vh] relative gap-x-[0.688vw] gap-y-[1.226vh] p-x-[.476vw] p-y-[.849vh] rounded-[11.2px]
//     `
// );
