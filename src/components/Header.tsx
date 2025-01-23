import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
    return (
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
            <div className="container mx-auto px-4 py-4 flex justify-start items-center">
                <Link href="/">
                    <Button variant="ghost" className="text-white hover:text-gray-200">
                        Home
                    </Button>
                </Link>
                <Link href="/shad">
                    <Button variant="ghost" className="text-white hover:text-gray-200">
                        Shadcn
                    </Button>
                </Link>
                <Link href="/data">
                    <Button variant="ghost" className="text-white hover:text-gray-200">
                        Data
                    </Button>
                </Link>
                <Link href="/heavy">
                    <Button variant="ghost" className="text-white hover:text-gray-200">
                        Heavy
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default Header