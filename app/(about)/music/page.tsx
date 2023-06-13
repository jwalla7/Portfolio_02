import { cn } from "@/lib/utils";
import { robotoRegular } from "@/design/fontDefaults";

const MusicPage = () => {
    return (
        <h1
            className={cn(
                "mt-3 text-3xl text-orange-50",
                robotoRegular.className
            )}
        >
            My music
        </h1>
    );
};

export default MusicPage;
