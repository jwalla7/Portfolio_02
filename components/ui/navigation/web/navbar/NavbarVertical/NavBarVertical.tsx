import { FC } from "react";
import { NavBarVerticalProps } from "./navBarVerticalProps";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    return (
        <div>
            <ButtonWithLabel variant="default" label="Home" size="default">
                <i>
                    <IconHouse />
                </i>
            </ButtonWithLabel>
        </div>
    );
};
