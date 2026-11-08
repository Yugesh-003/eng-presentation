import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants';
import AssetImage from '../components/AssetImage';

const FS = {
  tag:   'clamp(13px, 1.3vw, 20px)',
  h1:    'clamp(38px, 5vw, 76px)',
  body:  'clamp(17px, 1.8vw, 28px)',
  label: 'clamp(13px, 1.3vw, 20px)',
  val:   'clamp(16px, 1.6vw, 24px)',
};

const timeline = [
  { year:'1970', event:'Born in Westminster, London, England' },
  { year:'1998', event:'Following - debut feature, shot on weekends over a year for $6,000' },
  { year:'2000', event:'Memento - breakthrough, Sundance, Venice Film Festival' },
  { year:'2002', event:'Insomnia - first studio film with major cast' },
  { year:'2005', event:'The Dark Knight Trilogy - global cultural phenomenon' },
  { year:'2010', event:'Inception - $836M worldwide, 4 Academy Awards' },
  { year:'2014', event:'Interstellar - landmark science fiction film' },
  // { year:'2023', event:'Oppenheimer - Academy Award for Best Picture and Best Director' },
];

export default function Slide04Director() {
  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-warm-dark)', display:'grid', gridTemplateColumns:'55% 45%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 100% 50%, rgba(141,41,41,0.08) 0%, transparent 50%)' }} />

      <div style={{ padding:'6% 4% 6% 7%', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', zIndex:1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.6rem' }}>
            About the Director
          </motion.span>
          <motion.h1 variants={fadeUp} style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-parchment)', marginBottom:'0.6rem' }}>
            Christopher Nolan
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'clamp(18px, 2vw, 30px)', color:'rgba(196,180,154,0.6)', marginBottom:'1.5rem' }}>
            CBE · British-American Filmmaker
          </motion.p>

          <div style={{ display:'flex', flexDirection:'column', gap:'0.6rem', overflowY:'auto', maxHeight:'52%' }}>
            {timeline.map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                style={{ display:'flex', gap:'1rem', alignItems:'flex-start', borderBottom:'1px solid rgba(255,255,255,0.05)', paddingBottom:'0.5rem' }}>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'clamp(13px, 1.3vw, 20px)', color:'var(--color-blood)', minWidth:'3.5rem', paddingTop:'1px' }}>{item.year}</div>
                <div style={{ fontFamily:'var(--font-body)', fontSize:FS.val, fontWeight:100, color:'var(--color-ash)', lineHeight:1.5 }}>{item.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{ position:'relative', overflow:'hidden' }}>
        <AssetImage src="/assets/characters/nolan.jpg" alt="Christopher Nolan" placeholderLabel="Christopher Nolan"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', filter:'brightness(0.65) contrast(1.1) sepia(0.15)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, var(--color-warm-dark) 0%, transparent 30%, transparent 100%)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, var(--color-warm-dark) 0%, transparent 25%)' }} />
      </motion.div>
    </div>
  );
}
