import { forwardRef } from "react";
import { PlaybackCardProps } from "./playbackCardProps";
import { IconArrowPlay } from "@/components/ui/icons/phosphor/IconArrowPlay";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { robotoRegular } from "@/design/fontDefaults";
import { IconArrowNext } from "@/components/ui/icons/phosphor/IconArrowNext";
import { IconArrowPrevious } from "@/components/ui/icons/phosphor/IconArrowPrevious";
import { playCardStyles } from "./playbackCardStyles";
import { IconArrowPause } from "@/components/ui/icons/phosphor/IconArrowPause";
import { useAudioContext } from "@/components/context/audio/AudioContext";
import { useAudio } from "@/components/hooks/useAudio/useAudio";

// TODO: Add styles using cva to PlaybackCard
export const PlaybackCard = forwardRef<HTMLDivElement, PlaybackCardProps>(({ children }, ref) => {
    const { toggleAudio, nextAudio, audioIsPlaying } = useAudioContext();
    // const { toggleAudio, audioIsPlaying, audiStream } = useAudio();
    return (
        <div className="PlaybackPlayerRootContainer w-[42.648vw] h-[77.847vh] flex-col justify-center items-center gap-[10.09px] inline-flex">
            {/* pl-[51px] pr-[10.09px] pt-[25px] pb-[10.09px] */}
            <div className="top_content self-stretch pt-[25px] rounded-t-[42.40px] flex-col justify-center items-center gap-[5.05px] flex">
                <div className="playback_progress_container flex flex-col self-stretch justify-center items-center gap-[5.05px] rounded-2xl">
                    <div className="song_time_text_container w-[35.298vw] inline-flex bg-red-300">
                        <div className="SongElapsed grow shrink basis-0 h-3 justify-start items-start px-[0.384vw] flex">
                            <div
                                className={cn(
                                    "34 grow shrink basis-0 text-zinc-900 dark:text-gray-200 text-[10.09px] font-bold",
                                    robotoRegular.className
                                )}
                            >
                                3:34
                            </div>
                        </div>
                        <div className="SongRemaining grow shrink basis-0 h-3 pl-[3.03px] pr-[10.09px] justify-end items-start gap-[10.09px] flex">
                            <div
                                className={cn(
                                    "113 grow shrink basis-0 text-right text-zinc-900 dark:text-gray-200 text-[10.09px] font-bold",
                                    robotoRegular.className
                                )}
                            >
                                {" "}
                                - 1.13
                            </div>
                        </div>
                    </div>
                    <div className="progress_bar_container w-[35.298vw] h-[16.15px] relative">
                        <div
                            className="Area w-full h-full left-0 top-0 bottom-0 right-0 absolute bg-zinc-900 bg-opacity-10 rounded-[40.37px]
                        dark:bg-[rgba(241,245,249,0.1)]
                        "
                        />
                        <div
                            className="Progress w-[339.96px] h-full left-0 top-0 absolute bg-zinc-900 bg-opacity-90 rounded-[40.37px]
                        h-full w-[68.6%] top-[0%] right-[31.4%] bottom-[0%] left-[0%] rounded-[40.37px]
                        dark:bg-gray-200
                        dark:absolute 
                        "
                        />
                    </div>
                </div>
            </div>
            <div className="BMusicImageTransparent self-stretch grow shrink basis-0 p-2.5" />

            <div className="BPlaybackButtonDiv h-[20vh] self-stretch pl-[27px] pb-[13px] justify-center items-center gap-[21.65px] inline-flex rounded-b-[42.40px]">
                <div className="BackwardButton px-[8.12px] pt-[31.12px] pb-[4.06px] justify-center items-center gap-[13.53px] flex">
                    <IconArrowPrevious iconDirection="45_rotation" className="text-white mb-[34%]" />
                </div>
                <button className={playCardStyles({ playButton: "root" })} onClick={toggleAudio}>
                    <div className={cn(playCardStyles({ playButton: "default" }))}>
                        <div className={cn(playCardStyles({ playButton: "outer" }))}>
                            <div className={cn(playCardStyles({ playButton: "inner" }))} />
                            {audioIsPlaying ? (
                                <IconArrowPause className={cn("drop-shadow-md w-10 h-10 text-white dark:absolute")} />
                            ) : (
                                <IconArrowPlay
                                    iconDirection="-45_rotation"
                                    className={cn("drop-shadow-md w-10 h-10 text-white dark:absolute group")}
                                />
                            )}
                        </div>
                    </div>
                </button>

                <button className={playCardStyles({ playButton: "root" })} onClick={nextAudio}>
                    <div className="ForwardButton px-[8.12px] pt-[31.12px] pb-[4.06px] justify-center items-center gap-[13.53px] flex">
                        <IconArrowNext iconDirection="-45_rotation" className="text-white mb-[34%]" />
                    </div>
                </button>
            </div>
        </div>
    );
});

PlaybackCard.displayName = "PlaybackCard";
