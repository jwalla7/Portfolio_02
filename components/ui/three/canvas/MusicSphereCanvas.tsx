"use client";

import { ReactElement } from "react";
import { Canvas } from "@react-three/fiber";
import { SphereCamera } from "@/components/ui/three/cameras/SphereCamera/SphereCamera";

export interface MusicSphereCanvasProps {
    camera: {
        fov: number;
        position: [number, number, number];
        zoom: number;
    };
}

export function MusicSphereCanvas({ camera }: MusicSphereCanvasProps): ReactElement {
    return (
        <Canvas camera={camera}>
            <SphereCamera />
        </Canvas>
    );
}
