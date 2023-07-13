import { FC } from "react";
import { OverlayRoot } from "../overlay/OverlayRoot/OverlayRoot";
import { OverylayNav } from "../overlay/OverlayNav/OverylayNav";
import { NavBarVerticalProps } from "./navBarVerticalProps";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    return (
        <OverlayRoot>
            <OverylayNav>children</OverylayNav>
        </OverlayRoot>
    );
};
