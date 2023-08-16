import { cva } from "class-variance-authority";

export const overlayStylesLayerRoot = cva(
    `
    data-root
    box-border
    flex
    flex-col
    gap-[62.5%]
    h-screen
    items-start
    justify-start
    translate-x-[-21.370vw]
    w-screen
    `,
    {
        variants: {
            background: {
                root: `bg-gradient-to-t from-[rgba(0,5,13,1)] from-[-43.58%] via-[rgba(255,255,255, 1)] from-1% via-[rgba(255,255,255, .03)] from-[-21%] via-[rgba(0,5,13,0)] from-[-25.23%] to-transparent`,
                none: "bg-none",
            },
        },
        defaultVariants: {
            background: `root`,
        },
    }
);

export const overlayStylesLayer_1 = cva(
    `
    data-layer_1
    basis-full
    border-box
    flex
    grow
    gap-[62.5%]
    items-start
    justify-start
    overflow-hidden
    self-stretch
    `,
    {
        variants: {
            background: {
                layer_1: `bg-gradient-to-r from-[rgba(0,5,13,0)] from-[-89%] via-[rgba(0,5,13,0.99)] from-6.67% via-[rgba(0,5,13,0.96)] from-13.33% via-[rgba(0,5,13,0.92)] from-20% via-[rgba(0,5,13,0.86)] from-26.67% via-[rgba(0,5,13,0.77)] from-33.33% via-[rgba(0,5,13,0.67)] from-40% via-[rgba(0,5,13,0.56)] from-46.67% via-[rgba(0,5,13,0.44)] from-53.33% via-[rgba(0,5,13,0.33)] from-60% via-[rgba(0,5,13,0.23)] from-66.67% via-[rgba(0,5,13,0.14)] from-73.33% via-[rgba(0,5,13,0.08)] from-80% via-[rgba(0,5,13,0.04)] from-86.67% via-[rgba(0,5,13,0.01)] from-93.33% via-[rgba(0,5,13,0)] from-100%`,
                none: "bg-none",
            },
        },
        defaultVariants: {
            background: `layer_1`,
        },
    }
);

export const overlayStylesLayer_2 = cva(
    `
    data-layer_2
    border-box
    flex
    grow-0
    shrink-0
    gap-[62.5%]
    items-start
    justify-start
    self-stretch
    w-[8.436vw]
    `,
    {
        variants: {
            background: {
                layer_2: `bg-gradient-to-t from-[#00050d] from-[-43.58%] to-[rgba(0,5,13,0)] from-56.82%`,
                none: "bg-none",
            },
        },
        defaultVariants: {
            background: `layer_2`,
        },
    }
);

export const overlayStylesLayer_3 = cva(
    `
    data-layer_3
    border-box
    flex
    flex-col
    shrink-0
    grow-0
    gap-2.5
    items-start
    justify-start
    self-stretch
    w-[21.37vw]
    `,
    {
        variants: {
            background: {
                layer_3: `bg-gradient-to-r from-[rgba(2,13,0,0.89)] via-[rgba(0,5,13,0.88)] from-4.69% via-[rgba(0,5,13,0.86)] from-8.85% via-[rgba(0,5,13,0.82)] from-13.54% via-[rgba(0,5,13,0.71)] from-30.77% via-[rgba(0,5,13,0.38)] from-71.35% to-[rgba(0,5,13,0.01)] from 100%`,
                none: "bg-none",
            },
        },
        defaultVariants: {
            background: `layer_3`,
        },
    }
);
