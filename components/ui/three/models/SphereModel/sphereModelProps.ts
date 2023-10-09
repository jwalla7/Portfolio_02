import { ReactNode } from "react";
import { AnimationClip } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export interface SphereModelProps {
    children?: ReactNode;
}

export type GLTFResult = GLTF & {
    nodes: {
        ["0"]: THREE.Mesh;
    };
    materials: {
        M_Sphere: THREE.MeshStandardMaterial;
    };
};

export type GLTFActions = {
    Animation: AnimationClip;
};
export type ActionName = "Animation";
// export type GLTFActions = Record<ActionName, THREE.AnimationClip[]>;
