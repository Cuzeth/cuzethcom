import Link from 'next/link';
// import Image from 'next/image';
import { FaInstagram, FaYoutube, FaTwitter, FaGithub, FaGitlab, FaTwitch, FaMailBulk, FaEnvelope, FaChartLine } from 'react-icons/fa';
import styles from './Footer.module.css';
// import logo from '../../../public/images/CuzethFlat.svg';

export default function Footer() {
    const socialLinks = [
        { href: "https://www.youtube.com/channel/UCYVD0wcSlHFlCs41kHTap2Q/", icon: FaYoutube, label: "YouTube", delay: "0.1s" },
        { href: "https://twitch.tv/TheRealCuzeth", icon: FaTwitch, label: "Twitch", delay: "0.2s" },
        { href: "mailto:cuz@cuzeth.com", icon: FaEnvelope, label: "E-Mail", delay: "0.3s" },
        { href: "https://github.com/Cuzeth", icon: FaGithub, label: "GitHub", delay: "0.4s" },
        { href: "https://gitlab.com/Cuzeth", icon: FaGitlab, label: "GitLab", delay: "0.5s" },
        { href: "https://status.cuzeth.com/", icon: FaChartLine, label: "Status Page", delay: "0.6s" }
    ];

    return (
        <div className={`${styles['footer-container']} animate-slide-up`}>
            <section className={styles['social-media']}>
                <div className={styles['social-media-wrap']}>
                    <div className={`${styles['footer-logo']} animate-scale-in`} style={{ animationDelay: '0.2s' }}>
                        <Link href="/" className={`${styles['social-logo']} animate-on-hover`}>
                            <h1 className={`${styles['footer-img']} cuzeth animate-subtle-pulse`}>C</h1>
                        </Link>
                    </div>
                    <small className={`${styles['website-rights']} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
                        CUZETH &copy; {new Date().getFullYear()}
                    </small>
                    <div className={styles['social-icons']}>
                        {socialLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    className={`${styles['social-icon-link']} animate-scale-in animate-on-hover`}
                                    style={{ animationDelay: link.delay }}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={link.label}
                                >
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}