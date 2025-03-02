import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import Projects from '@/components/Projects/Projects';
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
            <HeroSection {...myworkObjOne} />
            <Projects projects={projectsData} />
        </>
    );
};