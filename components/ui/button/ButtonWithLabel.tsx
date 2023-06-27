import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border-0",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
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

export interface ButtonWithLabelProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    children?: React.ReactNode;
    label?: string | "undefined";
    asChild?: boolean;
}

const ButtonWithLabel = React.forwardRef<
    HTMLButtonElement,
    ButtonWithLabelProps
>(({ className, variant, size, ...props }, ref) => {
    return (
        <div className="flex gap-3 items-center">
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
            <span>{props.label}</span>
        </div>
    );
});
ButtonWithLabel.displayName = "ButtonWithLabel";

export { ButtonWithLabel, buttonVariants };
