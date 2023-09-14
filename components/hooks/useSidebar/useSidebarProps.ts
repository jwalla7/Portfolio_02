import { MutableRefObject, RefObject } from "react";

export interface useSideBarProps {
    toggleTracker: () => void;
    divRef: MutableRefObject<HTMLDivElement | null> | undefined;
}
