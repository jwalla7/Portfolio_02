import { cva } from "class-variance-authority";

export const overlayStylesLayerRoot = cva(
    `
    flex
    flex-col
    justify-start
    items-start
    max-w-full
    h-screen
    max-w-screen
    max-h-screen
    gap-2.5
    `,
    {
        variants: {
            background: {
                root: `bg-gradient-to-t from-[#00050d] from-[-43.58%] via-[#ffffff] from-59.23% to-white`,
            },
        },

        defaultVariants: {
            background: `root`,
        },
    }
);

export const overlayStylesLayer_1 = cva(
    `
    basis-full
    border-box
    flex
    flex-grow
    gap-2.5
    items-start
    justify-start
    overflow-hidden
    self-stretch
    `,
    {
        variants: {
            background: {
                layer_1: `bg-gradient-to-r from[#00050d] from-0% via-[rgba(0,5,13,0.99)] from-6.67% via-[rgba(0,5,13,0.96)] from-13.33% via-[rgba(0,5,13,0.92)] from-20% via-[rgba(0,5,13,0.86)] from-26.67% via-[rgba(0,5,13,0.77)] from-33.33% via-[rgba(0,5,13,0.67)] from-40% via-[rgba(0,5,13,0.56)] from-46.67% via-[rgba(0,5,13,0.44)] from-53.33% via-[rgba(0,5,13,0.33)] from-60% via-[rgba(0,5,13,0.23)] from-66.67% via-[rgba(0,5,13,0.14)] from-73.33% via-[rgba(0,5,13,0.08)] from-80% via-[rgba(0,5,13,0.04)] from-86.67% via-[rgba(0,5,13,0.01)] from-93.33% to-[rgba(0,5,13,0)] from-100%`,
            },
        },
        defaultVariants: {
            background: `layer_1`,
        },
    }
);

export const overlayStylesLayer_2 = cva(
    `
    border-box
    flex
    flex-grow-0
    flex-shrink-0
    gap-2.5
    items-start
    justify-start
    self-stretch
    w-36
    `,
    {
        variants: {
            background: {
                layer_2: `bg-gradient-to-t from-[#00050d] from-[-43.58%] to-[rgba(0,5,13,0)] from-56.82%`,
            },
        },
        defaultVariants: {
            background: `layer_2`,
        },
    }
);

export const overlayStylesLayer_3 = cva(
    `
    border-box
    flex
    flex-col
    flex-shrink-0
    flex-grow-0
    gap-2.5
    items-start
    justify-start
    self-stretch
    w-[364.78px]

    `,
    {
        variants: {
            background: {
                layer_3: `bg-gradient-to-r from-[rgba(2,13,0,0.89)] via-[rgba(0,5,13,0.88)] from-4.69% via-[rgba(0,5,13,0.86)] from-8.85% via-[rgba(0,5,13,0.82)] from-13.54% via-[rgba(0,5,13,0.71)] from-30.77% via-[rgba(0,5,13,0.38)] from-71.35% to-[rgba(0,5,13,0.01)]`,
            },
        },
        defaultVariants: {
            background: `layer_3`,
        },
    }
);
