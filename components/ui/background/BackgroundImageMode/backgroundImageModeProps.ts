import { StaticImageData } from "next/image";
export interface BackgroundImageModeProps {
    /**
     *
     */
    imageLightThemeSrc: string | StaticImageData;
    imageDarkThemeSrc: string | StaticImageData;
    className?: string;
}
