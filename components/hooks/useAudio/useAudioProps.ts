import { LRUCache, LRUCacheProps } from "@/components/cache/audio/audioLRUCache";
import { Track } from "@audius/sdk/dist/api/Track";
import { Dispatch, SetStateAction } from "react";

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
    cacheUpdated: boolean;
    debouncedSetCacheUpdated: () => void;
    currentTime: number;
    duration: number;
    durationTimeString: string;
    formattedRemainingTime: string | undefined;
    formattedDurationById: (id: string) => void;
    progressPercentage: number;
    setAudioStream: Dispatch<SetStateAction<string | undefined>>;
    setTrack: Dispatch<SetStateAction<Track | Track[] | null>>;
    setCurrentArtwork: Dispatch<
        SetStateAction<{
            _150x150: string;
            _480x480: string;
            _1000x1000: string;
        }>
    >;
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
