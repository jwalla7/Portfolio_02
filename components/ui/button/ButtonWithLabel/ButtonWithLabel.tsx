"use client";

import { forwardRef } from "react";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { btnWithLblButtonStyles } from "./buttonWithLabelStyles";
import { cn } from "@/lib/utils";
import { robotoRegular } from "@/design/fontDefaults";
import { useMouseMove } from "@/components/hooks/useMouseMove/useMouseMove";

export const ButtonWithLabel = forwardRef<HTMLDivElement, ButtonWithLabelProps>(
    ({ icon, label, active, buttonRef, ...props }, attributeRef) => {
        useMouseMove({ buttonRef: buttonRef });
        return (
            <div className={cn(btnWithLblButtonStyles({ buttonDiv: "default" }))} ref={attributeRef}>
                <button
                    className={cn(
                        btnWithLblButtonStyles({ button: "default" }),
                        active ? btnWithLblButtonStyles({ button: "active" }) : btnWithLblButtonStyles({ button: "inactive" })
                    )}
                    {...props}
                    ref={buttonRef}
                >
                    <i className={cn(btnWithLblButtonStyles({ iconDiv: "default" }))}>{icon}</i>
                </button>
                <div className={cn(btnWithLblButtonStyles({ labelDiv: "default" }))}>
                    <label className={cn(btnWithLblButtonStyles({ labelText: "default" }), robotoRegular.className)}>{label}</label>
                </div>
            </div>
        );
    }
);

ButtonWithLabel.displayName = "ButtonWithLabel";
