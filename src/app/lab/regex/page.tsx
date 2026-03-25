import type { Metadata } from 'next';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';
import RegexTester from './RegexTester';

export const metadata: Metadata = {
  title: 'Regex Tester',
  description: 'Test and debug regular expressions with live match highlighting.',
  robots: { index: false, follow: false },
};

export default function RegexTesterPage() {
  return (
    <FadeInWrapper direction="up">
      <main className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12">
        <h1 className="text-2xl font-bold text-heading tracking-tight">Regex Tester</h1>
        <p className="text-sm text-text mb-6">Test and debug regular expressions with live highlighting</p>
        <RegexTester />
      </main>
    </FadeInWrapper>
  );
}
