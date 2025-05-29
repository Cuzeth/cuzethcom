'use client';
import HeroSection from '@/components/HeroSection/HeroSection';
import CenteredTextSection from '@/components/CenteredTextSection/CenteredTextSection';
import { useInView } from '@/hooks/useInView';
import { HeroData } from '../data';

interface AboutContentProps {
    aboutObj: HeroData;
    skillsAndInterests: string;
}

export default function AboutContent({ aboutObj, skillsAndInterests }: AboutContentProps) {
    const skillsSection = useInView({ threshold: 0.2 });

    return (
        <>
            <HeroSection {...aboutObj} />
            <div 
                ref={skillsSection.ref}
                className={`card mx-auto max-w-3xl my-12 p-8 animate-on-hover ${skillsSection.isInView ? 'animate-slide-up' : ''}`}
            >
                <CenteredTextSection markdownText={skillsAndInterests} />
            </div>
        </>
    );
}