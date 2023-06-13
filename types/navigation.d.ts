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
    levelType: "layout" | "group" | "route";
    levelOrder: number;
    filterIdList: string[];
};
