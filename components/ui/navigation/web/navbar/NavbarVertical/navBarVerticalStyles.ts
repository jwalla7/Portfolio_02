import { cva } from "class-variance-authority";

export const navBarVerticalStyles = cva(
    `
    bg-red-500
    box-border
    flex
    flex-col
    justify-center
    items-start
    flex-grow
    basis-full
    gap-[55px]
    px-[39px]
    pt-[205px]
    `
);
