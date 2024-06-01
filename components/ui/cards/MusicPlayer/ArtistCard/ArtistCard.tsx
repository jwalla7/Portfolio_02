import { forwardRef, useCallback, useEffect, useState } from "react";
import { ArtistCardProps } from "./artistCardProps";
import Image from "next/image";
import { useAudioContext } from "@/components/context/audio/AudioContext";
import { inter } from "@/design/fontDefaults";
import { cn } from "@/lib/utils";
import { LRUCacheProps } from "@/components/cache/audio/audioLRUCache";

export const ArtistCard = forwardRef<HTMLDivElement, ArtistCardProps>(({ children }, ref) => {
    const {
        currentArtwork,
        currentUserProfilePicture,
        audioCacheData,
        cacheUpdated,
        debouncedSetCacheUpdated,
        setTrack,
        setCurrentArtwork,
        formattedDurationById,
    } = useAudioContext();

    const [tracks, setTracks] = useState<LRUCacheProps[]>([]);

    const handleTrackClick = useCallback(
        (trackId: string | undefined) => {
            if (!trackId || !audioCacheData) return;

            console.log("Track ID: ", trackId);
            const trackData = audioCacheData?.get(trackId);

            if (trackData) {
                audioCacheData.setCurrentNode(trackId);
                setTrack(trackData.track);
                setCurrentArtwork(trackData.artwork ?? "");
            }

            debouncedSetCacheUpdated();
        },
        [audioCacheData, debouncedSetCacheUpdated, setTrack, setCurrentArtwork]
    );

    useEffect(() => {
        if (!audioCacheData) return;
        const allTracks = audioCacheData
            .getAllKeys()
            .map((key) => {
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
        setTracks(allTracks as any);
    }, [audioCacheData, cacheUpdated, formattedDurationById]); // Dependency on cacheUpdated to trigger re-render

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
                            <div className="relative w-[100%] min-h-[189px] rounded-t-[40.42px] backdrop-blur-[135px] bg-slate-400/30 animate-pulse"></div>
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
                            <div className="w-[100%] h-[100%] rounded-[50%] absolute top-0 left-0 backdrop-blur-[135px] bg-slate-300 animate-pulse"></div>
                        )}
                        <div className="Profile_Picture-Overlay w-[100%] h-[100%] min-w-[145.38px] min-h-[145.38px] bg-[rgba(191,191,191,0.05)]/[.34] absolute rounded-[50%] ring-0 outline-none border-none"></div>
                    </div>
                </div>
                <div className="Artist_Overlay w-full h-full z-30 bg-transparent absolute top-0 rounded-[40.42px] shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.34)] dark:shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.34)]"></div>

                <div className="Playlist_Root relative flex grow flex-col w-full min-h-[300px] pt-[100px] z-30">
                    <div className="Playlist_Tracks relative flex flex-col pt-[100px] px-[21px] pb-[12px]">
                        {/* {mapTracks()} */}
                        {[...tracks].reverse().map((track, index) => (
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
                                    <span className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}>Title</span>
                                    <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                        {track?.title || "Unknown Track Title"}
                                    </span>
                                </div>
                                <div className="Track_Artist flex flex-col gap-3 min-h-[45px] min-w-[44px] items-start">
                                    <span className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}>Name</span>
                                    <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                        {track?.user.name || "Unknown Artist Name"}
                                    </span>
                                </div>
                                <div className="Track_Artist flex flex-col gap-3 min-h-[45px] min-w-[44px] items-start">
                                    <span className={cn(inter.className, "text-[#EBEBF5]/60 font-medium text-[14px]")}>Time</span>
                                    <span className={cn(inter.className, "font-medium text-[12px] text-white")}>
                                        {track.formattedDuration}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
});

ArtistCard.displayName = "ArtistCard";
