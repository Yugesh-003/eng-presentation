import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { staggerContainer, fadeUp } from '../animations/variants';
import { revealStars, fillBar, killTweens } from '../animations/gsapHelpers';

const starCount = 5;
const ratingFilled = 5; // 5/5

const sections = [
  { label: 'Screenplay & Narrative', score: 98, bar: '98%' },
  { label: 'Direction', score: 96, bar: '96%' },
  { label: 'Acting Performances', score: 92, bar: '92%' },
  { label: 'Cinematography', score: 94, bar: '94%' },
  { label: 'Music & Sound Design', score: 88, bar: '88%' },
];

export default function Slide17Review() {
  const starRefs = useRef<HTMLDivElement[]>([]);
  const barRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const starEls = starRefs.current.filter(Boolean);
    if (starEls.length) revealStars(starEls, 0.5);

    barRefs.current.filter(Boolean).forEach((el, i) => {
      fillBar(el, sections[i].bar, 0.8 + i * 0.15);
    });

    return () => {
      starEls.forEach(killTweens);
      barRefs.current.forEach(killTweens);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-warm-dark)',
      display: 'flex',
      flexDirection: 'column',
      padding: '5% 7%',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 80% 20%, rgba(141,41,41,0.08) 0%, transparent 50%)',
      }} />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Header */}
        <motion.div variants={fadeUp} style={{ marginBottom: '3%' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-blood)',
            display: 'block',
            marginBottom: '0.4rem',
          }}>
            Evaluation
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 2.8vw, 2.8rem)',
            fontWeight: 300,
            color: 'var(--color-parchment)',
          }}>
            Personal Review
          </h1>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '55% 42%', gap: '3%', flex: 1 }}>
          {/* Left: review text + stars */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {/* Stars */}
            <div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.58rem, 0.7vw, 0.7rem)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-ash)',
                marginBottom: '0.5rem',
              }}>
                Overall Rating
              </div>
              <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                {Array.from({ length: starCount }).map((_, i) => (
                  <div
                    key={i}
                    ref={el => { if (el) starRefs.current[i] = el; }}
                    style={{ opacity: 0 }}
                  >
                    <Star
                      size={22}
                      strokeWidth={1.5}
                      fill={i < ratingFilled ? 'var(--color-parchment)' : 'none'}
                      color={i < ratingFilled ? 'var(--color-parchment)' : 'rgba(166,166,161,0.3)'}
                    />
                  </div>
                ))}
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 1.4vw, 1.4rem)',
                  fontWeight: 300,
                  color: 'var(--color-parchment)',
                  marginLeft: '0.5rem',
                }}>
                  5 / 5
                </span>
              </div>
            </div>

            {/* Review paragraph */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                'Memento is not merely a film to be watched — it is a puzzle to be experienced. Christopher Nolan\'s audacious choice to tell a story in reverse order transforms a thriller into a meditation on consciousness, memory, and moral responsibility.',
                'Guy Pearce\'s restrained, deeply physical performance as Leonard Shelby is one of the most underrated lead performances in modern cinema. The film never condescends to its audience — it trusts us to assemble the fragments alongside Leonard.',
                'Nearly twenty-five years after its release, Memento remains entirely unique. It has influenced countless films and television series in its structural ambition, yet nothing has quite replicated its emotional and philosophical impact. It is a masterwork of independent cinema.',
              ].map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.72rem, 0.9vw, 0.9rem)',
                  fontWeight: 300,
                  color: 'var(--color-ash)',
                  lineHeight: 1.7,
                }}>
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right: section grade bars */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.58rem, 0.7vw, 0.7rem)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-ash)',
              marginBottom: '0.5rem',
            }}>
              Section Grades
            </div>
            {sections.map((s, i) => (
              <div key={i}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.3rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.68rem, 0.84vw, 0.84rem)',
                    color: 'var(--color-white)',
                  }}>
                    {s.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(0.62rem, 0.78vw, 0.78rem)',
                    color: 'var(--color-parchment)',
                  }}>
                    {s.score}
                  </span>
                </div>
                <div style={{
                  height: '3px',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}>
                  <div
                    ref={el => { if (el) barRefs.current[i] = el; }}
                    style={{
                      height: '100%',
                      width: '0%',
                      background: `linear-gradient(to right, var(--color-blood), var(--color-parchment))`,
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
