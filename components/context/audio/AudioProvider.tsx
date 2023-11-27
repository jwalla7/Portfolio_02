import { FC, useMemo, useState } from "react";
import { AudioProviderProps } from "./audioProviderProps";
import { useAudio } from "@/components/hooks/useAudio/useAudio";
import { AudioContext } from "./AudioContext";

export const AudioProvider: FC<AudioProviderProps> = ({ children }) => {
    const [_trackId, setTrackId] = useState<string>("1B5ab8z");
    const [_userId, setUserId] = useState<string>("oW3lyY7");
    const { analyser, audioIsPlaying, toggleAudio, nextAudio, previousAudio, audioStream } = useAudio(_trackId, _userId);

    const values = useMemo(() => {
        return {
            audioStream,
            analyser,
            audioIsPlaying: audioIsPlaying ?? false,
            toggleAudio,
            nextAudio,
            previousAudio,
        };
    }, [audioStream, analyser, audioIsPlaying, toggleAudio, nextAudio, previousAudio]);

    return <AudioContext.Provider value={values}>{children}</AudioContext.Provider>;
};
