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
    
    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [click]);

    return (
        <IconContext.Provider value={{ color: 'var(--heading)' }}>
            <div className={styles.navbar}>
                <div className={`${styles['navbar-container']} ${styles.container}`}>
                    <Link href="/" className={styles['navbar-logo']} onClick={closeMobileMenu}>
                        <Image src={logo} alt="Cuzeth" height={50} />
                        {/* <h1 className="cuzeth">C</h1> */}
                    </Link>
                    <div 
                        className={styles['menu-icon']} 
                        onClick={handleClick}
                        aria-expanded={click}
                        aria-controls="nav-menu"
                        aria-label="Toggle navigation menu">
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul id="nav-menu" className={click ? `${styles['nav-menu']} ${styles.active}` : styles['nav-menu']}>
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
                                Da Boiz
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