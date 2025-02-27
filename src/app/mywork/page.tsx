"use client"

import HeroSection from '@/components/HeroSection/HeroSection';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { myworkObjOne, passwordGen, shortURL, tailosiveGaming } from '../data';

export default function MyWork() {
    // Create project objects from the existing data
    const projects = [
        {
            title: "Memorable Password Generator",
            description: "A tool that generates secure yet memorable passwords for users. This project focuses on creating passwords that are both secure and easier to remember than traditional random strings.",
            image: passwordGen.img,
            technologies: ["JavaScript", "CSS", "HTML", "Security"],
            liveLink: "https://pwgen.cuzeth.com"
        },
        {
            title: "Personal URL Shortener",
            description: "A custom URL shortening service that I built to create shorter, more manageable links. This project demonstrates my understanding of web services and API development.",
            image: shortURL.img,
            technologies: ["TypeScript", "Node.js", "Express", "MongoDB"],
            repoLink: "https://github.com/Cuzeth/cuzurl"
        },
        {
            title: "Tailosive Gaming Highlights",
            description: "Created highlight videos for the Tailosive Gaming channel. This project showcases my video editing and content creation skills.",
            image: tailosiveGaming.videoURL ? shortURL.img : passwordGen.img, // Provide a fallback image
            technologies: ["Video Editing", "Content Creation"],
            liveLink: "https://youtube.com/playlist?list=PLLeQ5Dw04o_L3qjqHRhkZIaUuZwXCT-6d"
        }
    ];

    return (
        <>
            <HeroSection {...myworkObjOne} />

            <section className="py-10 bg-dark-900">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                technologies={project.technologies}
                                liveLink={project.liveLink}
                                repoLink={project.repoLink}
                                reverse={index % 2 === 1}
                                index={index + 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-dark-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">More Projects Coming Soon</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                        I'm continuously working on new projects to expand my portfolio.
                        Check back soon to see what I'm building next!
                    </p>
                    <a
                        href="https://github.com/Cuzeth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Visit My GitHub
                    </a>
                </div>
            </section>
        </>
    );
}