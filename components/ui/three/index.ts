import { createNoise3D } from "simplex-noise";
import { Mesh, Material, Vector3, BufferGeometry, Box3, BufferAttribute, MathUtils } from "three";

// Audio Utils
export function setSphereMorph(mesh: Mesh, bassFr: number, treFr: number) {
    const noise = createNoise3D();
    const geometry = mesh.geometry as BufferGeometry;
    const positionAttribute = geometry.attributes.position;

    if (!(positionAttribute instanceof BufferAttribute)) {
        console.error("Position attribute is not a BufferAttribute or is missing from the geometry");
        return;
    }

    if (!(mesh.geometry instanceof BufferGeometry)) {
        console.error("Mesh geometry is not a BufferGeometry.");
        return;
    }

    const positionsArray = positionAttribute.array as Float32Array;

    // Calculate the offset using bounding box
    const boundingBox = new Box3().setFromBufferAttribute(positionAttribute);
    const offset = boundingBox.getCenter(new Vector3()).length();

    const amp = 4;
    const time: number = window.performance.now();
    const rf = 0.00001;

    // Define min and max distances for clamping
    const minDistance = offset - 5;
    const maxDistance = offset + 5;

    for (let i = 0; i < positionsArray.length; i += 3) {
        const vertex = new Vector3(positionsArray[i], positionsArray[i + 1], positionsArray[i + 2]);
        vertex.normalize();

        const noiseValue = noise(vertex.x + time * rf, vertex.y + time * rf, vertex.z + time * rf);
        // console.log("bassFr: ", bassFr, "treFr: ", treFr, "nosieVal: ", noiseValue);
        const distance = MathUtils.clamp(offset + bassFr + noiseValue * amp * treFr * 2, minDistance, maxDistance);

        vertex.multiplyScalar(distance);

        positionsArray[i] = vertex.x;
        positionsArray[i + 1] = vertex.y;
        positionsArray[i + 2] = vertex.z;
    }

    positionAttribute.needsUpdate = true;
    geometry.computeVertexNormals();

    // Only need one check for Material
    if (mesh.material instanceof Material) {
        mesh.material.needsUpdate = true;
    } else {
        console.error("Mesh material is not a Material.");
    }
}

export function makeRoughBall(mesh: Mesh<BufferGeometry>, bassFr: number, treFr: number): void {
    const positionAttribute = mesh.geometry.getAttribute("position");
    if (!positionAttribute || !(positionAttribute.array instanceof Float32Array)) {
        throw new Error("Position attribute not found or incorrect type in the geometry.");
    }

    const positionsArray = positionAttribute.array;
    const noise = createNoise3D();
    const amp = 7;
    const time = window.performance.now();
    const rf = 0.00001;

    for (let i = 0; i < positionsArray.length; i += 3) {
        const vertex = new Vector3(positionsArray[i], positionsArray[i + 1], positionsArray[i + 2]);
        vertex.normalize();
        const noiseFactor = noise(vertex.x + time * rf * 7, vertex.y + time * rf * 8, vertex.z + time * rf * 9);
        const distance = bassFr + noiseFactor * amp * treFr;
        vertex.multiplyScalar(distance);
        positionsArray[i] = vertex.x;
        positionsArray[i + 1] = vertex.y;
        positionsArray[i + 2] = vertex.z;
    }

    positionAttribute.needsUpdate = true;
    positionAttribute.normalized = true;
    mesh.geometry.computeVertexNormals();
}
