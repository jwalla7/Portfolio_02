import { FC } from "react";
import { ChatMessageCardProps } from "./chatMessageCardProps";

export const ChatMessageCard: FC<ChatMessageCardProps> = () => {
    return (
        <div
            className="flex flex-col justify-end items-center gap-6 pl-5 pr-[30px] pt-0 pb-0 rounded-bl-3xl rounded-br-3xl bg-white/[0.04] backdrop-blur-[100px] relative h-full"
            style={{ boxShadow: "0px 8px 6px 0 rgba(0, 0, 0, 0.05)" }}
        >
            <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[754px] gap-[3px] absolute top-[49px] left-0 pl-[24px]"
            >
                <div
                    className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8"
                >
                    <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white mb-0">Posts</p>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white/[0.64] mt-0">304 Posts</p>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow gap-6 pt-[100px] pl-[100px] pr-[100px] overflow-auto scrollbar-none top-0 relative">
                <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[555px] overflow-hidden gap-2.5 p-2.5"
                >
                    <div
                        className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-[17px] rounded-md border border-gray-200"
                        style={{ filter: "drop-shadow(0px 4px 4px rgba(174,174,174,0.25))" }}
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
                    </div>
                    <div
                        className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-[17px] rounded-md border border-gray-200"
                        style={{ filter: "drop-shadow(0px 4px 4px rgba(174,174,174,0.25))" }}
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
                            <p className="flex-grow-0 flex-shrink-0 w-[434px] text-sm text-left text-slate-900">
                                The React Framework - created and maintained by @vercelThe React Framework - created
                                and maintained by @vercel The React Framework - created and maintained by @vercelThe
                                React Framework - created and maintained by @vercel The React Framework - created and
                                maintained by @vercel The React Framework - created and maintained by @vercel The
                                React Framework - created and maintained by @vercel
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[434px] text-sm text-left text-slate-900">
                                The React Framework - created and maintained by @vercelThe React Framework - created
                                and maintained by @vercel The React Framework - created and maintained by @vercelThe
                                React Framework - created and maintained by @vercel The React Framework - created and
                                maintained by @vercel The React Framework - created and maintained by @vercel The
                                React Framework - created and maintained by @vercel
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[434px] text-sm text-left text-slate-900">
                                The React Framework - created and maintained by @vercelThe React Framework - created
                                and maintained by @vercel The React Framework - created and maintained by @vercelThe
                                React Framework - created and maintained by @vercel The React Framework - created and
                                maintained by @vercel The React Framework - created and maintained by @vercel The
                                React Framework - created and maintained by @vercel
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[434px] text-sm text-left text-slate-900">
                                The React Framework - created and maintained by @vercelThe React Framework - created
                                and maintained by @vercel The React Framework - created and maintained by @vercelThe
                                React Framework - created and maintained by @vercel The React Framework - created and
                                maintained by @vercel The React Framework - created and maintained by @vercel The
                                React Framework - created and maintained by @vercel
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[434px] text-sm text-left text-slate-900">
                                The React Framework - created and maintained by @vercelThe React Framework - created
                                and maintained by @vercel The React Framework - created and maintained by @vercelThe
                                React Framework - created and maintained by @vercel The React Framework - created and
                                maintained by @vercel The React Framework - created and maintained by @vercel The
                                React Framework - created and maintained by @vercel
                            </p>
                            <p className="flex-grow-0 flex-shrink-0 w-[434px] text-sm text-left text-slate-900">
                                The React Framework - created and maintained by @vercelThe React Framework - created
                                and maintained by @vercel The React Framework - created and maintained by @vercelThe
                                React Framework - created and maintained by @vercel The React Framework - created and
                                maintained by @vercel The React Framework - created and maintained by @vercel The
                                React Framework - created and maintained by @vercel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-[18px] pt-0 pr-0 pb-[1.5rem] pl-0">
                <div
                    className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[555px] h-9 pl-2 pr-2.5 rounded-[10px] bg-black/[0.14]"
                >
                    <div className="flex justify-start items-center flex-grow flex-shrink-0 relative gap-1">
                        <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <path
                                d="M8.5 9.1183C9.51953 9.1183 10.2729 8.35491 10.2729 7.23996V3.85491C10.2729 2.73996 9.51953 1.97656 8.5 1.97656C7.48047 1.97656 6.72712 2.73996 6.72712 3.85491V7.23996C6.72712 8.35491 7.48047 9.1183 8.5 9.1183ZM4.66295 7.35547C4.66295 9.43471 6.04409 10.856 8.03293 11.0469V12.0664H6.18973C5.92355 12.0664 5.70257 12.2773 5.70257 12.5435C5.70257 12.8047 5.92355 13.0206 6.18973 13.0206H10.8103C11.0765 13.0206 11.2974 12.8047 11.2974 12.5435C11.2974 12.2773 11.0765 12.0664 10.8103 12.0664H8.96708V11.0469C10.9559 10.856 12.3371 9.43471 12.3371 7.35547V6.36607C12.3371 6.09989 12.1261 5.89397 11.8599 5.89397C11.5938 5.89397 11.3728 6.09989 11.3728 6.36607V7.32031C11.3728 9.03292 10.2126 10.1579 8.5 10.1579C6.78739 10.1579 5.62723 9.03292 5.62723 7.32031V6.36607C5.62723 6.09989 5.41127 5.89397 5.14509 5.89397C4.87891 5.89397 4.66295 6.09989 4.66295 6.36607V7.35547Z"
                                fill="white"
                                fillOpacity="0.54"
                            ></path>
                        </svg>
                        <div className="flex justify-start items-center flex-grow flex-shrink-0 relative gap-1.5">
                            <input className="flex-grow flex-shrink-0 text-sm text-left text-white/[0.74] border-0 bg-transparent w-[100%] justify-self-start focus:ring-offset-0 focus:ring-0 focus:outline-none"
                                autoCorrect="on"
                                spellCheck="true"
                                type="text"
                                placeholder="Post a message">
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}