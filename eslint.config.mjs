import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
    ...nextCoreWebVitals,
    {
        ignores: ["dist/**", "prisma/prisma-client/**"],
    },
    {
        rules: {
            // These are overly strict for this codebase right now and create noisy false-positives.
            "react-hooks/set-state-in-effect": "off",
            "react-hooks/refs": "off",
        },
    },
];
