"use client";

import { OverlayTrigger } from "@/components/ui/navigation/web/overlay/OverlayTrigger/OverlayTrigger";
import "@/design/circle.css";

const ContactPage = () => {
    interface style {
        percentage: number;
        fill: string;
    }

    return (
        <div suppressHydrationWarning className="min-w-full min-h-screen h-screen overflow-hidden">
            <OverlayTrigger />
            <div>
                <div className="skills bg-cyan-100">
                    <div className="pie">
                        <div className="middle">
                            <div className="middleText"></div>
                        </div>
                        <div className="part1 piecircle"></div>
                        <div className="part2 piecircle pieanimate">
                            <span className="text-white">PIECIRCLE PART 2</span>
                        </div>
                        <div className="part3 piecircle pieanimate"></div>
                        <div className="part4 piecircle pieanimate"></div>
                        <div className="part5 piecircle pieanimate"></div>
                        <div className="part6 piecircle pieanimate"></div>
                        <div className="part7 piecircle pieanimate"></div>
                    </div>
                    <div className="info">
                        <div className="tags tag1">
                            <span className="dots dot1"></span> <strong>20%</strong> Part 1
                        </div>
                        <div className="tags tag2 taginvisible">
                            <span className="dots dot2"></span> <strong>20%</strong> Part 2
                        </div>
                        <div className="tags tag3 taginvisible">
                            <span className="dots dot3"></span> <strong>10%</strong> Part 3
                        </div>
                        <div className="tags tag4 taginvisible">
                            <span className="dots dot4"></span> <strong>10%</strong> Part 4
                        </div>
                        <div className="tags tag5 taginvisible">
                            <span className="dots dot5"></span> <strong>20%</strong> Part 5
                        </div>
                        <div className="tags tag6 taginvisible">
                            <span className="dots dot6"></span> <strong>20%</strong> Part 6
                        </div>
                        <div className="tags tag7 taginvisible">
                            <span className="dots dot6"></span> <strong>20%</strong> Part 7
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
