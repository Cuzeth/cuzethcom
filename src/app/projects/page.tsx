import { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid/ProjectsGrid';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';
import { projectsData } from '../data';

export const metadata: Metadata = {
    title: 'Projects | Cuzeth',
    description: 'Explore my latest projects and software solutions.',
    twitter: {
        description: 'Explore my latest projects and software solutions.',
    }
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <FadeInWrapper direction="up">
                <div className="container mx-auto mb-20">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
                        <span className="text-red-600">.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
                        A curated selection of applications, tools, and digital experiences engineering for performance and privacy.
                    </p>
                </div>
            </FadeInWrapper>

            <div className="container mx-auto">
                <ProjectsGrid projects={projectsData} />
            </div>
        </div>
    );
};