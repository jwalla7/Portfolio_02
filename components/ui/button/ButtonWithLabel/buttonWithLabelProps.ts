/**
 * @description
 * A shape that inherits the rootDiv, labelDiv, text, and button types from Type_ButtonWithLabel.
 *
 * @see https://cva.style/docs/getting-started/typescript
 */

import { Type_ButtonWithLabel } from "@/types/button-with-label";
export interface ButtonWithLabelProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        /**
         * Omit
         *
         * Omits the keys of the rootDiv, labelDiv, text, and button types from
         *
         * the Type_ButtonWithLabel type declaration.
         */
        Omit<
            Type_ButtonWithLabel,
            "rootDiv" | "labelDiv" | "textDiv" | "buttonDiv"
        >,
        /**
         * Required
         *
         * Makes all properties required in the Pick type declaration.
         */
        Required<
            /**
             * Pick
             *
             * Enables inheritance of the rootDiv, labelDiv, text, and button types from
             *
             * the Type_ButtonWithLabel type declaration.
             */
            Pick<
                Type_ButtonWithLabel,
                "rootDiv" | "labelDiv" | "textDiv" | "buttonDiv"
            >
        > {
    children?: React.ReactNode;
    label: string | undefined;
    asChild?: boolean;
}
