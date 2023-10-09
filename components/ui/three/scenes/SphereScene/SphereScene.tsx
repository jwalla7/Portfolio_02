import { useFrame } from "@react-three/fiber";
import { ReactElement, useRef } from "react";
import { SphereModel } from "../../models/SphereModel/SphereModel";

export const SphereScene = (): ReactElement => {
    const sphereRef = useRef<THREE.Group | null>(null);
    useFrame(() => {
        const { current: group } = sphereRef;
        if (group) {
            group.rotation.x += 0.01;
            group.rotation.y += 0.01;
        }
    });

    return (
        <>
            <ambientLight intensity={0.9} color="#191919" />
            <spotLight intensity={0.9} position={[-10, 20, 40]} castShadow={true} color="#fafafa" />
            <directionalLight
                color="#fafafa"
                position={[0, 50, 100]}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            <SphereModel ref={sphereRef} />
        </>
    );
};
