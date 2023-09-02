"use client";

import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { robotoRegular } from "@/design/fontDefaults";
import { LegacyRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const ButtonWithLabel = forwardRef(
    (
        { icon, label, active, ...props }: ButtonWithLabelProps,
        navButtonRef: LegacyRef<HTMLButtonElement> | undefined
    ) => {
        return (
            <div className="flex justify-start items-center gap-x-[1.23vw] gap-y-[2.194vh] group">
                <button
                    className={cn(
                        "box-border border-0 grow-0 shrink-0 justify-center items-center w-[3.9121265377855887vw] h-[6.9780564263323vh] relative rounded-[12.4px] backdrop-blur-[12.4px] px-[9%]",
                        active
                            ? "group-hover:bg-[#E6E6E6] bg-secondary/80 dark:group-hover:bg-[#E6E6E6] dark:bg-[hsl(240,4.8%,95.9%)]"
                            : "bg-transparent group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.089)] from-0% via-[rgba(242,242,242,0.13)] from-76.04% to-neutral-50/[0.1]"
                    )}
                    {...props}
                    ref={navButtonRef}
                >
                    <i className="place-items-center place-self-stretch justify-self-center self-center">
                        {icon}
                    </i>
                </button>
                <div className="bg-transparent hover:bg-transparent flex justify-start items-center relative place-items-center grow-0 shrink-0 gap-2.5 pt-[3px]">
                    <span
                        className={cn(
                            "group-hover:text-neutral-50 text-neutral-50/[0.34] whitespace-pre-line grow-0 shrink-0 text-[1.625rem] leading-normal text-left hover:cursor-auto",
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
