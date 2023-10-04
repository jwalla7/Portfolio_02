import { forwardRef } from "react";
import { CardProps } from "./cardProps";
// import { cn } from "@/lib/utils";
// import { cardStyles } from "./cardStyles";

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children }, ref) => {
    return (
        <div className="Root absolute content-stretch h-[85.831vh] justify-center items-start gap-[22.52px] inline-flex mt-[3%] ml-[24%]">
            <div className="CenterRoot w-[42.616vw] self-stretch py-[38.42px] justify-center items-start gap-[13.25px] flex">
                <div className="CenterContent grow shrink basis-0 self-stretch rounded-[42.40px] flex-col justify-start items-start gap-[13px] inline-flex">
                    <div className="CenterContent self-stretch grow shrink basis-0 opacity-80 bg-neutral-50 bg-opacity-10 rounded-[42.40px] shadow shadow-inner backdrop-blur-[259.67px]">
                        <div className="Playback w-[42.616vw] h-[20.989vh] p-[10.09px] flex-col justify-center items-center gap-[10.09px] flex">
                            <div className="SongProgress w-[30.214vw] grow shrink basis-0 p-[10.09px] rounded-[100.93px] flex-col justify-center items-center gap-[5.05px] flex">
                                <div className="SongTime w-[28.716vw] justify-start items-start gap-[10.09px] inline-flex">
                                    <div className="SongElapsed grow shrink basis-0 h-3 pl-[3.03px] pr-[10.0s9px] justify-start items-start gap-[10.09px] flex">
                                        <div className="34 grow shrink basis-0 text-white text-opacity-60 text-[10.09px] font-bold font-['Inter']">
                                            3:34
                                        </div>
                                    </div>
                                    <div className="SongRemaining grow shrink basis-0 h-3 pl-[3.03px] pr-[10.09px] justify-end items-start gap-[10.09px] flex">
                                        <div className="113 grow shrink basis-0 text-right text-white text-opacity-60 text-[10.09px] font-bold font-['Inter']">
                                            {" "}
                                            - 1.13
                                        </div>
                                    </div>
                                </div>
                                <div className="Progress w-[29.032vw] h-[1.688vh] relative">
                                    <div className="Area w-[29.032vw] h-[1.688vh] left-0 top-0 absolute bg-slate-100 bg-opacity-10 rounded-[40.37px]" />
                                    <div className="Progress w-[19.916vw] h-[1.688vh] left-0 top-0 absolute bg-neutral-50 rounded-[40.37px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="RightRoot w-[25.146vw] self-stretch justify-center items-start gap-[13.25px] flex perspective-10">
                <div className="RightContent w-[25.146vw] self-stretch bg-neutral-50 bg-opacity-10 rounded-[42.40px] shadow shadow-inner backdrop-blur-[259.67px] transform-style-3d -rotate-y-15" />
            </div>
        </div>
    );
});

Card.displayName = "Card";
