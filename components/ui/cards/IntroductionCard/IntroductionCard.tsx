import { FC } from "react"
import { IntroductionCardProps } from "./introductionCardProps"

export const IntroductionCard: FC<IntroductionCardProps> = (({ children }) => {
    return (
        <div className="flex items-center justify-center relative w-screen h-full ">
            <div className="max-w-[1200px] w-[1200px] max-h-[710px] h-[632.5px] mt-[89px] ring-1 ring-[hsla(0,0%,100%,.12)] rounded-[10px] relative">
                <div className="w-full h-full shadow[0_4px_116px_0_hsla(0,0%,94%,.11)] rounded-[10px] transform-style-3d chrome-three-backdrop-blur backdrop-blur-[259.67px]">
                    <div className="w-full h-full bg-transparent bg-opacity-10">
                        <div className="text-black">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})