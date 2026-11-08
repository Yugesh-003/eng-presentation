import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/variants';
import AssetImage from '../components/AssetImage';

const characters = [
  {
    name: 'Leonard Shelby',
    actor: 'Guy Pearce',
    role: 'The Protagonist',
    desc: 'A former insurance investigator who suffers from anterograde amnesia after witnessing his wife\'s murder. He uses tattoos and Polaroid photos to track the killer.',
    src: '/assets/characters/leonard-color.png',
    alt: 'Leonard Shelby',
    accent: 'var(--color-steel)',
  },
  {
    name: 'Natalie',
    actor: 'Carrie-Anne Moss',
    role: 'The Manipulator',
    desc: 'A local woman who takes advantage of Leonard\'s condition to manipulate him into doing her bidding, while also helping him in her own way.',
    src: '/assets/characters/natalie.png',
    alt: 'Natalie',
    accent: 'var(--color-blood)',
  },
  {
    name: 'Teddy (John Gammell)',
    actor: 'Joe Pantoliano',
    role: 'The Informant',
    desc: 'An undercover police officer who claims to be helping Leonard find his wife\'s killer. His true motives remain ambiguous — and deeply troubling.',
    src: '/assets/characters/teddy.png',
    alt: 'Teddy',
    accent: 'var(--color-ash)',
  },
  {
    name: 'Sammy Jankis',
    actor: 'Stephen Tobolowsky',
    role: 'The Mirror',
    desc: 'A man Leonard investigated before the incident — also suffering from anterograde amnesia. Sammy\'s story haunts Leonard and mirrors his own situation.',
    src: '/assets/characters/sammy.png',
    alt: 'Sammy Jankis',
    accent: 'var(--color-parchment)',
  },
];

export default function Slide05Characters() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      background: 'var(--color-void)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      padding: '5% 5%',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 100%, rgba(38,59,80,0.1) 0%, transparent 60%)',
      }} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: '3%', position: 'relative', zIndex: 1 }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.58rem, 0.72vw, 0.72rem)',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--color-blood)',
        }}>
          Dramatis Personae
        </span>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)',
          fontWeight: 300,
          color: 'var(--color-white)',
          marginTop: '0.3rem',
        }}>
          Main Characters
        </h1>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          flex: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {characters.map((char, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderTop: `2px solid ${char.accent}`,
              paddingTop: '1rem',
              cursor: 'default',
            }}
          >
            {/* Image */}
            <div style={{
              flex: 1,
              minHeight: 0,
              marginBottom: '0.75rem',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <AssetImage
                src={char.src}
                alt={char.alt}
                placeholderLabel={char.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'brightness(0.85) contrast(1.05)',
                  minHeight: '8rem',
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '40%',
                background: 'linear-gradient(to top, var(--color-void), transparent)',
              }} />
            </div>

            {/* Text */}
            <div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.55rem, 0.68vw, 0.68rem)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: char.accent,
                marginBottom: '0.2rem',
              }}>
                {char.role}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 1.3vw, 1.3rem)',
                fontWeight: 400,
                color: 'var(--color-white)',
                marginBottom: '0.1rem',
              }}>
                {char.name}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.6rem, 0.72vw, 0.72rem)',
                fontStyle: 'italic',
                color: 'var(--color-ash)',
                marginBottom: '0.5rem',
              }}>
                Played by {char.actor}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.68rem, 0.85vw, 0.85rem)',
                fontWeight: 300,
                color: 'rgba(166,166,161,0.8)',
                lineHeight: 1.55,
              }}>
                {char.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
