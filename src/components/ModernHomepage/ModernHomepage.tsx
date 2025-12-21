'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function ModernHomepage() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const { scrollYProgress: pageScroll } = useScroll();
    const logoOpacity = useTransform(pageScroll, [0, 0.2, 0.8, 1], [0.15, 0.25, 0.25, 0.15]);
    const logoScale = useTransform(pageScroll, [0, 1], [1.1, 1]);
    const logoY = useTransform(pageScroll, [0, 1], ["50%", "-100%"]);

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <div className="relative bg-maincolor text-heading selection:bg-accent/30">
            <motion.div
                style={{
                    opacity: logoOpacity,
                    scale: logoScale,
                    y: logoY,
                    x: '-50%',
                }}
                className="fixed bottom-0 left-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-0 pointer-events-none"
            >
                <Image
                    src="/images/Logo.svg"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>

            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

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
                        <h2 className="text-accent font-mono mb-4 tracking-widest text-xs md:text-sm">SINCE 2019</h2>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
                            CUZETH<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-700">
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
                        <p className="text-lg md:text-2xl text-text font-light mb-10 leading-relaxed">
                            Crafting privacy-focused, high-performance digital experiences. Engineering the future, line by line.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/projects">
                                <button className="group relative px-8 py-4 bg-accent text-white font-bold overflow-hidden rounded-full transition-all hover:bg-accent-hover hover:scale-105 active:scale-95">
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Work <HiArrowRight />
                                    </span>
                                </button>
                            </Link>
                            <Link href="/about">
                                <button className="px-8 py-4 bg-transparent border border-medium text-heading font-bold rounded-full transition-all hover:bg-card-bg hover:border-light">
                                    About Me
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-medium"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
                </motion.div>
            </section>

            <section className="relative z-10 py-32 px-6 md:px-12 bg-maincolor border-t border-light">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <FeatureItem
                            number="01"
                            title="Privacy First"
                            description="User respect is paramount. We prioritize offline-first architectures and data sovereignty."
                        />
                        <FeatureItem
                            number="02"
                            title="Precision Engineering"
                            description="Code with purpose. Optimizing for latency, maintainability, and robust scale."
                        />
                        <FeatureItem
                            number="03"
                            title="Modern Design"
                            description="Where form meets function. Interfaces designed for clarity, accessibility, and impact."
                        />
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-16 md:py-32 px-6 md:px-12 bg-supportingcolor">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16">
                    <div>
                        <h2 className="text-3xl md:text-6xl font-bold mb-4 text-heading">Selected Work</h2>
                        <p className="text-text">Featured applications and contributions.</p>
                    </div>
                    <Link href="/projects" className="hidden md:block text-accent hover:text-heading transition-colors">
                        View All Projects →
                    </Link>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
                    <ProjectTeaser
                        name="Out There Social Club"
                        category="Non-profit Platform"
                        year="2025"
                        link="https://outtheresocialclub.org"
                    />
                    <ProjectTeaser
                        name="Workouts"
                        category="iOS Application"
                        year="2025"
                        link="https://getworkouts.app"
                    />
                    <ProjectTeaser
                        name="Da Boiz Bot"
                        category="Discord Utility"
                        year="2019-2025"
                        link="/daboiz"
                    />
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/projects" className="text-accent hover:text-heading transition-colors">
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
            <span className="text-sm font-mono text-accent mb-4 block">{number}</span>
            <h3 className="text-2xl font-bold mb-4 text-heading group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-gray-medium leading-relaxed">
                {description}
            </p>
        </div>
    );
}

function ProjectTeaser({ name, category, year, link }: { name: string, category: string, year: string, link: string }) {
    const isExternal = link.startsWith('http');
    const Content = (
        <div className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-light hover:!border-accent transition-colors group cursor-pointer">
            <h3 className="text-xl md:text-4xl font-bold text-heading group-hover:text-text group-hover:translate-x-4 transition-all duration-300">
                {name}
            </h3>
            <div className="flex items-center gap-8 mt-2 md:mt-0 text-gray-medium font-mono text-sm md:text-base">
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
