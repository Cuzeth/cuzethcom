import { aboutObj, skillsAndInterests } from '../data';
import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import CenteredTextSection from '@/components/CenteredTextSection/CenteredTextSection';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn more about Cuzeth - a Computer Science student and developer with a passion for creating modern digital experiences and efficient software solutions.',
    twitter: {
        description: 'Learn more about Cuzeth - a Computer Science student and developer with a passion for creating modern digital experiences and efficient software solutions.',
    },
    openGraph: {
        title: 'About Cuzeth - Developer & CS Student',
        description: 'Learn more about Cuzeth - a Computer Science student and developer with a passion for creating modern digital experiences and efficient software solutions.',
    }
};

export default function About() {
    return (
        <>
            <HeroSection {...aboutObj} />
            <div className="glass-card mx-auto max-w-3xl my-12 p-8">
                <CenteredTextSection markdownText={skillsAndInterests} />
            </div>
        </>
    );
}