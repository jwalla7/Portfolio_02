import { forwardRef } from "react";
import { CardGroupProps } from "./cardGroupProps";
import { cn } from "@/lib/utils";
import { cardGroupStyles } from "./cardGroupStyles";

export const CardGroup = forwardRef<HTMLDivElement, CardGroupProps>(({ children }, ref) => {
    return (
        <div className={cn(cardGroupStyles({ root: "default" }))} ref={ref}>
            {children}
        </div>
    );
});

CardGroup.displayName = "CardGroup";
