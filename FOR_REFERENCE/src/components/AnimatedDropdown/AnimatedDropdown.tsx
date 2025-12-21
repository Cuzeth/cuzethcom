"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            <div className={styles['button-wrapper']}>
                <button
                    onClick={toggleDropdown}
                    className={`${styles['dropdown-button']} animate-on-hover`}
                >
                    {title}
                    <motion.span 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles['dropdown-arrow']}
                    >
                        ▼
                    </motion.span>
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" as const }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="card mx-auto max-w-3xl my-12 p-8 animate-on-hover">
                            <CenteredTextSection markdownText={markdownText} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}