import { SphereScene } from "../../scenes/SphereScene/SphereScene";
import { ReactElement } from "react";
import { OrbitControls } from "@react-three/drei";

export const SphereCamera = (): ReactElement => {
    return (
        <>
            <SphereScene />
            <OrbitControls maxDistance={23.5} minDistance={23.5} autoRotate={true} autoRotateSpeed={2.5} />
        </>
    );
};
