import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// CSS Utils
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// THREE Utils
export function fractionate(val: number, minVal: number, maxVal: number): number {
    return (val - minVal) / (maxVal - minVal);
}

export function modulate(val: number, minVal: number, maxVal: number, outMin: number, outMax: number): number {
    const fr = fractionate(val, minVal, maxVal);
    const delta = outMax - outMin;
    return outMin + fr * delta;
}

export function avg(arr: Uint8Array): number {
    const total = arr.reduce((sum, b) => sum + b, 0);
    return total / arr.length;
}

export function max(arr: number[]): number {
    return arr.reduce((a, b) => Math.max(a, b));
}
