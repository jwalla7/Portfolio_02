/**
 * @description
 * The SphereModel component renders the 3D model of a sphere using the mesh and material objects defined in the GLB file.
 *
 * It also applies a gradient material to the sphere using the ShaderMaterial class from the three library.
 *
 * @credits
 * Author: alexey.roudenko (https://sketchfab.com/alexey.roudenko)
 * License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
 * Source: https://sketchfab.com/3d-models/sphere-morph-ae4088fa0a8646458cdae599927598aa
 * Title: Sphere Morph
 */

import { ReactElement, forwardRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFResult, SphereModelProps } from "./sphereModelProps";
import { MeshBasicMaterial, ShaderMaterial } from "three";

export const SphereModel = forwardRef<THREE.Group, SphereModelProps>(({ sphereRefPass, ...props }, ref): ReactElement => {
    const { nodes, materials } = useGLTF("/glb/sphere_morph.glb") as GLTFResult;
    const redMaterial = useMemo(() => new MeshBasicMaterial({ color: "#939892" }), []);
    const gradientMaterial = useMemo(() => {
        return new ShaderMaterial({
            vertexShader: `
                varying vec2 vUv;
                
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;

                void main() {
                    //UV Y coordinate
                    vec3 colorStart = vec3(129.0/255.0, 127.0/255.0, 162.0/255.0);
                    vec3 colorEnd = vec3(70.0/255.0, 88.0/255.0, 123.0/255.0);

                    vec3 gradientColor = mix(colorStart, colorEnd, vUv.y);

                    gl_FragColor = vec4(gradientColor, 1.0);
                }
            `,
        });
    }, []);
    return (
        <group name="sphere_scene">
            <group name="sphere_model" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="c5461c66d6004f70a655fd39bb644597fbx" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_2">
                        <group name="RootNode">
                            <group name="Sphere">
                                <mesh
                                    ref={sphereRefPass ?? null}
                                    name="0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes["0"].geometry}
                                    material={materials.M_Sphere}
                                    // material={redMaterial}
                                    // material={gradientMaterial}
                                    morphTargetDictionary={nodes["0"].morphTargetDictionary}
                                    morphTargetInfluences={nodes["0"].morphTargetInfluences}
                                />
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
