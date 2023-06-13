declare type NavigationType = {
    parent?: NavigationType;
    childrenList?: NavigationType;
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
