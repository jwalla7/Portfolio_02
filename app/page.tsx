import { Button } from "@/components/ui/button/Button";
import { IconHouse } from "@/components/ui/icons/phosphor/IconHouse";
import { ThemeProvider } from "@/components/ui/theme/ThemeProvider";

export default function Main() {
    return (
        // <div className="flex gap-6">
        <div className="absolute top-[601px] left-[20px] w-[286.78px] h-[432.1px]">
            {/* <div className="absolute top-[312px] left-[2290px] rounded-8xs box-border w-[2307px] h-[2394px] overflow-hidden border-[1px] border-dashed border-blueviolet">
                <div className="absolute top-[20px] left-[20px] w-[286.78px] h-[432.1px]">
                    <div className="absolute h-[15.45%] w-full top-[0%] right-[0%] bottom-[84.55%] left-[0%] flex flex-row items-start justify-start gap-[21px] text-gray-100">
                        <Button
                            variant="secondary"
                            className="rounded-smi-4 [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.89),_rgba(255,_255,_255,_0.89))] [backdrop-filter:blur(12.4px)] w-[66.78px] h-[66.78px] flex flex-row p-[9px] box-border items-center justify-center"
                        >
                            <IconHouse className="relative w- h-9" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="self-stretch w-[199px] overflow-hidden shrink-0 flex flex-row pt-[3px] px-2.5 pb-0 box-border items-center justify-start">
                <div className="relative">Home</div>
            </div> */}
            <ThemeProvider />
            <span>Hello</span>
        </div>
    );
}
