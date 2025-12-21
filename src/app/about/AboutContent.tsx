'use client';
import HeroSection from '@/components/HeroSection/HeroSection';
import CenteredTextSection from '@/components/CenteredTextSection/CenteredTextSection';
import { motion } from 'framer-motion';
import { HeroData } from '../data';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';

interface AboutContentProps {
    aboutObj: HeroData;
    skillsAndInterests: string;
}

export default function AboutContent({ aboutObj, skillsAndInterests }: AboutContentProps) {
    return (
        <div className="bg-supportingcolor dark:bg-neutral-950 min-h-screen">
            <HeroSection {...aboutObj} />

            <div className="container mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar / Title */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="sticky top-24"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-heading">
                                Beyond the <span className="text-accent">Code.</span>
                            </h2>
                            <p className="text-text mb-8 leading-relaxed">
                                Exploring the technical expertise and creative drive behind the work.
                            </p>
                            <Link href="/projects">
                                <Button buttonSize="btn--large" buttonColor="red">
                                    View Projects
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-none bg-card-bg p-8 md:p-12 rounded-2xl border border-medium"
                        >
                            {/* We use the existing component but wrapped nicely */}
                            <CenteredTextSection markdownText={skillsAndInterests} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}