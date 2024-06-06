import Link from "next/link"
import { Button } from "./ui/button"

import Nav from "./Nav"

const Header = () => {
    return (
        <header className="py-8 lg:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Andy<span className="text-accent">.</span></h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me!</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden">mobile nav</div>
            </div>
        </header>
    )
}

export default Header