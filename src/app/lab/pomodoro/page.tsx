import type { Metadata } from 'next';
import FadeInWrapper from '@/components/FadeInWrapper/FadeInWrapper';
import PomodoroTimer from './PomodoroTimer';

export const metadata: Metadata = {
  title: 'Pomodoro Timer',
  description: 'A minimal focus timer to stay productive.',
  robots: { index: false, follow: false },
};

export default function PomodoroPage() {
  return (
    <FadeInWrapper direction="up">
      <main className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12">
        <h1 className="text-2xl font-bold text-heading tracking-tight">Pomodoro Timer</h1>
        <p className="text-sm text-text mb-6">Stay focused, take breaks</p>
        <PomodoroTimer />
      </main>
    </FadeInWrapper>
  );
}
