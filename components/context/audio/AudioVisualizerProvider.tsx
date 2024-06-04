import { FC, useMemo } from "react";
import { useAudioVisualizerContext, AudioVisualizerContext } from "./AudioVisualizerContext";
import { AudioVisualizerProviderProps } from "./audioVisualizerProviderProps";
import { set } from "lodash";

export const AudioVisualizerProvider: FC<AudioVisualizerProviderProps> = ({ children }) => {
    const { analyser, resetToggle, setResetToggle } = useAudioVisualizerContext();

    const values = useMemo(() => {
        return {
            analyser,
            resetToggle,
            setResetToggle,
        };
    }, [analyser, resetToggle, setResetToggle]);

    return <AudioVisualizerContext.Provider value={values}>{children}</AudioVisualizerContext.Provider>;
};
