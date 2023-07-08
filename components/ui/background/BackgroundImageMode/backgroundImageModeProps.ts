import { ImageProps } from "next/image";

export interface BackgroundImageModeProps extends ImageProps {
    imageLightThemeSrc?: string | any;
    imageDarkThemeSrc?: string | any;
}
