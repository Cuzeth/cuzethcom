import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import { HiHome, HiFolder, HiInformationCircle, HiSparkles, HiExclamationTriangle } from 'react-icons/hi2';
import styles from './not-found.module.css';

export const metadata: Metadata = {
    title: '404 - Page Not Found | Cuzeth',
    description: 'Oops! The page you\'re looking for doesn\'t exist. Let\'s get you back on track.',
};

export default function NotFoundPage() {
    const quickLinks = [
        { href: '/', icon: HiHome, label: 'Home', description: 'Back to the main page' },
        { href: '/mywork', icon: HiFolder, label: 'My Work', description: 'Check out my projects' },
        { href: '/daboiz', icon: HiSparkles, label: 'Da Boiz', description: 'Discord bot project' },
        { href: '/about', icon: HiInformationCircle, label: 'About', description: 'Learn more about me' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Main Error Section */}
                <div className={styles.errorSection}>
                    <AnimateOnScroll animation="animate-slide-up">
                        <p className={styles.errorCode}>404</p>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="animate-slide-up" delay="0.2s">
                        <h1 className={styles.errorTitle}>
                            Page Not Found
                        </h1>
                    </AnimateOnScroll>
                </div>

                {/* Quick Links Section */}
                <AnimateOnScroll animation="animate-slide-up" delay="0.8s">
                    <div className={styles.quickLinksSection}>
                        <h2 className={styles.quickLinksTitle}>Where would you like to go?</h2>

                        <div className={styles.quickLinksGrid}>
                            {quickLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                return (
                                    <AnimateOnScroll
                                        key={link.href}
                                        animation="animate-scale-in"
                                        delay={`${1.0 + index * 0.1}s`}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`${styles.quickLink} animate-on-hover`}
                                        >
                                            <div className={styles.quickLinkIcon}>
                                                <IconComponent />
                                            </div>
                                            <div className={styles.quickLinkContent}>
                                                <h3 className={styles.quickLinkLabel}>{link.label}</h3>
                                                <p className={styles.quickLinkDescription}>{link.description}</p>
                                            </div>
                                        </Link>
                                    </AnimateOnScroll>
                                );
                            })}
                        </div>
                    </div>
                </AnimateOnScroll>

            </div>
        </div>
    );
};
