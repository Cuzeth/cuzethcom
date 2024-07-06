import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import AnimatedDropdown from '@/components/AnimatedDropdown/AnimatedDropdown';
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
            <HeroSection {...daBoizObj} />
            <AnimatedDropdown title="Read Terms of Use" markdownText={daBoizTOS} />
            <AnimatedDropdown title="Read Privacy Policy" markdownText={daBoizPrivacyPolicy} />
        </>
    );
}