"use client";

import React, { useState } from 'react';
import styles from './AnimatedDropdown.module.css';
import CenteredTextSection from '@/components/CenteredTextSection/CenteredTextSection';

interface AnimatedDropdownProps {
    title: string;
    markdownText: string;
}

export default function AnimatedDropdown({ title, markdownText }: AnimatedDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles['dropdown-container']} animate-fade-in`}>
            <div className={styles['button-wrapper']}>
                <button
                    onClick={toggleDropdown}
                    className={`${styles['dropdown-button']} animate-on-hover animate-scale-in`}
                >
                    {title}
                    <span className={`${styles['dropdown-arrow']} ${isOpen ? styles['open'] : ''}`}>▼</span>
                </button>
            </div>
            <div className={`${styles['dropdown-content']} ${isOpen ? styles['show'] : ''}`}>
                <div className={`card mx-auto max-w-3xl my-12 p-8 animate-slide-up animate-on-hover ${isOpen ? 'animate-scale-in' : ''}`}>
                    <CenteredTextSection markdownText={markdownText} />
                </div>
            </div>
        </div>
    );
}