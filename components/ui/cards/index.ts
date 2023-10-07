// "use client";

// import { type ReactElement, forwardRef } from "react";
// import { CardProps } from "./cardProps";
// import { cn } from "@/lib/utils";
// import { cardStyles } from "./cardStyles";

// export const Card = forwardRef<HTMLDivElement, CardProps>(
//     ({ children, centerChildren, leftChildren, rightChildren, size, position }, ref): ReactElement => {
//         return (
//             <div className= { cn(cardStyles({ root: "default" }))}>
//                 { position === "left" ? (
//                 <div>
//                 { leftChildren }
//                 < /div>
//             ) : position === "right" ? (
//                 <div className= { cn(cardStyles({ size: size, position: "right", }))}>
//                     <div className="RightContent w-[25.146vw] self-stretch bg-neutral-50 bg-opacity-10 rounded-[42.40px] shadow-[inset_1px_2px_4px_0_rgba(0,0,0,0.05)] dark:shadow-[inset_1px_2px_4px_0_rgba(255,255,255,0.05)] backdrop-blur-[259.67px] transform-style-3d -rotate-y-15" >
//                         { rightChildren }
//                         < /div>
//                         < /div>
//                     ) : (
//     <div>
//     { centerChildren }
//     < /div>
// )}
// </div>
//         );
//     });

// Card.displayName = "Card";
