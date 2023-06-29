"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { buttonWithLabelVariants } from "./buttonWithLabelVariants";

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
            <div className="box-border flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 pt-[3px]">
                <span className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Roboto'] text-[26px] leading-[normal] text-left text-neutral-50/[0.34] group-hover:text-white">
                    {props.label}
                </span>
            </div>
        </div>
    );
});

ButtonWithLabel.displayName = "ButtonWithLabel";
