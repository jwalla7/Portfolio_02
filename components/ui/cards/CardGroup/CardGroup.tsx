import { forwardRef } from "react";
import { CardGroupProps } from "./cardGroupProps";

export const CardGroup = forwardRef<HTMLDivElement, CardGroupProps>(({ children }, ref) => {
    return <div ref={ref}>{children}</div>;
});

CardGroup.displayName = "CardGroup";
