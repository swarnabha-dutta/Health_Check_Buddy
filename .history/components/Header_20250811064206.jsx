
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'


const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/logo-single.png"
                        alt="App logo-healthcheckbuddy"
                        width={200}
                        height={60}
                        className="h-10 w-auto object-contain"
                    />
                </Link>
                <div className="flex items-center space">
                    <SignedOut>
                        <SignInButton>
                            <Button className={`cursor-pointer`} variant="secondary">
                                SignIn
                            </Button>
                        </SignInButton>
                        <SignUpButton />
                    </SignedOut>

                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-20 h-20",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier:"font-semibold",
                                }
                            }}
                        
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header