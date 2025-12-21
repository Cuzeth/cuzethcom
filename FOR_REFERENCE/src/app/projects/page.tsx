import { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid/ProjectsGrid';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';
import { projectsData } from '../data';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A showcase of engineering projects and digital experiments by Cuzeth.',
    twitter: {
        description: 'A showcase of engineering projects and digital experiments by Cuzeth.',
    }
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <FadeInWrapper direction="up">
                <div className="container mx-auto mb-20">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-heading">
                        WORK<span className="text-accent">.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-text max-w-2xl font-light">
                        A curated collection of engineering projects, tools, and creative experiments.
                    </p>
                </div>
            </FadeInWrapper>

            <div className="container mx-auto">
                <ProjectsGrid projects={projectsData} />
            </div>
        </div>
    );
};