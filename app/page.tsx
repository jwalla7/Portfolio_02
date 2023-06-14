import { PhosphorIcons } from "@/components/ui/icons";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Main() {
    return (
        <div className="flex gap-6">
            <Link href="/" className="items-center space-x-2 ">
                <PhosphorIcons.arrowCircleLeft iconDirection="0_rotation" />
                <span className="font-bold text-yellow-200">
                    {siteConfig.copyright}
                </span>
            </Link>
        </div>
    );
}
