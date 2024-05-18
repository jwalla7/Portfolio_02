import {
    MouseEvent,
    forwardRef,
    useCallback,
    useEffect,
    useState,
    TouchEvent,
    TouchEventHandler,
    MouseEventHandler,
    PointerEvent,
    useRef,
} from "react";
import { PlaybackCardProps } from "./playbackCardProps";
import { IconArrowPlay } from "@/components/ui/icons/phosphor/IconArrowPlay";
import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
import { robotoRegular } from "@/design/fontDefaults";
import { IconArrowNext } from "@/components/ui/icons/phosphor/IconArrowNext";
import { IconArrowPrevious } from "@/components/ui/icons/phosphor/IconArrowPrevious";
import { playCardStyles } from "./playbackCardStyles";
import { IconArrowPause } from "@/components/ui/icons/phosphor/IconArrowPause";
import { useAudioContext } from "@/components/context/audio/AudioContext";
import { PanInfo, motion, useDragControls } from "framer-motion";
import { set } from "zod";

// TODO: Add styles using cva to PlaybackCard
export const PlaybackCard = forwardRef<HTMLDivElement, PlaybackCardProps>(({ children }, ref) => {
    const {
        toggleAudio,
        nextAudio,
        previousAudio,
        audioIsPlaying,
        currentTime,
        duration,
        durationTimeString,
        formattedRemainingTime,
        progressPercentage,
        seekAudioTime,
    } = useAudioContext();
    const [audioTime, setAudioTime] = useState(0);
    const [audioDuration, setAudioDuration] = useState<string | undefined>("0:00");
    const [audioRemainingTime, setAudioRemainingTime] = useState<string | undefined>(undefined);
    const [progressWidth, setProgressWidth] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const progressBarRef = useRef<HTMLDivElement>(null);

    interface EventWithClientX {
        event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>;
        clientX: number;
    }

    const calculateSeekTime = useCallback(
        ({ event, clientX }: EventWithClientX) => {
            const progressBar = event.currentTarget as HTMLDivElement;

            if (progressBar) {
                const bounds = progressBar.getBoundingClientRect();
                const position = clientX - bounds.left;
                const newTime = (position / bounds.width) * duration;
                seekAudioTime(newTime);
            }
        },
        [duration, seekAudioTime]
    );

    // Example of an onClick handler that uses the refactored calculateSeekTime
    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        const clientX = event.clientX; // Get clientX from the mouse event
        calculateSeekTime({ event, clientX: clientX });
    };

    // Example of an onTouchStart handler that uses the refactored calculateSeekTime
    const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
        if (event.touches && event.touches.length > 0) {
            const clientX = event.touches[0]?.clientX; // Get clientX from the touch event
            if (clientX && event) {
                calculateSeekTime({ event, clientX: clientX });
            }
        }
    };

    const handleDrag = useCallback(
        (event: any, info: PanInfo) => {
            const target = event.target as HTMLElement;
            // const progressBar = target.closest('.progress_bar_container') as HTMLDivElement;
            const progressBar = progressBarRef.current;
            if (!progressBar) return;

            const bounds = progressBar.getBoundingClientRect();
            const x = info.point.x - bounds.left; // Get the current drag position relative to the progress bar
            const newWidth = Math.max(0, Math.min(x, bounds.width));
            const newTime = (newWidth / bounds.width) * duration; // Convert the drag position to a time value

            setIsDragging(true); // Set isDragging to true
            setProgressWidth((newWidth / bounds.width) * 100); // Update progress width
            seekAudioTime(newTime); // Update the current time in the audio context
        },
        [duration, seekAudioTime]
    );

    const formatAudioTime = useCallback(
        (time: number = currentTime) => {
            if (!time) return;
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            const timeString = `${minutes}:${formattedSeconds}`;

            return timeString;
        },
        [currentTime]
    );

    // Update progressWidth when currentTime or duration changes
    useEffect(() => {
        setProgressWidth((currentTime / duration) * 100);
    }, [currentTime, duration]);

    // const clickPositionProgress = useCallback(
    //     (event: MouseEvent<HTMLDivElement>) => {
    //         const progressBarContainer = event.currentTarget.getBoundingClientRect();
    //         const clickPositionX = event.clientX - progressBarContainer.left;
    //         const seekTime = (clickPositionX / progressBarContainer.width) * duration;
    //         seekAudioTime(seekTime);
    //     },
    //     [duration, seekAudioTime]
    // );

    // const dragPositionProgress = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    //     const progressBar = event.currentTarget as HTMLDivElement;
    //     const progressBarWidth = progressBar.clientWidth;
    //     const newTime = (info.point.x - progressBar.getBoundingClientRect().left / progressBarWidth) * duration;
    //     seekAudioTime(Math.min(Math.max(newTime, 0), duration));
    // }, [duration, seekAudioTime])

    useEffect(() => {
        setAudioTime(currentTime);
        setAudioRemainingTime(formattedRemainingTime);
        formatAudioTime();
    }, [audioIsPlaying, currentTime, duration, toggleAudio, formattedRemainingTime, formatAudioTime]);

    return (
        <div className="PlaybackPlayerRootContainer w-[42.648vw] h-[77.847vh] flex-col justify-center items-center gap-[10.09px] inline-flex">
            {/* pl-[51px] pr-[10.09px] pt-[25px] pb-[10.09px] */}
            <div className="top_content self-stretch pt-[25px] rounded-t-[42.40px] flex-col justify-center items-center gap-[5.05px] flex">
                <div
                    ref={progressBarRef}
                    className="playback_progress_container flex flex-col self-stretch justify-center items-center gap-[5.05px] rounded-2xl"
                >
                    <div className="song_time_text_container w-[35.298vw] inline-flex">
                        <div className="SongElapsed grow shrink basis-0 h-3 justify-start items-start px-[0.384vw] flex">
                            <div
                                className={cn(
                                    "34 grow shrink basis-0 text-zinc-900 dark:text-gray-200 text-[10.09px] font-bold",
                                    robotoRegular.className
                                )}
                            >
                                {formatAudioTime() || "0:00"}
                            </div>
                        </div>
                        <div className="SongRemaining grow shrink basis-0 h-3 pl-[3.03px] pr-[10.09px] justify-end items-start gap-[10.09px] flex">
                            <div
                                className={cn(
                                    "113 grow shrink basis-0 text-right text-zinc-900 dark:text-gray-200 text-[10.09px] font-bold",
                                    robotoRegular.className
                                )}
                            >
                                - {audioRemainingTime ? audioRemainingTime : "0:00"}
                            </div>
                        </div>
                    </div>
                    <div className="progress_bar_container w-[35.298vw] h-[16.15px] relative">
                        <motion.div
                            className="progress_bar_area w-full h-full left-0 top-0 bottom-0 right-0 absolute bg-zinc-900 bg-opacity-10 rounded-[40.37px]
                        dark:bg-[rgba(241,245,249,0.1)]
                        "
                            onClick={handleClick}
                            onTouchStart={handleTouchStart}
                        >
                            <motion.div
                                className="Progress w-[2.750%] group h-full left-0 top-0 absolute bg-zinc-900 bg-opacity-90 rounded-[40.37px]
                        h-full w-[68.6%] top-[0%] right-[31.4%] bottom-[0%] left-[0%] rounded-[40.37px] dark:bg-gray-200 dark:absolute
                        "
                                style={{ width: progressWidth + "%" }}
                            >
                                <motion.div
                                    className={cn(
                                        "progress_bar_button absolute w-[16.15px] right-0 h-full rounded-full ring-1 ring-white hover:cursor-grab backdrop-blur-xl bg-zinc-900/70 opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-100"
                                    )}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: progressBarRef ? progressWidth - 30 : 0 }}
                                    onDragStart={() => setIsDragging(true)}
                                    whileDrag={{ cursor: "grabbing", opacity: 1, transition: { duration: 0 } }}
                                    onDrag={handleDrag}
                                    onDragEnd={() => setIsDragging(false)}
                                    dragMomentum={false}
                                    dragSnapToOrigin={true}
                                    dragTransition={{ min: 0, max: 0, bounceStiffness: 999, bounceDamping: 20 }}
                                    dragElastic={0}
                                    onMouseDown={() => {
                                        setIsDragging(true);
                                    }}
                                    onMouseUp={() => {
                                        setIsDragging(false);
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="BMusicImageTransparent self-stretch grow shrink basis-0 p-2.5" />

            <div className="BPlaybackButtonDiv h-[20vh] self-stretch pl-[27px] pb-[13px] justify-center items-center gap-[21.65px] inline-flex rounded-b-[42.40px]">
                <button className={playCardStyles({ playButton: "root" })} onClick={previousAudio}>
                    <div className="BackwardButton px-[8.12px] pt-[31.12px] pb-[4.06px] justify-center items-center gap-[13.53px] flex">
                        <IconArrowPrevious iconDirection="45_rotation" className="text-white mb-[34%]" />
                    </div>
                </button>
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
