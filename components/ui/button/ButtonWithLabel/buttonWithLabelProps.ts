import { VariantProps } from "class-variance-authority";
import { buttonWithLabelStyles } from "./buttonWithLabelStyles";

export interface ButtonWithLabelProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonWithLabelStyles> {
    children?: React.ReactNode;
    label?: string | "undefined";
    asChild?: boolean;
}
