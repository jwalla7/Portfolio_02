"use client";

import clsx from "clsx";
import { ButtonWithLabelProps } from "./buttonWithLabelProps";
import { robotoRegular } from "@/design/fontDefaults";

export const ButtonWithLabel = ({
    navButtonRef,
    icon,
    label,
    ...props
}: ButtonWithLabelProps) => {
    return (
        <div className="flex justify-start items-start gap-[21px] group">
            <button
                className="
                bg-transparent
                group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.089)] from-0% via-[rgba(242,242,242,0.13)] from-76.04% to-neutral-50/[0.1]
                box-border border-0 grow-0 shrink-0 justify-center items-center w-[3.9121265377855887vw] h-[6.9780564263323vh] relative rounded-[12.4px] backdrop-blur-[12.4px] px-[10.55%]"
                {...props}
                ref={navButtonRef}
            >
                {icon}
            </button>
            <div className="bg-transparent hover:bg-transparent flex justify-start items-center relative place-items-center grow-0 shrink-0 gap-2.5 pt-[3px]">
                <span
                    className={clsx(
                        "group-hover:text-neutral-50 whitespace-pre-line grow-0 shrink-0 text-[1.625rem] leading-normal text-left text-neutral-50/[0.34]",
                        robotoRegular.className
                    )}
                >
                    {label}
                </span>
            </div>
        </div>
    );
};
