'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
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

    return (
        <div className={data.lightBg ? styles['home__hero-section'] : `${styles['home__hero-section']} ${styles.darkBg}`}>
            <div className="container">
                <div
                    className={`${styles.row} ${styles['home__hero-row']}`}
                    style={{
                        display: 'flex',
                        flexDirection: data.imgStart ? 'row-reverse' : 'row'
                    }}
                >
                    <div className={styles.col}>
                        <div className={styles['home__hero-text-wrapper']}>
                            {data.topLine && (
                                <AnimateOnScroll animation="animate-slide-down" threshold={0.3}>
                                    <div className={styles['top-line']}>
                                        {data.topLine}
                                    </div>
                                </AnimateOnScroll>
                            )}
                            {data.headline && (
                                <AnimateOnScroll animation="animate-slide-up" delay="0.2s" threshold={0.3}>
                                    <h1 className={data.lightText ? styles.heading : `${styles.heading} ${styles.dark}`}>
                                        {renderHeadline(data.headline)}
                                    </h1>
                                </AnimateOnScroll>
                            )}
                            {data.description && (
                                <AnimateOnScroll animation="animate-slide-up" delay="0.4s" threshold={0.3}>
                                    <p className={data.lightTextDesc ? styles['home__hero-subtitle'] : `${styles['home__hero-subtitle']} ${styles.dark}`}>
                                        {data.description}
                                    </p>
                                </AnimateOnScroll>
                            )}
                            {data.sendTo ? (
                                <AnimateOnScroll animation="animate-slide-up" delay="0.6s" threshold={0.3}>
                                    <a href={data.sendTo}>
                                        <Button buttonSize="btn--wide" buttonColor="red" className="animate-on-hover">
                                            {data.buttonLabel}
                                        </Button>
                                    </a>
                                </AnimateOnScroll>
                            ) : data.buttonLabel ? (
                                <AnimateOnScroll animation="animate-slide-up" delay="0.6s" threshold={0.3}>
                                    <Link href={data.linkTo}>
                                        <Button buttonSize="btn--wide" buttonColor="red" className="animate-on-hover">
                                            {data.buttonLabel}
                                        </Button>
                                    </Link>
                                </AnimateOnScroll>
                            ) : null}
                        </div>
                    </div>
                    <div className={styles.col}>
                        <AnimateOnScroll animation="animate-slide-left" delay="0.3s" threshold={0.3}>
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
                                    data.img && <Image src={data.img} alt={data.alt} className={`${styles['home__hero-img']} animate-on-hover`} />
                                )}
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
}