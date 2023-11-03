/**
 * @description
 * Provides an easy way to control audio playback.
 *
 * It creates an AudioContext, connecting it to an HTMLAudioElement.
 *
 * It controls the audio playback, so that this logic can be reused across different components in the application.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { useAudioProps } from "./useAudioProps";

export function useAudio(): useAudioProps {
    const audioSrc = "/audio/smpl0002.mp3";
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [audioIsPlaying, setAudioIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);

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

    const toggleAudio = useCallback(async () => {
        const audio = audioRef.current;
        if (!audio) return;

        try {
            const isPlaying = audio.paused || audio.ended;
            console.log("Is audio playing?", isPlaying);
            console.log("Audio src:", audio.src);
            console.log("Audio volume:", audio.volume);
            console.log("Audio muted:", audio.muted);
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

            // Log the audioContext state and isAudioPlaying state
            console.log("audioContextState: ", audioContextRef.current?.state);
            console.log("isAudioPlaying: ", isPlaying);
        } catch (e) {
            console.error("Error toggling audio", e);
        }
    }, [createAudioContext]);

    useEffect(() => {
        if (audioRef.current && audioContextRef.current) return;

        audioRef.current = new Audio(audioSrc);
        audioRef.current.addEventListener("ended", () => setAudioIsPlaying(false));

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener("ended", () => setAudioIsPlaying(false));
            }
        };
    }, []);

    console.log("ReturnAnalyser: ", analyser);
    return { analyser: analyser, toggleAudio, audioIsPlaying };
}
