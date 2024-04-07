import Link from "next/link"
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex flex-col gap-2 justify-between md:items-center p-4 md:flex-row md:gap-0">
                <Link href="/" className="font-bold text-black text-2xl tracking-wide">
                    CUYANIMELIST
                </Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar;