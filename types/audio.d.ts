declare type Type_Audio = {
    analyser: AnalyserNode | null;
    audioIsPlaying?: boolean;
    audioStream: string | undefined;
    error?: string | null;
    nextAudio?: () => void;
    previousAudio?: () => void;
    toggleAudio: () => void;
};
