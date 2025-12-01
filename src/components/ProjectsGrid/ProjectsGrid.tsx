'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiQrcode } from 'react-icons/hi';
import { PiPasswordFill } from 'react-icons/pi';
import { FaLink, FaDiscord } from 'react-icons/fa6';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { SiAdobeaftereffects, SiNextdotjs } from 'react-icons/si';
import React from 'react';

// Re-using the icon map logic
const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    key: PiPasswordFill,
    qrcode: HiQrcode,
    link: FaLink,
    puzzle: IoExtensionPuzzle,
    site: SiNextdotjs,
    discord: FaDiscord,
    video: SiAdobeaftereffects
};

interface ProjectsGridProps {
    projects: any[]; // Using any to avoid strict type import issues for now, will refine
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projects.map((project, index) => (
                <GridCard key={project.id} project={project} index={index} />
            ))}
        </div>
    );
}

function GridCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:border-red-600/50 transition-colors duration-300 flex flex-col h-full"
        >
            {/* Image/Icon Container */}
            <div className="relative h-48 w-full bg-neutral-900 flex items-center justify-center overflow-hidden border-b border-neutral-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {project.image && (
                    <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2">
                         {typeof project.image === 'string' && iconMap[project.image] ? (
                            React.createElement(iconMap[project.image], {
                                size: 64,
                                className: "text-neutral-500 group-hover:text-red-500 transition-colors duration-300"
                            })
                        ) : typeof project.image === 'string' ? (
                            <div className="relative w-32 h-32">
                                 <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ) : (
                             React.createElement(project.image, {
                                size: 64,
                                className: "text-neutral-500 group-hover:text-red-500 transition-colors duration-300"
                            })
                        )}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-red-500 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                         {project.liveLink && (
                            <a 
                                href={project.liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-white transition-colors p-1"
                                title="Live Demo"
                            >
                                <FaExternalLinkAlt size={14} />
                            </a>
                        )}
                        {project.repoLink && (
                            <a 
                                href={project.repoLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-white transition-colors p-1"
                                title="View Code"
                            >
                                <FaGithub size={16} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech: string) => (
                        <span 
                            key={tech} 
                            className="text-xs font-mono px-2 py-1 rounded bg-neutral-800 text-neutral-400 border border-neutral-700/50"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-xs font-mono px-2 py-1 rounded bg-neutral-900 text-neutral-500 border border-neutral-800">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
