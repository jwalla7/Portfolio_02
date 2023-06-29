import { cva } from "class-variance-authority";

export const buttonWithLabelVariants = cva(
    "box-border flex justify-center items-center flex-grow-0 flex-shrink-0 relative cursor-pointer",
    {
        variants: {
            variant: {
                default: `
                dark:bg-gradient-to-r from-[rgba(255,255,255,0.89)] from-1.16% to-[rgba(255,255,255,0.89)] from-100.34%
                dark:hover:bg-primary/80
                dark:text-primary-foreground
                hover:bg-primary/90
                `,
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: `
                bg-transparent
                group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.08)] from-0% to-[rgba(242,242,242,0.13)] from-76.04%
                group-hover:text-accent-foreground`,
                link: "underline-offset-4 hover:underline text-primary",
            },
            size: {
                default:
                    "h-[66.78] w-[66.78px] gap-[13px] p-[9px] rounded-[12.4px] backdrop-blur-[12.4px] border-0",
                sm: "h-[37px] w-[37px] px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);
