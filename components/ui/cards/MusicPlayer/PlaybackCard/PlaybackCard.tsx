import { forwardRef } from "react";
import { PlaybackCardProps } from "./playbackCardProps";
import { IconArrowPlay } from "@/components/ui/icons/phosphor/IconArrowPlay";
import { cn } from "@/lib/utils";
import { robotoRegular } from "@/design/fontDefaults";
// TODO: Add styles using cva to PlaybackCard
export const PlaybackCard = forwardRef<HTMLDivElement, PlaybackCardProps>(({ children }, ref) => {
    return (
        <div className="Playback w-[42.648vw] h-[77.847vh] py-[10.09px] flex-col justify-center items-center gap-[10.09px] inline-flex">
            <div className="SongProgress w-[556.67px] pl-[51px] pr-[10.09px] pt-[25px] pb-[10.09px] rounded-[100.93px] flex-col justify-center items-center gap-[5.05px] flex">
                <div className="SongTime w-[490.19px] justify-start items-start gap-[10.09px] inline-flex">
                    <div className="SongElapsed grow shrink basis-0 h-3 pl-[3.03px] pr-[10.09px] justify-start items-start gap-[10.09px] flex">
                        <div className={cn("34 grow shrink basis-0 text-zinc-900 text-[10.09px] font-bold", robotoRegular.className)}>
                            3:34
                        </div>
                    </div>
                    <div className="SongRemaining grow shrink basis-0 h-3 pl-[3.03px] pr-[10.09px] justify-end items-start gap-[10.09px] flex">
                        <div
                            className={cn(
                                "113 grow shrink basis-0 text-right text-zinc-900 text-[10.09px] font-bold",
                                robotoRegular.className
                            )}
                        >
                            {" "}
                            - 1.13
                        </div>
                    </div>
                </div>
                <div className="Progress w-[495.58px] h-[16.15px] relative">
                    <div className="Area w-[495.58px] h-[16.15px] left-0 top-0 absolute bg-zinc-900 bg-opacity-10 rounded-[40.37px]" />
                    <div className="Progress w-[339.96px] h-[16.15px] left-0 top-0 absolute bg-zinc-900 bg-opacity-90 rounded-[40.37px]" />
                </div>
            </div>
            <div className="MusicImageTransparent self-stretch grow shrink basis-0 p-2.5" />
            <div className="PlaybackButtonDiv self-stretch pl-[27px] pb-[13px] justify-center items-center gap-[21.65px] inline-flex ">
                <div className="BackwardButton px-[8.12px] pt-[31.12px] pb-[4.06px] justify-center items-center gap-[13.53px] flex" />
                <div className="PlayButtonBlurLayerRoot rounded-[217.32px] shadow-[inset_1.18px_2px_34px_rgba(25,25,25,0.13)] justify-center items-center flex w-20 h-20">
                    <div className="w-20 h-20 relative rounded-[217.32px] shadow-[1.1799999475479126px_-2px_34px_rgba(25,_25,_25,_0.21)_inset] w-full flex flex-row items-center justify-center">
                        <div className="absolute w-16 h-16 rounded-[34px] blur-[8px] backdrop-blur-[55px] [backdrop-filter:blur(34px)] bg-white/50 z-20" />
                        <IconArrowPlay iconDirection="-45_rotation" className="z-30 drop-shadow-md w-10 h-10 text-white" />
                    </div>
                </div>
                <div className="ForwardButton px-[8.12px] pt-[31.12px] pb-[4.06px] justify-center items-center gap-[13.53px] flex" />
            </div>
        </div>
    );
});

PlaybackCard.displayName = "PlaybackCard";
