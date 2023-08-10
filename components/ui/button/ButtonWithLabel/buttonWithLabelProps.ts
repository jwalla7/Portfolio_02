import { Type_ButtonWithLabel } from "@/types/button-with-label";
export interface ButtonWithLabelProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        Omit<Type_ButtonWithLabel, "rootDiv" | "labelDiv" | "text" | "button">,
        Required<
            Pick<
                Type_ButtonWithLabel,
                "rootDiv" | "labelDiv" | "text" | "button"
            >
        > {
    children?: React.ReactNode;
    label: string | "undefined";
    asChild?: boolean;
}
