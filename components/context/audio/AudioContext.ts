import { createContext, useContext } from "react";
import { AudioContextProps } from "./audioContextProps";

export const AudioContext = createContext<AudioContextProps>({
    audioStream: undefined,
    analyser: null,
    audioIsPlaying: false,
    isPlaying: false,
    toggleAudio: () => ({}),
});

export const useAudioContext = () => {
    return useContext(AudioContext);
};
