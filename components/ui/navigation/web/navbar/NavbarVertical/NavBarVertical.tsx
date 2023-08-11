import { FC } from "react";
import { NavBarVerticalProps } from "./navBarVerticalProps";
import { cn } from "@/lib/utils";
import { navBarVerticalStyles } from "./navBarVerticalStyles";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { IconQuotes } from "@/components/ui/icons/phosphor/IconQuotes";
import { ThemeToggle } from "@/components/ui/theme/toggle/ThemeToggle";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    return (
        <div className="box-border flex flex-col justify-start items-start">
            <div className={cn(navBarVerticalStyles({ rootDiv: "default" }))}>
                {/* Navigation Section */}
                <div
                    className={cn(navBarVerticalStyles({ navDiv: "default" }))}
                >
                    <ButtonWithLabel
                        button={"default"}
                        label="Daily Quotes"
                        labelDiv={"default"}
                        rootDiv={"default"}
                        text={"default"}
                    >
                        <IconQuotes fill="white" fillOpacity={100} />
                    </ButtonWithLabel>
                </div>
                {/* Theme section */}
                <div
                    className={cn(
                        navBarVerticalStyles({ themeDiv: "default" })
                    )}
                >
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};
