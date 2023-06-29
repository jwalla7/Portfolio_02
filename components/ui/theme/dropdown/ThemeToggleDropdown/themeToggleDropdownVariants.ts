import { cva } from "class-variance-authority";

export const themeToggleDropdownVariants = {
    dropdownMenuContent: cva(
        `
        bg-white
        box-border
        data-[side=bottom]:animate-slideUpAndFade
        data-[side=left]:animate-slideRightAndFade
        data-[side=right]:animate-slideLeftAndFade
        data-[side=top]:animate-slideDownAndFade
        dark:bg-transparent
        backdrop-blur-[12.4px]
        flex
        flex-col
        items-center
        justify-center
        w-[200px]
        py-3
        my-2
        mx-16
        cursor-pointer
        rounded-md
        shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]
        will-change-[opacity,transform]
        `
    ),
    dropdownMenuItems: cva(
        `
        box-border flex flex-col justify-center items-center flex-grow basis-full gap-[55px] px-[39px] focus:outline-none
        data-[disabled]:pointer-events-none
        data-[disabled]:text-mauve8
        data-[highlighted]:bg-violet9
        data-[highlighted]:text-violet1
        flex items-center
        group
        h-[25px] px-[5px]
        leading-none
        outline-none
        relative pl-[25px]
        rounded-[3px]
        select-none
        text-[13px]
        text-violet11
        `
    ),
};
