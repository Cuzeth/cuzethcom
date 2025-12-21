'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { HeroData } from '@/app/data';

export default function HeroSection(data: HeroData) {
    const renderHeadline = (headline: string | any[]) => {
        if (typeof headline === 'string') {
            return headline;
        }
        return headline.map((segment, index) =>
            segment.emphasize ? <em key={index}>{segment.text}</em> : <span key={index}>{segment.text}</span>
        );
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const slideIn = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className={data.lightBg ? styles['home__hero-section'] : `${styles['home__hero-section']} ${styles.darkBg}`}>
            <div className="container">
                <div
                    className={`${styles.row} ${styles['home__hero-row']} ${data.imgStart ? styles.rowReverse : ''}`}
                >
                    <div className={styles.col}>
                        <div className={styles['home__hero-text-wrapper']}>
                            {data.topLine && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={styles['top-line']}
                                >
                                    {data.topLine}
                                </motion.div>
                            )}
                            {data.headline && (
                                <motion.h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    transition={{ delay: 0.2 }}
                                    className={data.lightText ? styles.heading : `${styles.heading} ${styles.dark}`}
                                >
                                    {renderHeadline(data.headline)}
                                </motion.h1>
                            )}
                            {data.description && (
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    transition={{ delay: 0.4 }}
                                    className={data.lightTextDesc ? styles['home__hero-subtitle'] : `${styles['home__hero-subtitle']} ${styles.dark}`}
                                >
                                    {data.description}
                                </motion.p>
                            )}
                            {data.sendTo ? (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    transition={{ delay: 0.6 }}
                                >
                                    <a href={data.sendTo}>
                                        <Button buttonSize="btn--wide" buttonColor="red" className="animate-on-hover">
                                            {data.buttonLabel}
                                        </Button>
                                    </a>
                                </motion.div>
                            ) : data.buttonLabel ? (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Link href={data.linkTo}>
                                        <Button buttonSize="btn--wide" buttonColor="red" className="animate-on-hover">
                                            {data.buttonLabel}
                                        </Button>
                                    </Link>
                                </motion.div>
                            ) : null}
                        </div>
                    </div>
                    <div className={styles.col}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideIn}
                            transition={{ delay: 0.3 }}
                        >
                            <div className={styles['home__hero-img-wrapper']}>
                                {data.videoURL ? (
                                    <iframe
                                        title="video"
                                        width="560"
                                        height="315"
                                        src={data.videoURL}
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="animate-on-hover"
                                    />
                                ) : (
                                    data.img && <Image src={data.img} alt={data.alt} width={555} height={400} className={`${styles['home__hero-img']} animate-on-hover`} />
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}