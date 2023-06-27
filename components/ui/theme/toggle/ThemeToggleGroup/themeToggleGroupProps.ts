import { VariantProps } from "class-variance-authority";
import { themeToggleGroupVariants } from "./themeToggleGroupVariants";

export interface ThemeToggleGroupProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof themeToggleGroupVariants> {
    children?: React.ReactNode;
}
