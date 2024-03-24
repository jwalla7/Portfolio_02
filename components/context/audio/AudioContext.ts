import { createContext, useContext } from "react";
import { AudioContextProps } from "./audioContextProps";

export const AudioContext = createContext<AudioContextProps>({
    analyser: null,
    audioIsPlaying: false,
    audioStream: undefined,
    nextAudio: () => ({}),
    previousAudio: () => ({}),
    toggleAudio: () => ({}),
    seekAudioTime: () => ({}),
    currentTime: 0,
    duration: 0,
    durationTimeString: "",
    formattedRemainingTime: undefined,
    progressPercentage: 0,
});

export const useAudioContext = () => {
    return useContext(AudioContext);
};
