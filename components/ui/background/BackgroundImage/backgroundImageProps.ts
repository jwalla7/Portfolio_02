import { StaticImageData } from "next/image";
export interface BackgroundImageProps extends React.HTMLAttributes<HTMLImageElement> {
    imageLightThemeSrc: string | StaticImageData;
    imageDarkThemeSrc: string | StaticImageData;
    enableMouseMove?: boolean;
    traceChildren?: boolean;
    className?: string;
}
