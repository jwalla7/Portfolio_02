/**
 * @description
 * memo bypasses re-rendering a component if its props are unchanged.
 *
 * @see https://react.dev/reference/react/memo
 */
interface IconEnvelopSimple extends React.ComponentProps<"svg"> {
    active: boolean;
}
import { cn } from "@/lib/utils";
import { memo } from "react";

export const IconEnvelopSimple = memo<IconEnvelopSimple>(function IconEnvelopSimple(
    /**
     * Accessibility to custom attribute values
     */
    { className },
    /**
     * Accessibility to other SVG props
     */
    { active, fill = active ? cn("text-black dark:text-black") : "currentColor", fillOpacity, ...props }: IconEnvelopSimple
) {
    /**
     * Creates custom values for className attribute
     */
    const variants = cn("block grow-0 shrink-0 w-[1.956vw] h-[3.489vh] min-w-[33.7833px] min-h-[63.6667px] relative", className);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="phosphorIcon-envelopeSimple"
            viewBox="0 0 256 256"
            className={cn(variants, props.className)}
            {...props}
        >
            <path
                fill={fill}
                fillOpacity={fillOpacity}
                d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"
            ></path>
        </svg>
    );
});
