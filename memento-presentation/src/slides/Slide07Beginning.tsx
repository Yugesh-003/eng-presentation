import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import { slowPan, killTweens } from '../animations/gsapHelpers';
import AssetImage from '../components/AssetImage';

const points = [
  'The film begins at the end — Leonard Shelby shoots and kills a man named Teddy.',
  'The audience immediately learns that Leonard suffers from anterograde amnesia; he cannot retain new memories.',
  'Leonard awakes each day with no recollection of what came before, guided only by Polaroids, notes, and tattoos.',
  'He is on a singular mission: find and punish the man he calls "John G." — the person he believes raped and murdered his wife.',
];

export default function Slide07Beginning() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) slowPan(bgRef.current, 'right');
    return () => { if (bgRef.current) killTweens(bgRef.current); };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-warm-dark)',
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      overflow: 'hidden',
    }}>
      {/* Left: image with slow pan */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div ref={bgRef} style={{ position: 'absolute', inset: '-5%', transformOrigin: 'center' }}>
          <AssetImage
            src="/assets/screenshots/motel-room.jpg"
            alt="Motel room investigation scene"
            placeholderLabel="Motel Room — Crime Scene"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) contrast(1.1) sepia(0.2)' }}
          />
        </div>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 65%, var(--color-warm-dark) 100%)',
        }} />
        {/* Colour sequence tag */}
        <div style={{
          position: 'absolute',
          bottom: '8%',
          left: '5%',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.55rem, 0.68vw, 0.68rem)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--color-parchment)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <div style={{ width: '1rem', height: '1px', background: 'var(--color-parchment)' }} />
          Colour Sequence
        </div>
      </div>

      {/* Right: content */}
      <div style={{ padding: '8% 7% 8% 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-blood)',
            display: 'block',
            marginBottom: '0.5rem',
          }}>
            Storyline · Part I
          </motion.span>

          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            fontWeight: 300,
            color: 'var(--color-parchment)',
            marginBottom: '1.5rem',
          }}>
            The Beginning
          </motion.h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {points.map((p, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '1.5rem',
                  height: '1px',
                  background: 'var(--color-blood)',
                  marginTop: '0.6rem',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.75rem, 0.95vw, 0.95rem)',
                  fontWeight: 300,
                  color: 'var(--color-ash)',
                  lineHeight: 1.65,
                }}>
                  {p}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
