import { Type_CardPosition, Type_CardSize } from "@/types/card";
import { ReactElement } from "react";

export interface CardProps {
    children?: ReactElement;
    size: Type_CardSize;
    position: Type_CardPosition;
    className?: string;
}
