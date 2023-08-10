"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { buttonWithLabelStyles } from "./buttonWithLabelStyles";

export const ButtonWithLabel = forwardRef<
    HTMLButtonElement,
    ButtonWithLabelProps
>(
    ({
        text,
        rootDiv,
        labelDiv,
        label,
        button,
        className,
        children,
        ...props
    }) => {
        return (
            <div className={cn(buttonWithLabelStyles({ rootDiv, className }))}>
                <button
                    className={cn(buttonWithLabelStyles({ button, className }))}
                    {...props}
                >
                    {children}
                </button>
                <div
                    className={cn(
                        buttonWithLabelStyles({ labelDiv, className })
                    )}
                >
                    <span
                        className={cn(
                            buttonWithLabelStyles({ text, className })
                        )}
                    >
                        {label}
                    </span>
                </div>
            </div>
        );
    }
);

ButtonWithLabel.displayName = "ButtonWithLabel";
