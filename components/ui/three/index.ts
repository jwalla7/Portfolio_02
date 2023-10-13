import { createNoise3D } from "simplex-noise";
import * as THREE from "three";

// Audio Utils
export function setSphereMorph(mesh: THREE.Mesh, bassFr: number, treFr: number) {
    const noise = createNoise3D();
    const geometry = mesh.geometry as THREE.BufferGeometry;
    const positionAttribute = geometry.getAttribute("position");

    if (!positionAttribute) {
        console.error("Position attribute is missing from the geometry");
        return;
    }

    const positionsArray = positionAttribute.array as Float32Array;

    const offset: number = (mesh.geometry as THREE.IcosahedronGeometry).parameters.radius;
    const amp = 7;
    const time: number = window.performance.now();
    const rf = 0.00001;

    for (let i = 0; i < positionsArray.length; i += 3) {
        const x = positionsArray[i];
        const y = positionsArray[i + 1];
        const z = positionsArray[i + 2];

        if (x !== undefined && y !== undefined && z !== undefined) {
            const length = Math.sqrt(x * x + y * y + z * z);
            const normalizedX = x / length;
            const normalizedY = y / length;
            const normalizedZ = z / length;

            const distance =
                offset +
                bassFr +
                noise(normalizedX + time * rf * 7, normalizedY + time * rf * 8, normalizedZ + time * rf * 9) * amp * treFr;

            positionsArray[i] = normalizedX * distance;
            positionsArray[i + 1] = normalizedY * distance;
            positionsArray[i + 2] = normalizedZ * distance;
        }
    }

    if (geometry.attributes.position !== undefined) {
        geometry.attributes.position.needsUpdate = true;
        geometry.computeVertexNormals();
    }

    if (mesh.material instanceof THREE.Material) {
        mesh.material.needsUpdate = true;
    }
}
