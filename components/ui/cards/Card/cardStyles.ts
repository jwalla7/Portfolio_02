import { cva } from "class-variance-authority";

export const cardStyles = cva(
    `
`,
    {
        variants: {
            size: {
                sm: ``,
                md: `w-[25.146vw]`,
                lg: `w-[42.616vw]`,
            },
            position: {
                left: `
                `,
                center: `
                data-[__card-center__]
                self-stretch
                py-[38.42px]
                justify-center
                items-start
                gap-[13.25px]
                flex
                `,
                center_sm: `
                data-[__card-center-sm__]
                self-stretch
                py-[38.42px]
                justify-center
                items-start
                gap-[13.25px]
                flex
                `,
                right: `
                data-[__card-right__]
                self-stretch
                justify-center
                items-start
                gap-[13.25px]
                flex
                perspective-10
                `,
            },
            container: {
                outer: `
                    data-[__card-content-outer__] w-[25.146vw] self-stretch bg-neutral-50 bg-opacity-10 rounded-[42.40px] shadow-[inset_1px_2px_4px_0_rgba(0,0,0,0.05)] dark:shadow-[inset_1px_2px_4px_0_rgba(0,0,0,0.05)] backdrop-blur-[259.67px] transform-style-3d -rotate-y-15 chrome-three-backdrop-blur
                    `,
                inner: `
                    data-[__card-content-inner__]
                    `,
                center_outer: `
                data-[__card-content-center-outer__] grow shrink basis-0 self-stretch rounded-[42.40px] flex-col justify-start items-start gap-[13px] inline-flex bg-transparent
                `,
                center_inner: `
                data-[__card-content-center-inner__] self-stretch grow shrink basis-0 opacity-80 bg-neutral-50 bg-opacity-10 rounded-[42.40px] shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.34)] dark:shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.34)] backdrop-blur-[259.67px] chrome-three-backdrop-blur
                `,
                center_inner_sm: `
                data-[__card-content-center-inner-sm__] self-stretch grow shrink basis-0 opacity-80 bg-neutral-50 bg-opacity-10 rounded-t-[12px] rounded-b-[6px] shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.08)] dark:shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.08)] backdrop-blur-[100px] chrome-three-backdrop-blur-sm
                `,
            },
        },
    }
);
