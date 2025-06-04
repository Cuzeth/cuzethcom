'use client';
import HeroSection from '@/components/HeroSection/HeroSection';
import CenteredTextSection from '@/components/CenteredTextSection/CenteredTextSection';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import { HeroData } from '../data';

interface AboutContentProps {
    aboutObj: HeroData;
    skillsAndInterests: string;
}

export default function AboutContent({ aboutObj, skillsAndInterests }: AboutContentProps) {
    return (
        <>
            <AnimateOnScroll animation="animate-fade-in">
                <HeroSection {...aboutObj} />
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-up" delay="0.2s" threshold={0.2}>
                <div className="card mx-auto max-w-3xl my-12 p-8 animate-on-hover">
                    <CenteredTextSection markdownText={skillsAndInterests} />
                </div>
            </AnimateOnScroll>
        </>
    );
}