'use client'
import Image from 'next/image'
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaX } from 'react-icons/fa6'


const navLinks = [
    { title: 'Inicio', path:'/'},
    { title: 'Perfil', path:'/profile'},
    { title: 'Contáctame', path:'/contactme'},
]
export const Navbar = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const isActive = (path: string) => {
        return pathname === path
    }
    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <header className={styles.header}>
        <section className={styles.profileSection}>
            <figure className={styles.profileFigure}>
                <Image src="https://randomuser.me/api/portraits/men/86.jpg" alt="user profile pic" width={50} height={50} className={styles.profileImg}/>
            </figure>
        </section>
        <div className={styles.btnMenuMobile}>
            <ButtonMenu icon={isMenuOpen ? <FaX /> : <FaBars />} onClick={handleToggle}/>
        </div>
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
        {
            isMenuOpen
                ? <div className={styles.menuMobile}>
                    <ul className={styles.mobileLinksList}>
                        {
                            navLinks.map(link => (
                                <li
                                    key={link.title} className={styles.mobileLi}>
                                        <Link href={link.path} className={isActive(link.path) ? styles.active : styles.mobileLink}
                                        onClick={handleToggle}>
                                            {link.title}
                                        </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                : null
        }
    </header>
  )
}


const ButtonMenu = ({icon, onClick}: {icon: JSX.Element, onClick: () => void}) => {

    return (
        <button className={styles.btnMenu} onClick={onClick} style={{cursor: 'pointer', border: 'none', width: '40px', height: '40px', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {icon}
        </button>
    )
}