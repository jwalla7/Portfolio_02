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
    HTMLAttributes,
    MutableRefObject,
    ReactElement,
    ReactNode,
} from "react";

type active = (
    active: ButtonWithLabelProps["active"]
) => typeof active extends true
    ? HTMLAttributes<HTMLElement> & { className?: string }
    : undefined;
export interface ButtonWithLabelProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        /**
         * Omit
         *
         * Omits the keys of the rootDiv, labelDiv, text, and button types from
         *
         * the Type_ButtonWithLabel type declaration.
         */
        Omit<
            Type_ButtonWithLabel,
            "rootdiv" | "labeldiv" | "textdiv" | "buttondiv"
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
                "rootdiv" | "labeldiv" | "textdiv" | "buttondiv"
            >
        > {
    active?: boolean;
    activeClass?: active | undefined;
    inactiveClass?: (
        active: ButtonWithLabelProps["active"]
    ) => typeof active extends false
        ? HTMLAttributes<HTMLElement> & { className?: string }
        : null | undefined;
    hoverClass?:
        | (HTMLAttributes<HTMLElement> & { className?: string })
        | undefined;
    darkClass?:
        | (HTMLAttributes<HTMLElement> & { className?: string })
        | undefined;
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
