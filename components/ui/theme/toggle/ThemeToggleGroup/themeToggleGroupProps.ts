import { VariantProps } from "class-variance-authority";
import { themeToggleGroupStyles } from "./themeToggleGroupStyles";

export interface ThemeToggleGroupProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof themeToggleGroupStyles> {
    children?: React.ReactNode;
}
