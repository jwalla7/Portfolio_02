/**
 * @description
 * Provides an easy way to control audio playback.
 *
 * It creates an AudioContext, connecting it to an HTMLAudioElement.
 *
 * It controls the audio playback, so that this logic can be reused across different components in the application.
 */

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { Track } from "@audius/sdk/dist/api/Track";
import { useAudioProps } from "./useAudioProps";
import { LRUCache, LRUCacheProps } from "@/components/cache/audio/audioLRUCache";
// import { useQuery } from "@tanstack/react-query";

export function useAudio(userId?: string): useAudioProps {
    const [_track, setTrack] = useState<Track | Track[] | null>(null);
    const [audioStream, setAudioStream] = useState<string | undefined>(undefined);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [audioIsPlaying, setAudioIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const hasFetchedInitialData = useRef<boolean>(false);

    const audioCacheData = useMemo(() => new LRUCache<LRUCacheProps | null>(3), []);

    interface TrackData extends LRUCacheProps {
        id: string;
        metaData?: string;
    }
    const fetchInitialAudioData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/audius?userId=${userId}&stream=true`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            if (!response.ok) throw new Error("Error fetching audio data");

            const cachedAudioData: TrackData[] = await response.json();
            if (cachedAudioData.length > 0) {
                hasFetchedInitialData.current = true;
            }
            if (Array.isArray(cachedAudioData) && cachedAudioData.length > 0) {
                cachedAudioData.forEach((trackData, index) => {
                    if (trackData.id) {
                        audioCacheData.put(trackData.id, trackData);
                    } else {
                        console.error("Invalid track data, missing id:", trackData);
                    }
                    if (index === 0) {
                        setTrack(trackData.track);
                        setAudioStream(trackData.streamLink);
                        audioCacheData.setCurrentNode(trackData.id);
                        console.log("CURRENT INITIAL NODE: ", audioCacheData.getCurrentNodeValue());
                    }
                });
            }
            console.log("CACHE INITIAL DATA: ", audioCacheData);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [userId, audioCacheData]);

    const fetchNewTrackData = useCallback(async () => {
        if (!userId) return null;
        if (hasFetchedInitialData) {
            try {
                const response = await fetch(`/api/audius?userId=${userId}&stream=true`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                if (!response.ok) throw new Error("Error fetching audio data");
                const newAudioData: TrackData[] = await response.json();
                const currentTrack = _track;

                console.log("CURRENT TRACK: ", currentTrack);
                const uniqueTracks = newAudioData.filter((uniqueTrack) => !audioCacheData.get(uniqueTrack.id));
                if (uniqueTracks.length > 0) {
                    console.log("UNIQUE FETCHED TRACKS: ", uniqueTracks);
                    uniqueTracks.forEach((track) => {
                        audioCacheData.put(track.id, track);
                        audioCacheData.setCurrentNode(track.id);
                        setTrack(track.track);
                        setAudioStream(track.streamLink);
                    });
                    console.log("CURRENT TRACK 2: ", currentTrack);
                    console.log("CACHE TRACK 2: ", audioCacheData.getCurrentNodeValue()?.track);
                } else {
                    const leastRecentlyUsedTrack = audioCacheData.getTailNode();
                    if (leastRecentlyUsedTrack) {
                        audioCacheData.setCurrentNode(leastRecentlyUsedTrack.key);
                        setTrack(leastRecentlyUsedTrack.track);
                        setAudioStream(leastRecentlyUsedTrack.streamLink);
                    }
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
            return audioCacheData.getCurrentNodeValue();
        }
        return;
    }, [userId, audioCacheData, _track]);

    useEffect(() => {
        if (!userId) return;
        fetchInitialAudioData();
    }, [userId, fetchInitialAudioData]);

    useEffect(() => {
        if (!audioRef || audioStream) return;
    }, [audioRef, audioStream, fetchNewTrackData]);

    // Set the audio source when audioStream changes
    useEffect(() => {
        if (!audioStream) return;
        audioRef.current = new Audio(audioStream);
        audioRef.current.crossOrigin = "anonymous";
        if (audioStream && audioRef.current) {
            audioRef.current.src = audioStream;
        }
        console.log("NEW AUDIO STREAM: ", audioStream);
    }, [audioStream]);

    // ANALYZE AUDIO
    const createAudioContext = useCallback(() => {
        if (!audioRef.current) return;

        try {
            const AudioContextClass = AudioContext || (window as any).webkitAudioContext;
            audioContextRef.current = new AudioContextClass();
            const src = audioContextRef.current.createMediaElementSource(audioRef.current);
            /**
             * AnalyserNode
             *
             * https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
             */
            const analyserNode = audioContextRef.current.createAnalyser();
            /**
             * smoothingTimeConstant
             *
             * https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/smoothingTimeConstant
             */
            analyserNode.smoothingTimeConstant = 0.55;
            src.connect(analyserNode);
            analyserNode.connect(audioContextRef.current.destination);
            analyserNode.fftSize = 512;

            setAnalyser(analyserNode);
            console.log("AudioContext created:", audioContextRef.current);
            console.log("AudioRef: ", audioRef.current);
            console.log("AnalyserNode created:", analyserNode);
        } catch (e) {
            console.error("Error creating AudioContext", e);
        }
    }, [audioRef]);

    // TOGGLE AUDIO

    const toggleAudio = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onAudioEnd = async () => {
            setAudioIsPlaying(false);
            if (audioContextRef.current) {
                await audioContextRef.current.suspend();
            }
        };
        audio.addEventListener("ended", onAudioEnd);

        (async () => {
            try {
                // Check if a new track has been selected
                if (audioStream && audio.src !== audioStream) {
                    audio.src = audioStream; // Set new source
                    if (!audioContextRef.current) {
                        createAudioContext();
                    }
                }
                const isPlaying = audio.paused || audio.ended;
                if (isPlaying) {
                    if (!audioContextRef.current) {
                        createAudioContext();
                    }
                    setAudioIsPlaying(isPlaying);
                    try {
                        await audio.play();
                        if (audioContextRef.current) {
                            await audioContextRef.current.resume();
                        }
                        console.log("PLAYING STATE: ", audioContextRef.current?.state);
                    } catch (error) {
                        console.error("Error playing audio", error);
                        if (audioContextRef.current && audioContextRef.current.state === "suspended") {
                            await audioContextRef.current.resume();
                            await audio.play();
                        }
                    }
                } else {
                    setAudioIsPlaying(isPlaying);
                    audio.pause();
                    if (audioContextRef.current) {
                        await audioContextRef.current.suspend();
                    }
                    console.log("PLAYING STATE: ", audioContextRef.current?.state);
                }
            } catch (e) {
                console.error("Error toggling audio", e);
            }
        })();

        return () => {
            audio.removeEventListener("ended", onAudioEnd);
        };
    }, [audioStream, createAudioContext]);

    // const autoplayAudio = useCallback(() => {
    //     if (!audioStream) return;
    //     audioRef.current = new Audio(audioStream);
    //     audioRef.current.crossOrigin = "anonymous";
    //     if (audioStream && audioRef.current) {
    //         audioRef.current.src = audioStream;
    //     }
    //     if (!audioContextRef.current) {
    //         createAudioContext();
    //     }
    //     if (audioIsPlaying) {
    //         audioContextRef.current?.suspend();
    //         setAudioIsPlaying(false);
    //     }
    //     if (!audioIsPlaying && audioContextRef.current?.state === "suspended") {
    //         toggleAudio();
    //     }

    const autoplayAudio = useCallback(
        (currentNode: LRUCacheProps | null) => {
            if (audioRef.current) {
                if (audioIsPlaying) {
                    audioRef.current.pause();
                    audioContextRef.current?.suspend();
                }
                if (currentNode) {
                    audioCacheData.moveToTail(currentNode.key);
                }
                console.log("PAUSED AUDIOREF NOW SRC = ", audioRef.current.src);
                audioRef.current.src = "";
                setAudioIsPlaying(false);
            }
            // Create or update the AudioContext
            if (!audioContextRef.current) {
                createAudioContext();
            }
            console.log("CURRENT NODE: ", currentNode);
            audioRef.current = new Audio(currentNode?.streamLink);
            console.log("PAUSED AUDIOREF NOW SRC AFTER = ", audioRef.current.src);
            toggleAudio();
        },
        [createAudioContext, toggleAudio, audioIsPlaying, audioCacheData]
    );

    // NEXT AUDIO
    const nextAudio = useCallback(() => {
        console.log("NEXT AUDIO");
        console.log("hasFetchedInitialData: ", hasFetchedInitialData.current);

        (async () => {
            const currentNode = audioCacheData.getCurrentNodeValue();
            const currentNodeKey = String(currentNode?.key);
            const nextNode = audioCacheData.getNextNode(currentNodeKey);

            if (nextNode) {
                if (currentNode && audioCacheData.getPreviousNode(currentNodeKey)) {
                    audioCacheData.moveToTail(currentNodeKey);
                }
                setTrack(nextNode.track);
                setAudioStream(nextNode.streamLink);
                if (!audioRef.current) return;
                audioRef.current.src = nextNode.streamLink;
                createAudioContext();
                audioCacheData.setCurrentNode(nextNode.key);
                // autoplayAudio(currentNode);
            } else {
                const newTrack = await fetchNewTrackData();
                console.log("NEW TRACK FETCH: ", newTrack);
                if (newTrack) {
                    setTrack(newTrack.track);
                    setAudioStream(newTrack.streamLink);
                    if (!audioRef.current) return;
                    audioRef.current.src = newTrack.streamLink;
                    createAudioContext();
                    audioCacheData.setCurrentNode(newTrack.key);
                    // autoplayAudio(newTrack);
                }
            }
        })();
    }, [audioCacheData, fetchNewTrackData, hasFetchedInitialData, autoplayAudio, createAudioContext]);
    // PREVIOUS AUDIO
    const previousAudio = useCallback(() => {
        (async () => {
            toggleAudio();
        })();
    }, [toggleAudio]);

    return { analyser: analyser, toggleAudio, audioIsPlaying, nextAudio, previousAudio, audioStream };
}
