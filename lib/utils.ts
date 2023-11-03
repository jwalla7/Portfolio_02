import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// CSS Utils
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
