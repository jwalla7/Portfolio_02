import { OverylayNav } from "@/components/ui/navigation/web/overlay/OverlayNav/OverylayNav";
import { OverlayRoot } from "@/components/ui/navigation/web/overlay/OverlayRoot/OverlayRoot";

export default function MainPage() {
    return (
        <div className="">
            {/* Need a trigger context of component */}
            <OverlayRoot>
                <OverylayNav>{/* children */}</OverylayNav>
            </OverlayRoot>
        </div>
    );
}
