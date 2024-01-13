import { FC, useMemo } from "react";
import { useAudio } from "@/components/hooks/useAudio/useAudio";
import { useAudioVisualizerContext, AudioVisualizerContext } from "./AudioVisualizerContext";
import { AudioVisualizerProviderProps } from "./audioVisualizerProviderProps";

export const AudioVisualizerProvider: FC<AudioVisualizerProviderProps> = ({ children }) => {
    const { analyser } = useAudio();
    const { resetSphere } = useAudioVisualizerContext();

    const values = useMemo(() => {
        return {
            analyser,
            resetSphere,
        };
    }, [analyser, resetSphere]);

    return <AudioVisualizerContext.Provider value={values}>{children}</AudioVisualizerContext.Provider>;
};
