import { MutableRefObject, ReactNode, RefObject } from "react";
import { AnimationClip, Object3D, Object3DEventMap } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export interface SphereModelProps {
    children?: ReactNode;
    groupRef?: Object3D<Object3DEventMap> | MutableRefObject<Object3D<Object3DEventMap> | null | undefined> | undefined;
    sphereRefPass?: RefObject<THREE.Mesh>;
}

export type GLTFResult = GLTF & {
    nodes: {
        [key: string]: any;
    };
    materials: {
        [key: string]: any;
    };
};

export type GLTFActions = {
    Animation: AnimationClip;
};
export type ActionName = "Animation";
