import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants';
import AssetImage from '../components/AssetImage';

const FS = {
  tag:   'clamp(13px, 1.3vw, 20px)',
  h1:    'clamp(38px, 5vw, 76px)',
  head:  'clamp(16px, 1.6vw, 24px)',
  body:  'clamp(16px, 1.6vw, 24px)',
  quote: 'clamp(16px, 1.7vw, 26px)',
};

const directorial = [
  { label:'Reverse Chronology', desc:'Each colour scene directly precedes the last — the audience experiences disorientation alongside Leonard.' },
  { label:'Dual Timeline Merge', desc:'B&W and colour storylines converge at the climax, delivering maximum narrative impact.' },
  { label:'Unreliable Narrator', desc:'The audience is never certain what is truth versus self-deception. We inhabit Leonard\'s fractured perspective.' },
  { label:'Minimal Score', desc:'David Julyan\'s sparse ambient score amplifies unease rather than explaining or guiding the viewer\'s emotion.' },
  { label:'Dialogue as Clue', desc:'Every conversation potentially contains a lie. The screenplay trusts the audience to piece together what is real.' },
];

export default function Slide11Direction() {
  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-warm-dark)', display:'grid', gridTemplateColumns:'50% 50%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 90% 50%, rgba(141,41,41,0.06) 0%, transparent 50%)' }} />

      <div style={{ padding:'7% 4% 7% 7%', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', zIndex:1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.5rem' }}>Craft</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-parchment)', marginBottom:'1.5rem' }}>Direction &amp; Screenplay</motion.h1>

          <div style={{ display:'flex', flexDirection:'column', gap:'0.9rem' }}>
            {directorial.map((item, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display:'flex', gap:'0.75rem' }}>
                <div style={{ minWidth:'2px', alignSelf:'stretch', background:`rgba(141,41,41,${0.3 + i*0.1})`, flexShrink:0 }} />
                <div>
                  <div style={{ fontFamily:'var(--font-body)', fontSize:FS.head, fontWeight:600, color:'var(--color-white)', marginBottom:'0.15rem' }}>{item.label}</div>
                  <div style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'var(--color-ash)', lineHeight:1.55 }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} style={{ marginTop:'1.5rem', borderLeft:'2px solid rgba(141,41,41,0.4)', paddingLeft:'0.75rem' }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize:FS.quote, fontStyle:'italic', color:'rgba(196,180,154,0.7)', lineHeight:1.5 }}>
              Screenplay written by Christopher Nolan, adapted from Jonathan Nolan's short story "Memento Mori" (Esquire, 2001).
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={scaleIn} initial="hidden" animate="visible" style={{ position:'relative', overflow:'hidden' }}>
        <AssetImage src="/assets/screenshots/bw-sequence.jpg" alt="Film still from Memento B&W sequence" placeholderLabel="B&W Sequence Still"
          style={{ width:'100%', height:'100%', objectFit:'cover', filter:'contrast(1.1) brightness(0.7)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to left, transparent 50%, var(--color-warm-dark) 100%)' }} />
      </motion.div>
    </div>
  );
}
