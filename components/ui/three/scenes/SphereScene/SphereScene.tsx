import { ReactElement, useEffect, useRef, useState } from "react";
import { avg, max, modulate } from "@/lib/utils";
import { useFrame } from "@react-three/fiber";
import { Group, IcosahedronGeometry, Mesh, MeshLambertMaterial } from "three";
import { makeRoughBall, setSphereMorph } from "../..";
import { useAudio } from "@/components/hooks/useAudio/useAudio";
import { Icosahedron } from "@react-three/drei";

export const SphereScene = (): ReactElement => {
    const groupRef = useRef<Group | null>(null);
    const sphereRef = useRef<Mesh | null>(null);
    const { analyser, error, audioIsPlaying } = useAudio();

    useFrame(() => {
        // if (sphereRef.current) console.log("sphereRef.current true?: ", sphereRef.current)
        // if (audioIsPlaying) console.log("audioIsPlaying true?: ", audioIsPlaying)
        if (analyser && sphereRef.current && audioIsPlaying) {
            const frequencyData = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(frequencyData);

            // console.log("frequencyData: ", frequencyData);

            // const halfLength = frequencyData.length / 2;
            // const lowerHalfArray = frequencyData.slice(0, halfLength);
            // const upperHalfArray = frequencyData.slice(halfLength);

            // const lowerMax = max(lowerHalfArray);
            // const upperAvg = avg(upperHalfArray);
            // const lowerMaxFr = lowerMax / lowerHalfArray.length;
            // const upperAvgFr = upperAvg / upperHalfArray.length;

            // sphereRef.current.rotation.x += 0.001;
            // sphereRef.current.rotation.y += 0.003;
            // sphereRef.current.rotation.z += 0.005;
            // makeRoughBall(sphereRef.current, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));

            if (frequencyData.some((value) => value !== 0)) {
                // Audio is not paused, process frequency data
                const halfLength = frequencyData.length / 2;
                const lowerHalfArray = frequencyData.slice(0, halfLength);
                const upperHalfArray = frequencyData.slice(halfLength);

                const lowerMax = max(lowerHalfArray);
                const upperAvg = avg(upperHalfArray);
                const lowerMaxFr = lowerMax / lowerHalfArray.length;
                const upperAvgFr = upperAvg / upperHalfArray.length;

                sphereRef.current.rotation.x += 0.001;
                sphereRef.current.rotation.y += 0.003;
                sphereRef.current.rotation.z += 0.005;
                makeRoughBall(sphereRef.current, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));
            } else {
                // Audio is paused, skip processing
            }
        }
    });

    useEffect(() => {
        const icosahedronGeometry = new IcosahedronGeometry(10, 4);
        const lambertMaterial = new MeshLambertMaterial({
            color: 0xfafafa,
            wireframe: false,
        });

        const ball = new Mesh(icosahedronGeometry, lambertMaterial);
        ball.position.set(0, 0, 0);
        sphereRef.current = ball;

        if (groupRef.current) {
            groupRef.current.add(ball);
        }
    }, []);

    if (error) {
        console.error(error);
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
            <group ref={groupRef}>
                <Icosahedron ref={sphereRef} args={[10, 4]}>
                    <meshLambertMaterial attach="material" color="black" wireframe />
                </Icosahedron>
            </group>
        </>
    );
};
