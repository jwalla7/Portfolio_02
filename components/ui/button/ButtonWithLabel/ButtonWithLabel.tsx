"use client";

import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { buttonWithLabelStyles } from "./buttonWithLabelStyles";

export const ButtonWithLabel = ({
    textDiv,
    rootDiv,
    labelDiv,
    label,
    buttonDiv,
    children,
    ...props
}: ButtonWithLabelProps) => {
    return (
        <div className={buttonWithLabelStyles({ rootDiv })}>
            <button className={buttonWithLabelStyles({ buttonDiv })} {...props}>
                {children}
            </button>
            <div className={buttonWithLabelStyles({ labelDiv })}>
                <span className={buttonWithLabelStyles({ textDiv })}>
                    {label}
                </span>
            </div>
        </div>
    );
};
