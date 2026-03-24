import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Experimental tools and creative experiments by Cuzeth.',
};

const labItems = [
  {
    title: 'CoverQuad',
    description: 'Create a 2×2 album art collage. Upload images or search for album art.',
    href: '/lab/coverquad',
  },
];

export default function LabPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <FadeInWrapper direction="up">
        <div className="container mx-auto mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-heading">
            LAB<span className="text-accent">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-text max-w-2xl font-light">
            Experimental tools and creative experiments.
          </p>
        </div>
      </FadeInWrapper>

      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {labItems.map((item) => (
          <FadeInWrapper key={item.href} direction="up">
            <Link
              href={item.href}
              className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <h2 className="text-xl font-bold text-heading mb-2">{item.title}</h2>
              <p className="text-sm text-text">{item.description}</p>
            </Link>
          </FadeInWrapper>
        ))}
      </div>
    </div>
  );
}
