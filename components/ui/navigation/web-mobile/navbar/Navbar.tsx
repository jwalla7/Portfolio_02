import Image from "next/image";

export const Navbar = () => {
    return (
        <div className="w-[calc(100vw_-_0px)] h-[48px] absolute top-0 left-0 border-t-0 border-l-0 border-r-0 border-b-[1px] border-solid border-zinc-700">
            <div className="w-full h-full bg-neutral-50/30 chrome-three-backdrop-blur backdrop-blur-[259.67px] flex flex-row">
                <div className="">
                    <Image src="/images/jwalla.png" width={34} height={34} alt="logo" />
                </div>
                <span>Navbar</span>
            </div>
        </div>
    );
};
