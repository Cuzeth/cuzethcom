"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { motion, AnimatePresence } from 'framer-motion';
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

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: { duration: 0.3 }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 50 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <IconContext.Provider value={{ color: 'var(--text)' }}>
            <motion.div
                className={styles.navbar}
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                <div className={`${styles['navbar-container']} ${styles.container}`}>
                    <Link href="/" className={`${styles['navbar-logo']} animate-on-hover`} onClick={closeMobileMenu}>
                        <motion.div
                            animate={{ opacity: [1, 0.8, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Image src={logo} alt="Cuzeth" height={50} />
                        </motion.div>
                    </Link>
                    <div
                        className={`${styles['menu-icon']} animate-on-hover`}
                        onClick={handleClick}
                        aria-expanded={click}
                        aria-controls="nav-menu"
                        aria-label="Toggle navigation menu">
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Desktop Menu */}
                    <ul className={`${styles['nav-menu']} hidden md:flex`}>
                        <li className={styles['nav-item']}>
                            <Link href="/" className={`${styles['nav-links']} animate-on-hover`}>Home</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/projects" className={`${styles['nav-links']} animate-on-hover`}>Projects</Link>
                        </li>
                        <li className={styles['nav-item']}>
                            <Link href="/about" className={`${styles['nav-links']} animate-on-hover`}>About Me</Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {click && (
                            <motion.ul
                                className={`${styles['nav-menu']} ${styles.active}`}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={menuVariants}
                            >
                                <motion.li className={styles['nav-item']} variants={itemVariants}>
                                    <Link href="/" className={styles['nav-links']} onClick={closeMobileMenu}>
                                        Home
                                    </Link>
                                </motion.li>
                                <motion.li className={styles['nav-item']} variants={itemVariants}>
                                    <Link href="/projects" className={styles['nav-links']} onClick={closeMobileMenu}>
                                        Projects
                                    </Link>
                                </motion.li>
                                <motion.li className={styles['nav-item']} variants={itemVariants}>
                                    <Link href="/about" className={styles['nav-links']} onClick={closeMobileMenu}>
                                        About Me
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </IconContext.Provider>
    );
}
