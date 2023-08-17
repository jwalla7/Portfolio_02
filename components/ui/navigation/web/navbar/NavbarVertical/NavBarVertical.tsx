import { FC, useRef, useState } from "react";
import { NavBarVerticalProps } from "./navBarVerticalProps";
import { cn } from "@/lib/utils";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { IconQuotes } from "@/components/ui/icons/phosphor/IconQuotes";
import { ThemeToggle } from "@/components/ui/theme/toggle/ThemeToggle";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";
import {
    navBarVerticalNavStyles,
    navBarVerticalRootStyles,
    navBarVerticalThemeStyles,
} from "./navBarVerticalStyles";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    const navButtonRef = useRef(null);
    const themeButtonRef = useRef(null);

    const [_clicked, setClicked] = useState(false);

    return (
        <div className={cn(navBarVerticalRootStyles({ root: "default" }))}>
            <div className={cn(navBarVerticalNavStyles({ nav: "default" }))}>
                <ButtonWithLabel
                    rootDiv="default"
                    buttonDiv="default"
                    labelDiv="default"
                    label="Home"
                    textDiv="default"
                >
                    <IconHouse fill="white" fillOpacity={100} />
                </ButtonWithLabel>
                <ButtonWithLabel
                    rootDiv="default"
                    buttonDiv="default"
                    labelDiv="default"
                    label="Daily Quotes"
                    textDiv="default"
                    navButtonRef={navButtonRef}
                >
                    <IconQuotes fill="white" fillOpacity={100} />
                </ButtonWithLabel>
            </div>
            <div
                className={cn(navBarVerticalThemeStyles({ theme: "default" }))}
            >
                <ThemeToggle />
            </div>
        </div>
    );
};
