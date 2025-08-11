
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return <header>
        <nav>
            <Link href="/">
                <Image
                    src="/logo-single.png"
                    alt="App logo"
                    width={200}
                    height={60}
                    className='h-10 w-auto object'
                />
            </Link>
        </nav>
    </header>
}

export default Header