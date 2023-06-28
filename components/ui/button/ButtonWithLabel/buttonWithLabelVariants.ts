import { cva } from "class-variance-authority";

export const buttonWithLabelVariants = cva(
    "flex justify-center items-center flex-grow-0 flex-shrink-0 w-[66.78px] h-[66.78px] relative gap-[13px] p-[9px] rounded-[12.4px] backdrop-blur-[12.4px] border-0",
    {
        variants: {
            variant: {
                default:
                    "dark:bg-gradient-to-r from-[rgba(255,255,255,0.89)] from-1.16% to-[rgba(255,255,255,0.89)] from-100.34% text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "underline-offset-4 hover:underline text-primary",
            },
            size: {
                default: "h-10 px-4 py-2",
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
