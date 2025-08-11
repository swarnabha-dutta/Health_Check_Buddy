
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return <header>
        <nav>
            <Link href="/">
                <Image
                    src="/logo-single.png"
                    alt="logo"
                    width={100}
                    height={100}
                
                />
            </Link>
        </nav>
    </header>
}

export default Header