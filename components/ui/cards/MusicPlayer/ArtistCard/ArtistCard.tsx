import { forwardRef, useEffect } from "react";
import { ArtistCardProps } from "./artistCardProps";
import Image from "next/image";
import { useAudioContext } from "@/components/context/audio/AudioContext";

export const ArtistCard = forwardRef<HTMLDivElement, ArtistCardProps>(({ children }, ref) => {
    const { currentArtwork, currentUserProfilePicture } = useAudioContext();

    return (
        <>
            <div className="Artist Card w-full h-full">
                <div className="Artwork relative w-[100%] min-h-[189px] transform-style-3d-rotate-y-15 chrome-three-backdrop-blur">
                    <div className="w-[100%] h-auto min-h-[189px] absolute top-0 left-0 border-transparent outline-none">
                        <Image
                            alt="artist artwork"
                            quality={100}
                            src={currentArtwork._1000x1000 || ""}
                            width={100}
                            height={100}
                            className="relative w-[100%] min-h-[189px] rounded-t-[40.42px] chrome-three-backdrop-blur opacity-[.89] border-transparent outline-none p-0 m-0 top-0 left-0"
                        />
                    </div>
                    <div className="Artwork_Blur_Layer w-[100%] h-[100%] absolute top-0 left-0 rounded-t-[42.20px] bg-blue-900/[.05] p-[.5px] m-[-1px] outline-none border-none z-10" />
                </div>
                <div className="Profile_Picture-Root w-[100%] h-auto flex justify-center items-center absolute top-[7rem] left-0 bg-transparent z-20">
                    <div className="Profile_Picture-Layer-1 relative min-w-[142.45px] min-h-[145.38px] rounded-[50%] bg-yellow-400 shadow-md">
                        <Image
                            alt="artist profile picture"
                            quality={100}
                            src={currentUserProfilePicture._1000x1000 || ""}
                            width={100}
                            height={100}
                            className=" Profile_Picture w-[100%] h-[100%] rounded-[50%] absolute top-0 left-0 outline-none border-none ring-[5px] ring-white"
                        />
                        <div className="Profile_Picture-Overlay w-[100%] h-[100%] min-w-[142.45px] min-h-[145.38px] bg-[rgba(191,191,191,0.05)]/[.34] absolute rounded-[50%] ring-0 outline-none border-none" />
                    </div>
                </div>
                <div className="Artist_Overlay w-full h-full z-30 bg-transparent absolute top-0 rounded-[40.42px] shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.34)] dark:shadow-[inset_0_1.18px_21px_0_rgba(250,250,250,.34)]" />
            </div>
        </>
    );
});

ArtistCard.displayName = "ArtistCard";
