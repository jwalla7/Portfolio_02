import { FC } from "react"
import { ChatProfileCardProps } from "./chatProfileCardProps"

export const ChatProfileCard: FC<ChatProfileCardProps> = () => {
    return (
        <>
            <div
                className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[650px] gap-8 py-5 rounded-tl-3xl rounded-bl-3xl bg-black/10 backdrop-blur-[100px] self-center"
                style={{ boxShadow: "0px 8px 6px 0 rgba(0,0,0,0.05)" }}
            >
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-7 px-5">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[90px]">
                        <div
                            className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-1"
                        >
                            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-white">Name</p>
                        </div>
                        <div
                            className="flex-grow-0 flex-shrink-0 w-[30px] h-[30px] relative rounded-[15px] bg-white/10"
                        >
                            <div
                                className="flex flex-col justify-center items-center w-[30px] h-[30px] absolute left-0 top-0 rounded-[100px] bg-transparent"
                            ></div>
                            <svg
                                width="12"
                                height="4"
                                viewBox="0 0 12 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-2 top-[13px]"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M1.5 0.5C0.675 0.5 0 1.175 0 2C0 2.825 0.675 3.5 1.5 3.5C2.325 3.5 3 2.825 3 2C3 1.175 2.325 0.5 1.5 0.5ZM10.5 0.5C9.675 0.5 9 1.175 9 2C9 2.825 9.675 3.5 10.5 3.5C11.325 3.5 12 2.825 12 2C12 1.175 11.325 0.5 10.5 0.5ZM6 0.5C5.175 0.5 4.5 1.175 4.5 2C4.5 2.825 5.175 3.5 6 3.5C6.825 3.5 7.5 2.825 7.5 2C7.5 1.175 6.825 0.5 6 0.5Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                            <svg
                                width="28"
                                height="29"
                                viewBox="0 0 28 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M13.9912 23.2422C18.9746 23.2422 23.0879 19.1289 23.0879 14.1543C23.0879 9.17969 18.9658 5.06641 13.9824 5.06641C9.00781 5.06641 4.90332 9.17969 4.90332 14.1543C4.90332 19.1289 9.0166 23.2422 13.9912 23.2422ZM13.9912 21.4316C9.95703 21.4316 6.73145 18.1885 6.73145 14.1543C6.73145 10.1201 9.95703 6.88574 13.9824 6.88574C18.0166 6.88574 21.2598 10.1201 21.2686 14.1543C21.2773 18.1885 18.0254 21.4316 13.9912 21.4316ZM9.56152 15.2617H13.9824C14.3867 15.2617 14.6943 14.9541 14.6943 14.5586V8.81055C14.6943 8.41504 14.3867 8.10742 13.9824 8.10742C13.5957 8.10742 13.2881 8.41504 13.2881 8.81055V13.8555H9.56152C9.16602 13.8555 8.8584 14.1631 8.8584 14.5586C8.8584 14.9541 9.16602 15.2617 9.56152 15.2617Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                ></path>
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">Welcome, Name!</p>
                        </div>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-4">
                            <svg
                                width="28"
                                height="29"
                                viewBox="0 0 28 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="flex-grow-0 flex-shrink-0 w-7 h-7 relative"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path
                                    d="M16.6455 6.3584L21.6728 11.3857C23.2373 9.84766 23.334 7.79102 21.7871 6.25294C20.2402 4.71485 18.1924 4.79395 16.6455 6.3584ZM15.6963 7.31641C14.7822 8.22169 14.3691 9.27637 14.4834 10.3135L6.32714 19.0674C5.97558 19.4541 5.94043 19.9463 6.37109 20.4209L5.20214 21.9063C5.06152 22.082 5.07031 22.3457 5.25488 22.5303L5.50976 22.7852C5.69433 22.9697 5.94921 22.9873 6.14257 22.8291L7.62793 21.6602C8.07617 22.0908 8.58593 22.0557 8.95507 21.7041L13.3232 17.6436V22.3897C13.3232 22.8906 13.7187 23.2773 14.2197 23.2773C14.7207 23.2773 15.1162 22.8906 15.1162 22.3897V17.2041L15.0547 16.044L17.7178 13.5742C18.7461 13.6797 19.8184 13.2578 20.7148 12.3438L15.6963 7.31641ZM7.41699 19.8232L15.0283 11.8076C15.1777 12.0361 15.3535 12.2559 15.5644 12.4668C15.7666 12.6777 15.9863 12.8623 16.206 13.0117L8.21679 20.6231L7.41699 19.8232Z"
                                    fill="white"
                                    fillOpacity="0.8"
                                ></path>
                            </svg>
                            <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">Email</p>
                        </div>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
                            <div
                                className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-7 w-7 relative rounded-[100px] bg-transparent"
                            >
                                <svg
                                    width="14"
                                    height="19"
                                    viewBox="0 0 14 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <path
                                        d="M2.63377 18.5C1.82205 18.5 1.21196 18.2984 0.80352 17.8951C0.400246 17.497 0.198608 16.8972 0.198608 16.0959V7.30138C0.198608 6.5 0.400246 5.90026 0.80352 5.50215C1.21196 5.09888 1.82205 4.89724 2.63377 4.89724H11.3662C12.1728 4.89724 12.7803 5.09888 13.1887 5.50215C13.5971 5.90026 13.8014 6.5 13.8014 7.30138V16.0959C13.8014 16.8921 13.6075 17.4918 13.2197 17.8951C12.832 18.2984 12.2917 18.5 11.5989 18.5H2.63377ZM2.64928 17.2514H11.5756C11.8445 17.2514 12.0745 17.148 12.2658 16.9412C12.4571 16.7344 12.5528 16.4293 12.5528 16.0261V7.36342C12.5528 6.96532 12.4468 6.66286 12.2348 6.45605C12.0228 6.24925 11.7255 6.14584 11.3429 6.14584H2.64928C2.26151 6.14584 1.96423 6.24925 1.75742 6.45605C1.55061 6.66286 1.44721 6.96532 1.44721 7.36342V16.0261C1.44721 16.4293 1.55061 16.7344 1.75742 16.9412C1.96423 17.148 2.26151 17.2514 2.64928 17.2514ZM1.88926 3.64864C1.94613 3.29707 2.06763 3.02822 2.25376 2.84209C2.43988 2.6508 2.72683 2.55515 3.11459 2.55515H10.8776C11.2654 2.55515 11.5523 2.6508 11.7385 2.84209C11.9246 3.02822 12.0461 3.29707 12.103 3.64864H1.88926ZM3.23868 1.50043C3.25936 1.16954 3.36276 0.92137 3.54889 0.755924C3.74019 0.585308 4.01421 0.5 4.37095 0.5H9.62127C9.97801 0.5 10.2494 0.585308 10.4356 0.755924C10.6269 0.92137 10.7354 1.16954 10.7613 1.50043H3.23868Z"
                                        fill="white"
                                        fillOpacity="0.8"
                                    ></path>
                                </svg>
                            </div>
                            <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-white">Location</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}