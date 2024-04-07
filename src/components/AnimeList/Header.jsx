import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide text-color-primary">{title}</h1>
            {   
                linkHref && linkHref ? 
                <Link href={linkHref} className="text-md md:text-xl underline text-color-primary hover:text-color-accent transition-all duration-300">{linkTitle}</Link> :
                undefined
            }
        </div>
    )
}

export default Header;