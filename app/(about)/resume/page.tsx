import { BackgroundImage } from "@/components/ui/background/BackgroundImage/BackgroundImage";
import { robotoRegular } from "@/design/fontDefaults";
import { cn } from "@/lib/utils";

const ResumePage = () => {
    return (
        <div
            suppressHydrationWarning
            className="absolute left-0 top-0 right-0 bottom-0 min-w-full min-h-screen overflow-hidden"
        >
            <BackgroundImage
                imageLightThemeSrc="/images/SPIRLWL-lightmode.png"
                imageDarkThemeSrc="/images/SPIRLWL-darkmode.png"
            />
            <h1
                className={cn(
                    "mt-3 text-3xl text-primary",
                    robotoRegular.className
                )}
            >
                My resume
            </h1>
        </div>
    );
};

export default ResumePage;
