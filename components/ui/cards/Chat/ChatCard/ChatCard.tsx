import { FC } from "react";
import { ChatCardProps } from "./chatCardProps";
import { ChatProfileCard } from "../ChatProfileCard/ChatProfileCard";
import { ChatMessageCard } from "../ChatMessageCard/ChatMessageCard";

export const ChatCard: FC<ChatCardProps> = () => {
    return (
        <>
            <ChatProfileCard />
            <ChatMessageCard />
        </>
    )
}