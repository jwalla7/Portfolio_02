import { VariantProps } from "class-variance-authority";
import { themeToggleGroupVariants } from "./themeToggleGroupStyles";

export interface ThemeToggleGroupProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof themeToggleGroupVariants> {
    children?: React.ReactNode;
}
