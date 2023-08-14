import { OverlayNavProps } from "./overlayNavProps";
import { overlayNavStyles } from "./overlayNavStyles";

export const OverlayNav = ({ children, overlayRefProps }: OverlayNavProps) => {
    const showDisplay = () => {
        console.log("showDisplay");
        if (overlayRefProps?.current?.classList.contains("hidden")) {
            overlayRefProps?.current?.classList.remove("hidden");
        }
        if (overlayRefProps) {
            overlayRefProps?.current?.classList.add("visible");
        }
    };
    const hideDisplay = () => {
        console.log("hideDisplay");
        if (overlayRefProps?.current?.classList.contains("visible")) {
            overlayRefProps?.current?.classList.remove("visible");
        }
        if (overlayRefProps) {
            overlayRefProps?.current?.classList.add("hidden");
        }
    };

    return (
        <nav
            className={overlayNavStyles({ navDiv: "navDivDefault" })}
            onMouseEnter={showDisplay}
            onMouseLeave={hideDisplay}
        >
            {children}
        </nav>
    );
};
