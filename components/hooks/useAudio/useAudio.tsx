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
import { set } from "zod";
// import { useQuery } from "@tanstack/react-query";

export function useAudio(userId?: string): useAudioProps {
    const [track, setTrack] = useState<Track | Track[] | null>(null);
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

    // FETCH AUDIO NEEDS TO BE REFACTORED WITH REACT QUERY
    useEffect(() => {
        // if (!(trackId || userId)) return;
        if (!userId) return;
        const fetchAudioData = async () => {
            //Fetches initial audio data (3 tracks)
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
                hasFetchedInitialData.current = true;

                if (Array.isArray(cachedAudioData) && cachedAudioData.length > 0) {
                    cachedAudioData.forEach((trackData, index) => {
                        if (trackData.id) {
                            audioCacheData.put(trackData.id, trackData);
                        } else {
                            console.error("Invalid track data, missing id:", trackData);
                        }
                        if (index === 0) {
                            // Set the first track to start with
                            setTrack(trackData.track);
                            audioCacheData.setCurrentNode(trackData.id);
                            console.log("CURRENT NODE: ", audioCacheData.getCurrentNodeValue());
                            setAudioStream(trackData.streamLink);
                        }
                    });
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAudioData();
        console.log("AUDIO CACHE DATA: ", audioCacheData);
        console.log("CURRENT NODE: ", audioCacheData.getCurrentNodeValue());
        console.log("AUDIO CACHE DATA KEYS: ", audioCacheData.getAllKeys());
    }, [
        // trackId,
        audioCacheData,
        userId,
    ]);

    // Set the audio source when audioStream changes
    useEffect(() => {
        if (!audioStream) return;
        audioRef.current = new Audio(audioStream);
        audioRef.current.crossOrigin = "anonymous";
        if (audioStream && audioRef.current) {
            audioRef.current.src = audioStream;
        }
    }, [audioStream]);

    const fetchNewTrack = useCallback(async () => {
        if (!userId) return;
        if (hasFetchedInitialData.current) {
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
                newAudioData.forEach((track, index) => {
                    if (track) {
                        const trackId = track.id;
                        console.log("ALL KEYS: ", audioCacheData.getAllKeys());
                        if (!audioCacheData.getAllKeys().includes(trackId)) {
                            audioCacheData.put(trackId, track);
                            if (index === 1) {
                                audioCacheData.setCurrentNode(trackId);
                            }
                        } else {
                            console.log("TRACK ALREADY EXISTS IN CACHE");
                            fetchNewTrack();
                        }
                    } else {
                        console.error("Invalid track data, missing id:", track);
                    }
                });
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
            return audioCacheData.getCurrentNodeValue();
        }
        return;
    }, [userId, audioCacheData]);

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
            console.log("AnalyserNode created:", analyserNode);
        } catch (e) {
            console.error("Error creating AudioContext", e);
        }
    }, []);

    // TOGGLE AUDIO
    const toggleAudio = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        /**
         * IIFE
         *
         * Immediately invoked function expression (IIFE) allows you to use async/await within this scope while keeping the outer function synchronous.
         *
         * @see https://developer.mozilla.org/en-US/docs/Glossary/IIFE
         */
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
                }
            } catch (e) {
                console.error("Error toggling audio", e);
            }
        })();
    }, [audioStream, createAudioContext]);

    // NEXT AUDIO
    const nextAudio = useCallback(() => {
        console.log("NEXT AUDIO");
        (async () => {
            const currentNode = audioCacheData.getCurrentNodeValue();
            const currentNodeKey = String(currentNode?.key);
            const nextNode = audioCacheData.getNextNode(currentNodeKey);

            if (nextNode) {
                if (currentNode && audioCacheData.getPreviousNode(currentNodeKey)) {
                    audioCacheData.moveToTail(currentNodeKey);
                }
                // Set the next node as the current node
                setTrack(nextNode.track);
                setAudioStream(nextNode.streamLink);
            } else {
                const newTrack = await fetchNewTrack();
                console.log("NEW TRACK FETCH: ", newTrack);
                if (newTrack) {
                    setTrack(newTrack.track);
                    setAudioStream(newTrack.streamLink);
                }
            }
        })();
    }, [audioCacheData, fetchNewTrack]);
    // PREVIOUS AUDIO
    const previousAudio = useCallback(() => {
        (async () => {
            toggleAudio();
        })();
    }, [toggleAudio]);

    return { analyser: analyser, toggleAudio, audioIsPlaying, nextAudio, previousAudio, audioStream };
}
