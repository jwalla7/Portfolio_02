"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import {
    buttonWithLabelVariants,
    buttonWithLabelVariantsDiv,
    buttonWithLabelVariantsText,
} from "./buttonWithLabelVariants";

export const ButtonWithLabel = React.forwardRef<
    HTMLButtonElement,
    ButtonWithLabelProps
>(({ className, variant, size, ...props }, ref) => {
    return (
        <div className="group box-border flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[21px] relative">
            <button
                className={cn(
                    buttonWithLabelVariants({ variant, size, className })
                )}
                ref={ref}
                {...props}
            />
            <div className={cn(buttonWithLabelVariantsDiv())}>
                <span className={cn(buttonWithLabelVariantsText())}>
                    {props.label}
                </span>
            </div>
        </div>
    );
});

ButtonWithLabel.displayName = "ButtonWithLabel";
