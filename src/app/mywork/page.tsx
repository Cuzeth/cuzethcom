import { Metadata } from 'next';
import HeroSection from '../../components/HeroSection/HeroSection';
import { myworkObjOne, passwordGen, tailosiveGaming } from '../data';

export const metadata: Metadata = {
    title: 'My Work',
};

export default function MyWork() {
    return (
        <>
            <HeroSection {...myworkObjOne} />
            <HeroSection {...passwordGen} />
            <HeroSection {...tailosiveGaming} />
        </>
    );
};