import { cva } from "class-variance-authority";

export const buttonWithLabelStyles = cva(
    `
    box-border flex justify-center items-center flex-grow-0 flex-shrink-0 w-[3.912vw] h-[6.978056426332288vh] relative gap-[13px] p-[9px] rounded-[12.4px] backdrop-blur-[12.4px]
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

export const buttonWithLabelStylesDiv = cva(
    `
    box-border
    flex
    flex-grow-0
    flex-shrink-0
    gap-2.5
    items-center
    justify-start
    overflow-hidden
    pt-[3px]
    px-2.5
    relative
    self-stretch
    `
);

export const buttonWithLabelStylesText = cva(
    `
    flex-grow-0
    flex-shrink-0 
    leading-[normal]
    robotoRegular.className
    max-w-1.6189292039596 
    text-[1.523vw]
    text-left 
    text-neutral-50/[0.34]
    hover:text-neutral-50
    whitespace-pre-wrap
    `
);
