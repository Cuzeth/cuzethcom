"use client"

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

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
        <div className="my-10 max-w-4xl mx-auto px-4">
            <button
                onClick={toggleDropdown}
                className="w-full md:w-auto mx-auto flex items-center justify-center gap-2 bg-dark-800 hover:bg-dark-700 
                    text-white py-3 px-6 rounded-lg shadow-md transition-all duration-300
                    border border-[rgba(255,255,255,0.1)] focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="font-medium">{title}</span>
                <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
                className={`mt-4 transition-all duration-500 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="bg-dark-800 rounded-xl p-6 md:p-8 border border-[rgba(255,255,255,0.08)] shadow-lg">
                    <div className="markdown-content">
                        <ReactMarkdown className="prose prose-invert prose-lg max-w-none">
                            {markdownText}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}