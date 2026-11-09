import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import { slowPan, kenBurns, killTweens } from '../animations/gsapHelpers';
import AssetImage from '../components/AssetImage';

const FS = {
  tag:  'clamp(13px, 1.3vw, 20px)',
  h1:   'clamp(38px, 5vw, 76px)',
  h2:   'clamp(16px, 1.6vw, 24px)',
  body: 'clamp(17px, 1.8vw, 28px)',
};

const bullets = [
  { label:'Opening Scene', text:'The film begins at its chronological end: a Polaroid photograph of a dead man fades from existence — developed film being un-developed in reverse. The camera ejects a spent cartridge and a gun is re-loaded.' },
  { label:'Meet Leonard', text:'In black and white, we meet Leonard Shelby in a motel room. He is on the phone with an unknown caller, telling the story of Sammy Jankis — a man he investigated before his condition developed.' },
  { label:'First Contact', text:'In colour (reversing backwards through time), Leonard awakens to discover a photo of a smiling woman — Natalie — with the words "She has also lost someone" written on the back. He must trust it.' },
];

export default function Slide07Beginning() {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (bgRef.current) { kenBurns(bgRef.current, 'in'); slowPan(bgRef.current, 'right'); }
    return () => { if (bgRef.current) killTweens(bgRef.current); };
  }, []);

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-warm-dark)', display:'grid', gridTemplateColumns:'50% 50%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 10% 50%, rgba(141,41,41,0.06) 0%, transparent 50%)' }} />

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8 }} style={{ position:'relative', overflow:'hidden' }}>
        <div ref={bgRef} style={{ position:'absolute', inset:'-5%', transformOrigin:'center' }}>
          <AssetImage src="/assets/screenshots/motel-room.jpg" alt="Leonard's motel room" placeholderLabel="Motel Room"
            style={{ width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.5) sepia(0.2)' }} />
        </div>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 60%, var(--color-warm-dark) 100%)' }} />
      </motion.div>

      <div style={{ padding:'6% 7% 6% 4%', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', zIndex:1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.5rem' }}>Storyline · Part I</motion.span>
          <motion.h1 variants={fadeUp} style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-parchment)', marginBottom:'1.5rem' }}>The Beginning</motion.h1>

          <div style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }}>
            {bullets.map((item, i) => (
              <motion.div key={i} variants={fadeUp} style={{ display:'flex', flexDirection:'column', gap:'0.3rem', borderLeft:'2px solid rgba(141,41,41,0.5)', paddingLeft:'0.9rem' }}>
                <div style={{ fontFamily:'var(--font-body)', fontSize:FS.h2, fontWeight:600, letterSpacing:'0.08em', color:'var(--color-parchment)' }}>{item.label}</div>
                <div style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'var(--color-ash)', lineHeight:1.6 }}>{item.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
