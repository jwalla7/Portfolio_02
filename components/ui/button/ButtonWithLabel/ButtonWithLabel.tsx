"use client";

import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { buttonWithLabelStyles } from "./buttonWithLabelStyles";

export const ButtonWithLabel = ({
    label,
    children,
    ...props
}: ButtonWithLabelProps) => {
    return (
        <div className={buttonWithLabelStyles({ root: "default" })}>
            <button
                className={buttonWithLabelStyles({ button: "default" })}
                {...props}
            >
                {children}
            </button>
            <div className={buttonWithLabelStyles({ label: "default" })}>
                <span className={buttonWithLabelStyles({ text: "default" })}>
                    {label}
                </span>
            </div>
        </div>
    );
};
