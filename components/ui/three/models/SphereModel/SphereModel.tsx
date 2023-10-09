/**
 * @description
 * Sphere Glb Model
 * Author: alexey.roudenko (https://sketchfab.com/alexey.roudenko)
 * License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
 * Source: https://sketchfab.com/3d-models/sphere-morph-ae4088fa0a8646458cdae599927598aa
 * Title: Sphere Morph
 */

import { ReactElement, forwardRef, useRef } from "react";
import { MeshWobbleMaterial, useAnimations, useGLTF } from "@react-three/drei";
import { GLTFResult, SphereModelProps } from "./sphereModelProps";
import { Texture, TextureLoader } from "three";

export const SphereModel = forwardRef<THREE.Group, SphereModelProps>(({ ...props }, ref): ReactElement => {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials, animations } = useGLTF("/glb/sphere_morph.glb") as GLTFResult;
    const { actions } = useAnimations(nodes["0"].animations, group);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="sphere_scene">
                <group name="sphere_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="c5461c66d6004f70a655fd39bb644597fbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Sphere">
                                    <mesh
                                        name="0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes["0"].geometry}
                                        material={materials.M_Sphere}
                                        morphTargetDictionary={nodes["0"].morphTargetDictionary}
                                        morphTargetInfluences={nodes["0"].morphTargetInfluences}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
});

useGLTF.preload("/glb/sphere_morph.glb");

SphereModel.displayName = "SphereModel";
