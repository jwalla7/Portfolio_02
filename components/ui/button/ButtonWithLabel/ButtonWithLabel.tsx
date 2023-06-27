import React from "react";
import { cn } from "@/lib/utils";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { buttonWithLabelVariants } from "./buttonWithLabelVariants";

export const ButtonWithLabel = React.forwardRef<
    HTMLButtonElement,
    ButtonWithLabelProps
>(({ className, variant, size, ...props }, ref) => {
    return (
        <div className="flex gap-3 items-center">
            <button
                className={cn(
                    buttonWithLabelVariants({ variant, size, className })
                )}
                ref={ref}
                {...props}
            />
            <span>{props.label}</span>
        </div>
    );
});

ButtonWithLabel.displayName = "ButtonWithLabel";
