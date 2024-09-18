import { useState, useEffect } from "react";
import { screens } from "../../../tailwind.config"


type BreakpointValue = string | { min?: string; max?: string };
type Screens = Record<string, BreakpointValue>;
type Breakpoints = Record<string, number>;

// Parse the breakpoints from the imported screens object
const breakpoints: Breakpoints = Object.entries(screens as Screens).reduce(
    (acc: Breakpoints, [key, value]: [string, BreakpointValue]) => {
        if (typeof value === 'string') {
            // Remove any non-digit characters and parse to integer
            acc[key] = parseInt(value.replace(/\D/g, ''), 10);
        } else if (typeof value === 'object') {
            if (value.min) {
                acc[key] = parseInt(value.min.replace(/\D/g, ''), 10);
                console.log("BREAKPOINTS", acc[key]);
            } else if (value.max) {
                acc[key] = parseInt(value.max.replace(/\D/g, ''), 10);
                console.log("BREAKPOINTS", acc[key]);
            } else {
                console.warn(`Breakpoint "${key}" has no 'min' or 'max' value.`);
            }
        } else {
            console.warn(`Unsupported breakpoint format for "${key}": ${value}`);
        }
        return acc;
    },
    {} as Breakpoints
);

export function useMediaQuery(breakpointKey: string): boolean {
    const breakpoint = breakpoints[breakpointKey];

    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        if (typeof breakpoint !== 'number') {
            console.warn(`Breakpoint "${breakpointKey}" is not defined or invalid.`);
            return;
        }

        if (typeof window === 'undefined') return; // Prevent errors during SSR

        const query = `(max-width: ${breakpoint - 1}em)`;
        const media = window.matchMedia(query);

        const updateMatches = () => setMatches(media.matches);
        media.addEventListener('change', updateMatches);

        // Set the initial value
        setMatches(media.matches);

        return () => media.removeEventListener('change', updateMatches);
    }, [breakpoint, breakpointKey]);

    return matches;
}