import {FC} from "react";


const Intro: FC = () => {
    return (
        <div className={"flex flex-col font-commissioner text-foregroundMuted text-md gap-8 lg:text-5xl leading-snug"}>
            <div>
                <p>Hello!</p>
                <p>My name is <span className={"text-[#E9E9E9]"}>Sheva</span>,</p>
                <p>Currently based in <span className={"text-[#E9E9E9]"}>Yogyakarta</span>,</p>
                <p>Eternally fond of <span className={"text-[#E9E9E9]"}>coffee</span>.</p>
            </div>
            <div className={"text-right"}>
                <p>I&#39;m a Software Engineer<br/><span className={"text-[#E9E9E9]"}>specializing in backend development</span>,<br/>
                with hands-on experience in<br/><span className={"text-[#E9E9E9]"}>building scalable applications</span>.<br/>
                My journey through the startup ecosystem<br/>has equipped me with the ability to<br/><span className={"text-[#E9E9E9]"}>tackle complex real world problems</span>.</p>
            </div>
        </div>
    )
}

export default Intro