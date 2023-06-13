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

type NavigationLevel = "layout" | "group" | "route";
