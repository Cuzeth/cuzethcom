"use client"

import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
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
    return (
        <div className="my-20 first:mt-8">
            <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12`}>
                {/* Image section */}
                <div className="w-full md:w-1/2" style={{ animationDelay: '100ms' }}>
                    <div className="relative group overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {image && (
                            <Image
                                src={image}
                                alt={title}
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                            />
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
                                    Live Demo
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