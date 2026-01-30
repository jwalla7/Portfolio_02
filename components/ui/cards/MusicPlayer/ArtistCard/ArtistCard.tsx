import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { ArtistCardProps } from "./artistCardProps";
import Image from "next/image";
import { useAudioContext } from "@/components/context/audio/AudioContext";
import { inter } from "@/design/fontDefaults";
import { cn } from "@/lib/utils";
import { LRUCacheProps } from "@/components/cache/audio/audioLRUCache";
import { useMediaQuery } from "@/components/hooks/useMediaQuery/useMediaQuery";

type TrackListItem = LRUCacheProps & { formattedDuration: string };

const EMPTY_IMAGE_SET = { _150x150: "", _480x480: "", _1000x1000: "" };

export const ArtistCard: FC<ArtistCardProps> = () => {
    const {
        currentArtwork,
        currentUserProfilePicture,
        audioCacheData,
        cacheUpdated,
        setTrack,
        setAudioStream,
        setCurrentArtwork,
        formattedDurationById,
    } = useAudioContext();

    const [tracks, setTracks] = useState<TrackListItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingTracksDisplayed, setLoadingTracksDisplayed] = useState<number>(0);
    const [loadingTrackIndex, setLoadingTrackIndex] = useState<number>(3);
    const isMobileSM = useMediaQuery("sm");

    const handleTrackClick = useCallback(
        (trackId: string | undefined) => {
            console.log("[ArtistCard] handleTrackClick called with trackId:", trackId);
            if (!trackId || !audioCacheData) {
                console.log("[ArtistCard] handleTrackClick returning early: no trackId or audioCacheData");
                return;
            }

            const trackData = audioCacheData?.get(trackId);
            console.log("[ArtistCard] trackData found:", trackData);

            if (trackData) {
                audioCacheData.setCurrentNode(trackData.id);
                setTrack(trackData);
                console.log("[ArtistCard] Calling setAudioStream with:", trackData?.streamLink);
                setAudioStream(trackData.streamLink);
                setCurrentArtwork(trackData.artwork ?? EMPTY_IMAGE_SET);
            } else {
                console.log("[ArtistCard] handleTrackClick: no trackData found for id:", trackId);
            }
        },
        [audioCacheData, setTrack, setCurrentArtwork, setAudioStream],
    );

    // Memoize the calculation of all tracks
    const allTracksMemoized = useMemo<TrackListItem[]>(() => {
        if (!audioCacheData) {
            return [];
        }
        console.log("Recomputing allTracksMemoized due to audioCacheData or formattedDurationById change.");
        return audioCacheData
            .getAllKeys()
            .map((key): TrackListItem | null => {
                const track = audioCacheData.peek(key);
                if (!track) {
                    return null;
                }
                return {
                    ...track,
                    formattedDuration: formattedDurationById(key),
                };
            })
            .filter(Boolean) as TrackListItem[];
    }, [audioCacheData, formattedDurationById, cacheUpdated]);

    useEffect(() => {
        console.log("ArtistCard useEffect: allTracksMemoized:", allTracksMemoized);
        console.log("ArtistCard useEffect: cacheUpdated:", cacheUpdated);

        // This effect manages the display of tracks and the loading animation sequence.
        // It depends on the memoized track list and cacheUpdated signal.

        // Update the internal `tracks` state.
        setTracks(allTracksMemoized);

        console.log("ArtistCard useEffect: allTracksMemoized.length === 0 is", allTracksMemoized.length === 0);
        if (allTracksMemoized.length === 0) {
            setLoading(true); // If no tracks, ensure loading state is true (or handle empty state)
            setLoadingTracksDisplayed(0);
            setLoadingTrackIndex(3); // Reset skeleton display counter
            return; // Exit if no tracks to animate
        }

        // Start/reset the loading animation sequence for the tracks
        setLoading(true); // Set loading to true to show skeleton before animation starts.
        setLoadingTracksDisplayed(0); // Reset counter for how many tracks are shown.
        setLoadingTrackIndex(3); // Reset counter for skeleton items.

        const startAnimationDelay = setTimeout(() => {
            const animationInterval = setInterval(() => {
                setLoadingTracksDisplayed((currentDisplayed) => {
                    const nextDisplayed = currentDisplayed + 1;
                    console.log("ArtistCard Animation Interval: setLoadingTracksDisplayed, nextDisplayed:", nextDisplayed);
                    if (nextDisplayed <= allTracksMemoized.length) {
                        // As soon as the first track (or subsequent ones) are to be displayed,
                        // set loading to false to hide the main skeleton and show the animated list.
                        setLoading(false);
                        setLoadingTrackIndex((prevIndex) => Math.max(0, prevIndex - 1));
                        return nextDisplayed;
                    } else {
                        clearInterval(animationInterval);
                        setLoading(false); // Ensure loading is false when animation is complete.
                        return currentDisplayed;
                    }
                });
            }, 175);
            // Cleanup for the interval when the timeout callback itself is cleaned up or re-run.
            return () => clearInterval(animationInterval);
        }, 1500); // Initial delay before the animation starts.

        // Cleanup for the timeout.
        return () => clearTimeout(startAnimationDelay);

        // The dependencies for this effect are allTracksMemoized and cacheUpdated.
        // The original eslint-disable might need adjustment or the underlying issues fixed.
        // TODO: Re-evaluate exhaustive-deps for this useEffect. If `allTracksMemoized` correctly captures
        // data changes from `audioCacheData` and `formattedDurationById`, and `cacheUpdated` is an
        // independent trigger, these dependencies should be correct.
        // The previous TODO about formattedDurationById is now handled by its inclusion in allTracksMemoized's deps.
    }, [allTracksMemoized, cacheUpdated]);

    return (
        <>
            {isMobileSM ? (
                <>
                    <div className="Playlist_Tracks relative flex flex-col pb-[21px]">
                        {loading ? (
                            <div className="Loading Track UI">
                                {Array.from(
                                    { length: 3 },
                                    (_, index) =>
                                        index < loadingTrackIndex && (
                                            <div
                                                key={index}
                                                className="flex flex-row bg-[rgba(266,266,266,.1)] px-[13px] py-[14px] border-[1px] border-solid border-zinc-900/20 border-b-0 border-l-0 border-r-0 h-[89px] hover:bg-white/20 rounded-r-[3px] rounded-bl-[3px] text-[14px] items-center gap-8 justify-between pr-[55px] overflow-hidden backdrop-blur-[135px] first:rounded-t-[6px] last:rounded-b-[6px]"
                                            >
                                                <div className="h-full min-w-[89px] animate-pulse bg-slate-300/60 rounded-[6px]" />
                                                <div className="min-h-[45px] w-full flex flex-col gap-3 items-start">
                                                    <div className="h-[20px] w-[100%] animate-pulse bg-slate-300/30 rounded-sm" />
                                                    <div className="h-[20px] w-[89%] animate-pulse bg-slate-300/30 rounded-sm" />
                                                </div>
                                            </div>
                                        ),
                                )}
                            </div>
                        ) : (
                            tracks.map(
                                (track, index) =>
                                    index < loadingTracksDisplayed && (
                                        <div
                                            key={track ? track.id : index}
                                            onClick={() => handleTrackClick(track?.id)}
                                            className="Track flex flex-row bg-[rgba(266,266,266,.1)] px-[13px] py-[14px] border-[1px] border-solid border-zinc-900/20 border-b-0 border-l-0 border-r-0 h-[89px] hover:bg-white/20 rounded-r-[3px] rounded-bl-[3px] rounded-tl-[3px] text-[14px] items-center gap-2 justify-between pr-[55px] overflow-hidden backdrop-blur-[135px] first:rounded-t-[6px] last:rounded-b-[6px]"
                                        >
                                            <div className="Track_Artwork">
                                                {track?.artwork ? (
                                                    <Image
                                                        src={track.artwork._480x480}
                                                        alt="Track Artwork"
                                                        width={100}
                                                        height={100}
                                                        className="h-full rounded-[6px] w-[89px]"
                                                    />
                                                ) : (
                                                    <div className="h-full w-[89px] animate-pulse bg-slate-500"></div>
                                                )}
                                            </div>
                                            <div className="Track_Name flex flex-col gap-3 min-h-[45px] min-w-[44px] items-start">
                                                <span className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}>
                                                    Title
                                                </span>
                                                <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                                    {track?.title || "Unknown Track Title"}
                                                </span>
                                            </div>
                                            <div className="Track_Artist flex flex-col gap-3 min-h-[45px] min-w-[44px] items-start">
                                                <span className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}>
                                                    Name
                                                </span>
                                                <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                                    {track?.user?.name || "Unknown Artist Name"}
                                                </span>
                                            </div>
                                            <div className="Track_Artist flex flex-col gap-3 min-h-[45px] min-w-[44px] items-start">
                                                <span className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}>
                                                    Time
                                                </span>
                                                <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                                    {track.formattedDuration}
                                                </span>
                                            </div>
                                        </div>
                                    ),
                            )
                        )}
                    </div>
                </>
            ) : (
                <div className="Artist Card relative w-full h-full">
                    <div className="Artwork relative w-[100%] min-h-[189px] h-auto transform-style-3d-rotate-y-15 chrome-three-backdrop-blur border-transparent outline-none bg-transparent">
                        <div className="w-[100%] h-auto min-h-[189px] absolute top-0 left-0 border-transparent outline-none justify-center items-center">
                            {currentArtwork._1000x1000 ? (
                                <Image
                                    alt="artist artwork"
                                    quality={100}
                                    src={currentArtwork._1000x1000 || ""}
                                    width={100}
                                    height={100}
                                    style={{ color: "transparent" }}
                                    className="relative w-[100%] min-h-[189px] rounded-t-[40.42px] chrome-three-backdrop-blur opacity-[.89] bg-transparent border-transparent outline-none p-0 m-0 top-0 left-0"
                                />
                            ) : (
                                <div className="relative w-[100%] min-h-[189px] rounded-t-[40.42px] backdrop-blur-[135px] bg-slate-300/60 animate-pulse"></div>
                            )}
                        </div>
                        <div className="Artwork_Blur_Layer w-[100%] h-[100%] absolute top-0 left-0 rounded-t-[42.20px] p-[.5px] m-[-1px] outline-none border-none z-10"></div>
                    </div>

                    <div className="Profile_Picture-Root w-[100%] h-auto flex justify-center items-center absolute top-[7rem] left-0 bg-transparent z-40">
                        <div className="Profile_Picture-Layer-1 relative min-w-[145.38px] min-h-[145.38px] rounded-[50%] bg-white shadow-md">
                            {currentUserProfilePicture._1000x1000 ? (
                                <Image
                                    alt="artist profile picture"
                                    quality={100}
                                    src={currentUserProfilePicture._1000x1000 || ""}
                                    width={100}
                                    height={100}
                                    style={{ color: "transparent" }}
                                    className=" Profile_Picture w-[100%] h-[100%] rounded-[50%] absolute top-0 left-0 outline-none border-none ring-[5px] ring-white"
                                />
                            ) : (
                                <div className="w-[100%] h-[100%] rounded-[50%] absolute top-0 left-0 backdrop-blur-[135px] bg-slate-300/30 animate-pulse"></div>
                            )}
                            <div className="Profile_Picture-Overlay w-[100%] h-[100%] min-w-[145.38px] min-h-[145.38px] bg-slate-300/10 absolute rounded-[50%] ring-0 outline-none border-none"></div>
                        </div>
                    </div>
                    <div className="Artist_Overlay w-full h-full z-30 bg-transparent absolute top-0 rounded-[40.42px] shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.34)] dark:shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.34)]"></div>

                    <div className="Playlist_Root relative flex grow flex-col w-full min-h-[300px] pt-[100px] z-30">
                        <div className="Playlist_Tracks relative flex flex-col pt-[100px] px-[21px] pb-[12px]">
                            {loading ? (
                                <div className="Loading Track UI">
                                    {Array.from(
                                        { length: 3 },
                                        (_, index) =>
                                            index < loadingTrackIndex && (
                                                <div
                                                    key={index}
                                                    className="flex flex-row bg-[rgba(266,266,266,.1)] px-[13px] py-[14px] border-[1px] border-solid border-zinc-900/20 border-b-0 border-l-0 border-r-0 h-[89px] hover:bg-white/20 rounded-r-[3px] rounded-bl-[3px] text-[14px] items-center gap-8 justify-between pr-[55px] overflow-hidden backdrop-blur-[135px]"
                                                >
                                                    <div className="h-full min-w-[89px] animate-pulse bg-slate-300/60 rounded-[6px]" />
                                                    <div className="min-h-[45px] w-full flex flex-col gap-3 items-start">
                                                        <div className="h-[20px] w-[100%] animate-pulse bg-slate-300/30 rounded-sm" />
                                                        <div className="h-[20px] w-[89%] animate-pulse bg-slate-300/30 rounded-sm" />
                                                    </div>
                                                </div>
                                            ),
                                    )}
                                </div>
                            ) : (
                                tracks.map(
                                    (track, index) =>
                                        index < loadingTracksDisplayed && (
                                            <div
                                                key={track ? track.id : index}
                                                onClick={() => handleTrackClick(track?.id)}
                                                className="Track flex flex-row bg-[rgba(266,266,266,.1)] px-[13px] py-[14px] border-[1px] border-solid border-zinc-900/20 border-b-0 border-l-0 border-r-0 h-[89px] hover:bg-white/20 rounded-r-[3px] rounded-bl-[3px] text-[14px] items-center gap-2 justify-between pr-[55px] overflow-hidden backdrop-blur-[135px]"
                                            >
                                                <div className="Track_Artwork">
                                                    {track?.artwork ? (
                                                        <Image
                                                            src={track.artwork._480x480}
                                                            alt="Track Artwork"
                                                            width={100}
                                                            height={100}
                                                            className="h-full rounded-[6px] w-[89px]"
                                                        />
                                                    ) : (
                                                        <div className="h-full w-[89px] animate-pulse bg-slate-500"></div>
                                                    )}
                                                </div>
                                                <div className="Track_Name flex flex-col gap-3 min-h-[45px] min-w-[44px] items-start">
                                                    <span
                                                        className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}
                                                    >
                                                        Title
                                                    </span>
                                                    <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                                        {track?.title || "Unknown Track Title"}
                                                    </span>
                                                </div>
                                                <div className="Track_Artist flex flex-col gap-3 min-h-[45px] min-w-[44px] items-start">
                                                    <span
                                                        className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}
                                                    >
                                                        Name
                                                    </span>
                                                    <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                                        {track?.user?.name || "Unknown Artist Name"}
                                                    </span>
                                                </div>
                                                <div className="Track_Artist flex flex-col gap-3 min-h-[45px] min-w-[44px] items-start">
                                                    <span
                                                        className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}
                                                    >
                                                        Time
                                                    </span>
                                                    <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                                        {track.formattedDuration}
                                                    </span>
                                                </div>
                                            </div>
                                        ),
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
