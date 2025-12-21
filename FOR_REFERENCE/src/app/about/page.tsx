import { aboutObj, skillsAndInterests } from '../data';
import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Discover the background and expertise of Cuzeth - a software engineer and creative technologist dedicated to building privacy-focused, high-performance digital solutions.',
    twitter: {
        description: 'Discover the background and expertise of Cuzeth - a software engineer and creative technologist dedicated to building privacy-focused, high-performance digital solutions.',
    },
    openGraph: {
        title: 'About Cuzeth - Developer & CS Student',
        description: 'Discover the background and expertise of Cuzeth - a software engineer and creative technologist dedicated to building privacy-focused, high-performance digital solutions.',
    }
};

export default function About() {
    return <AboutContent aboutObj={aboutObj} skillsAndInterests={skillsAndInterests} />;
}