
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return <header>
        <nav>
            <Link href="/">
                <Image/>
            </Link>
        </nav>
    </header>
}

export default Header