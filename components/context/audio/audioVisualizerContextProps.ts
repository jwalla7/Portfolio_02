import { ReactNode } from "react";

export interface AudioVisualizerContextProps {
    analyser: Type_Audio["analyser"];
    resetSphere: () => void;
    children?: ReactNode;
}
