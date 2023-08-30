import { VariantProps } from "class-variance-authority";
import { buttonStyles } from "./buttonStyles";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonStyles> {}
