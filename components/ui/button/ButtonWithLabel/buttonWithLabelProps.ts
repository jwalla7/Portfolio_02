/**
 * @description
 * A shape that inherits the rootDiv, labelDiv, text, and button types from Type_ButtonWithLabel.
 *
 * @see https://cva.style/docs/getting-started/typescript
 */

import { Type_ButtonWithLabel } from "@/types/button-with-label";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { Url } from "next/dist/shared/lib/router/router";
import { LinkProps } from "next/link";
import {
    ButtonHTMLAttributes,
    MutableRefObject,
    ReactElement,
    ReactNode,
} from "react";

export interface ButtonWithLabelProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        /**
         * Omit
         *
         * Omits the keys of the buttonDiv, button, labelDiv, labelText, iconDiv, and background types from
         *
         * the Type_ButtonWithLabel type declaration.
         */
        Omit<
            Type_ButtonWithLabel,
            | "buttonDiv"
            | "button"
            | "labelDiv"
            | "labelText"
            | "iconDiv"
            | "background"
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
             * Enables inheritance from the Type_ButtonWithLabel type declaration.
             */
            Pick<
                Type_ButtonWithLabel,
                | "buttonDiv"
                | "button"
                | "labelDiv"
                | "labelText"
                | "iconDiv"
                | "background"
            >
        > {
    active?: boolean;
    asChild?: boolean;
    buttoneventsref?: MutableRefObject<HTMLButtonElement | null> | undefined;
    children?: ReactNode;
    clickedButtonRef?: MutableRefObject<HTMLButtonElement | null>;
    data?: Map<string, ButtonWithLabelProps> | undefined;
    icon: ReactElement | ReactNode | undefined;
    label: string | undefined;
    link?: React.ForwardRefExoticComponent<
        NavigationMenuProps & React.RefAttributes<HTMLElement>
    >;
    /** temporary any, need to look into InternalLinkProps */
    route?: any | LinkProps | Url | undefined;
}
