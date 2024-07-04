'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from './navbar.module.css'
import logo_code from '@/../public/assets/logo_code.png'

const navLinks = [
  { title: 'Inicio', path:'/'},
  { title: 'Perfil', path:'/profile'},
  { title: 'Contáctame', path:'/contactme'},
]
export const Navbar = () => {
  const [navActive, setNavActive] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/"} className={styles.nav__logo}>
          <Image src={logo_code} alt="logo" width={50} height={50} className={styles.nav__logo_img}/> DEV JR.
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menu_bar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${styles.nav__menu_list} ${ navActive ? styles.active : ''}`}>
          {navLinks.map((item, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={item.title}
            >
              <NavItem active={activeIdx === idx} title={item.title} href={item.path} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};


const NavItem = ({ title, href, active }: {title: string, href: string, active: boolean}) => {
    return (
      <Link href={href} className={`${styles.nav__link} ${active ? styles.active : ''}`}>
        {title}
      </Link>
    );
  };
  