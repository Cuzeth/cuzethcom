import { Metadata } from 'next';
import HeroSection from '../components/HeroSection/HeroSection';
import { homeObjOne } from './data';

export const metadata: Metadata = {
  title: 'Cuzeth',
};

export default function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}