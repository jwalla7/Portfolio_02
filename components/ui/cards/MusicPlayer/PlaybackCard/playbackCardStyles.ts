import { cva } from "class-variance-authority";

export const playCardStyles = cva(
    `
`,
    {
        variants: {
            playButton: {
                root: `data-[__playback-button-root__]
                group
                bg-transparent
                border-0
                ring-0
            `,
                default: `
                data-[__playback-button-default__]
                flex
                h-20
                items-center
                justify-center
                rounded-[217.32px]
                shadow-[inset_1.18px_2px_34px_rgba(25,25,25,0.13)]
                w-20
            `,
                outer: `
                w-20
                h-20
                relative
                rounded-[217.32px]
                shadow-[1.1799999475479126px_-2px_34px_rgba(25,_25,_25,_0.21)_inset] w-full flex flex-row items-center justify-center
                dark:shadow-[1.1799999475479126px_0px_34px_rgba(255,_255,_255,_0.55)_inset]
            `,
                inner: `
                data-[__playback-button-inner__]
                absolute
                w-16
                h-16
                rounded-[34px]
                backdrop-blur-[55px]
                [backdrop-filter:blur(34px)] 
                bg-white/50
                z-20
                blur-[55px]
                w-20
                h-20
                rounded-[217.32px]
                group-hover:bg-white/65
                group-hover:blur-[20px]
                hover:duration-75
                dark:bg-gray-200/50
            `,
            },
        },
    }
);
