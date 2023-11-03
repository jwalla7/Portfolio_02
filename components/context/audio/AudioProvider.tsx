import { FC, useMemo, useState } from "react";
import { AudioProviderProps } from "./audioProviderProps";
import { useAudio } from "@/components/hooks/useAudio/useAudio";
import { AudioContext } from "./AudioContext";

export const AudioProvider: FC<AudioProviderProps> = ({ children }) => {
    const { analyser, audioIsPlaying, toggleAudio } = useAudio();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const values = useMemo(() => {
        return {
            audioStream: undefined,
            analyser,
            audioIsPlaying: audioIsPlaying ?? false,
            isPlaying,
            toggleAudio,
        };
    }, [analyser, audioIsPlaying, toggleAudio, isPlaying]);

    return <AudioContext.Provider value={values}>{children}</AudioContext.Provider>;
};
