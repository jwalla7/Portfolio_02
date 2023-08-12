"use client";

import { cn } from "@/lib/utils";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { buttonWithLabelStyles } from "./buttonWithLabelStyles";

export const ButtonWithLabel = ({
    text,
    rootDiv,
    labelDiv,
    label,
    button,
    className,
    children,
    ...props
}: ButtonWithLabelProps) => {
    return (
        <div className={cn(buttonWithLabelStyles({ rootDiv, className }))}>
            <button
                className={cn(buttonWithLabelStyles({ button }))}
                {...props}
            >
                {children}
            </button>
            <div className={cn(buttonWithLabelStyles({ labelDiv }))}>
                <span className={cn(buttonWithLabelStyles({ text }))}>
                    {label}
                </span>
            </div>
        </div>
    );
};
