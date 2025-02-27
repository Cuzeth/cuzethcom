"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
                    className="fixed-button"
                    aria-label="Scroll to top"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="button-content">
                        <FaArrowUp className="arrow-icon" size={16} />
                        <span className={`button-text ${isHovering ? 'show-text' : ''}`}>
                            Top
                        </span>
                    </div>
                    {/* Inner glow effect */}
                    <div className="glow-effect"></div>
                </button>
            )}
            <style jsx>{`
                .fixed-button {
                    position: fixed !important;
                    bottom: 2rem;
                    right: 2rem;
                    min-width: 3rem;
                    height: 3rem;
                    border-radius: 24px;
                    background-color: rgba(240, 9, 70, 0.9);
                    color: #ffffff;
                    box-shadow: 0 4px 20px var(--accent-glow), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
                    z-index: 99999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
                    animation: fadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
                    backdrop-filter: blur(10px);
                    border: none;
                    top: auto !important;
                    padding: 0 1rem;
                }
                
                .button-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    transition: all 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
                }
                
                .arrow-icon {
                    transition: transform 0.3s ease;
                }
                
                .button-text {
                    font-weight: 600;
                    font-size: 14px;
                    max-width: 0;
                    overflow: hidden;
                    white-space: nowrap;
                    opacity: 0;
                    transition: all 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
                }
                
                .button-text.show-text {
                    max-width: 50px;
                    opacity: 1;
                }
                
                .glow-effect {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: 1;
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
                    background-color: rgba(224, 8, 61, 0.95);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px var(--accent-glow), 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
                    padding: 0 1.25rem;
                }
                
                .fixed-button:hover .glow-effect {
                    opacity: 1;
                }
                
                .fixed-button:hover .arrow-icon {
                    transform: translateY(-2px);
                }
                
                .fixed-button:focus {
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4), 0 8px 30px var(--accent-glow);
                }
                
                .fixed-button:active {
                    transform: translateY(-2px);
                }
                
                @media screen and (max-width: 768px) {
                    .fixed-button {
                        bottom: 1.5rem;
                        right: 1.5rem;
                        height: 2.5rem;
                        min-width: 2.5rem;
                        border-radius: 20px;
                        padding: 0 0.75rem;
                    }
                    
                    .fixed-button:hover {
                        padding: 0 1rem;
                    }
                    
                    .button-text.show-text {
                        max-width: 40px;
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    );
}