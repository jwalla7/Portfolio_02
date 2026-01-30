import { FC, useMemo, useState } from "react";
import { AudioVisualizerContext } from "./AudioVisualizerContext";
import { AudioVisualizerProviderProps } from "./audioVisualizerProviderProps";

export const AudioVisualizerProvider: FC<AudioVisualizerProviderProps> = ({ children }) => {
    const [resetToggle, setResetToggle] = useState<boolean>(false);

    const values = useMemo(() => {
        return {
            analyser: null,
            resetToggle,
            setResetToggle,
        };
    }, [resetToggle]);

    return <AudioVisualizerContext.Provider value={values}>{children}</AudioVisualizerContext.Provider>;
};
