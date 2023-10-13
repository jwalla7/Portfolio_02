import { useFrame } from "@react-three/fiber";
import { ReactElement, useEffect, useRef, useState } from "react";
import { SphereModel } from "../../models/SphereModel/SphereModel";
import { avg } from "@/lib/utils";
import * as THREE from "three";
import { setSphereMorph } from "../..";
import { SphereAudioRenderProps } from "../../renderers/SphereAudioRender/sphereAudioRenderProps";

export const SphereScene = ({ audioSrc }: SphereAudioRenderProps): ReactElement => {
    // const sphereRef = useRef<THREE.Group | null>(null);
    // useFrame(() => {
    //     const { current: group } = sphereRef;
    //     if (group) {
    //         group.rotation.x += 0.01;
    //         group.rotation.y += 0.01;
    //     }
    // });

    const groupRef = useRef<THREE.Group | null>(null);
    const sphereRef = useRef<THREE.Mesh>();
    // const { camera, renderer } = useThree();
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
            const overallAvg = avg(frequencyData);
            const lowerAvg = avg(lowerHalfArray);
            const upperAvg = avg(upperHalfArray);

            setSphereMorph(sphereRef.current, lowerAvg, upperAvg);

            groupRef.current.rotation.y += 0.005;
        }
    });

    // if (error) {
    // return <className="error-message">{error}</className=>;
    // }

    return (
        <>
            <ambientLight intensity={0.9} color="#ffffff" />
            <spotLight intensity={0.9} position={[-10, 20, 40]} castShadow={true} color="#ffffff" />
            <directionalLight
                color="#ffffff"
                position={[0, 50, 100]}
                castShadow
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
            />
            <SphereModel ref={groupRef} />
        </>
    );
};
