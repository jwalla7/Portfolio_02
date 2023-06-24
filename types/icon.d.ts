import { SVGProps } from "react";

declare type Type_Icons = {
    Icon: Icon<SVGProps<SVGSVGElement>>;
};

declare type IconDirection =
    | "0_rotation"
    | "45_rotation"
    | "90_rotation"
    | "180_rotation"
    | "-45_rotation"
    | "-90_rotation";
