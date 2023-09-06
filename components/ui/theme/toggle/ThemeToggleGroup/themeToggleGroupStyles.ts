import { cva } from "class-variance-authority";

export const themeToggleGroupStyles = cva(
    `
    box-border flex flex-grow justify-start items-center place-items-center w-[3.074vw] h-fit gap-y-[.764vh] gap-x-[.428vw]
    `
);

export const themeToggleGroupStylesItem = cva(
    `
    box-border
    bg-transparent
    border-0
    flex
    flex-col
    justify-start
    items-center
    flex-grow-0
    flex-shrink-0
    w-[3.074vw]
    gap-x-[.428vw]
    gap-y-[2.764vh]
1    `
);

export const themeToggleGroupStylesLabel = cva(
    `
    flex-grow
    leading-[normal]
    self-stretch
    text-[18.269317626953125px]
    text-center
    whitespace-pre-wrap
    text-neutral-50
    `
);

export const themeToggleGroupStylesLabelDiv = cva(
    `
    box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden p-x-[.118vw] p-y-[.210vh]
    `
);

export const themeToggleGroupStylesIconDiv = cva(
    `
    box-border flex justify-center items-center flex-grow-0 flex-shrink-0 w-[3.532vw] h-[6.3vh] relative gap-x-[0.688vw] gap-y-[1.226vh] p-x-[.476vw] p-y-[.849vh] rounded-[11.2px]
    `
);
