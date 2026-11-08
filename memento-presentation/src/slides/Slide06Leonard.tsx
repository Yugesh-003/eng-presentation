import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import { staggerWords, polaroidDrop, kenBurns, killTweens } from '../animations/gsapHelpers';
import AssetImage from '../components/AssetImage';

const tattoos = [
  'John G. raped and murdered my wife.',
  'Remember Sammy Jankis.',
  'The facts, not your emotional reaction.',
  'Never answer the phone.',
  'I am not a killer.',
];

export default function Slide06Leonard() {
  const bgRef = useRef<HTMLDivElement>(null);
  const polaroidRef = useRef<HTMLDivElement>(null);
  const tattooRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (bgRef.current) kenBurns(bgRef.current, 'in');
    if (polaroidRef.current) polaroidDrop(polaroidRef.current, 0.8, 5);

    const els = tattooRefs.current.filter(Boolean);
    if (els.length) staggerWords(els, 1.0);

    return () => {
      if (bgRef.current) killTweens(bgRef.current);
      if (polaroidRef.current) killTweens(polaroidRef.current);
      els.forEach(killTweens);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: '#0a0a0b',
      overflow: 'hidden',
    }}>
      {/* Background: Leonard image */}
      <div ref={bgRef} style={{ position: 'absolute', inset: '-5%', transformOrigin: 'center' }}>
        <AssetImage
          src="/assets/characters/leonard-bw.png"
          alt="Leonard Shelby black and white"
          placeholderLabel="Leonard — B&W Investigation"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'grayscale(1) brightness(0.3) contrast(1.3)',
          }}
        />
      </div>

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)',
      }} />

      {/* Top title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: '7%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--color-blood)',
          display: 'block',
          marginBottom: '0.3rem',
        }}>
          Character Study
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 3vw, 3rem)',
          fontWeight: 300,
          color: 'var(--color-white)',
        }}>
          Understanding Leonard Shelby
        </h1>
      </motion.div>

      {/* Left: condition notes */}
      <div style={{
        position: 'absolute',
        left: '5%',
        top: '25%',
        bottom: '15%',
        width: '32%',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.58rem, 0.7vw, 0.7rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-parchment)',
            marginBottom: '0.5rem',
          }}>
            Medical Condition
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)',
            fontWeight: 400,
            color: 'var(--color-white)',
            fontStyle: 'italic',
            marginBottom: '0.5rem',
          }}>
            Anterograde Amnesia
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.72rem, 0.9vw, 0.9rem)',
            fontWeight: 300,
            color: 'var(--color-ash)',
            lineHeight: 1.6,
          }}>
            Leonard cannot form new memories after the traumatic incident that killed his wife. Every time he falls asleep or loses focus, he forgets. He awakens to a world without context.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.58rem, 0.7vw, 0.7rem)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-parchment)',
            marginBottom: '0.5rem',
          }}>
            His System
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.72rem, 0.9vw, 0.9rem)',
            fontWeight: 300,
            color: 'var(--color-ash)',
            lineHeight: 1.6,
          }}>
            To compensate, he uses three tools: Polaroid photographs with handwritten notes, paper notes carried on his person, and permanent tattoos on his own body for the most critical truths.
          </div>
        </motion.div>
      </div>

      {/* Center: tattoo text words */}
      <div style={{
        position: 'absolute',
        left: '38%',
        right: '28%',
        top: '25%',
        bottom: '15%',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        justifyContent: 'center',
      }}>
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.55rem, 0.68vw, 0.68rem)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-blood)',
          marginBottom: '0.5rem',
        }}>
          Tattoos — His Only Truth
        </div>
        {tattoos.map((t, i) => (
          <div
            key={i}
            ref={el => { if (el) tattooRefs.current[i] = el; }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.68rem, 0.9vw, 0.9rem)',
              color: 'var(--color-parchment)',
              lineHeight: 1.4,
              opacity: 0,
              borderLeft: '2px solid rgba(141,41,41,0.5)',
              paddingLeft: '0.75rem',
            }}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Right: Polaroid of Sammy */}
      <div
        ref={polaroidRef}
        style={{
          position: 'absolute',
          right: '5%',
          bottom: '15%',
          width: 'clamp(7rem, 11vw, 11rem)',
          zIndex: 3,
          opacity: 0,
        }}
      >
        <div className="polaroid-frame">
          <AssetImage
            src="/assets/polaroids/polaroid-sammy.jpg"
            alt="Polaroid of Sammy Jankis"
            placeholderLabel="Polaroid — Sammy Jankis"
            style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block', filter: 'sepia(0.3)' }}
          />
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.55rem, 0.68vw, 0.68rem)',
            color: '#333',
            textAlign: 'center',
            paddingTop: '0.3rem',
          }}>
            Remember Sammy Jankis
          </div>
        </div>
      </div>

      {/* Handwritten note top-right */}
      <motion.div
        initial={{ opacity: 0, rotate: -3 }}
        animate={{ opacity: 1, rotate: -3 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: 'absolute',
          top: '18%',
          right: '5%',
          width: 'clamp(7rem, 10vw, 10rem)',
          background: '#f5f0d8',
          padding: '0.6rem',
          zIndex: 3,
          boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.55rem, 0.7vw, 0.7rem)',
          color: '#222',
          lineHeight: 1.6,
        }}>
          Do NOT trust<br />
          his lies.<br />
          Use the system.<br />
          <br />
          — L.S.
        </div>
      </motion.div>
    </div>
  );
}
