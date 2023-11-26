import { cva } from "class-variance-authority";

export const buttonStyles = cva(
    `
`,
    {
        variants: {
            variant: {
                root: `
                border-0 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background
                `,
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                glass: `
                    bg-transparent
                    dark:bg-transparent
                    dark:group-hover:bg-gradient-to-r from-[rgba(255,255,255,0.08)] from-0% to-[rgba(242,242,242,0.13)] from-76.04%
                    dark:group-hover:text-accent-foreground
                    hover:bg-primary/90
                    `,
                link: "underline-offset-4 hover:underline text-primary",
                none: `bg-none`,
                playButton: `
                data-[__playback-button-root__]
                group
                bg-transparent
                border-0`,
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
                icon: "h-10 w-10",
            },
        },
    }
);
