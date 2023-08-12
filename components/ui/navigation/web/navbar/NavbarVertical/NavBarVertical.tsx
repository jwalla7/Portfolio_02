import { FC } from "react";
import { NavBarVerticalProps } from "./navBarVerticalProps";
import { cn } from "@/lib/utils";
import { navBarVerticalStyles } from "./navBarVerticalStyles";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { IconQuotes } from "@/components/ui/icons/phosphor/IconQuotes";
import { ThemeToggle } from "@/components/ui/theme/toggle/ThemeToggle";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    return (
        <div className={cn(navBarVerticalStyles({ rootDiv: "default" }))}>
            <div className={cn(navBarVerticalStyles({ navDiv: "default" }))}>
                <ButtonWithLabel
                    rootDiv="default"
                    button="default"
                    labelDiv="default"
                    label="Home"
                    text="default"
                >
                    <IconHouse fill="white" fillOpacity={100} />
                </ButtonWithLabel>
                <ButtonWithLabel
                    rootDiv="default"
                    button="default"
                    labelDiv="default"
                    label="Daily Quotes"
                    text="default"
                >
                    <IconQuotes fill="white" fillOpacity={100} />
                </ButtonWithLabel>
            </div>
            <div className={cn(navBarVerticalStyles({ themeDiv: "default" }))}>
                <ThemeToggle />
            </div>
        </div>
    );
};
