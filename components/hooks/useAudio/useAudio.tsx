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
            const analyserNode = audioContextRef.current.createAnalyser();
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
    // console.log("AUDIOanalyser: ", analyser)

    // useEffect(() => {
    //     if (audioRef.current && audioContextRef.current) return;

    //     audioRef.current = new Audio(audioSrc);
    //     audioRef.current.addEventListener("ended", () => setAudioIsPlaying(false));

    //     return () => {
    //         if (audioRef.current) {
    //             audioRef.current.pause();
    //             audioRef.current.removeEventListener("ended", () => setAudioIsPlaying(false));
    //         }
    //     };
    // }, [createAudioContext]);

    // const toggleAudio = useCallback(async () => {
    //     const audio = audioRef.current;
    //     if (!audio) return;

    //     try {
    //         const isPlaying = audio.paused || audio.ended;
    //         if (isPlaying) {
    //             if (!audioContextRef.current) {
    //                 createAudioContext();
    //             }
    //             setAudioIsPlaying(isPlaying);
    //             try {
    //                 await audio.play();
    //                 if (audioContextRef.current) {
    //                     await audioContextRef.current.resume();
    //                 }
    //             } catch (error) {
    //                 console.error("Error playing audio", error);
    //                 if (audioContextRef.current && audioContextRef.current.state === "suspended") {
    //                     await audioContextRef.current.resume();
    //                     await audio.play();
    //                     setAudioIsPlaying(isPlaying);
    //                 }
    //             }
    //         } else {
    //             setAudioIsPlaying(isPlaying);
    //             audio.pause();
    //             if (audioContextRef.current) {
    //                 await audioContextRef.current.suspend();
    //             }
    //         }

    //         // Log the audioContext state and isAudioPlaying state
    //         console.log("audioContextState: ", audioContextRef.current?.state);
    //         console.log("isAudioPlaying: ", audioIsPlaying);
    //     } catch (e) {
    //         console.error("Error toggling audio", e);
    //     }
    // }, [createAudioContext, audioIsPlaying]);

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
