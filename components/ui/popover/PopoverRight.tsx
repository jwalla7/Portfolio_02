"use client";

import * as Popover from "@radix-ui/react-popover";

const PopoverRight = () => (
    <Popover.Root>
        <Popover.Trigger asChild>
            <button className="IconButton" aria-label="Update dimensions">
                {/* <MixerHorizontalIcon /> */}
            </button>
        </Popover.Trigger>
        <Popover.Portal>
            <Popover.Content className="PopoverContent" sideOffset={5}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                    }}
                >
                    <p className="Text" style={{ marginBottom: 10 }}>
                        Theme
                    </p>
                    <div>Dark</div>
                    <div>Light</div>
                    <div>System</div>
                </div>
                <Popover.Close className="PopoverClose" aria-label="Close">
                    {/* <Cross2Icon /> */}
                </Popover.Close>
                <Popover.Arrow className="PopoverArrow" />
            </Popover.Content>
        </Popover.Portal>
    </Popover.Root>
);

export default PopoverRight;
