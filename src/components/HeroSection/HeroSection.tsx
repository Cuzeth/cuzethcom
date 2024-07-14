import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';
import styles from './HeroSection.module.css';
import { HeroData } from '@/app/data';

export default function HeroSection(data: HeroData) {
    return (
        <>
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
                                {data.topLine && <div className={styles['top-line']}>{data.topLine}</div>}
                                {data.headline && (
                                    <h1 className={data.lightText ? styles.heading : `${styles.heading} ${styles.dark}`}>
                                        {data.headline}
                                    </h1>
                                )}
                                {data.description && (
                                    <p className={data.lightTextDesc ? styles['home__hero-subtitle'] : `${styles['home__hero-subtitle']} ${styles.dark}`}>
                                        {data.description}
                                    </p>
                                )}
                                {data.sendTo ? (
                                    <a href={data.sendTo}>
                                        <Button buttonSize="btn--wide" buttonColor="blue">
                                            {data.buttonLabel}
                                        </Button>
                                    </a>
                                ) : data.buttonLabel ? (
                                    <Link href={data.linkTo}>
                                        <Button buttonSize="btn--wide" buttonColor="blue">
                                            {data.buttonLabel}
                                        </Button>
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.col}>
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
                                    ></iframe>
                                ) : (
                                    data.img && <Image src={data.img} alt={data.alt} className={styles['home__hero-img']} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}