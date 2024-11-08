import {FC} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";


const CTA: FC = () => {
    return (
        <div className={"flex flex-col justify-center items-center gap-4"}>
            <h2 className={"font-commissioner text-xl"}>Interested in working with me?</h2>
            <Button asChild className={"bg-[#C92B32]"}>
                <Link href={"mailto:gerry.sheva@proton.me"}>
                    Send an email
                </Link>
            </Button>
        </div>
    )
}

export default CTA;