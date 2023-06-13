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
    level: "layout" | "group" | "route";
    levelOrder: number;
    filterIdList: string[];
};
