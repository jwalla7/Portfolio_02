import { cva } from "class-variance-authority";

export const themeToggleGroupStyles = cva(
    `
    `,
    {
        variants: {
            togglediv: {
                default: `
                data-[theme_group_default] box-border flex grow justify-start items-center place-items-center w-fit h-fit gap-y-[2.764vh] gap-x-[1.13vw] mt-[13.13%]
                `,
            },
            itemdiv: {
                default: `
                data-[theme_item_default]
                group
                box-border
                bg-transparent
                border-0
                flex
                flex-col
                justify-start
                items-center
                grow-0
                shrink-0
                w-[3.89vw]
                gap-x-[.428vw]
                gap-y-[2.764vh]
                `,
            },
            labeldiv: {
                active: `
                data-[theme_label_active]
                box-border flex justify-center items-center self-stretch grow-0 shrink-0 relative overflow-hidden p-x-[.118vw] p-y-[.210vh] mb-[8%]
                bg-transparent
                border-0
                `,
                inactive: `
                data-[theme_label_inactive]
                bg-transparent
                border-0
                mt-[21%]
                `,
            },
            labeltext: {
                default: `
                data-[theme_text_default]
                grow
                leading-[normal]
                self-stretch
                text-center
                whitespace-pre-wrap
                text-neutral-50/[0.34]
                3xl:text-[1.05rem]
                4xl:text-[1.1418323516845703rem]
                `,
                active: `
                data-[theme_text_active]
                grow
                leading-[normal]
                self-stretch
                text-center
                whitespace-pre-wrap
                text-neutral-50/[0.34]
                group:transition-fade-in
                group:duration-300
                group-hover:text-white
                dark:text-neutral-50
                text-[1.070vw]
                3xl:text-[1.05rem]
                4xl:text-[1.1418323516845703rem]
                `,
                inactive: `
                data-[theme_text_inactive]
                grow
                leading-[normal]
                self-stretch
                text-center
                whitespace-pre-wrap
                text-transparent
                text-[1.070vw]
                `,
            },
            icondiv: {
                default: `
                data-[theme_icon_div_default]
                box-border flex justify-center items-center grow-0 shrink-0 w-[3.532vw] h-[6.3vh] relative gap-x-[0.688vw] gap-y-[1.226vh] p-x-[.476vw] p-y-[.849vh] rounded-[11.2px]
                `,
            },
            iconsvg: {
                active: `
                data-[theme_icon_active]
                w-[1.904vw]
                h-[3.396vh]
                group-hover:text-white
                text-neutral-50/[0.34] 
                dark:text-neutral-50
                dark:text-neutral-50

                `,
                inactive: `
                data-[theme_icon_inactive]
                group-hover:transition-ease-in-smooth
                group-hover:duration-100
                group-hover:scale-[1.427955]
                w-[1.334vw]
                h-[2.379vh]
                text-neutral-50/[0.34]
                dark:text-neutral-50/[0.34]
                `,
            },
        },
    }
);
