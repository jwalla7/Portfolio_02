import { cn } from "@/lib/utils";
import { robotoRegular } from "@/design/fontDefaults";
import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";

const MusicPage = () => {
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen overflow-hidden"
        >
            <BackgroundImage
                imageLightThemeSrc="/images/CNTRS-lightmode.png"
                imageDarkThemeSrc="/images/CNTRS-darkmode.png"
            />
            <h1
                className={cn(
                    "mt-3 text-3xl text-primary",
                    robotoRegular.className
                )}
            >
                My music
            </h1>
        </div>
    );
};

export default MusicPage;
