import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./buttonVariants";
import { ButtonProps } from "./buttonProps";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
