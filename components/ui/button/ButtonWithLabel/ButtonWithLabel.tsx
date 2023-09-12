"use client";

import { forwardRef } from "react";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { btnWithLblButtonStyles } from "./buttonWithLabelStyles";
import { cn } from "@/lib/utils";
import { robotoRegular } from "@/design/fontDefaults";
// s
export const ButtonWithLabel = forwardRef<HTMLButtonElement, ButtonWithLabelProps>(({ icon, label, active, ...props }, buttoneventsref) => {
    return (
        <div className={cn(btnWithLblButtonStyles({ buttonDiv: "default" }))}>
            <button
                className={cn(
                    btnWithLblButtonStyles({ button: "default" }),
                    active ? btnWithLblButtonStyles({ button: "active" }) : btnWithLblButtonStyles({ button: "inactive" })
                )}
                {...props}
                ref={buttoneventsref}
            >
                <i className={cn(btnWithLblButtonStyles({ iconDiv: "default" }))}>{icon}</i>
            </button>
            <div className={cn(btnWithLblButtonStyles({ labelDiv: "default" }))}>
                <label className={cn(btnWithLblButtonStyles({ labelText: "default" }), robotoRegular.className)}>{label}</label>
            </div>
        </div>
    );
});

ButtonWithLabel.displayName = "ButtonWithLabel";
