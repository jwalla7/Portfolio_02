import { cva } from "class-variance-authority";

export const themeToggleGroupStyles = cva(
    `
        bg-red-500
        box-border
        gap-[25px]
        h-fit
        w-[364.78px]
        items-start
        justify-start
        px-[5px]
        `,
    {
        variants: {
            variant: {
                default: `
                        backdrop-blur-[12.4px]
                        dark:bg-gradient-to-r from-[rgba(255,255,255,0.89)] from-1.16% to-[rgba(255,255,255,0.89)] from-100.34%
                        dark:text-primary-foreground
                        hover:bg-primary/90
                        hover:text-white
                        `,
                destructive: `
                        bg-destructive
                        hover:bg-destructive/90
                        text-destructive-foreground
                        `,
                outline: `
                        border
                        border-input
                        hover:bg-accent
                        hover:text-accent-foreground
                        `,
                secondary: `
                        bg-secondary
                        hover:bg-secondary/80
                        text-secondary-foreground
                        `,
                glass: `
                    bg-transparent
                    dark:bg-transparent
                    dark:group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.08)] from-0% to-[rgba(242,242,242,0.13)] from-76.04%
                    dark:group-hover:text-accent-foreground
                    group-hover:text-accent-foreground
                    hover:bg-primary/90
                    `,
                link: `
                    hover:underline
                    text-primary
                    underline-offset-4
                    `,
            },
            size: {
                default: `
                        h-[66.78]
                        w-[66.78px]
                        gap-[13px]
                        p-[9px]
                        rounded-[12.4px]
                        border-0
                        `,
                sm: `
                    h-[37px]
                    px-3
                    rounded-md
                    w-[37px]
                    `,
                lg: `
                    h-11
                    px-8
                    rounded-md
                    `,
                icon: `
                    h-10
                    w-10
                    `,
            },
        },
        defaultVariants: {
            variant: `default`,
            size: `default`,
        },
    }
);

export const themeToggleGroupStylesItem = cva(
    `
    box-border
    flex
    flex-col
    justify-start
    items-center
    flex-grow-0
    flex-shrink-0
    w-[52.48px]
    gap-[7.307741641998291px]
    `
);

export const themeToggleGroupStylesLabel = cva(
    `
    whitespace-pre-wrap
    flex-grow
    self-stretch
    font-['Roboto']
    text-[18.269317626953125px]
    leading-[normal]
    text-center
    text-neutral-50
    `
);
