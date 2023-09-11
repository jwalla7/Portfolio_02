"use client";

import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { robotoRegular } from "@/design/fontDefaults";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnWithLblButtonStyles } from "./buttonWithLabelStyles";

export const ButtonWithLabel = forwardRef(
    ({
        icon,
        label,
        active,
        buttoneventsref,
        ...props
    }: ButtonWithLabelProps) => {
        return (
            <div
                className={cn(btnWithLblButtonStyles({ buttonDiv: "default" }))}
            >
                <button
                    className={cn(
                        btnWithLblButtonStyles({ button: "default" }),
                        active
                            ? btnWithLblButtonStyles({ button: "active" })
                            : btnWithLblButtonStyles({ button: "inactive" })
                    )}
                    {...props}
                    ref={buttoneventsref}
                >
                    <i
                        className={cn(
                            btnWithLblButtonStyles({ iconDiv: "default" })
                        )}
                    >
                        {icon}
                    </i>
                </button>
                <div
                    className={cn(
                        btnWithLblButtonStyles({ labelDiv: "default" })
                    )}
                >
                    <label
                        className={cn(
                            btnWithLblButtonStyles({ labelText: "default" }),
                            robotoRegular.className
                        )}
                    >
                        {label}
                    </label>
                </div>
            </div>
        );
    }
);

ButtonWithLabel.displayName = "ButtonWithLabel";
