import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonStyles";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}
