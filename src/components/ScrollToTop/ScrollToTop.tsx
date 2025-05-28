"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className={`${styles['fixed-button']} animate-scale-in animate-on-hover`}
                    aria-label="Scroll to top"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className={styles['button-content']}>
                        <FaArrowUp className={`${styles['arrow-icon']} animate-subtle-pulse`} size={16} />
                        <span className={`${styles['button-text']} ${isHovering ? styles['show-text'] : ''} animate-fade-in`}>
                            Top
                        </span>
                    </div>
                    <div className={styles['glow-effect']}></div>
                </button>
            )}
        </>
    );
}