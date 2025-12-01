import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';
import { otscObj } from '../data';

export const metadata: Metadata = {
    title: 'Out There Social Club',
    description: 'Comprehensive digital platform for Out There Social Club, a 501(c)(3) nonprofit.',
    twitter: {
        description: 'Comprehensive digital platform for Out There Social Club, a 501(c)(3) nonprofit.',
    }
};

export default function Otsc() {
    return (
        <>
            <FadeInWrapper direction="none">
                <HeroSection {...otscObj} />
            </FadeInWrapper>
        </>
    );
}
