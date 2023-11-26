import { useAudioProps } from "@/components/hooks/useAudio/useAudioProps";
import { ReactNode } from "react";

export interface AudioContextProps extends useAudioProps {
    children?: ReactNode;
}
