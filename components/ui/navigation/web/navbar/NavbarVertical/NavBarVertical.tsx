import { FC } from "react";
import { NavBarVerticalProps } from "./navBarVerticalProps";
import { cn } from "@/lib/utils";
import { navBarVerticalStyles } from "./navBarVerticalStyles";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { IconQuotes } from "@/components/ui/icons/phosphor/IconQuotes";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    return (
        <div className={cn(navBarVerticalStyles())}>
            {/* Navigation Section */}
            <div className="box-border flex flex-col justify-center items-start flex-grow basis-full gap-[55px] px-[39px] pt-[205px] bg-red-100">
                <ButtonWithLabel
                    button={"default"}
                    label="Daily Quotes"
                    labelDiv={"default"}
                    rootDiv={"default"}
                    text={"default"}
                >
                    <IconQuotes fill="white" fillOpacity={100} />
                </ButtonWithLabel>
            </div>
            {/* Theme section */}
            <div></div>
        </div>
    );
};
