'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import { useInView } from '@/hooks/useInView';
import styles from './HeroSection.module.css';
import { HeroData } from '@/app/data';

export default function HeroSection(data: HeroData) {
    const heroSection = useInView({ threshold: 0.3 });
    
    const renderHeadline = (headline: string | any[]) => {
        if (typeof headline === 'string') {
            return headline;
        }
        return headline.map((segment, index) =>
            segment.emphasize ? <em key={index}>{segment.text}</em> : <span key={index}>{segment.text}</span>
        );
    };

    return (
        <>
            <div 
                ref={heroSection.ref}
                className={data.lightBg ? styles['home__hero-section'] : `${styles['home__hero-section']} ${styles.darkBg}`}
            >
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
                                    <div className={`${styles['top-line']} ${heroSection.isInView ? 'animate-slide-down' : ''}`}>
                                        {data.topLine}
                                    </div>
                                )}
                                {data.headline && (
                                    <h1 className={`${data.lightText ? styles.heading : `${styles.heading} ${styles.dark}`} ${heroSection.isInView ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                                        {renderHeadline(data.headline)}
                                    </h1>
                                )}
                                {data.description && (
                                    <p className={`${data.lightTextDesc ? styles['home__hero-subtitle'] : `${styles['home__hero-subtitle']} ${styles.dark}`} ${heroSection.isInView ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                                        {data.description}
                                    </p>
                                )}
                                {data.sendTo ? (
                                    <div className={heroSection.isInView ? 'animate-slide-up' : ''} style={{ animationDelay: '0.6s' }}>
                                        <a href={data.sendTo}>
                                            <Button buttonSize="btn--wide" buttonColor="red" className="animate-on-hover">
                                                {data.buttonLabel}
                                            </Button>
                                        </a>
                                    </div>
                                ) : data.buttonLabel ? (
                                    <div className={heroSection.isInView ? 'animate-slide-up' : ''} style={{ animationDelay: '0.6s' }}>
                                        <Link href={data.linkTo}>
                                            <Button buttonSize="btn--wide" buttonColor="red" className="animate-on-hover">
                                                {data.buttonLabel}
                                            </Button>
                                        </Link>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className={`${styles.col} ${heroSection.isInView ? 'animate-slide-left' : ''}`} style={{ animationDelay: '0.3s' }}>
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
                                    ></iframe>
                                ) : (
                                    data.img && <Image src={data.img} alt={data.alt} className={`${styles['home__hero-img']} ${heroSection.isInView ? 'animate-float' : ''} animate-on-hover`} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}