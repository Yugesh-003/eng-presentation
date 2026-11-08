import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import slides from '../data/slides';

interface SlideOverviewProps {
  open: boolean;
  currentSlide: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

const SLIDE_COLORS: Record<string, string> = {
  'dark-cold':  'linear-gradient(135deg, #0B0B0C 0%, #263B50 100%)',
  'dark-warm':  'linear-gradient(135deg, #160F0A 0%, #3D2010 100%)',
  'monochrome': 'linear-gradient(135deg, #111111 0%, #333333 100%)',
  'reveal':     'linear-gradient(135deg, #5a1a1a 0%, #8D2929 100%)',
};

export default function SlideOverview({ open, currentSlide, onSelect, onClose }: SlideOverviewProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useEffect(() => {
    if (open) {
      closeRef.current?.focus();
      const handleTab = (e: KeyboardEvent) => {
        if (!panelRef.current) return;
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === first) { e.preventDefault(); last.focus(); }
          } else {
            if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
          }
        }
      };
      window.addEventListener('keydown', handleTab);
      return () => window.removeEventListener('keydown', handleTab);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Slide overview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 100,
            background: 'rgba(11,11,12,0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            overflowY: 'auto',
            padding: '3rem 2rem 2rem',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
            }}>
              Slide Overview
            </span>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close slide overview"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                border: '1px solid rgba(166,166,161,0.3)',
                background: 'transparent',
                color: 'var(--color-ash)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-ash)'; }}
            >
              <X size={14} strokeWidth={1.5} />
            </button>
          </div>

          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '0.75rem',
            }}
          >
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <motion.button
                  key={slide.id}
                  onClick={() => onSelect(index)}
                  aria-label={`Go to slide ${slide.id}: ${slide.title}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    position: 'relative',
                    aspectRatio: '16/9',
                    borderRadius: '0.3rem',
                    border: isActive
                      ? '2px solid var(--color-parchment)'
                      : '1px solid rgba(166,166,161,0.15)',
                    background: SLIDE_COLORS[slide.colorMode],
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem',
                    gap: '0.25rem',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.5rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--color-parchment)' : 'rgba(166,166,161,0.5)',
                  }}>
                    {String(slide.id).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.55rem',
                    color: isActive ? 'var(--color-white)' : 'rgba(240,237,232,0.7)',
                    textAlign: 'center',
                    lineHeight: 1.3,
                  }}>
                    {slide.title}
                  </span>
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--color-parchment)',
                    }} />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
