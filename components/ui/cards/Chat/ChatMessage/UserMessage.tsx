import { FC } from "react";
import { UserMessageProps } from "./userMessageProps";

export const UserMessage: FC<UserMessageProps> = () => {
    return (
        <div
            className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-[17px] rounded-md border border-gray-200"
            style={{ filter: "drop-shadow(0px 4px 4px rgba(174,174,174,0.25))" }
            }
        >
            <div className="flex-grow-0 flex-shrink-0 w-10 h-10 rounded-md bg-[#d9d9d9]"></div>
            <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1"
            >
                <div
                    className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
                >
                    <p className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-left text-slate-900">
                        Username
                    </p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-slate-500">San Jose, CA</p>
                    <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-slate-500">12h</p>
                </div>
                <p
                    className="self-stretch flex-grow-0 flex-shrink-0 w-[393px] text-sm text-left text-slate-900"
                >
                    The React Framework - created and maintained by @vercel
                </p>
            </div>
        </div >
    )
}