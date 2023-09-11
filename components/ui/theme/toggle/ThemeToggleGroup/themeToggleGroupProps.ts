import { VariantProps } from "class-variance-authority";
import { themeToggleGroupStyles } from "./themeToggleGroupStyles";
import { MutableRefObject, ReactElement, ReactNode } from "react";

export interface ThemeToggleGroupProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof themeToggleGroupStyles> {
    active?: boolean;
    buttoneventsref?: MutableRefObject<HTMLButtonElement | null> | undefined;
    children?: React.ReactNode;
    clickedbuttonref?: MutableRefObject<boolean | null>;
    data?: Map<string, ThemeToggleGroupProps> | undefined;
    title: string | undefined;
    label?: string | undefined;
    icon?: ReactElement | ReactNode | undefined;
    value?: "left" | "center" | "right" | undefined;
}
