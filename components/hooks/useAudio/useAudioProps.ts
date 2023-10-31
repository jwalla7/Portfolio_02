export interface useAudioProps {
    analyser: AnalyserNode | null;
    error?: string | null;
    audioIsPlaying?: boolean;
    toggleAudio: () => void;
}
