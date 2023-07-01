import { ThemeToggleGroup } from "@/components/ui/theme/toggle/ThemeToggleGroup/ThemeToggleGroup";
import { robotoRegular } from "@/design/fontDefaults";
import { cn } from "@/lib/utils";

export default function MainPage() {
    return (
        <>
            <h1
                className={cn(
                    "items-center  mt-3 text-3xl text-[#020D00]",
                    robotoRegular.className
                )}
            >
                Main Page
            </h1>
            <ThemeToggleGroup />
        </>
    );
}
