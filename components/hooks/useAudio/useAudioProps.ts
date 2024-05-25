import { LRUCache, LRUCacheProps } from "@/components/cache/audio/audioLRUCache";

export interface useAudioProps {
    analyser: Type_Audio["analyser"];
    audioIsPlaying?: Type_Audio["audioIsPlaying"];
    audioStream: Type_Audio["audioStream"];
    error?: Type_Audio["error"];
    nextAudio?: Type_Audio["nextAudio"];
    previousAudio?: Type_Audio["previousAudio"];
    toggleAudio: Type_Audio["toggleAudio"];
    seekAudioTime: Type_Audio["seekAudioTime"];
    audioCacheData?: LRUCache<LRUCacheProps | null> | undefined;
    currentTime: number;
    duration: number;
    durationTimeString: string;
    formattedRemainingTime: string | undefined;
    progressPercentage: number;
    currentArtwork: {
        _150x150: string;
        _480x480: string;
        _1000x1000: string;
    };
    currentUserProfilePicture: {
        _150x150: string;
        _480x480: string;
        _1000x1000: string;
    };
}
