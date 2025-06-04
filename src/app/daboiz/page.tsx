import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import AnimatedDropdown from '@/components/AnimatedDropdown/AnimatedDropdown';
import AnimateOnScroll from '@/components/AnimateOnScroll/AnimateOnScroll';
import { daBoizObj, daBoizPrivacyPolicy, daBoizTOS } from '../data';

export const metadata: Metadata = {
    title: 'Da Boiz',
    description: 'Da Boiz Discord bot. Multipurpose Discord Bot, completely free.',
    twitter: {
        description: 'Da Boiz Discord bot. Multipurpose Discord Bot, completely free.',
    }
};

export default function DaBoiz() {
    return (
        <>
            <AnimateOnScroll animation="animate-fade-in">
                <HeroSection {...daBoizObj} />
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-up" delay="0.2s">
                <AnimatedDropdown title="Read Terms of Use" markdownText={daBoizTOS} />
            </AnimateOnScroll>
            <AnimateOnScroll animation="animate-slide-up" delay="0.4s">
                <AnimatedDropdown title="Read Privacy Policy" markdownText={daBoizPrivacyPolicy} />
            </AnimateOnScroll>
        </>
    );
}