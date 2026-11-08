import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { kenBurns } from '../animations/gsapHelpers';
import AssetImage from '../components/AssetImage';

const letters = 'MEMENTO'.split('');

export default function Slide01Title() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) kenBurns(bgRef.current, 'in');
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'var(--color-void)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background poster */}
      <div ref={bgRef} style={{ position: 'absolute', inset: '-5%', transformOrigin: 'center' }}>
        <AssetImage
          src="/assets/poster/memento-poster.jpg"
          alt="Memento theatrical poster"
          placeholderLabel="Memento Poster"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.25) contrast(1.1)' }}
        />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 100%)',
      }} />

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.55rem, 0.75vw, 0.75rem)',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--color-ash)',
          whiteSpace: 'nowrap',
        }}
      >
        Career Development Skills — Movie Review &amp; Analysis
      </motion.div>

      {/* Main title letter-by-letter */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(0.15rem, 0.6vw, 0.6rem)' }}>
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4.5rem, 9.5vw, 10rem)',
                fontWeight: 300,
                letterSpacing: '0.08em',
                color: 'var(--color-white)',
                display: 'inline-block',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Year */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ delay: 1.4, duration: 1, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.75rem, 1.1vw, 1.1rem)',
            fontWeight: 300,
            letterSpacing: '0.4em',
            color: 'var(--color-ash)',
            marginTop: '0.5rem',
            textTransform: 'uppercase',
          }}
        >
          2 0 0 0
        </motion.div>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{
            width: '4rem',
            height: '1px',
            background: 'var(--color-blood)',
            margin: '1.5rem auto',
            transformOrigin: 'center',
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.4rem)',
            fontWeight: 300,
            color: 'var(--color-parchment)',
            letterSpacing: '0.05em',
          }}
        >
          Some memories are best forgotten
        </motion.p>
      </div>

      {/* Bottom credit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.55rem, 0.7vw, 0.7rem)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(166,166,161,0.5)',
          whiteSpace: 'nowrap',
        }}
      >
        Directed by Christopher Nolan
      </motion.div>
    </div>
  );
}
