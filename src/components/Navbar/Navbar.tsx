"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './Navbar.module.css';
import logo from '../../../public/images/Logo.svg';
import Image from 'next/image';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <IconContext.Provider value={{ color: 'var(--heading)' }}>
            <div className={styles.navbar}>
                <div className={`${styles['navbar-container']} ${styles.container}`}>
                    <Link href="/" className={styles['navbar-logo']} onClick={closeMobileMenu}>
                        <Image src={logo} alt="Cuzeth" height={50} />
                    </Link>
                    <div className={styles['menu-icon']} onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
                        <li className={styles['nav-item']}>
                            <Link href="/" className={styles['nav-links']} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/mywork" className={styles['nav-links']} onClick={closeMobileMenu}>
                                My Work
                            </Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/daboiz" className={styles['nav-links']} onClick={closeMobileMenu}>
                                Da Boiz Bot
                            </Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/about" className={styles['nav-links']} onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
    );
}