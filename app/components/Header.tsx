import Link from "next/link"


const Header = () => {
    return (
        <header>
            <Link href={'/'}>Some app</Link>
            <div className="links">
                <ul>
                    <li>
                        <Link href={"/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about/team"}>
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link href={"/code/repos"}>
                            Code
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header