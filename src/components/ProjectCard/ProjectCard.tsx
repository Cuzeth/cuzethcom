"use client"

import React from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { SiAdobeaftereffects } from 'react-icons/si';
import { PiPasswordFill } from 'react-icons/pi';
import { HiQrcode } from 'react-icons/hi';
import { FaLink, FaDiscord } from 'react-icons/fa6';
import { SiNextdotjs } from "react-icons/si";
import { Button } from '@/components/Button/Button';

interface ProjectCardProps {
    title: string;
    description: string;
    image: any;
    technologies: string[];
    liveLink?: string;
    repoLink?: string;
    reverse?: boolean;
    index: number;
}

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    key: PiPasswordFill,
    qrcode: HiQrcode,
    link: FaLink,
    puzzle: IoExtensionPuzzle,
    site: SiNextdotjs,
    discord: FaDiscord,
    video: SiAdobeaftereffects
};

export default function ProjectCard({
    title,
    description,
    image,
    technologies,
    liveLink,
    repoLink,
    reverse = false,
    index
}: ProjectCardProps) {
    const generateGradient = (seed: string) => {
        const colors = [
            ['#dc2626', '#b91c1c'], // red theme
            ['#A2A0B3', '#B8B69A'], // cream theme
            ['#5a5a5a', '#1a1a1a'], // dark gray
            ['#374151', '#1f2937'], // medium gray
        ];

        const hash = seed.split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0);

        const colorPair = colors[Math.abs(hash) % colors.length];
        const angle = (Math.abs(hash) % 180) + 45; // 45-225 degrees

        return `linear-gradient(${angle}deg, ${colorPair[0]}22, ${colorPair[1]}11)`;
    };
    return (
        <div className="my-20 first:mt-8">
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12`}>
                {/* Icon section */}
                <div className="w-full md:w-1/2" style={{ animationDelay: '100ms' }}>
                    <div
                        className="relative group overflow-hidden rounded-xl border"
                        style={{ background: generateGradient(title) }}
                    >
                        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {image && (
                            <div className="flex items-center justify-center h-80 transition-all duration-700 group-hover:scale-105">
                                {typeof image === 'string' && iconMap[image] ? (
                                    React.createElement(iconMap[image], {
                                        size: 160,
                                        className: "text-accent group-hover:text-accent-hover transition-colors duration-300"
                                    })
                                ) : typeof image === 'string' ? (
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={800}
                                        height={450}
                                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0"
                                    />
                                ) : (
                                    React.createElement(image, {
                                        size: 160,
                                        className: "text-accent group-hover:text-accent-hover transition-colors duration-300"
                                    })
                                )}
                            </div>
                        )}

                        {/* Overlay links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {liveLink && (
                                <a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-accent hover:bg-accent-hover text-white p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
                                    aria-label={`Visit ${title}`}
                                >
                                    <FaExternalLinkAlt size={18} />
                                </a>
                            )}

                            {repoLink && (
                                <a
                                    href={repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-icon bg-supportingcolor hover:bg-maincolor p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
                                    aria-label={`${title} repository`}
                                >
                                    <FaGithub size={18} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                        <span className="project-index text-primary-500 font-mono text-sm">Project {index}</span>
                        <div className="project-divider h-px flex-grow ml-4"></div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>

                    <div className="card p-6 mb-6">
                        <p className="project-description">{description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="tech-tag text-xs font-medium px-3 py-1 rounded-full bg-supportingcolor"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button buttonSize="btn--medium" buttonColor="red">
                                    View Site
                                </Button>
                            </a>
                        )}

                        {repoLink && (
                            <a
                                href={repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button buttonColor="primary" buttonSize="btn--medium">
                                    View Code
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}