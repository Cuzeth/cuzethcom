import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection/HeroSection';
import fourOhFour from '../../public/images/404.svg';

export const metadata: Metadata = {
    title: '404',
};

const notFound = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'This page does not exist.',
    headline: 'Error 404',
    description: 'Try sticking to the navbar next time.',
    buttonLabel: 'Go Home',
    linkTo: '/',
    img: fourOhFour,
    alt: '404'
};

export default function NotFoundPage() {
    return (
        <>
            <HeroSection {...notFound} />
        </>
    );
};
