import { FC } from "react";
import { ChatProfileUserProps } from "./chatProfileUserProps";
import Image from "next/image";
import { IconEnvelopSimple } from "@/components/ui/icons/phosphor/IconEnvelopeSimple";

export const ChatProfileUser: FC<ChatProfileUserProps> = () => {
    return (
        <div className="wrapper flex flex-col items-start justify-center w-full gap-2" >
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 relative gap-[90px] w-full">
                <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white m-0">Name</p>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] relative rounded-[15px] bg-white/10 min-h-[30px]">
                    <div className="flex flex-col justify-center items-center w-[30px] h-[30px] absolute left-0 top-0 rounded-[100px] bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 256 256"><path d="M184.49,119.51a12,12,0,0,1,0,17l-72,72a12,12,0,0,1-17-17L147,140H32a12,12,0,0,1,0-24H147L95.51,64.49a12,12,0,0,1,17-17ZM216,28a12,12,0,0,0-12,12V216a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28Z"></path></svg>
                        {/* Close svg */}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M236,128a12,12,0,0,1-12,12H109l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L109,116H224A12,12,0,0,1,236,128ZM40,28A12,12,0,0,0,28,40V216a12,12,0,0,0,24,0V40A12,12,0,0,0,40,28Z"></path></svg> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                    <div className="flex w-[29px] h-[29px] rounded-[50%] bg-white items-center justify-center">
                        <Image src="/images/jwalla.png" alt="Profile Picture" width={25} height={25} />
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">Welcome, Name!</p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path></svg>
                    <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">Email</p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                    <div
                        className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-7 w-7 relative rounded-[100px] bg-transparent"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path></svg>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">Location</p>
                </div>
            </div>
        </div >
    )
}