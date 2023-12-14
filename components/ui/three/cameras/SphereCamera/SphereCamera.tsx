import { Canvas } from "@react-three/fiber";
import { SphereScene } from "../../scenes/SphereScene/SphereScene";
import { ReactElement } from "react";
import { OrbitControls } from "@react-three/drei";

export const SphereCamera = (): ReactElement => {
    return (
        <Canvas camera={{ fov: 65, position: [10, 0, 10], zoom: -0.9 }}>
            <SphereScene />
            <OrbitControls maxDistance={23.5} minDistance={23.5} autoRotate={true} autoRotateSpeed={2.5} />
        </Canvas>
    );
};
