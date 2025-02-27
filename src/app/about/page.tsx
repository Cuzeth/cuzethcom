"use client"

import Image from 'next/image';
import HeroSection from '@/components/HeroSection/HeroSection';
import { aboutObj } from '../data';
import { FaCode, FaGraduationCap, FaLaptopCode, FaServer } from 'react-icons/fa';

export default function About() {
    const skills = [
        { name: 'Frontend Development', icon: <FaCode />, description: 'Creating responsive, intuitive user interfaces with modern frameworks' },
        { name: 'Backend Development', icon: <FaServer />, description: 'Building robust server-side applications and APIs' },
        { name: 'Computer Science', icon: <FaGraduationCap />, description: 'Studying algorithms, data structures, and software engineering principles' },
        { name: 'Tools & Technologies', icon: <FaLaptopCode />, description: 'Working with various languages and developer tools' }
    ];

    const technologies = [
        'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
        'HTML/CSS', 'Git', 'Python', 'Discord API', 'Tailwind CSS'
    ];

    return (
        <>
            <HeroSection {...aboutObj} />

            <section className="py-20 bg-dark-800">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                            {skills.map((skill, index) => (
                                <div key={index} className="glass-card p-6 flex items-start">
                                    <div className="mr-4 text-primary-600 text-2xl mt-1">
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                        <p className="text-gray-400">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-dark-900 rounded-full text-sm font-medium border border-gray-700 hover:border-primary-700 transition-colors duration-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
                            <div className="space-y-6 text-gray-300">
                                <p>
                                    I discovered my passion for programming at a young age and have been continuously expanding my knowledge and skills ever since. Currently, I'm majoring in Computer Science, where I'm gaining a strong foundation in software development principles and practices.
                                </p>
                                <p>
                                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and creating content. My approach to development focuses on creating clean, maintainable code that solves real problems.
                                </p>
                                <p>
                                    I'm always looking for new challenges and opportunities to grow as a developer. If you're interested in collaborating or have a project in mind, feel free to reach out!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <a
                        href="mailto:cuz@cuzeth.com"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        Get In Touch
                    </a>
                </div>
            </section>
        </>
    );
}