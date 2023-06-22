import ThemeMenu from "@/components/ui/theme/ThemeMenu";
import ThemeToggle from "@/components/ui/theme/ThemeToggle";

export default function VisitorsPage() {
    return (
        <>
            <div>visitors page</div>
            {/* <PopoverRight /> */}
            {/* <MenuBar /> */}
            <ThemeMenu>
                <ThemeToggle />
            </ThemeMenu>
        </>
    );
}
