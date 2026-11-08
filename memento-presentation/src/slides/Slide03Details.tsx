import { motion } from 'framer-motion';
import { Clapperboard, PenLine, Users, Timer, DollarSign, Award, Film, Globe } from 'lucide-react';
import { staggerContainer, fadeUp } from '../animations/variants';

const details = [
  { icon: Clapperboard, label: 'Director', value: 'Christopher Nolan' },
  { icon: PenLine,      label: 'Screenplay', value: 'Christopher Nolan\n(based on a short story by Jonathan Nolan)' },
  { icon: Users,        label: 'Stars', value: 'Guy Pearce · Carrie-Anne Moss · Joe Pantoliano' },
  { icon: Timer,        label: 'Runtime', value: '113 minutes' },
  { icon: DollarSign,   label: 'Budget', value: 'Approx. USD 9 million' },
  { icon: Film,         label: 'Production', value: 'Team Todd · I Remember Productions · Summit Entertainment' },
  { icon: Globe,        label: 'Distributor', value: 'Newmarket Films (US) · Pathé (International)' },
  { icon: Award,        label: 'Awards', value: '2 Academy Award nominations (Editing · Screenplay)\nBAFTA · Independent Spirit · Edgar Allan Poe Award' },
];

export default function Slide03Details() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-charcoal)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5% 7%',
      overflow: 'hidden',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(38,59,80,0.15) 0%, transparent 60%)',
      }} />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: '4%', position: 'relative', zIndex: 1 }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.6rem, 0.75vw, 0.75rem)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--color-blood)',
          display: 'block',
          marginBottom: '0.5rem',
        }}>
          Film Facts
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 3vw, 3rem)',
          fontWeight: 300,
          color: 'var(--color-white)',
        }}>
          Movie Details
        </h1>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem 2rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {details.map((d, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.4rem',
              padding: '0.8rem 0',
              borderTop: '1px solid rgba(166,166,161,0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <d.icon size={13} strokeWidth={1.5} color="var(--color-blood)" />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.55rem, 0.68vw, 0.68rem)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-parchment)',
              }}>
                {d.label}
              </span>
            </div>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.72rem, 0.9vw, 0.9rem)',
              fontWeight: 300,
              color: 'var(--color-ash)',
              lineHeight: 1.5,
              whiteSpace: 'pre-line',
            }}>
              {d.value}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
