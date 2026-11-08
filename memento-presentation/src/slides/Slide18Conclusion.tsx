import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { vignettePulse, killTweens } from '../animations/gsapHelpers';

const quoteLines = [
  'Memory can change the shape of a room;',
  'it can change the colour of a car.',
  'And memories can be distorted.',
];

export default function Slide18Conclusion() {
  const vignetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vignetteRef.current) vignettePulse(vignetteRef.current);
    return () => { if (vignetteRef.current) killTweens(vignetteRef.current); };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-void)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Animated vignette */}
      <div
        ref={vignetteRef}
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid suggestion */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(166,166,161,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '62%',
        textAlign: 'center',
        gap: '1.5rem',
      }}>
        {/* Top label */}
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-blood)',
          }}
        >
          Conclusion
        </motion.span>

        {/* Quote lines — staggered */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          {quoteLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.3rem, 2.2vw, 2.2rem)',
                fontWeight: 300,
                color: 'var(--color-white)',
                lineHeight: 1.4,
              }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.68rem, 0.84vw, 0.84rem)',
            color: 'var(--color-ash)',
            letterSpacing: '0.08em',
          }}
        >
          — Leonard Shelby, Memento (2000)
        </motion.div>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.1, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{
            width: '4rem',
            height: '1px',
            background: 'var(--color-ash)',
            transformOrigin: 'center',
          }}
        />

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.9 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.75rem, 0.95vw, 0.95rem)',
            fontWeight: 300,
            color: 'var(--color-ash)',
            lineHeight: 1.7,
            maxWidth: '80%',
          }}
        >
          Memento is more than a film — it is a profound inquiry into the nature of selfhood, 
          the fragility of memory, and the stories we construct to give our lives meaning. 
          Christopher Nolan's masterwork challenges us to question not only Leonard's reliability, 
          but our own.
        </motion.p>

        {/* Pulse word on final reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.2, duration: 1, ease: 'easeOut' }}
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ delay: 4, duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.8rem, 1.2vw, 1.2rem)',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--color-parchment)',
              display: 'block',
            }}
          >
            Remember
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom presenter credit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.55rem, 0.68vw, 0.68rem)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(166,166,161,0.4)',
          zIndex: 2,
          whiteSpace: 'nowrap',
          textAlign: 'center',
        }}
      >
        Career Development Skills Practical · Memento (2000) · Movie Review &amp; Analysis
      </motion.div>
    </div>
  );
}
