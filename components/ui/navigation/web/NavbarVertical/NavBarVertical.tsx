import { FC } from "react";
import { OverlayRoot } from "../overlay/OverlayRoot/OverlayRoot";
import { OverylayNav } from "../overlay/OverlayNav/OverylayNav";

export interface NavBarVerticalProps {
    children: React.ReactNode;
    onHover?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    active?: boolean;
    className?: string;
}

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    return (
        <OverlayRoot>
            <OverylayNav></OverylayNav>
        </OverlayRoot>
    );
};
