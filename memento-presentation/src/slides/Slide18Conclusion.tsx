import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { vignettePulse, killTweens } from '../animations/gsapHelpers';

const FS = {
  tag:    'clamp(13px, 1.3vw, 20px)',
  quote:  'clamp(28px, 3vw, 46px)',
  attr:   'clamp(16px, 1.6vw, 24px)',
  body:   'clamp(16px, 1.6vw, 24px)',
  pulse:  'clamp(16px, 1.8vw, 28px)',
  credit: 'clamp(12px, 1.2vw, 18px)',
};

const quoteLines = [
  'Memory can change the shape of a room;',
  'it can change the colour of a car.',
  'And memories can be distorted.',
];

export default function Slide18Conclusion() {
  const vignetteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vignetteRef.current) vignettePulse(vignetteRef.current);
    return () => { if (vignetteRef.current) killTweens(vignetteRef.current); };
  }, []);

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-void)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
      <div ref={vignetteRef} style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(166,166,161,0.025) 1px, transparent 1px)', backgroundSize:'40px 40px', pointerEvents:'none' }} />

      <div style={{ position:'relative', zIndex:2, display:'flex', flexDirection:'column', alignItems:'center', maxWidth:'64%', textAlign:'center', gap:'1.5rem' }}>
        <motion.span initial={{ opacity:0, y:-15 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:0.7 }}
          style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--color-blood)' }}>
          Conclusion
        </motion.span>

        <div style={{ display:'flex', flexDirection:'column', gap:'0.3rem' }}>
          {quoteLines.map((line, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:15 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.6 + i*0.3, duration:0.8, ease:[0.76, 0, 0.24, 1] }}
              style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:FS.quote, fontWeight:300, color:'var(--color-white)', lineHeight:1.4 }}>
              {line}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8, duration:0.8 }}
          style={{ fontFamily:'var(--font-body)', fontSize:FS.attr, color:'var(--color-ash)', letterSpacing:'0.08em' }}>
          — Leonard Shelby, Memento (2000)
        </motion.div>

        <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ delay:2.1, duration:0.9 }}
          style={{ width:'4rem', height:'1px', background:'var(--color-ash)', transformOrigin:'center' }} />

        <motion.p initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:2.5, duration:0.9 }}
          style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'var(--color-ash)', lineHeight:1.7, maxWidth:'80%' }}>
          Memento is more than a film — it is a profound inquiry into the nature of selfhood, the fragility of memory, and the stories we construct to give our lives meaning. Christopher Nolan's masterwork challenges us to question not only Leonard's reliability, but our own.
        </motion.p>

        <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:3.2, duration:1, ease:'easeOut' }}>
          <motion.span animate={{ opacity:[1, 0.4, 1] }} transition={{ delay:4, duration:2.5, repeat:Infinity, ease:'easeInOut' }}
            style={{ fontFamily:'var(--font-display)', fontSize:FS.pulse, letterSpacing:'0.5em', textTransform:'uppercase', color:'var(--color-parchment)', display:'block' }}>
            Remember
          </motion.span>
        </motion.div>
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:3.5, duration:1 }}
        style={{ position:'absolute', bottom:'5%', left:'50%', transform:'translateX(-50%)', fontFamily:'var(--font-body)', fontSize:FS.credit, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(166,166,161,0.4)', zIndex:2, whiteSpace:'nowrap', textAlign:'center' }}>
        Career Development Skills Practical · Memento (2000) · Movie Review &amp; Analysis
      </motion.div>
    </div>
  );
}
