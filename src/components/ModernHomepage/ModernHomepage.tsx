'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2';

const featuredProjects = [
    {
        name: "Strobe",
        category: "iOS · RSVP Reader",
        year: "2026",
        description: "Local-first speed reading at 100–1000 WPM. PDF and EPUB support, no cloud.",
        link: "https://strobefast.app",
        external: true,
    },
    {
        name: "Out There Social Club",
        category: "Web · Nonprofit Platform",
        year: "2025",
        description: "Full-stack digital ecosystem for a 501(c)(3) nonprofit. Next.js, Firebase, SwiftUI.",
        link: "https://outtheresocialclub.org",
        external: true,
    },
    {
        name: "Workouts",
        category: "iOS · Fitness",
        year: "2025",
        description: "Privacy-centric, offline-first workout tracker. No accounts, no tracking.",
        link: "https://getworkouts.app",
        external: true,
    },
];

const stack = [
    { label: "Frontend", items: ["React", "Next.js", "Svelte", "Tailwind"] },
    { label: "Backend", items: ["Node.js", "PostgreSQL", "Firebase"] },
    { label: "Mobile", items: ["SwiftUI", "iOS"] },
    { label: "Tools", items: ["Git", "Vercel", "Cloudflare"] },
];

export default function ModernHomepage() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

    return (
        <div className="relative bg-maincolor text-heading selection:bg-accent/20">

            {/* Grid Background */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
                    backgroundSize: '64px 64px'
                }}
            />

            {/* Hero */}
            <section ref={targetRef} className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-16">
                <motion.div
                    style={{ opacity, y }}
                    className="max-w-7xl mx-auto w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="text-accent font-mono text-xs tracking-widest mb-8 uppercase">// Software Engineer & Builder</p>
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 text-heading">
                            Cuzeth
                        </h1>
                        <p className="text-text text-lg md:text-xl max-w-sm mb-10 leading-relaxed font-light">
                            I build fast, private,<br />well-crafted software.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/projects">
                                <button className="group flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-accent-hover active:scale-95">
                                    View Projects
                                    <HiArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" />
                                </button>
                            </Link>
                            <a href="mailto:cuz@cuzeth.com">
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-border-medium text-heading text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-white/[0.04] hover:border-white/20 active:scale-95">
                                    Get in Touch
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3"
                >
                    <div className="w-[1px] h-8 bg-gradient-to-b from-accent/60 to-transparent" />
                    <span className="text-xs font-mono text-gray-medium uppercase tracking-widest">Scroll</span>
                </motion.div>
            </section>

            {/* Selected Work */}
            <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 border-t border-border-light">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-14">
                        <p className="text-xs font-mono text-accent tracking-widest uppercase">Selected Work</p>
                        <Link href="/projects" className="flex items-center gap-1.5 text-xs font-mono text-gray-medium hover:text-heading transition-colors duration-200">
                            All projects <HiArrowRight size={11} />
                        </Link>
                    </div>

                    <div className="flex flex-col">
                        {featuredProjects.map((project, i) => (
                            <FeaturedProjectRow key={project.name} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About + Stack */}
            <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 border-t border-border-light">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xs font-mono text-accent tracking-widest uppercase mb-8">About</p>
                        <p className="text-2xl md:text-3xl font-bold text-heading leading-snug tracking-tight mb-6">
                            CS student. I care about speed, privacy, and elegant code.
                        </p>
                        <p className="text-text leading-relaxed mb-8 text-sm">
                            Based in the US, studying Computer Science (Cybersecurity). I build tools that respect users — offline-first, fast, and without unnecessary complexity.
                        </p>
                        <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-mono text-accent hover:text-heading transition-colors duration-200">
                            More about me <HiArrowRight size={12} />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-xs font-mono text-accent tracking-widest uppercase mb-8">Stack</p>
                        <div className="flex flex-col gap-5">
                            {stack.map((group) => (
                                <div key={group.label} className="flex gap-4 items-baseline">
                                    <span className="text-xs font-mono text-gray-medium w-20 shrink-0">{group.label}</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.items.map((item) => (
                                            <span
                                                key={item}
                                                className="text-xs font-mono px-2 py-1 rounded border border-border-light text-text bg-white/[0.025]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 border-t border-border-light">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto"
                >
                    <p className="text-xs font-mono text-accent tracking-widest uppercase mb-8">Contact</p>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-heading mb-10 leading-none">
                        Let's build<br />something.
                    </h2>
                    <div className="flex flex-wrap gap-8">
                        <a
                            href="mailto:cuz@cuzeth.com"
                            className="inline-flex items-center gap-1.5 font-mono text-sm text-text hover:text-heading transition-colors duration-200"
                        >
                            cuz@cuzeth.com <HiArrowUpRight size={13} />
                        </a>
                        <a
                            href="https://github.com/Cuzeth"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-sm text-text hover:text-heading transition-colors duration-200"
                        >
                            github.com/Cuzeth <HiArrowUpRight size={13} />
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

function FeaturedProjectRow({ project, index }: { project: typeof featuredProjects[0], index: number }) {
    const isExternal = project.external;
    const inner = (
        <div className="group flex flex-col md:flex-row md:items-center justify-between py-7 border-b border-border-light hover:border-accent/30 transition-colors duration-300 cursor-pointer">
            <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-xs font-mono text-gray-medium shrink-0">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-heading group-hover:text-accent transition-colors duration-200 truncate">
                        {project.name}
                    </h3>
                </div>
                <p className="text-sm text-gray-medium ml-[1.875rem] leading-relaxed">{project.description}</p>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0 ml-[1.875rem] md:ml-8 shrink-0">
                <span className="text-xs font-mono text-gray-medium">{project.category}</span>
                <span className="text-xs font-mono text-gray-medium">{project.year}</span>
                <HiArrowUpRight
                    size={15}
                    className="text-gray-medium group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
        >
            {isExternal ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
                <Link href={project.link}>{inner}</Link>
            )}
        </motion.div>
    );
}
