import { Metadata } from 'next';
import ModernHomepage from '@/components/ModernHomepage/ModernHomepage';

export const metadata: Metadata = {
  title: 'Cuzeth',
};

export default function Home() {
  return (
    <>
      <ModernHomepage />
    </>
  );
}