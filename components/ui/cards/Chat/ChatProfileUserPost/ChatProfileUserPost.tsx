import { FC } from "react"
import { ChatProfileUserPostProps } from "./chatProfileUserPostProps"

export const ChatProfileUserPost: FC<ChatProfileUserPostProps> = () => {
    return (
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[17px] pl-px">
            <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
                preserveAspectRatio="xMidYMid meet"
            >
                <rect y="0.5" width="28" height="28" rx="6" fill="white" fillOpacity="0.1"></rect>
                <path
                    d="M10.209 19.3623L14 15.5713L17.791 19.3623C18.1763 19.7476 18.8165 19.7538 19.208 19.3623C19.5995 18.9708 19.5933 18.3306 19.208 17.9453L15.417 14.1543L19.208 10.3633C19.5933 9.97795 19.5995 9.33782 19.208 8.94629C18.8165 8.55476 18.1763 8.56097 17.791 8.94629L14 12.7373L10.209 8.94629C9.82365 8.56097 9.18352 8.55476 8.79199 8.94629C8.40046 9.33782 8.40667 9.97795 8.79199 10.3633L12.583 14.1543L8.79199 17.9453C8.40667 18.3306 8.40046 18.9708 8.79199 19.3623C9.18352 19.7538 9.82365 19.7476 10.209 19.3623Z"
                    fill="white"
                    fillOpacity="0.8"
                ></path>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">Post Title</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">99/99/9999</p>
        </div>
    )
}