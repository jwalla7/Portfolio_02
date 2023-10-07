"use client";

import { type ReactElement, forwardRef } from "react";
import { CardProps } from "./cardProps";
import { cn } from "@/lib/utils";
import { cardStyles } from "./cardStyles";

export const Card = forwardRef<HTMLDivElement, CardProps>(
    //TODO: refactor to be less verbose
    ({ centerChildren, leftChildren, rightChildren, size, position }, ref): ReactElement => {
        return (
            <>
                {position === "left" ? (
                    <div className={cn(cardStyles({ size: size, position: "left" }))} ref={ref}>
                        <div className={cn(cardStyles({ container: "outer" }))}>{leftChildren}</div>
                    </div>
                ) : position === "right" ? (
                    <div className={cn(cardStyles({ size: size, position: "right" }))} ref={ref}>
                        <div className={cn(cardStyles({ container: "outer" }))}>{rightChildren}</div>
                    </div>
                ) : (
                    <div className={cn(cardStyles({ size: size, position: "center" }))} ref={ref}>
                        <div className={cn(cardStyles({ container: "center_outer" }))}>
                            <div className={cn(cardStyles({ container: "center_inner" }))}>{centerChildren}</div>
                        </div>
                    </div>
                )}
            </>
        );
    }
);

Card.displayName = "Card";
