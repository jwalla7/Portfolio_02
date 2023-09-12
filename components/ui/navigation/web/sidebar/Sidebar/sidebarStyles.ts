import { cva } from "class-variance-authority";

export const sidebarStyles = cva(``, {
    variants: {
        root: {
            active: `
                data-[root_layer_active]
                box-border
                flex
                flex-col
                h-full
                items-start
                justify-center
                w-[21.37vw]
                w-full
                bg-transparent`,
            inactive: `
                data-[root_layer_inactive]
                bg-none
                `,
        },
        nav: {
            active: `
                data-[nav_layer_active]
                basis-full
                box-border
                flex
                flex-col
                gap-x-[3.22vw]
                gap-y-[5.747vh]
                grow
                items-start
                justify-center
                pt-[11.89vh]
                px-[2.285vw]
                w-[19.436vw]
                bg-transparent
                mb-[2.55%]
                `,
            inactive: `
                data-[nav_layer_inactive]
                bg-none
                `,
        },
        theme: {
            active: `
                data-[theme_layer_active]
                box-border
                flex
                flex-col
                gap-x-[3.22vw]
                gap-y-[5.747vh]
                flex-grow
                h-[26.646vh]
                items-start
                justify-center
                px-[2.285vw]
                self-stretch
                shrink
                bg-transparent
                ml-[-2.55%]
                `,
            inactive: `
                data-[theme_layer_inactive]
                bg-none
                `,
        },
    },
});
