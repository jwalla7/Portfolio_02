/**
 * @description
 * The Card component renders a card with customizable size and position.
 */

import { type ReactElement, forwardRef } from "react";
import { CardProps } from "./cardProps";
import { cn } from "@/lib/utils";
import { cardStyles } from "./cardStyles";

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, size, position, className }, ref): ReactElement => {
    return (
        <div className={cn(cardStyles({ size: size, position: position }), className)} ref={ref}>
            <div
                className={cn(
                    position === "center" ? cardStyles({ container: "center_outer" }) : position === "center_sm" ? cardStyles({ container: "center_outer" }) : cardStyles({ container: "outer" }),
                )}
            >
                {position === "center" ? <div className={cn(cardStyles({ container: "center_inner" }))}>{children}</div> : position === "center_sm" ? <div className={cn(cardStyles({ container: "center_inner_sm" }))}>{children}</div> : children}
            </div>
        </div>
    );
});

Card.displayName = "Card";
