import { FC } from "react";

export interface NavBarVerticalProps {
    children: React.ReactNode;
    onHover?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    active?: boolean;
    className?: string;
}

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    return <></>;
};