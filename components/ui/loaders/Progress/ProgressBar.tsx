"use client";

import { useState } from "react";
import * as Progress from "@radix-ui/react-progress";

export const ProgressBar = () => {
    const [_progress] = useState(0);
    // const loadingTime = 10000;
    // const updateProgress = 10;

    return (
        <Progress.Root
            max={100}
            className="relative overflow-hidden bg-gray-900 rounded-full w-[60%] h-[55px]"
            style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: "translateZ(0)",
            }}
            value={_progress}
        >
            <Progress.Indicator
                className="bg-red-800 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{ transform: `translateX(-${100 - _progress}%)` }}
            />
        </Progress.Root>
    );
};
