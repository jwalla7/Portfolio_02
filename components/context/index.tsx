import { FC, ReactElement, ReactNode, createContext, useContext, useState, useMemo } from "react";
import { useAudio } from "@/components/hooks/useAudio/useAudio";
import { useAudioProps } from "../hooks/useAudio/useAudioProps";

export interface AudioContextProps extends useAudioProps {
    audioStream: string | undefined;
    isPlaying?: boolean;
}

export interface AudioProviderProps {
    children: ReactNode;
}

const AudioContext = createContext<AudioContextProps>({
    audioStream: undefined,
    analyser: null,
    audioIsPlaying: false,
    isPlaying: false,
    toggleAudio: () => ({}),
});

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

export const useAudioContext = () => {
    return useContext(AudioContext);
};
