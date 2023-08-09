"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import {
    buttonWithLabelStyles,
    buttonWithLabelStylesDiv,
    buttonWithLabelStylesText,
} from "./buttonWithLabelStyles";

export const ButtonWithLabel = React.forwardRef<
    HTMLButtonElement,
    ButtonWithLabelProps
>(({ className, variant, size, ...props }, ref) => {
    return (
        <div className="group box-border flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[21px] relative">
            <button
                className={cn(
                    buttonWithLabelStyles({ variant, size, className })
                )}
                ref={ref}
                {...props}
            />
            <div className={cn(buttonWithLabelStylesDiv())}>
                <span className={cn(buttonWithLabelStylesText())}>
                    {props.label}
                </span>
            </div>
        </div>
    );
});

ButtonWithLabel.displayName = "ButtonWithLabel";
