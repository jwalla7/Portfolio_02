import { PhosphorIcons } from "@/components/ui/icons";
import { LinkProps } from "next/link";

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
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof PhosphorIcons | "arrowRight";

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

declare type NavigationLevel = "layout" | "group" | "route";
