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
    debouncedSetCacheUpdated: () => ({}),
    currentTime: 0,
    duration: 0,
    durationTimeString: "",
    formattedRemainingTime: undefined,
    formattedDurationById: () => ({}),
    progressPercentage: 0,
    audioCacheData: undefined,
    cacheUpdated: false,
    setTrack: () => ({}),
    setCurrentArtwork: () => ({}),
    currentArtwork: {
        _150x150: "",
        _480x480: "",
        _1000x1000: "",
    },
    currentUserProfilePicture: {
        _150x150: "",
        _480x480: "",
        _1000x1000: "",
    },
});

export const useAudioContext = () => {
    return useContext(AudioContext);
};
