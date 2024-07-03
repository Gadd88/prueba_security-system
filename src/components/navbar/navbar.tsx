'use client'
import Image from 'next/image'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navLinks = [
    { title: 'Inicio', path:'/'},
    { title: 'Perfil', path:'/profile'},
    { title: 'Contáctame', path:'/contactme'},
]
export const Navbar = () => {
    const pathname = usePathname()
    
    const isActive = (path: string) => {
        return pathname === path
    }

  return (
    <header className={styles.header}>
        <section className={styles.profileSection}>
            <figure className={styles.profileFigure}>
                <Image src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="user profile pic" width={50} height={50} className={styles.profileImg}/>
            </figure>
        </section>
        <nav className={styles.nav}>
            <ul className={styles.navlinks}>
                {
                    navLinks.map(link => (
                        <li
                            key={link.title} className={styles.li}>
                                <Link href={link.path} className={isActive(link.path) ? styles.active : styles.link}>
                                    {link.title}
                                </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
  )
}
