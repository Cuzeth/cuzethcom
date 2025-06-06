"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './Navbar.module.css';
import logo from '../../../public/images/8bit.gif';
import Image from 'next/image';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const pathname = usePathname();

    // Close mobile menu when pathname changes
    useEffect(() => {
        closeMobileMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    // Prevent body scroll when mobile menu is open and add backdrop blur
    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
            // Add a class to the body for additional styling when menu is open
            document.body.classList.add('menu-open');
        } else {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        };
    }, [click]);

    return (
        <IconContext.Provider value={{ color: 'var(--text)' }}>
            <div className={`${styles.navbar} animate-slide-down`}>
                <div className={`${styles['navbar-container']} ${styles.container}`}>
                    <Link href="/" className={`${styles['navbar-logo']} animate-on-hover`} onClick={closeMobileMenu}>
                        <Image src={logo} alt="Cuzeth" height={50} className="animate-subtle-pulse" />
                        {/* <h1 className="cuzeth">C</h1> */}
                    </Link>
                    <div
                        className={`${styles['menu-icon']} animate-on-hover`}
                        onClick={handleClick}
                        aria-expanded={click}
                        aria-controls="nav-menu"
                        aria-label="Toggle navigation menu">
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
                        <li className={`${styles['nav-item']} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
                            <Link href="/" className={`${styles['nav-links']} animate-on-hover`} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={`${styles['nav-item']} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                            <Link href="/mywork" className={`${styles['nav-links']} animate-on-hover`} onClick={closeMobileMenu}>
                                My Work
                            </Link>
                        </li>
                        <li className={`${styles['nav-item']} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
                            <Link href="/daboiz" className={`${styles['nav-links']} animate-on-hover`} onClick={closeMobileMenu}>
                                Da Boiz
                            </Link>
                        </li>
                        <li className={`${styles['nav-item']} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
                            <Link href="/about" className={`${styles['nav-links']} animate-on-hover`} onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
    );
}