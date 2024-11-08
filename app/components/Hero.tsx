import {FC} from "react";


const Hero: FC = () => {
    return (
        <main className={"w-full h-screen flex flex-col justify-center items-center gap-6"}>
            <h1 className={"font-cormorantSC font-bold text-5xl lg:text-9xl"}>Gerry Sheva</h1>
            <h2 className={"font-commissioner lg:text-xl"}>Software Engineer</h2>
        </main>
    )
}

export default Hero