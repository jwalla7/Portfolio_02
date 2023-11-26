import { createContext, useContext } from "react";
import { AudioContextProps } from "./audioContextProps";

export const AudioContext = createContext<AudioContextProps>({
    analyser: null,
    audioIsPlaying: false,
    audioStream: undefined,
    nextAudio: () => ({}),
    previousAudio: () => ({}),
    toggleAudio: () => ({}),
});

export const useAudioContext = () => {
    return useContext(AudioContext);
};
