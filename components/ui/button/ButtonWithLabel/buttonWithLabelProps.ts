import { VariantProps } from "class-variance-authority";
import { buttonWithLabelVariants } from "./buttonWithLabelVariants";

export interface ButtonWithLabelProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonWithLabelVariants> {
    children?: React.ReactNode;
    label?: string | "undefined";
    asChild?: boolean;
}
