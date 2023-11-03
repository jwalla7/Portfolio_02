/**
 * Audio Utils
 *
 * @description
 * Provides a functions that can manipulate a 3D mesh based on audio frequency data.
 */

import { createNoise3D } from "simplex-noise";
import { BufferGeometry, Mesh, Vector3 } from "three";

export function getSphere(mesh: Mesh<BufferGeometry>, bassFr: number, treFr: number): void {
    const positionAttribute = mesh.geometry.getAttribute("position");
    if (!positionAttribute || !(positionAttribute.array instanceof Float32Array)) {
        console.error("Position attribute not found or incorrect type in the geometry.");
    }

    const positionsArray = positionAttribute.array;
    const noise = createNoise3D();
    const amp = 5;
    const time = window.performance.now();
    const rf = 0.001;

    for (let i = 0; i < positionsArray.length; i += 3) {
        const vertices = new Vector3(positionsArray[i], positionsArray[i + 1], positionsArray[i + 2]);
        vertices.normalize();
        const noiseAction = noise(vertices.x + time * rf * 5, vertices.y + time * rf * 8, vertices.z + time * rf * 13);
        const intensity = bassFr * 1.05 + noiseAction * amp * (treFr / 2);
        vertices.multiplyScalar(intensity);
        positionsArray[i] = vertices.x;
        positionsArray[i + 1] = vertices.y;
        positionsArray[i + 2] = vertices.z;
    }

    positionAttribute.needsUpdate = true;
    positionAttribute.normalized = true;
    mesh.geometry.computeVertexNormals();
}

export const getFraction = (val: number, minVal: number, maxVal: number): number => (val - minVal) / (maxVal - minVal);

export const regulate = (val: number, minVal: number, maxVal: number, outputMin: number, outputMax: number): number =>
    outputMin + getFraction(val, minVal, maxVal) * (outputMax - outputMin);

export const getAVG = (arr: Uint8Array): number => arr.reduce((sum, b) => sum + b, 0) / arr.length;

export const getMAX = (arr: Uint8Array): number => arr.reduce((a, b) => Math.max(a, b));
