import { SphereScene } from "../../scenes/SphereScene/SphereScene";
import { ReactElement, useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useAudioVisualizerContext } from "@/components/context/audio/AudioVisualizerContext";

export const SphereCamera = (): ReactElement => {
    const { resetToggle, setResetToggle } = useAudioVisualizerContext();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const orbitControlsRef = useRef(null) as any;

    useEffect(() => {
        console.log("resetToggle", resetToggle);
        if (resetToggle) {
            orbitControlsRef.current?.reset();
        }
        setResetToggle(false);
    }, [resetToggle, setResetToggle]);

    return (
        <>
            <SphereScene />
            <OrbitControls maxDistance={23.5} minDistance={23.5} autoRotate={true} autoRotateSpeed={2.5} ref={orbitControlsRef} />
        </>
    );
};
