import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projectorFlicker, kenBurns, killTweens } from '../animations/gsapHelpers';
import AssetImage from '../components/AssetImage';

const letters = 'THE TRUTH'.split('');

export default function Slide14PlotTwist() {
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) kenBurns(bgRef.current, 'in');
    if (titleRef.current) {
      setTimeout(() => {
        if (titleRef.current) projectorFlicker(titleRef.current);
      }, 2000);
    }
    return () => {
      if (bgRef.current) killTweens(bgRef.current);
      if (titleRef.current) killTweens(titleRef.current);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-blood)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Background tense still */}
      <div ref={bgRef} style={{ position: 'absolute', inset: '-5%', transformOrigin: 'center' }}>
        <AssetImage
          src="/assets/screenshots/twist-scene.jpg"
          alt="Memento climactic scene"
          placeholderLabel="Plot Twist Scene"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) saturate(0.5) contrast(1.3)' }}
        />
      </div>

      {/* Red grade overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(141,41,41,0.5)',
        mixBlendMode: 'multiply',
      }} />

      {/* Dark vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
      }} />

      {/* SPOILER tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          position: 'absolute',
          top: '7%',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'var(--color-parchment)',
          border: '1px solid rgba(196,180,154,0.4)',
          padding: '0.3rem 0.8rem',
          zIndex: 2,
        }}
      >
        Spoiler Alert
      </motion.div>

      {/* THE TRUTH — letter by letter with flicker */}
      <div ref={titleRef} style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
      }}>
        <div style={{ display: 'flex', gap: 'clamp(0.1rem, 0.4vw, 0.4rem)', justifyContent: 'center' }}>
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: letter === ' ' ? 0 : 1 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: letter === ' ' ? 'clamp(1rem, 2vw, 2rem)' : 'clamp(3rem, 7vw, 7.5rem)',
                fontWeight: 300,
                letterSpacing: '0.1em',
                color: 'var(--color-white)',
                display: 'inline-block',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{ width: '5rem', height: '1px', background: 'var(--color-parchment)', transformOrigin: 'center' }}
        />

        {/* Twist content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.9 }}
          style={{ maxWidth: '55%', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.8rem, 1.1vw, 1.1rem)',
            fontWeight: 300,
            color: 'rgba(240,237,232,0.9)',
            lineHeight: 1.7,
            marginBottom: '1rem',
          }}>
            Teddy reveals that Leonard already found and killed his wife's real murderer — years ago. Since then, Leonard has been manipulated by Teddy and others into creating new "John G." targets — an endless loop he cannot escape because he will never remember solving the case.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.8rem, 1.1vw, 1.1rem)',
            fontWeight: 300,
            color: 'rgba(240,237,232,0.9)',
            lineHeight: 1.7,
            marginBottom: '1rem',
          }}>
            Furthermore, it is suggested that Leonard's wife may have survived the attack — and that Leonard's own insulin injections (which he denies giving) may have killed her. Leonard may be the unreliable narrator who has rewritten his own history to give himself purpose.
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)',
            fontStyle: 'italic',
            color: 'var(--color-parchment)',
            lineHeight: 1.6,
          }}>
            He chooses to destroy Teddy's photograph — deliberately making Teddy his next target — not out of justice, but out of a need for purpose.
          </p>
        </motion.div>
      </div>

      {/* Bottom attribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '5%',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.55rem, 0.68vw, 0.68rem)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(196,180,154,0.4)',
          zIndex: 2,
        }}
      >
        Major Plot Twist — Slide 14
      </motion.div>
    </div>
  );
}
