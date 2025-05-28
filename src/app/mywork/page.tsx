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
            <div className="animate-fade-in">
                <HeroSection {...myworkObjOne} />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Projects projects={projectsData} />
            </div>
        </>
    );
};