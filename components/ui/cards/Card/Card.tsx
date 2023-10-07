import { type ReactElement, forwardRef } from "react";
import { CardProps } from "./cardProps";
import { cn } from "@/lib/utils";
import { cardStyles } from "./cardStyles";

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, size, position }, ref): ReactElement => {
    return (
        <div className={cn(cardStyles({ size: size, position: position }))} ref={ref}>
            <div
                className={cn(position === "center" ? cardStyles({ container: "center_outer" }) : cardStyles({ container: "outer" }))}
            >
                {position === "center" ? <div className={cn(cardStyles({ container: "center_inner" }))}>{children}</div> : children}
            </div>
        </div>
    );
});

Card.displayName = "Card";
