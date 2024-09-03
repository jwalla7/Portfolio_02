import { FC } from "react"
import { ChatProfileCardProps } from "./chatProfileCardProps"
import { ChatProfileUser } from "../ChatProfileUser/ChatProfileUser"
import { ChatProfilePostCard } from "../ChatProfilePostCard/ChatProfilePostCard"
import { ChatProfileUserPost } from "../ChatProfileUserPost/ChatProfileUserPost"

export const ChatProfileCard: FC<ChatProfileCardProps> = () => {
    return (
        <>
            <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[650px] gap-8 py-5 rounded-tl-3xl rounded-bl-3xl bg-black/10 backdrop-blur-[100px] self-center"
                style={{ boxShadow: "0px 8px 6px 0 rgba(0,0,0,0.05)" }}
            >
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 px-5 pb-5 h-full relative overflow-hidden gap-[1.25rem]">
                    <ChatProfileUser />
                    <ChatProfilePostCard>
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                        <ChatProfileUserPost />
                    </ChatProfilePostCard>
                </div>
            </div>
        </>
    )
}