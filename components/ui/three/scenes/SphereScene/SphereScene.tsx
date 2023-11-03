import { ReactElement, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron } from "@react-three/drei";
import { useAudioContext } from "@/components/context/audio/AudioContext";
import { getAVG, getMAX, getSphere, regulate } from "@/lib/audio";
import { Group, IcosahedronGeometry, Mesh, MeshLambertMaterial } from "three";
import { gradientMaterial } from "../../models";

export const SphereScene = (): ReactElement => {
    const groupRef = useRef<Group>(null);
    const sphereRef = useRef<Mesh | null>(null);
    const { analyser, audioIsPlaying } = useAudioContext();

    useFrame(() => {
        if (analyser && sphereRef.current) {
            const frequencyData = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(frequencyData);

            if (frequencyData.some((value) => value > 0)) {
                const highLimit = frequencyData.length * 0.05;
                const lowerFrequencies = frequencyData.slice(0, highLimit);
                const upperFrequencies = frequencyData.slice(highLimit);
                const maxLowerFrequency = getMAX(lowerFrequencies);
                const avgUpperFrequency = getAVG(upperFrequencies);
                const normalizedMaxLowerFrequency = maxLowerFrequency / lowerFrequencies.length;
                const normalizedAvgUpperFrequency = avgUpperFrequency / upperFrequencies.length;

                sphereRef.current.rotation.x += 0.0001;
                sphereRef.current.rotation.y += 0.0005;
                sphereRef.current.rotation.z += 0.0008;
                getSphere(
                    sphereRef.current,
                    regulate(Math.pow(normalizedMaxLowerFrequency, 0.2), 0, 1, -1, 6),
                    regulate(normalizedAvgUpperFrequency, 0, 8, 0, 4)
                );
            }
        }
    });

    useEffect(() => {
        if (analyser) {
            const icosahedronGeometry = new IcosahedronGeometry(10, 4);
            const lambertMaterial = new MeshLambertMaterial({
                color: 0xfafafa,
                wireframe: false,
            });
            const shaderMaterial = gradientMaterial();

            const shape = new Mesh(
                icosahedronGeometry,
                lambertMaterial
                // shaderMaterial
            );
            shape.position.set(0, 0, 0);
            sphereRef.current = shape;
            if (groupRef.current) {
                groupRef.current.add(shape);
            }
        } else {
            console.error("Analyser is null");
        }
    }, [audioIsPlaying, analyser]);

    return (
        <>
            <ambientLight
                intensity={0.5}
                color="#14ff00"
                // color={0x556a7b}
                // color={0xcccccc}
            />
            <spotLight
                position={[-10, 40, 20]}
                angle={0.3}
                intensity={0.9}
                // castShadow
                color="#ff0000"
                // color={0x556a7b}
                // color={0xffe6fc}
            />
            <directionalLight
                color="#ffc700"
                // color={0xe4dad1}
                // color={0xb3bfd8}
                position={[0, 50, 100]}
                // castShadow
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
            />
            <group ref={groupRef}>
                <Icosahedron ref={sphereRef} args={[10, 4]}>
                    <meshLambertMaterial attach="material" />
                </Icosahedron>
            </group>
        </>
    );
};
