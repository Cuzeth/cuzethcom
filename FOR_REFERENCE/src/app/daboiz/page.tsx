import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import AnimatedDropdown from '@/components/AnimatedDropdown/AnimatedDropdown';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';
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
            <FadeInWrapper direction="none">
                <HeroSection {...daBoizObj} />
            </FadeInWrapper>
            <FadeInWrapper delay={0.2} direction="up">
                <AnimatedDropdown title="Read Terms of Use (Archived)" markdownText={daBoizTOS} />
            </FadeInWrapper>
            <FadeInWrapper delay={0.4} direction="up">
                <AnimatedDropdown title="Read Privacy Policy (Archived)" markdownText={daBoizPrivacyPolicy} />
            </FadeInWrapper>
        </>
    );
}