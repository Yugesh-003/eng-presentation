import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import { filmStripScroll, killTweens } from '../animations/gsapHelpers';

const FS = {
  tag:  'clamp(13px, 1.3vw, 20px)',
  h1:   'clamp(38px, 5vw, 76px)',
  head: 'clamp(16px, 1.6vw, 24px)',
  val:  'clamp(16px, 1.6vw, 24px)',
  sec:  'clamp(14px, 1.4vw, 22px)',
};

const editingPoints = [
  { label:'Editor', value:'Dody Dorn — Academy Award nomination for Best Editing (2002)' },
  { label:'Reverse Montage', value:'Each colour scene ends precisely where the previous one began. Dorn assembled the film in reverse order, then reversed it again — an unprecedented editorial challenge.' },
  { label:'Scene Duration', value:'Scenes are kept deliberately short and disorienting. The viewer, like Leonard, must piece together context from fragments.' },
  { label:'Jump Cuts', value:'Strategic jump cuts within individual scenes mirror Leonard\'s momentary lapses — small gaps that hint at something missing.' },
];

const soundPoints = [
  { label:'Composer', value:'David Julyan — longtime Nolan collaborator' },
  { label:'Score Character', value:'Sparse, ambient, and deeply unsettling. The score avoids musical resolution, leaving tension unresolved alongside the story.' },
  { label:'Sound Design', value:'Practical sounds (a Polaroid camera shutter, the click of a Zippo lighter) are amplified to become character identifiers.' },
];

const filmStrips = Array.from({ length: 44 }, (_, i) => i);

export default function Slide13Editing() {
  const stripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (stripRef.current) filmStripScroll(stripRef.current);
    return () => { if (stripRef.current) killTweens(stripRef.current); };
  }, []);

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-charcoal)', display:'flex', flexDirection:'column', padding:'5% 7%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 10% 80%, rgba(38,59,80,0.1) 0%, transparent 50%)', pointerEvents:'none' }} />

      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'clamp(3rem, 6vh, 5rem)', overflow:'hidden', opacity:0.4 }}>
        <div ref={stripRef} style={{ display:'flex', width:'max-content' }}>
          {filmStrips.map((_, i) => (
            <div key={i} style={{ width:'4rem', height:'clamp(3rem, 6vh, 5rem)', borderLeft:'3px solid #333', borderRight:'3px solid #333', background:i%3===0?'#1a1a1a':i%3===1?'#222':'#191919', flexShrink:0, position:'relative' }}>
              <div style={{ position:'absolute', top:'6px', left:'6px', right:'6px', height:'8px', background:'#000', borderRadius:'1px' }} />
              <div style={{ position:'absolute', bottom:'6px', left:'6px', right:'6px', height:'8px', background:'#000', borderRadius:'1px' }} />
            </div>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity:0, y:-15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }} style={{ marginBottom:'4%', zIndex:1 }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.4rem' }}>Post-Production</span>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-white)' }}>Film Editing &amp; Sound</h1>
      </motion.div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', zIndex:1, flex:1 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--color-parchment)', marginBottom:'1rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <div style={{ width:'1.5rem', height:'1px', background:'var(--color-parchment)' }} />Editing
          </motion.div>
          {editingPoints.map((item, i) => (
            <motion.div key={i} variants={fadeUp} style={{ marginBottom:'0.9rem' }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize:FS.head, fontWeight:600, color:'var(--color-white)', marginBottom:'0.2rem' }}>{item.label}</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:FS.val, fontWeight:300, color:'var(--color-ash)', lineHeight:1.55 }}>{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--color-parchment)', marginBottom:'1rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <div style={{ width:'1.5rem', height:'1px', background:'var(--color-parchment)' }} />Sound &amp; Score
          </motion.div>
          {soundPoints.map((item, i) => (
            <motion.div key={i} variants={fadeUp} style={{ marginBottom:'0.9rem' }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize:FS.head, fontWeight:600, color:'var(--color-white)', marginBottom:'0.2rem' }}>{item.label}</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:FS.val, fontWeight:300, color:'var(--color-ash)', lineHeight:1.55 }}>{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
