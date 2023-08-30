import { cva } from "class-variance-authority";

export const themeToggleGroupStyles = cva(
    `
    box-border flex justify-between items-start w-[189px] h-fit
    `
);

export const themeToggleGroupStylesItem = cva(
    `
    box-border
    flex
    flex-col
    justify-start
    items-center
    flex-grow-0
    flex-shrink-0
    w-[52.48px]
    gap-[7.307741641998291px]
    `
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
    box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden p-[2.0130577087402344px]
    `
);

export const themeToggleGroupStylesIconDiv = cva(
    `
    box-border flex justify-center items-center flex-grow-0 flex-shrink-0 w-[60.29px] h-[60.29px] relative gap-[11.73647403717041px] p-[8.125236511230469px] rounded-[11.2px]
    `
);
