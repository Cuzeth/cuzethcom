import Link from 'next/link';
// import Image from 'next/image';
import { FaInstagram, FaYoutube, FaTwitter, FaGithub, FaGitlab, FaTwitch, FaMailBulk, FaEnvelope, FaChartLine } from 'react-icons/fa';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import styles from './Footer.module.css';
// import logo from '../../../public/images/CuzethFlat.svg';

export default function Footer() {
    const socialLinks = [
        { href: "https://www.youtube.com/channel/UCYVD0wcSlHFlCs41kHTap2Q/", icon: FaYoutube, label: "YouTube" },
        { href: "https://twitch.tv/TheRealCuzeth", icon: FaTwitch, label: "Twitch" },
        { href: "mailto:cuz@cuzeth.com", icon: FaEnvelope, label: "E-Mail" },
        { href: "https://github.com/Cuzeth", icon: FaGithub, label: "GitHub" },
        { href: "https://gitlab.com/Cuzeth", icon: FaGitlab, label: "GitLab" },
        { href: "https://status.cuzeth.com/", icon: FaChartLine, label: "Status Page" }
    ];

    return (
        <AnimateOnScroll animation="animate-slide-up">
            <div className={styles['footer-container']}>
                <section className={styles['social-media']}>
                    <div className={styles['social-media-wrap']}>
                        <AnimateOnScroll animation="animate-scale-in" delay="0.2s">
                            <div className={styles['footer-logo']}>
                                <Link href="/" className={`${styles['social-logo']} animate-on-hover`}>
                                    <h1 className={`${styles['footer-img']} cuzeth animate-subtle-pulse`}>C</h1>
                                </Link>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="animate-fade-in" delay="0.4s">
                            <small className={styles['website-rights']}>
                                CUZETH &copy; {new Date().getFullYear()}
                            </small>
                        </AnimateOnScroll>
                        <div className={styles['social-icons']}>
                            {socialLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                return (
                                    <AnimateOnScroll 
                                        key={link.label}
                                        animation="animate-scale-in" 
                                        delay={`${(index + 1) * 0.1}s`}
                                    >
                                        <a
                                            className={`${styles['social-icon-link']} animate-on-hover`}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={link.label}
                                        >
                                            <IconComponent />
                                        </a>
                                    </AnimateOnScroll>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </AnimateOnScroll>
    );
}