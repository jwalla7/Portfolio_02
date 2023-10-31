import { Canvas } from "@react-three/fiber";
import { SphereScene } from "../../scenes/SphereScene/SphereScene";
import { ReactElement } from "react";
import { OrbitControls } from "@react-three/drei";

export const SphereCamera = (): ReactElement => {
    return (
        <Canvas camera={{ fov: 50, position: [0, 0, 10] }}>
            <SphereScene />
            <OrbitControls
                // minDistance={234}
                // maxDistance={234}
                minDistance={23.5}
                maxDistance={23.5}
                autoRotate={true}
                autoRotateSpeed={10}
            />
        </Canvas>
    );
};
