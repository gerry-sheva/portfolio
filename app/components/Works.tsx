import {FC} from "react";
import Image from "next/image";
import kurakura from "@/public/kura.png"
import { Badge } from "@/components/ui/badge"


const Works: FC = () => {
    return (
        <div className={"flex flex-col items-center gap-8"}>
            <h2 className={"self-start text-6xl font-cormorantSC"}>Work</h2>
            <div className={"flex max-xl:flex-col gap-6"}>
                <Image src={kurakura} alt={"kura kura"} width={426} height={426} className={"max-lg:rounded lg:rounded-l-3xl"} />
                <div className={"bg-backgroundMuted max-xl:max-w-[426px] max-lg:rounded lg:rounded-r-3xl lg:w-[606px] lg:h-[426px] max-lg:py-8 py-4 px-8 flex flex-col gap-8 justify-between font-commissioner"}>
                    <div className={"flex max-lg:flex-col gap-4 items-center justify-between"}>
                        <h3 className={"text-4xl font-cormorantSC"}>Kura Kura</h3>
                        <div className={"flex gap-2"}>
                            <Badge variant={"outline"} className={"rounded-3xl min-w-20 p-1.5 text-center flex justify-center"}>React Native</Badge>
                            <Badge variant={"outline"} className={"rounded-3xl min-w-20 p-1.5 text-center flex justify-center"}>Flask</Badge>
                        </div>
                    </div>
                    <p className={"lg:text-2xl"}>
                        I led the complete rewrite and launch of the app,
                        delivering a more efficient and higher-performing solution.
                        Prior to the rewrite, I was also responsible for maintaining the backend.
                    </p>
                    <div>
                        <div>
                            <p className={"text-3xl lg:text-4xl font-medium"}>~50%</p>
                            <p>Reduction times of startup from 8s to ~4s after the rewrite</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works