import { ShaderMaterial } from "three";

export const gradientMaterial = () => {
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
                vec3 colorStart = vec3(249.0/255.0, 240.0/255.0, 246.0/255.0); // Light shade
                vec3 colorEnd = vec3(191.0/255.0, 207.0/255.0, 217.0/255.0); // Deeper shade
                vec3 colorEdge = vec3(255.0/255.0, 227.0/255.0, 235.0/255.0); // Pink-ish tint

                float edgeFactor = smoothstep(0.0, 0.2, vUv.x) - smoothstep(0.8, 1.0, vUv.x);
                vec3 gradientColor = mix(colorStart, colorEnd, vUv.y);
                gradientColor = mix(gradientColor, colorEdge, edgeFactor);

                gl_FragColor = vec4(gradientColor, 1.0);
            }
        `,
    });
};
