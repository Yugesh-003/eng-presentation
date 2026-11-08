import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import slides from '../data/slides';

interface SlideOverviewProps {
  open: boolean;
  currentSlide: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

export default function SlideOverview({ open, currentSlide, onSelect, onClose }: SlideOverviewProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(11,11,12,0.95)',
            backdropFilter: 'blur(12px)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            padding: '4%',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3%' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(13px, 1.3vw, 20px)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
            }}>
              All Slides
            </span>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 'clamp(32px, 3vw, 44px)', height: 'clamp(32px, 3vw, 44px)',
                border: '1px solid rgba(166,166,161,0.3)',
                borderRadius: '50%',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--color-ash)',
              }}
              aria-label="Close overview"
            >
              <X size={16} />
            </motion.button>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '1rem',
            flex: 1,
            overflowY: 'auto',
          }}>
            {slides.map((slide, i) => (
              <motion.button
                key={i}
                onClick={() => { onSelect(i); onClose(); }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                style={{
                  display: 'flex', flexDirection: 'column',
                  background: i === currentSlide ? 'rgba(141,41,41,0.2)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${i === currentSlide ? 'rgba(141,41,41,0.6)' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '4px',
                  padding: '0.6rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '0.4rem',
                }}
                aria-label={`Go to slide ${i + 1}: ${slide.title}`}
              >
                {/* Slide number */}
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(11px, 1vw, 16px)',
                  color: i === currentSlide ? 'var(--color-blood)' : 'var(--color-ash)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Title */}
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(12px, 1.1vw, 16px)',
                  fontWeight: i === currentSlide ? 500 : 300,
                  color: i === currentSlide ? 'var(--color-white)' : 'var(--color-ash)',
                  lineHeight: 1.3,
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}>
                  {slide.title}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Footer hint */}
          <div style={{
            marginTop: '2%',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.1vw, 16px)',
            color: 'rgba(166,166,161,0.4)',
            letterSpacing: '0.15em',
          }}>
            Press Esc to close · Click any slide to jump
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
