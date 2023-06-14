import { Type_Navigation } from "@/types/navigation";
import { usePathname } from "next/dist/client/components/navigation";
import { PhosphorIcons } from "../icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
    navigationItemList: Type_Navigation[];
}

export function NavigationItems({ navigationItemList }: NavigationItemProps) {
    const path = usePathname();

    if (!navigationItemList) return null;

    return (
        <nav className="grid items-start gap-2">
            {navigationItemList.map((item, index) => {
                // const Icon = PhosphorIcons[item.icon || "arrowRight"]
                return (
                    item.href && (
                        //TODO add <Link />
                        <div></div>
                    )
                );
            })}
        </nav>
    );
}
