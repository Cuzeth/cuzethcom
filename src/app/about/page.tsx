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
            <div className="animate-fade-in">
                <HeroSection {...aboutObj} />
            </div>
            <div className="card mx-auto max-w-3xl my-12 p-8 animate-slide-up animate-on-hover" style={{ animationDelay: '0.3s' }}>
                <CenteredTextSection markdownText={skillsAndInterests} />
            </div>
        </>
    );
}