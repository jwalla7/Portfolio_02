import { Canvas } from "@react-three/fiber";
import { SphereScene } from "../../scenes/SphereScene/SphereScene";
import { ReactElement } from "react";
import { OrbitControls } from "@react-three/drei";

export const SphereCamera = ({ audioSrc }: any): ReactElement => {
    return (
        <Canvas camera={{ fov: 50, position: [0, 0, 10] }}>
            <SphereScene audioSrc={audioSrc} />
            <OrbitControls minDistance={234} maxDistance={234} autoRotate={true} autoRotateSpeed={10} />
        </Canvas>
    );
};
