'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: string;
  threshold?: number;
  delay?: string;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = 'animate-slide-up',
  threshold = 0.1,
  delay = '0s',
  className = ''
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView({ threshold, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`animate-scroll-wrapper ${className} ${isInView ? `animate-in ${animation}` : ''}`}
      style={{ animationDelay: isInView ? delay : '0s' }}
    >
      {children}
    </div>
  );
}