import { createContext, useContext } from "react";
import { AudioVisualizerContextProps } from "./audioVisualizerContextProps";

export const AudioVisualizerContext = createContext<AudioVisualizerContextProps>({
    analyser: null,
    resetToggle: false,
    setResetToggle: () => ({}),
});

export const useAudioVisualizerContext = () => {
    return useContext(AudioVisualizerContext);
};
