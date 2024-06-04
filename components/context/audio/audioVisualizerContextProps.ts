import { Dispatch, ReactNode, SetStateAction } from "react";

export interface AudioVisualizerContextProps {
    analyser: Type_Audio["analyser"];
    resetToggle: boolean;
    setResetToggle: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
}
