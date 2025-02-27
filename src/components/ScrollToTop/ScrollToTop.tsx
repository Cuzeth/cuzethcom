"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

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

    // Using portal approach for better fixed positioning
    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed-button"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={16} />
                </button>
            )}
            <style jsx>{`
                .fixed-button {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 12px;
                    background-color: var(--accent);
                    color: #ffffff;
                    box-shadow: 0 4px 20px var(--accent-glow);
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5px);
                    cursor: pointer;
                    transition: all 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
                    animation: fadeIn 0.3s ease-out;
                    /* Force the button to be above absolutely everything */
                    position: fixed !important; 
                    top: auto !important;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .fixed-button:hover {
                    background-color: var(--accent-hover);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px var(--accent-glow);
                }
                
                .fixed-button:focus {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);
                }
                
                .fixed-button:active {
                    transform: translateY(-2px);
                }
                
                @media screen and (max-width: 768px) {
                    .fixed-button {
                        bottom: 1.5rem;
                        right: 1.5rem;
                        width: 2.5rem;
                        height: 2.5rem;
                    }
                }
            `}</style>
        </>
    );
}