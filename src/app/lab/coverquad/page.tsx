import type { Metadata } from 'next';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';
import CoverQuad from './CoverQuad';

export const metadata: Metadata = {
  title: 'CoverQuad',
  description: 'Create a 2×2 album art collage. Upload images or search for album art.',
  robots: { index: false, follow: false },
};

export default function CoverQuadPage() {
  return (
    <FadeInWrapper direction="up">
      <main className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12">
        <h1 className="text-2xl font-bold text-heading tracking-tight">CoverQuad</h1>
        <p className="text-sm text-text mb-6">Create a 2&times;2 album art collage</p>
        <CoverQuad />
      </main>
    </FadeInWrapper>
  );
}
