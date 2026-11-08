import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants';
import AssetImage from '../components/AssetImage';

const stats = [
  { label: 'Director', value: 'Christopher Nolan' },
  { label: 'Year', value: '2000' },
  { label: 'Genre', value: 'Neo-Noir Psychological Thriller' },
  { label: 'Rating', value: 'R — 113 minutes' },
];

const FS = {
  tag: 'clamp(13px, 1.3vw, 20px)',
  h1:  'clamp(38px, 5vw, 76px)',
  body: 'clamp(17px, 1.8vw, 28px)',
  bodyLg: 'clamp(20px, 2.1vw, 32px)',
  statLabel: 'clamp(12px, 1.2vw, 18px)',
  statVal: 'clamp(16px, 1.7vw, 26px)',
};

export default function Slide02Introduction() {
  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-void)', display:'grid', gridTemplateColumns:'50% 50%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 20% 50%, rgba(38,59,80,0.1) 0%, transparent 50%)' }} />

      <div style={{ padding:'7% 5% 7% 7%', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', zIndex:1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.8rem' }}>
            Introduction
          </motion.span>
          <motion.h1 variants={fadeUp} style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-white)', marginBottom:'1.5rem', lineHeight:1.15 }}>
            What is Memento?
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.bodyLg, fontWeight:300, color:'var(--color-ash)', lineHeight:1.7, marginBottom:'1.5rem' }}>
            Memento is a 2000 American neo-noir psychological thriller written and directed by Christopher Nolan.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'var(--color-ash)', lineHeight:1.7 }}>
            The film is told in two interleaved sequences: color scenes in reverse chronological order, and black-and-white scenes in chronological order 
          </motion.p>
          {/* <motion.div variants={fadeUp} style={{ marginTop:'2rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:'0.6rem' }}>
                <div style={{ fontFamily:'var(--font-body)', fontSize:FS.statLabel, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--color-ash)', marginBottom:'0.3rem' }}>{s.label}</div>
                <div style={{ fontFamily:'var(--font-display)', fontSize:FS.statVal, color:'var(--color-parchment)' }}>{s.value}</div>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{ position:'relative', overflow:'hidden' }}>
        <AssetImage src="/assets/poster/memento-poster.jpg" alt="Memento poster" placeholderLabel="Memento Poster"
          style={{ width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.6) contrast(1.1)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, var(--color-void) 0%, transparent 40%)' }} />
      </motion.div>
    </div>
  );
}
