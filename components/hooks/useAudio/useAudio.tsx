/**
 * @description
 * Provides an easy way to control audio playback.
 *
 * It creates an AudioContext, connecting it to an HTMLAudioElement.
 *
 * It controls the audio playback, so that this logic can be reused across different components in the application.
 */

import { useState, useCallback, useRef, useEffect } from "react";
import { Track } from "@audius/sdk/dist/api/Track";
// import { useQuery } from "@tanstack/react-query";
import { useAudioProps } from "./useAudioProps";
import { useQuery } from "@tanstack/react-query";

export function useAudio(trackId?: string, userId?: string): useAudioProps {
    // const audioSrc = "/audio/smpl0002.mp3";
    const [track, setTrack] = useState<Track | Track[] | null>(null);
    // const [audioStream, setAudioStream] = useState<string | undefined>(trackId || userId);
    const [audioStream, setAudioStream] = useState<string | undefined>(undefined);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [audioIsPlaying, setAudioIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // FETCH AUDIO NEEDS TO BE REFACTORED WITH REACT QUERY
    // Function to fetch audio data
    const fetchAudioData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/audius?trackId=${trackId}&userId=${userId}&stream=true`);
            if (!response.ok) throw new Error("Error fetching audio data");
            const data = await response.json();
            setTrack(data.track || data.userTracks);
            setAudioStream(data.streamTrackUrl || data.track?.streamTrackUrl);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Effect to fetch audio data when trackId or userId changes
    useEffect(() => {
        if (trackId || userId) {
            fetchAudioData();
        }
    }, [trackId, userId]);

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
        async () => {
            try {
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
        };
    }, [createAudioContext]);
    // NEXT AUDIO
    const nextAudio = useCallback(() => {
        async () => {
            return null;
        };
    }, []);
    // PREVIOUS AUDIO
    const previousAudio = useCallback(() => {
        async () => {
            return null;
        };
    }, []);

    // useEffect(() => {
    //     const fetchAudioUrl = (async () => {
    //         try {
    //             const response = await fetch(`/api/audius?trackId=${trackId}&stream=true`);
    //             const data = await response.json();
    //             setTrack(data);
    //             setAudioStream(data.streamTrackUrl);
    //         } catch (error) {
    //             console.error("Error fetching audio", error);
    //         }
    //     })
    // }, [trackId, userId]);

    // useEffect(() => {
    //     if (audioStream) {
    //         audioRef.current = new Audio(audioStream);
    //     }
    // }, [audioStream]);

    // useEffect(() => {
    //     const fetchAudioUrl = (async () => {
    //         try {
    //             const response = await fetch(`/api/audius?trackId=${trackId}&stream=true`);
    //             if (!response.ok) throw new Error("Error fetching audio");

    //             const data = await response.json();
    //             setTrack(data);
    //             setAudioStream(data.streamTrackUrl);
    //         } catch (error) {
    //             console.error("Error fetching audio", error);
    //         }
    //     })
    //     if (audioStream) {
    //         // if (audioRef.current && audioContextRef.current) return;
    //         audioRef.current = new Audio(audioStream);
    //         audioRef.current.addEventListener("ended", () => setAudioIsPlaying(false));
    //     }
    //     fetchAudioUrl();
    //     return () => {
    //         if (audioRef.current) {
    //             audioRef.current.pause();
    //             audioRef.current.removeEventListener("ended", () => setAudioIsPlaying(false));
    //         }
    //     };
    // }, [audioStream, trackId]);
    return { analyser: analyser, toggleAudio, audioIsPlaying, nextAudio, previousAudio, audioStream };
}
