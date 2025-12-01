'use client';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import styles from './ModernHomepage.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function ModernHomepage() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <div className="relative overflow-hidden bg-neutral-950 text-white selection:bg-red-500/30">

            {/* Background Grid Pattern */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Hero Section */}
            <section ref={targetRef} className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
                <motion.div
                    style={{ opacity, scale, y }}
                    className="max-w-7xl mx-auto w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-red-500 font-mono mb-4 tracking-widest text-sm md:text-base">SINCE 2019</h2>
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
                            CUZETH<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-800">
                                SOFTWARE
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <p className="text-xl md:text-2xl text-gray-400 font-light mb-10 leading-relaxed">
                            We engineer digital experiences that prioritize privacy, performance, and precision.
                            Building the tools of tomorrow, today.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/projects">
                                <button className="group relative px-8 py-4 bg-red-600 text-white font-bold overflow-hidden rounded-full transition-all hover:bg-red-700 hover:scale-105 active:scale-95">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Explore Projects <HiArrowRight />
                                    </span>
                                </button>
                            </Link>
                            <Link href="/about">
                                <button className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-bold rounded-full transition-all hover:bg-neutral-800 hover:border-neutral-600">
                                    About Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-red-500 to-transparent"></div>
                </motion.div>
            </section>

            {/* Philosophy / Features Grid */}
            <section className="relative z-10 py-32 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <FeatureItem
                            number="01"
                            title="Privacy First"
                            description="We believe in software that respects the user. Offline-first architectures and zero-tracking policies are our standard."
                        />
                        <FeatureItem
                            number="02"
                            title="Precision Engineering"
                            description="Every line of code is crafted with intent. We optimize for speed, maintainability, and scalability."
                        />
                        <FeatureItem
                            number="03"
                            title="Modern Design"
                            description="Aesthetics meet functionality. We create interfaces that are intuitive, accessible, and visually striking."
                        />
                    </div>
                </div>
            </section>

            {/* Recent Work Teaser */}
            <section className="relative z-10 py-32 px-6 md:px-12 bg-neutral-900">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Selected Work</h2>
                        <p className="text-gray-400">Highlights from our recent deployments.</p>
                    </div>
                    <Link href="/projects" className="hidden md:block text-red-500 hover:text-white transition-colors">
                        View All Projects →
                    </Link>
                </div>

                {/* Simple Project List for Home */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
                    <ProjectTeaser
                        name="Workouts"
                        category="iOS Application"
                        year="2025"
                        link="https://getworkouts.app"
                    />
                    <ProjectTeaser
                        name="Out There Social Club"
                        category="Non-profit Platform"
                        year="2025"
                        link="https://outtheresocialclub.org"
                    />
                    <ProjectTeaser
                        name="Da Boiz Bot"
                        category="Discord Utility"
                        year="2019-2025"
                        link="/daboiz"
                    />
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/projects" className="text-red-500 hover:text-white transition-colors">
                        View All Projects →
                    </Link>
                </div>
            </section>
        </div>
    );
}

function FeatureItem({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="group">
            <span className="text-sm font-mono text-red-500 mb-4 block">{number}</span>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

function ProjectTeaser({ name, category, year, link }: { name: string, category: string, year: string, link: string }) {
    const isExternal = link.startsWith('http');
    const Content = (
        <div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-neutral-800 hover:border-red-500 transition-colors group cursor-pointer">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-200 group-hover:text-white group-hover:translate-x-4 transition-all duration-300">
                {name}
            </h3>
            <div className="flex items-center gap-8 mt-4 md:mt-0 text-gray-500 font-mono text-sm md:text-base">
                <span>{category}</span>
                <span>{year}</span>
            </div>
        </div>
    );

    return isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer">{Content}</a>
    ) : (
        <Link href={link}>{Content}</Link>
    );
}