import { createContext, useContext } from "react";
import { AudioVisualizerContextProps } from "./audioVisualizerContextProps";

export const AudioVisualizerContext = createContext<AudioVisualizerContextProps>({
    analyser: null,
    resetSphere: () => ({}),
});

export const useAudioVisualizerContext = () => {
    return useContext(AudioVisualizerContext);
};
