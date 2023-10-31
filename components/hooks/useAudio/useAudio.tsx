import { useState, useEffect, useCallback, useRef } from "react";
import { useAudioProps } from "./useAudioProps";

export function useAudio(): useAudioProps {
    const audioSrc = "/audio/smpl0002.mp3";
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
    const [audioIsPlaying, setAudioIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);

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

    const createAudioContext = useCallback(() => {
        if (audioContextRef.current || !audioRef.current) return;

        try {
            const AudioContextClass = AudioContext || (window as any).webkitAudioContext;
            audioContextRef.current = new AudioContextClass();
            const src = audioContextRef.current.createMediaElementSource(audioRef.current);
            const analyserNode = audioContextRef.current.createAnalyser();
            src.connect(analyserNode);
            analyserNode.connect(audioContextRef.current.destination);
            analyserNode.fftSize = 512;
            setAnalyser(analyserNode);
        } catch (e) {
            console.error("Error creating AudioContext", e);
        }
    }, []);

    const toggleAudio = useCallback(async () => {
        const audio = audioRef.current;
        if (!audio) return;

        try {
            const isPlaying = audio.paused || audio.ended;
            setAudioIsPlaying(isPlaying);
            if (isPlaying) {
                if (!audioContextRef.current) {
                    createAudioContext();
                }
                await audio.play();
                if (audioContextRef.current) {
                    await audioContextRef.current.resume();
                }
            } else {
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

    return { analyser, toggleAudio, audioIsPlaying };
}
