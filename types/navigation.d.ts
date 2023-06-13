import { LinkProps } from "next/link";
import { type Icons } from "@/types/icon";

declare type Type_Navigation = {
    parent?: Type_Navigation;
    childrenList?: Type_Navigation;
    uid: string;
    parentUid: string;
    path: string;
    url: string;
    hrefPath: string;
    label: string;
    title: string;
    description?: string;
    levelType: NavigationLevel;
    levelOrder: number;
    filterIdList: string[];
};

declare type NavigationLevel = "layout" | "group" | "route";

declare type NavigationItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: Icons;

    /**
     * Union type conditional based objects, if href is true/or items is true
     * https://typscriptlang.org/docs/handbook/2/everyday-types.html#union-types
     */
} & (
    | {
          href: LinkProps;
          items?: never;
      }
    | {
          href?: string;
          items: LinkProps[];
      }
);
