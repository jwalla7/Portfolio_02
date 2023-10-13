import { useFrame } from "@react-three/fiber";
import { ReactElement, useEffect, useRef, useState } from "react";
import { SphereAudioRenderProps } from "./sphereAudioRenderProps";
import THREE from "three";
import { avg } from "@/lib/utils";
import { setSphereMorph } from "../..";
import { SphereScene } from "../../scenes/SphereScene/SphereScene";

export const SphereAudioRender = ({ audioSrc }: SphereAudioRenderProps): ReactElement => {
    const groupRef = useRef<THREE.Group | null>(null);
    const sphereRef = useRef<THREE.Mesh>();
    const analyserRef = useRef<THREE.AudioAnalyser>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (audioSrc) {
            try {
                const audio = new Audio(audioSrc);
                const context = new (window.AudioContext || (window as any).webkitAudioContext)();
                const src = context.createMediaElementSource(audio);
                const analyser = context.createAnalyser();
                src.connect(analyser);
                analyser.connect(context.destination);
                analyser.fftSize = 512;

                const listener = new THREE.AudioListener();
                const threeAudio = new THREE.Audio(listener);
                threeAudio.setMediaElementSource(audio); // Link the HTML audio element with the THREE.Audio object
                analyserRef.current = new THREE.AudioAnalyser(threeAudio, 32);

                // Start playing the audio
                audio.play();
            } catch (e: any) {
                setError(`Error with AudioContext: ${e.message}`);
            }
        }
    }, [audioSrc]);

    useFrame(() => {
        if (analyserRef.current && groupRef.current && sphereRef.current) {
            const frequencyData = analyserRef.current.getFrequencyData();
            const lowerHalfArray = frequencyData.slice(0, frequencyData.length / 2);
            const upperHalfArray = frequencyData.slice(frequencyData.length / 2, frequencyData.length);
            const lowerAvg = avg(lowerHalfArray);
            const upperAvg = avg(upperHalfArray);

            setSphereMorph(sphereRef.current, lowerAvg, upperAvg);

            groupRef.current.rotation.y += 0.005;
        }
    });

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[-10, 40, 20]} angle={0.3} />
            <directionalLight
                color="#ffffff"
                position={[0, 50, 100]}
                castShadow
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
            />
            <group ref={groupRef}>
                {/* Here you will place your visual components, like planes and icosahedrons, and set their refs to the ones defined above. */}
            </group>
        </>
    );
};
