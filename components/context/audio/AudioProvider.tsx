import { FC, useMemo, useState } from "react";
import { AudioProviderProps } from "./audioProviderProps";
import { useAudio } from "@/components/hooks/useAudio/useAudio";
import { AudioContext } from "./AudioContext";

export const AudioProvider: FC<AudioProviderProps> = ({ children }) => {
    const [_userId] = useState<string>("oW3lyY7");
    const {
        analyser,
        audioIsPlaying,
        toggleAudio,
        nextAudio,
        previousAudio,
        audioStream,
        currentTime,
        duration,
        seekAudioTime,
        durationTimeString,
        formattedRemainingTime,
        formattedDurationById,
        progressPercentage,
        audioCacheData,
        cacheUpdated,
        currentArtwork,
        currentUserProfilePicture,
        debouncedSetCacheUpdated,
        setTrack,
        setCurrentArtwork,
    } = useAudio(_userId);

    const values = useMemo(() => {
        return {
            audioStream,
            analyser,
            audioIsPlaying: audioIsPlaying ?? false,
            toggleAudio,
            nextAudio,
            previousAudio,
            currentTime: currentTime ?? 0,
            duration: duration ?? 0,
            seekAudioTime,
            durationTimeString,
            formattedRemainingTime,
            formattedDurationById,
            progressPercentage,
            audioCacheData,
            cacheUpdated,
            currentArtwork,
            currentUserProfilePicture,
            debouncedSetCacheUpdated,
            setTrack,
            setCurrentArtwork,
        };
    }, [
        audioStream,
        analyser,
        audioIsPlaying,
        toggleAudio,
        nextAudio,
        previousAudio,
        currentTime,
        duration,
        seekAudioTime,
        durationTimeString,
        formattedRemainingTime,
        formattedDurationById,
        progressPercentage,
        audioCacheData,
        cacheUpdated,
        currentArtwork,
        currentUserProfilePicture,
        debouncedSetCacheUpdated,
        setTrack,
        setCurrentArtwork,
    ]);

    return <AudioContext.Provider value={values}>{children}</AudioContext.Provider>;
};
