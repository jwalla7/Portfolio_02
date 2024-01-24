import { createContext, useContext, useEffect } from "react";
import { AudioVisualizerContextProps } from "./audioVisualizerContextProps";

export const AudioVisualizerContext = createContext<AudioVisualizerContextProps>({
    analyser: null,
    resetSphere: () => {
        console.log("resetSphere not implemented");
    },
});

export const useAudioVisualizerContext = () => {
    // useEffect(() => {
    //     console.log("change analyser: ", analyser)
    //     console.log("change resetSphere: ", resetSphere)
    // }, [analyser, resetSphere])
    return useContext(AudioVisualizerContext);
};
