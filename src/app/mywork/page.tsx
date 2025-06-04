import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import Projects from '@/components/Projects/Projects';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import { myworkObjOne, projectsData } from '../data';

export const metadata: Metadata = {
    title: 'My Work',
    description: 'View my work.',
    twitter: {
        description: 'View my work.',
    }
};

export default function MyWork() {
    return (
        <>
            <AnimateOnScroll animation="animate-fade-in">
                <HeroSection {...myworkObjOne} />
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-up" delay="0.2s">
                <Projects projects={projectsData} />
            </AnimateOnScroll>
        </>
    );
};