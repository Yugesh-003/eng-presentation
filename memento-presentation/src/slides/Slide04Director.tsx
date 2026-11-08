import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, slideInLeft, slideInRight, scaleIn } from '../animations/variants';
import AssetImage from '../components/AssetImage';

const bio = [
  { year: '1970', note: 'Born in London, raised in England and the United States' },
  { year: '1998', note: 'Debut feature: Following — made for under GBP 6,000' },
  { year: '2000', note: 'Memento — breakthrough film; Sundance, Venice acclaim' },
  { year: '2005+', note: 'Batman Begins, The Prestige, The Dark Knight Trilogy' },
  { year: '2010+', note: 'Inception, Interstellar, Dunkirk, Tenet, Oppenheimer' },
];

const traits = [
  'Non-linear narrative structures',
  'Practical in-camera effects',
  'Themes of memory and identity',
  'Moral ambiguity in protagonists',
];

export default function Slide04Director() {
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
      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(141,41,41,0.08) 0%, transparent 60%)',
      }} />

      {/* Left: bio content */}
      <div style={{ padding: '8% 6% 8% 8%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
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
            About the Director
          </motion.span>

          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.2vw, 3.2rem)',
            fontWeight: 300,
            color: 'var(--color-parchment)',
            lineHeight: 1.1,
            marginBottom: '0.3rem',
          }}>
            Christopher Nolan
          </motion.h1>

          <motion.div variants={fadeUp} style={{
            width: '3rem', height: '2px',
            background: 'var(--color-blood)',
            marginBottom: '1.5rem',
          }} />

          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
            {bio.map((item, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.6rem, 0.75vw, 0.75rem)',
                  color: 'var(--color-blood)',
                  minWidth: '2.8rem',
                  paddingTop: '0.1rem',
                }}>
                  {item.year}
                </span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.75rem, 0.95vw, 0.95rem)',
                  fontWeight: 300,
                  color: 'var(--color-ash)',
                  lineHeight: 1.5,
                }}>
                  {item.note}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Directorial traits */}
          <motion.div variants={fadeUp}>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.58rem, 0.7vw, 0.7rem)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-parchment)',
              marginBottom: '0.6rem',
            }}>
              Signature Style
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {traits.map((t, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.62rem, 0.78vw, 0.78rem)',
                  color: 'var(--color-ash)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(166,166,161,0.15)',
                  borderRadius: '0.2rem',
                  padding: '0.2rem 0.5rem',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right: portrait */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <AssetImage
          src="/assets/characters/nolan.jpg"
          alt="Christopher Nolan portrait"
          placeholderLabel="Christopher Nolan"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'contrast(1.1) brightness(0.85)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to left, transparent 50%, var(--color-warm-dark) 100%)',
        }} />
        {/* Watermark film titles behind portrait */}
        <div style={{
          position: 'absolute', bottom: '8%', right: '5%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(0.6rem, 0.75vw, 0.75rem)',
          letterSpacing: '0.15em',
          color: 'rgba(196,180,154,0.3)',
          textAlign: 'right',
          lineHeight: 2,
          pointerEvents: 'none',
        }}>
          <div>MEMENTO · THE PRESTIGE</div>
          <div>THE DARK KNIGHT · INCEPTION</div>
          <div>INTERSTELLAR · DUNKIRK</div>
          <div>TENET · OPPENHEIMER</div>
        </div>
      </motion.div>
    </div>
  );
}
