import { cn } from "@/lib/utils";
import { OverlayTriggerProps } from "./overlayTriggerProps";
import { overlayTriggerStyles } from "./overlayTriggerStyles";
import * as HoverCard from "@radix-ui/react-hover-card";

export const OverlayTrigger: React.FC<OverlayTriggerProps> = ({
    className,
    children,
}) => {
    return (
        <HoverCard.Root openDelay={0} closeDelay={0}>
            <HoverCard.Trigger asChild>
                <div className={cn(overlayTriggerStyles({ className }))}></div>
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content
                    className=" w-[300px] rounded-md bg-white p-5 data-[state=open]:transition-all z-2"
                    /**
                     * sideOffset
                     *
                     * Determines the distance in pixels from the trigger
                     *
                     * `-(number) to place at the top/over of parent.
                     */
                    sideOffset={-window.innerHeight}
                >
                    {children}
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
};
