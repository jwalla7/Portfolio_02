"use client";

import { ProgressBar } from "@/components/ui/loaders/Progress/ProgressBar";

const Loading = () => {
    return (
        <>
            {console.log("progress bar loading.tsx")}
            <p className="text-red-700"> Loading ...</p>
            <ProgressBar />
        </>
    );
};

export default Loading;
