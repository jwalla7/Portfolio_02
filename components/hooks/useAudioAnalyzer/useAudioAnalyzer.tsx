import { useState, useEffect } from "react";

interface AudioAnalyzerData {
    analyser: AnalyserNode | null;
    error: string | null;
}

const useAudioAnalyzer = (audioSrc: string): AudioAnalyzerData => {
    const [error, setError] = useState<string | null>(null);
    const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

    useEffect(() => {
        if (audioSrc) {
            try {
                const audio = new Audio(audioSrc);
                const context = new AudioContext();
                const src = context.createMediaElementSource(audio);
                const analyserNode = context.createAnalyser();
                src.connect(analyserNode);
                analyserNode.connect(context.destination);
                analyserNode.fftSize = 512;

                setAnalyser(analyserNode);

                // Start playing the audio
                audio.play();
            } catch (e: any) {
                setError(`Error with AudioContext: ${e.message}`);
            }
        }
    }, [audioSrc]);

    return { analyser, error };
};

export default useAudioAnalyzer;
