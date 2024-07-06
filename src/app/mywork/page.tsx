import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import { myworkObjOne, passwordGen, shortURL, tailosiveGaming } from '../data';

export const metadata: Metadata = {
    title: 'My Work',
    description: 'View my work.',
    twitter: {
        description: 'View my work.',
    }
};

export default function MyWork() {
    return (
        <>
            <HeroSection {...myworkObjOne} />
            <HeroSection {...passwordGen} />
            <HeroSection {...shortURL} />
            <HeroSection {...tailosiveGaming} />
        </>
    );
};