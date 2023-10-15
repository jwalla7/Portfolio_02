import { ReactElement, useRef } from "react";
import { SphereAudioRenderProps } from "../../renderers/SphereAudioRender/sphereAudioRenderProps";
import useAudioAnalyzer from "@/components/hooks/useAudioAnalyzer/useAudioAnalyzer";
import { avg } from "@/lib/utils";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";
import { setSphereMorph } from "../..";
import { SphereModel } from "../../models/SphereModel/SphereModel";

export const SphereScene = ({ audioSrc }: SphereAudioRenderProps): ReactElement => {
    const groupRef = useRef<Group | null>(null);
    const sphereRef = useRef<Mesh>(null);
    const { analyser, error } = useAudioAnalyzer(audioSrc);

    useFrame(() => {
        if (analyser && sphereRef.current) {
            const frequencyData = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(frequencyData);
            if (sphereRef.current) {
                const lowerHalfArray = frequencyData.slice(0, frequencyData.length / 2);
                const upperHalfArray = frequencyData.slice(frequencyData.length / 2, frequencyData.length);

                const lowerAvg = avg(lowerHalfArray);
                const upperAvg = avg(upperHalfArray);

                console.log("Lower Average:", lowerAvg);
                console.log("Upper Average:", upperAvg);

                setSphereMorph(sphereRef.current, lowerAvg, upperAvg);
            }

            if (groupRef.current) {
                groupRef.current.rotation.y += 0.005;
            }
        }
    });

    if (error) {
        console.log(error);
    }

    return (
        <>
            <ambientLight intensity={0.5} color="#ffffff" />
            <spotLight position={[-10, 40, 20]} angle={0.3} intensity={0.9} castShadow={true} color="#ffffff" />
            <directionalLight
                color="#ffffff"
                position={[0, 50, 100]}
                castShadow
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
            />
            <group ref={groupRef} dispose={null}>
                <SphereModel sphereRefPass={sphereRef} />
            </group>
        </>
    );
};
