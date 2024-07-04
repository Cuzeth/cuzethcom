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
        <div className={styles['dropdown-container']}>
            <button onClick={toggleDropdown} className={styles['dropdown-button']}>
                {title}
            </button>
            <div className={`${styles['dropdown-content']} ${isOpen ? styles['show'] : ''}`}>
                <CenteredTextSection markdownText={markdownText} />
            </div>
        </div>
    );
}