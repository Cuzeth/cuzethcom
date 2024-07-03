import { aboutObj } from '../data';
import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';

export const metadata: Metadata = {
    title: 'About Me',
};

export default function About() {
    return (
        <>
            <HeroSection {...aboutObj} />
        </>
    );
}