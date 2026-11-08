import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants';
import AssetImage from '../components/AssetImage';

const learnings = [
  {
    heading: 'The mind is an unreliable narrator',
    body: 'We shape memories to fit our desires. Memento teaches that what we remember is often what we choose to remember, not necessarily what happened.',
  },
  {
    heading: 'Systems over emotion',
    body: 'Leonard\'s reliance on physical evidence over emotion is both his strength and his vulnerability. Cold facts alone cannot replace the wisdom of lived experience.',
  },
  {
    heading: 'Purpose can be self-constructed — and self-destructive',
    body: 'Leonard gives his life meaning through his mission. But a purpose built on false premises can trap us in a cycle rather than lead us forward.',
  },
  {
    heading: 'Trust must be earned, not assumed',
    body: 'Every character in Memento exploits Leonard\'s inability to verify trust over time. The film is a stark reminder that vulnerability invites manipulation.',
  },
  {
    heading: 'Stories we tell ourselves define us',
    body: 'The film ends with Leonard deliberately choosing his next false memory. We all do this to some degree — the difference is awareness and honesty.',
  },
];

export default function Slide16Learnings() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-warm-dark)',
      display: 'grid',
      gridTemplateColumns: '40% 60%',
      overflow: 'hidden',
    }}>
      {/* Background warmth */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 100% 50%, rgba(141,41,41,0.06) 0%, transparent 50%)',
      }} />

      {/* Left: atmospheric image */}
      <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{ position: 'relative', overflow: 'hidden' }}>
        <AssetImage
          src="/assets/backgrounds/void-bg.jpg"
          alt="Atmospheric dark background"
          placeholderLabel="Atmospheric Scene"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5) sepia(0.3)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 40%, var(--color-warm-dark) 100%)',
        }} />
        {/* Vertical text */}
        <div style={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%) rotate(-90deg)',
          transformOrigin: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.55rem, 0.68vw, 0.68rem)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(196,180,154,0.4)',
          whiteSpace: 'nowrap',
        }}>
          Key Learnings
        </div>
      </motion.div>

      {/* Right: learnings list */}
      <div style={{ padding: '7% 7% 7% 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-blood)',
            display: 'block',
            marginBottom: '0.4rem',
          }}>
            Takeaways
          </motion.span>
          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)',
            fontWeight: 300,
            color: 'var(--color-parchment)',
            marginBottom: '1.4rem',
          }}>
            Key Learnings from the Film
          </motion.h1>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {learnings.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  alignItems: 'flex-start',
                  paddingBottom: '0.75rem',
                  marginBottom: '0.75rem',
                  borderBottom: i < learnings.length - 1 ? '1px solid rgba(166,166,161,0.1)' : 'none',
                }}
              >
                <ChevronRight
                  size={14}
                  strokeWidth={1.5}
                  color="var(--color-blood)"
                  style={{ marginTop: '0.2rem', flexShrink: 0 }}
                />
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.75rem, 0.95vw, 0.95rem)',
                    fontWeight: 500,
                    color: 'var(--color-white)',
                    marginBottom: '0.15rem',
                  }}>
                    {item.heading}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.68rem, 0.84vw, 0.84rem)',
                    fontWeight: 300,
                    color: 'var(--color-ash)',
                    lineHeight: 1.55,
                  }}>
                    {item.body}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
