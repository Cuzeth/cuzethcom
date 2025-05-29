'use client';

import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

export function useInViewMultiple<T extends HTMLElement = HTMLDivElement>(options: UseInViewOptions = {}) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [initialized, setInitialized] = useState(false);
  const refs = useRef<(T | null)[]>([]);
  const observersRef = useRef<IntersectionObserver[]>([]);
  
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    // Clean up existing observers
    observersRef.current.forEach(observer => observer.disconnect());
    observersRef.current = [];

    const setupObservers = () => {
      refs.current.forEach((element, index) => {
        if (!element) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set(prev).add(index));
              if (triggerOnce) {
                observer.unobserve(element);
              }
            } else if (!triggerOnce) {
              setVisibleItems(prev => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          },
          { threshold, rootMargin }
        );

        observer.observe(element);
        observersRef.current.push(observer);
      });
      setInitialized(true);
    };

    // Small delay to ensure refs are set
    const timeoutId = setTimeout(setupObservers, 10);

    return () => {
      clearTimeout(timeoutId);
      observersRef.current.forEach(observer => observer.disconnect());
    };
  }, [threshold, rootMargin, triggerOnce]);

  const setRef = (index: number) => (element: T | null) => {
    refs.current[index] = element;
  };

  const isInView = (index: number) => initialized && visibleItems.has(index);

  return { setRef, isInView };
}