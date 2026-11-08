import { Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePresentation } from './hooks/usePresentation';
import PresentationCanvas from './components/PresentationCanvas';
import FilmGrain from './components/FilmGrain';
import ParticleField from './components/ParticleField';
import UIOverlay from './components/UIOverlay';
import SlideOverview from './components/SlideOverview';
import slides from './data/slides';
import './styles/global.css';

const slideTransition = {
  initial:  { opacity: 0, filter: 'blur(10px)' },
  animate:  { opacity: 1, filter: 'blur(0px)',  transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] as [number,number,number,number] } },
  exit:     { opacity: 0, filter: 'blur(8px)',   transition: { duration: 0.45, ease: 'easeIn' } },
};

function SlideLoader() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--color-void)',
    }}>
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 300,
          letterSpacing: '0.4em',
          color: 'var(--color-ash)',
          textTransform: 'uppercase',
        }}
      >
        Loading
      </motion.div>
    </div>
  );
}

export default function App() {
  const {
    currentSlide,
    totalSlides,
    overviewOpen,
    progress,
    goTo,
    next,
    prev,
    toggleOverview,
    closeOverview,
  } = usePresentation();

  const SlideComponent = slides[currentSlide].component;
  const colorMode = slides[currentSlide].colorMode;

  return (
    <PresentationCanvas>
      {/* Global atmospheric layers */}
      <ParticleField />
      <FilmGrain />

      {/* Slide render area */}
      <div
        className={`mode-${colorMode}`}
        style={{ position: 'absolute', inset: 0, zIndex: 10 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            {...slideTransition}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Suspense fallback={<SlideLoader />}>
              <SlideComponent />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent UI chrome */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 60, pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto', position: 'relative', width: '100%', height: '100%' }}>
          <UIOverlay
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            progress={progress}
            onPrev={prev}
            onNext={next}
            onToggleOverview={toggleOverview}
          />
        </div>
      </div>

      {/* Slide overview overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 100 }}>
        <SlideOverview
          open={overviewOpen}
          currentSlide={currentSlide}
          onSelect={goTo}
          onClose={closeOverview}
        />
      </div>
    </PresentationCanvas>
  );
}
