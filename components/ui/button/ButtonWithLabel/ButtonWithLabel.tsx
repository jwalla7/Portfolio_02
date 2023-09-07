"use client";

import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { robotoRegular } from "@/design/fontDefaults";
import { LegacyRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { btnWithLblButtonStyles } from "./buttonWithLabelStyles";

export const ButtonWithLabel = forwardRef(
    (
        { icon, label, active, ...props }: ButtonWithLabelProps,
        navButtonRef: LegacyRef<HTMLButtonElement> | undefined
    ) => {
        const {
            children,
            buttoneventsref,
            clickedButtonRef,
            data,
            asChild,
            activeClass,
            inactiveClass,
            hoverClass,
            darkClass,
            link,
            route,
            ...rest // the rest are standard HTML button attributes
        } = props;

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
                    activeClass={cn(
                        btnWithLblButtonStyles({ button: "active" })
                    )}
                    inactiveClass={cn(
                        btnWithLblButtonStyles({ button: "inactive" })
                    )}
                    {...props}
                    ref={navButtonRef}
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
                    <span
                        className={cn(
                            btnWithLblButtonStyles({ labelSpan: "default" }),
                            robotoRegular.className
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
