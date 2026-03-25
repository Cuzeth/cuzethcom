import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Small tools, carefully engineered.',
};

const labItems = [
  {
    title: 'CoverQuad',
    description: 'Create a 2×2 album art collage. Upload images or search for album art.',
    href: '/lab/coverquad',
  },
  {
    title: 'Regex Tester',
    description: 'Test and debug regular expressions with live match highlighting.',
    href: '/lab/regex',
  },
  {
    title: 'Pomodoro Timer',
    description: 'A minimal focus timer to stay productive.',
    href: '/lab/pomodoro',
  },
  {
    title: 'Password Generator',
    description: 'Generate memorable, secure passwords inspired by Apple Keychain.',
    href: '/lab/pwgen',
  },
  {
    title: '2FA QR Generator',
    description: 'Generate QR codes from two-factor authentication secrets.',
    href: '/lab/2fa',
  },
  {
    title: 'QR Generator',
    description: 'Generate QR codes for text, WiFi, email, and phone.',
    href: '/lab/qr',
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
            Small tools, carefully engineered.
          </p>
        </div>
      </FadeInWrapper>

      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*]:h-full">
        {labItems.map((item) => (
          <FadeInWrapper key={item.href} direction="up">
            <Link
              href={item.href}
              className="block h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
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
