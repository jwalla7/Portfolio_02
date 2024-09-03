import { FC } from "react"
import { ChatProfilePostCardProps } from "./chatProfilePostCardProps"

export const ChatProfilePostCard: FC<ChatProfilePostCardProps> = ({ children }) => {
    return (
        <div className="flex flex-col gap-[1.25rem] w-full h-full">
            <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 relative gap-[90px] w-full">
                <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-center text-white m-0">My Posts</p>
                </div>
            </div>

            <div className="my_posts_wrapper flex flex-col overflow-auto w-full relative max-h-[389px] scrollbar-none">
                {children}
            </div>
        </div>
    )
}