import { FC, useCallback, useEffect, useState } from "react";
import { ArtistCardProps } from "./artistCardProps";
import Image from "next/image";
import { useAudioContext } from "@/components/context/audio/AudioContext";
import { inter } from "@/design/fontDefaults";
import { cn } from "@/lib/utils";
import { LRUCacheProps } from "@/components/cache/audio/audioLRUCache";

export const ArtistCard: FC<ArtistCardProps> = (() => {
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

    const [tracks, setTracks] = useState<LRUCacheProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingTracksDisplayed, setLoadingTracksDisplayed] = useState<number>(0);
    const [loadingTrackIndex, setLoadingTrackIndex] = useState<number>(3);

    const handleTrackClick = useCallback(
        (trackId: string | undefined) => {
            if (!trackId || !audioCacheData) return;

            const trackData = audioCacheData?.get(trackId);

            if (trackData) {
                audioCacheData.setCurrentNode(trackData.id);
                setTrack(trackData.track);
                setAudioStream(trackData.streamLink);
                setCurrentArtwork(trackData.artwork ?? "");
            }
        },
        [
            audioCacheData,
            setTrack,
            setCurrentArtwork,
            setAudioStream,
        ]
    );

    useEffect(() => {
        if (!audioCacheData) return;
        console.log("CURRENT NODE FROM ARTIST: ", audioCacheData.getCurrentNodeValue());
        setLoading(true);
        const allTracks = audioCacheData
            .getAllKeys()
            .map((key) => {
                setLoading(true);
                const track = audioCacheData.get(key);
                if (track) {
                    return {
                        ...track,
                        formattedDuration: formattedDurationById(key),
                    };
                } else {
                    return null;
                }
            })
            .filter((track) => track !== null);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setTracks(allTracks as any);
        const loadingDelay = setTimeout(() => {
            const interval = setInterval(() => {
                if (loadingTracksDisplayed < allTracks.length) {
                    setLoadingTrackIndex((prev) => prev - 1);
                    setLoading(false);
                    setLoadingTracksDisplayed((prev) => prev + 1);
                } else {
                    clearInterval(interval);
                }
            }, 175);
            return () => clearInterval(interval);
        }, 1500);
        return () => clearTimeout(loadingDelay);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioCacheData, cacheUpdated, formattedDurationById]);

    return (
        <>
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
                                        )
                                )}
                            </div>
                        ) : (
                            [...tracks].reverse().map(
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
                                                    {track?.user.name || "Unknown Artist Name"}
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
                                    )
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
});