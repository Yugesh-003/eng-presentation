import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { drawLine } from '../animations/gsapHelpers';

const nodes = [
  { step: '01', label: 'First Meeting — Natalie', desc: 'Leonard wakes at Natalie\'s house. She helps him, though her motives are unclear. He has no memory of how he got there.' },
  { step: '02', label: 'The Tattoo Session', desc: 'Leonard adds a new critical fact to his body — a name and a licence plate — after verifying it through his system of notes and photographs.' },
  { step: '03', label: 'Jimmy Grantz — Abandoned building', desc: 'Leonard ambushes a drug dealer named Jimmy Grantz, believing him to be "John G." — the man who killed his wife.' },
  { step: '04', label: 'Teddy\'s Revelation', desc: 'Teddy arrives and suggests Jimmy was not the right man. He implies Leonard has found and killed his wife\'s murderer before — and forgotten.' },
  { step: '05', label: 'The Decision', desc: 'Rather than accept Teddy\'s claims, Leonard chooses to make Teddy his next target — deliberately burning Teddy\'s photo and writing "Don\'t believe his lies" on the back.' },
];

export default function Slide08Investigation() {
  const lineRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    lineRefs.current.filter(Boolean).forEach((el, i) => {
      drawLine(el, 0.4 + i * 0.3);
    });
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-void)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      padding: '5% 6%',
    }}>
      {/* Background cue lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.025) 40px)',
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: '4%', position: 'relative', zIndex: 1 }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--color-blood)',
          display: 'block',
          marginBottom: '0.4rem',
        }}>
          Storyline · Part II
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 2.8vw, 2.8rem)',
          fontWeight: 300,
          color: 'var(--color-white)',
        }}>
          The Investigation
        </h1>
      </motion.div>

      {/* Timeline nodes */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
            }}
          >
            {/* Step number */}
            <div style={{
              minWidth: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.6rem, 0.75vw, 0.75rem)',
              color: 'var(--color-blood)',
              paddingTop: '0.15rem',
            }}>
              {node.step}
            </div>

            {/* Line + dot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.4rem' }}>
              <div style={{
                width: '6px', height: '6px',
                borderRadius: '50%',
                background: 'var(--color-parchment)',
                flexShrink: 0,
              }} />
              {i < nodes.length - 1 && (
                <div
                  ref={el => { if (el) lineRefs.current[i] = el; }}
                  style={{
                    width: '1px',
                    flex: 1,
                    background: 'rgba(166,166,161,0.3)',
                    marginTop: '0.3rem',
                    clipPath: 'inset(0 100% 0 0)',
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingBottom: '0.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)',
                fontWeight: 400,
                color: 'var(--color-white)',
                marginBottom: '0.2rem',
              }}>
                {node.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.7rem, 0.88vw, 0.88rem)',
                fontWeight: 300,
                color: 'var(--color-ash)',
                lineHeight: 1.55,
              }}>
                {node.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
