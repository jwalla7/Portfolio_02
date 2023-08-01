"use client";

import { ProgressBar } from "@/components/ui/loaders/Progress/ProgressBar";

const LoadingPage = () => {
    return (
        <div>
            <p className="text-red-700"> Loading ...</p>
            <ProgressBar />
        </div>
    );
};

export default LoadingPage;
