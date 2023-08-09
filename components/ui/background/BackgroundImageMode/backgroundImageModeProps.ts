import { StaticImageData } from "next/image";
export interface BackgroundImageModeProps
    extends React.HTMLAttributes<HTMLImageElement> {
    imageLightThemeSrc: string | StaticImageData;
    imageDarkThemeSrc: string | StaticImageData;
    className?: string;
}
