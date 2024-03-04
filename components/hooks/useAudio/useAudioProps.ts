export interface useAudioProps {
    analyser: Type_Audio["analyser"];
    audioIsPlaying?: Type_Audio["audioIsPlaying"];
    audioStream: Type_Audio["audioStream"];
    error?: Type_Audio["error"];
    nextAudio?: Type_Audio["nextAudio"];
    previousAudio?: Type_Audio["previousAudio"];
    toggleAudio: Type_Audio["toggleAudio"];
    seekAudioTime: Type_Audio["seekAudioTime"];
    currentTime: number;
    duration: number;
    durationTimeString: string;
    formattedRemainingTime: string | undefined;
}
