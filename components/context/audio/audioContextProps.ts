import { useAudioProps } from "@/components/hooks/useAudio/useAudioProps";

export interface AudioContextProps extends useAudioProps {
    audioStream: string | undefined;
    isPlaying?: boolean;
}
