'use client'; 

import Link from 'next/link'
import React from 'react'
import "./styles.css"
const navLinks = [

    {
        name: "register", href: "/register"
    },
    {
        name: "login", href: "/login"
    }

]
import { usePathname } from 'next/navigation'

const Headers = () => {
    const pathname = usePathname()
    return (
        <ul>
            {
                navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <li key={link.name}>
                            <Link href={link.href} className={ isActive ? "text-green-500" : "text-blue-500" }>{link.name}</Link>
                            
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Headers