import Link from 'next/link';
// import Image from 'next/image';
import { FaInstagram, FaYoutube, FaTwitter, FaGithub, FaGitlab, FaTwitch, FaMailBulk, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';
// import logo from '../../../public/images/Logo.svg';

export default function Footer() {
    return (
        <div className={styles['footer-container']}>
            <section className={styles['social-media']}>
                <div className={styles['social-media-wrap']}>
                    <div className={styles['footer-logo']}>
                        <Link href="/" className={styles['social-logo']}>
                            {/* <Image
                                src={logo}
                                alt="Cuzeth"
                                height={50}
                                className={styles['footer-img']}
                            /> */}
                            <h1 className={`${styles['footer-img']} cuzeth`}>C</h1>
                        </Link>
                    </div>
                    <small className={styles['website-rights']}>CUZETH &copy; {new Date().getFullYear()}</small>
                    <div className={styles['social-icons']}>
                        {/* <a
                            className={styles['social-icon-link']}
                            href="https://www.instagram.com/cuzeth/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a> */}
                        <a
                            className={styles['social-icon-link']}
                            href="https://www.youtube.com/channel/UCYVD0wcSlHFlCs41kHTap2Q/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>
                        {/* <a
                            className={styles['social-icon-link']}
                            href="https://twitter.com/Cuzeth"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a> */}
                        <a
                            className={styles['social-icon-link']}
                            href="https://twitch.tv/TheRealCuzeth"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitch"
                        >
                            <FaTwitch />
                        </a>
                        <a
                            className={styles['social-icon-link']}
                            href="mailto:cuz@cuzeth.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="E-Mail"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            className={styles['social-icon-link']}
                            href="https://github.com/Cuzeth"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            className={styles['social-icon-link']}
                            href="https://gitlab.com/Cuzeth"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitLab"
                        >
                            <FaGitlab />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}