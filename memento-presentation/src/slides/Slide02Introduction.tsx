import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../animations/variants';
import AssetImage from '../components/AssetImage';

const bullets = [
  { label: 'Genre', value: 'Psychological Thriller / Neo-Noir' },
  { label: 'Tagline', value: '"Some memories are best forgotten"' },
  { label: 'Premise', value: 'A man with anterograde amnesia uses notes and tattoos to track down his wife\'s murderer — told in reverse chronological order.' },
  { label: 'Release', value: 'September 5, 2000 (Venice Film Festival) · Wide release March 16, 2001' },
];

export default function Slide02Introduction() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-void)',
      display: 'grid',
      gridTemplateColumns: '48% 52%',
      overflow: 'hidden',
    }}>
      {/* Left: image panel */}
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <AssetImage
          src="/assets/screenshots/motel-room.jpg"
          alt="Leonard Shelby in motel room"
          placeholderLabel="Leonard — Motel Room"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) contrast(1.1)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 60%, var(--color-void) 100%)',
        }} />
        {/* Film bar accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0,
          width: '3px',
          background: 'linear-gradient(to bottom, transparent, var(--color-blood), transparent)',
        }} />
      </motion.div>

      {/* Right: content */}
      <div style={{ padding: '10% 8% 10% 6%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.6rem, 0.75vw, 0.75rem)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-blood)',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            Introduction
          </motion.span>

          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--color-white)',
              lineHeight: 1.15,
              marginBottom: '0.4rem',
            }}
          >
            Memento
          </motion.h1>

          <motion.div
            variants={fadeUp}
            style={{ width: '2.5rem', height: '1px', background: 'var(--color-ash)', marginBottom: '1.5rem' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {bullets.map((b, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-parchment)',
                  marginBottom: '0.25rem',
                }}>
                  {b.label}
                </div>
                <div style={{
                  fontFamily: b.label === 'Tagline' ? 'var(--font-display)' : 'var(--font-body)',
                  fontStyle: b.label === 'Tagline' ? 'italic' : 'normal',
                  fontSize: b.label === 'Tagline'
                    ? 'clamp(0.95rem, 1.4vw, 1.3rem)'
                    : 'clamp(0.8rem, 1.05vw, 1rem)',
                  fontWeight: 300,
                  color: b.label === 'Tagline' ? 'var(--color-white)' : 'var(--color-ash)',
                  lineHeight: 1.6,
                }}>
                  {b.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
