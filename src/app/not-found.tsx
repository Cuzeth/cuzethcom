import { Metadata } from 'next';
import Link from 'next/link';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';
import { HiHome, HiFolder, HiInformationCircle, HiSparkles } from 'react-icons/hi2';
import styles from './not-found.module.css';

export const metadata: Metadata = {
    title: '404 - Page Not Found | Cuzeth',
    description: 'Oops! The page you\'re looking for doesn\'t exist. Let\'s get you back on track.',
};

export default function NotFoundPage() {
    const quickLinks = [
        { href: '/', icon: HiHome, label: 'Home', description: 'Back to the main page' },
        { href: '/projects', icon: HiFolder, label: 'Projects', description: 'Check out my projects' },
        { href: '/daboiz', icon: HiSparkles, label: 'Da Boiz', description: 'Discord bot project' },
        { href: '/about', icon: HiInformationCircle, label: 'About', description: 'Learn more about me' }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Main Error Section */}
                <div className={styles.errorSection}>
                    <FadeInWrapper direction="up">
                        <p className={styles.errorCode}>404</p>
                    </FadeInWrapper>

                    <FadeInWrapper direction="up" delay={0.2}>
                        <h1 className={styles.errorTitle}>
                            Page Not Found
                        </h1>
                    </FadeInWrapper>
                </div>

                {/* Quick Links Section */}
                <FadeInWrapper direction="up" delay={0.8}>
                    <div className={styles.quickLinksSection}>
                        <h2 className={styles.quickLinksTitle}>Where would you like to go?</h2>

                        <div className={styles.quickLinksGrid}>
                            {quickLinks.map((link, index) => {
                                const IconComponent = link.icon;
                                return (
                                    <FadeInWrapper
                                        key={link.href}
                                        direction="up"
                                        delay={1.0 + index * 0.1}
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
                                    </FadeInWrapper>
                                );
                            })}
                        </div>
                    </div>
                </FadeInWrapper>

            </div>
        </div>
    );
};
