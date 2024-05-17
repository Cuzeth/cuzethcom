import { Metadata } from 'next';
import HeroSection from '../../components/HeroSection/HeroSection';
import { daBoizObj } from '../data';

export const metadata: Metadata = {
    title: 'Da Boiz',
};

export default function DaBoiz() {
    return (
        <>
            <HeroSection {...daBoizObj} />
        </>
    );
}