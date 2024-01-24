import { FC, useMemo } from "react";
import { useAudioVisualizerContext, AudioVisualizerContext } from "./AudioVisualizerContext";
import { AudioVisualizerProviderProps } from "./audioVisualizerProviderProps";

export const AudioVisualizerProvider: FC<AudioVisualizerProviderProps> = ({ children }) => {
    const { analyser, resetSphere } = useAudioVisualizerContext();

    console.log(
        "AudioVisualizerProvider: ",
        AudioVisualizerProvider.contextTypes,
        " ResetSphere: ",
        resetSphere,
        "Analyser: ",
        analyser
    );

    const values = useMemo(() => {
        return {
            analyser,
            resetSphere,
        };
    }, [analyser, resetSphere]);

    return <AudioVisualizerContext.Provider value={values}>{children}</AudioVisualizerContext.Provider>;
};
