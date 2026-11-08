import { useCallback, useEffect, useState } from 'react';

const TOTAL_SLIDES = 18;

export function usePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0); // 0-indexed
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(TOTAL_SLIDES - 1, index));
    setDirection(clamped >= currentSlide ? 'forward' : 'back');
    setCurrentSlide(clamped);
    setOverviewOpen(false);
  }, [currentSlide]);

  const next = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection('forward');
      setCurrentSlide(s => s + 1);
    }
  }, [currentSlide]);

  const prev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection('back');
      setCurrentSlide(s => s - 1);
    }
  }, [currentSlide]);

  const toggleOverview = useCallback(() => setOverviewOpen(o => !o), []);
  const closeOverview  = useCallback(() => setOverviewOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't fire when typing in an input
      if ((e.target as HTMLElement).tagName === 'INPUT') return;

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prev();
          break;
        case 'Escape':
          e.preventDefault();
          closeOverview();
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, closeOverview]);

  const progress = ((currentSlide) / (TOTAL_SLIDES - 1)) * 100;

  return {
    currentSlide,
    totalSlides: TOTAL_SLIDES,
    overviewOpen,
    direction,
    progress,
    goTo,
    next,
    prev,
    toggleOverview,
    closeOverview,
  };
}
