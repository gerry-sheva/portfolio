import {FC} from "react";
import Link from "next/link";

const Header: FC = () => {
    return (
        <header className={"static"}>
            <nav className={"flex items-center justify-center gap-8"}>
                <Link href={"/"}>Home</Link>
                <Link href={"https://drive.google.com/file/d/1URtrLnM3MhQI2DWV3kcplxARvO9scF1H/view?usp=sharing"}>My Resume</Link>
            </nav>
        </header>
    )
}

export default Header;