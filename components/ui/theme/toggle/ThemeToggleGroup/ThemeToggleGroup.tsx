"use client";

import { forwardRef } from "react";
import { ThemeToggleGroupProps } from "./themeToggleGroupProps";
import { cn } from "@/lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { themeToggleGroupStyles } from "./themeToggleGroupStyles";
import { IconCircleHalf } from "@/components/ui/icons/phosphor/IconCircleHalf";
import { IconMoon } from "@/components/ui/icons/phosphor/IconMoon";
import { IconSun } from "@/components/ui/icons/phosphor/IconSun";
import { robotoRegular } from "@/design/fontDefaults";

export const ThemeToggleGroup = forwardRef<
    HTMLButtonElement,
    ThemeToggleGroupProps
>(({ active }, ref) => {
    return (
        <ToggleGroup
            className={cn(themeToggleGroupStyles({ toggleDiv: "default" }))}
            type="single"
            orientation="horizontal"
            aria-label="Text alignment"
        >
            <ToggleGroupItem
                className={cn(themeToggleGroupStyles({ itemDiv: "default" }))}
                value="left"
                aria-label="Left aligned"
                ref={ref}
            >
                <div
                    className={cn(
                        themeToggleGroupStyles({ labelDiv: "default" })
                    )}
                >
                    <label
                        className={cn(
                            themeToggleGroupStyles({ label: "default" }),
                            robotoRegular.className
                        )}
                    >
                        Light
                    </label>
                </div>
                <i
                    className={cn(
                        themeToggleGroupStyles({ iconDiv: "default" })
                    )}
                >
                    <IconSun
                        setMotion={true}
                        className="block flex-grow-0 flex-shrink-0 w-[1.904vw] h-[3.396vh] relative place-self-center text-white"
                    />
                </i>
            </ToggleGroupItem>
            <ToggleGroupItem
                className={cn(themeToggleGroupStyles({ itemDiv: "default" }))}
                value="center"
                aria-label="Center aligned"
            >
                <div
                    className={cn(
                        themeToggleGroupStyles({ labelDiv: "default" })
                    )}
                >
                    <label
                        className={cn(
                            themeToggleGroupStyles({ label: "default" })
                        )}
                    >
                        Auto
                    </label>
                </div>
                <i
                    className={cn(
                        themeToggleGroupStyles({ iconDiv: "default" }),
                        robotoRegular.className
                    )}
                >
                    <IconCircleHalf
                        setMotion={true}
                        className="block flex-grow-0 flex-shrink-0 w-[1.904vw] h-[3.396vh] relative place-self-center text-white"
                    />
                </i>
            </ToggleGroupItem>
            <ToggleGroupItem
                className={cn(themeToggleGroupStyles({ itemDiv: "default" }))}
                value="right"
                aria-label="Right aligned"
            >
                <div
                    className={cn(
                        themeToggleGroupStyles({ labelDiv: "default" })
                    )}
                >
                    <label
                        className={cn(
                            themeToggleGroupStyles({ label: "default" }),
                            robotoRegular.className
                        )}
                    >
                        Dark
                    </label>
                </div>
                <i
                    className={cn(
                        themeToggleGroupStyles({ iconDiv: "default" })
                    )}
                >
                    <IconMoon
                        iconDirection="-45_rotation"
                        setMotion={true}
                        className="block flex-grow-0 flex-shrink-0 w-[1.904vw] h-[3.396vh] relative place-self-center mt-[2.194vh] text-white"
                    />
                </i>
            </ToggleGroupItem>
        </ToggleGroup>
    );
});

ThemeToggleGroup.displayName = "ThemeToggleGroup";
