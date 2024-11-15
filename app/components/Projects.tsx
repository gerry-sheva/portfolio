import {FC} from "react";
import Image from "next/image";
import AlphaMarch from "@/public/AlphaMarch.png"
import { Badge } from "@/components/ui/badge"


const Projects: FC = () => {
    return (
        <div className={"flex flex-col items-center gap-8"}>
            <h2 className={"self-start text-6xl font-cormorantSC"}>Projects</h2>
            <div className={"flex max-xl:flex-col gap-6"}>
                <Image src={AlphaMarch} alt={"kura kura"} width={426} height={426} className={"max-lg:rounded lg:rounded-l-3xl"} />
                <div className={"bg-backgroundMuted max-xl:max-w-[426px] max-lg:rounded lg:rounded-r-3xl lg:w-[606px] lg:h-[426px] max-lg:py-8 py-4 px-8 flex flex-col gap-8 font-commissioner"}>
                    <div className={"flex max-lg:flex-col gap-4 items-center justify-between"}>
                        <h3 className={"text-4xl font-cormorantSC"}>AlphaMarch</h3>
                        <div className={"flex gap-2"}>
                            <Badge variant={"outline"} className={"rounded-3xl min-w-20 p-1.5 text-center flex justify-center"}>Spring Boot</Badge>
                            <Badge variant={"outline"} className={"rounded-3xl min-w-20 p-1.5 text-center flex justify-center"}>NextJS</Badge>
                        </div>
                    </div>
                    <p className={"lg:text-2xl"}>
                        AlphaMarch is a multi-store e-commerce platform that aims to make the world a better place by minimising shipping fee.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects