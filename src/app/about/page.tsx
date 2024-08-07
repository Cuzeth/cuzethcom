import { aboutObj } from '../data';
import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';

export const metadata: Metadata = {
    title: 'About Me',
    description: '',
    twitter: {
        description: '',
    }
};

export default function About() {
    return (
        <>
            <HeroSection {...aboutObj} />
        </>
    );
}