import { aboutObj, skillsAndInterests } from '../data';
import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Learn more about Cuzeth - a Computer Science student and developer with a passion for creating modern digital experiences and efficient software solutions.',
    twitter: {
        description: 'Learn more about Cuzeth - a Computer Science student and developer with a passion for creating modern digital experiences and efficient software solutions.',
    },
    openGraph: {
        title: 'About Cuzeth - Developer & CS Student',
        description: 'Learn more about Cuzeth - a Computer Science student and developer with a passion for creating modern digital experiences and efficient software solutions.',
    }
};

export default function About() {
    return <AboutContent aboutObj={aboutObj} skillsAndInterests={skillsAndInterests} />;
}