import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./buttonVariants";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}
