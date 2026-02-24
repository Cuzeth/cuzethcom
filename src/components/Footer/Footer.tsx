'use client';
import Link from 'next/link';
// import Image from 'next/image';
import { FaYoutube, FaGithub, FaGitlab, FaTwitch, FaEnvelope } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export default function Footer() {
    const socialLinks = [
        { href: "https://www.youtube.com/channel/UCYVD0wcSlHFlCs41kHTap2Q/", icon: FaYoutube, label: "YouTube" },
        { href: "https://twitch.tv/TheRealCuzeth", icon: FaTwitch, label: "Twitch" },
        { href: "mailto:cuz@cuzeth.com", icon: FaEnvelope, label: "E-Mail" },
        { href: "https://github.com/Cuzeth", icon: FaGithub, label: "GitHub" },
        { href: "https://gitlab.com/Cuzeth", icon: FaGitlab, label: "GitLab" },
        { href: "https://buymeacoffee.com/cuzeth", icon: SiBuymeacoffee, label: "Buy Me a Coffee" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className={styles['footer-container']}>
                <section className={styles['social-media']}>
                    <div className={styles['social-media-wrap']}>
                        <motion.div variants={itemVariants} className={styles['footer-logo']}>
                            <Link href="/" className={`${styles['social-logo']} animate-on-hover`}>
                                <motion.h1
                                    className={`${styles['footer-img']} cuzeth`}
                                    animate={{ opacity: [1, 0.8, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    C
                                </motion.h1>
                            </Link>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <small className={styles['website-rights']}>
                                CUZETH &copy; {new Date().getFullYear()}
                            </small>
                        </motion.div>
                        <div className={styles['social-icons']}>
                            {socialLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <motion.a
                                        key={link.label}
                                        variants={itemVariants}
                                        className={`${styles['social-icon-link']} animate-on-hover`}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={link.label}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <IconComponent />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}