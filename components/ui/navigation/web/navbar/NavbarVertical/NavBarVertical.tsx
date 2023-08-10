import { FC } from "react";
import { NavBarVerticalProps } from "./navBarVerticalProps";
import { cn } from "@/lib/utils";
import { navBarVerticalStyles } from "./navBarVerticalStyles";
import { ButtonWithLabel } from "@/components/ui/button/ButtonWithLabel/ButtonWithLabel";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";

export const NavBarVertical: FC<NavBarVerticalProps> = () => {
    return (
        <div className={cn(navBarVerticalStyles())}>
            {/* Navigation Section */}
            <div className="box-border flex flex-col justify-center items-start flex-grow basis-full gap-[55px] px-[39px] pt-[205px] bg-red-100">
                <ButtonWithLabel
                    button={"default"}
                    label="Home"
                    labelDiv={"default"}
                    rootDiv={"default"}
                    text={"default"}
                >
                    <IconHouse />
                </ButtonWithLabel>
            </div>
            {/* Theme section */}
            <div></div>
        </div>
    );
};
