import { OverylayNav } from "@/components/ui/navigation/web/overlay/OverlayNav/OverylayNav";
import { OverlayRoot } from "@/components/ui/navigation/web/overlay/OverlayRoot/OverlayRoot";
import Image from "next/image";

export default function MainPage() {
    const image = "/SKYF-lightmode.jpg";
    return (
        <div className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen overflow-x-hidden">
            <Image
                alt="background image"
                width={1920}
                height={2464}
                src={image}
                quality={100}
            />
            {/* <Image  alt="background image" width={1440} height={1848} src={image}  quality={100} /> */}
            {/* Need a trigger context of component */}
            {/* <OverlayRoot> */}
            {/* <OverylayNav>children</OverylayNav> */}
            {/* </OverlayRoot> */}
        </div>
    );
}
