import { motion } from 'framer-motion';
import { Brain, Eye, Heart, Shield, Scale, HelpCircle } from 'lucide-react';
import { staggerContainer } from '../animations/variants';

const FS = {
  tag:  'clamp(13px, 1.3vw, 20px)',
  h1:   'clamp(38px, 5vw, 76px)',
  head: 'clamp(20px, 2.1vw, 32px)',
  body: 'clamp(16px, 1.6vw, 24px)',
};

const themes = [
  { icon:Brain,     label:'Memory & Identity',          desc:'Without memory, who are we? Leonard\'s identity is entirely constructed from notes and tattoos — not lived experience.', color:'var(--color-steel)' },
  { icon:Eye,       label:'Truth & Deception',          desc:'Every character deceives Leonard. More disturbingly, Leonard may deceive himself — choosing what to remember and what to discard.', color:'var(--color-blood)' },
  { icon:Heart,     label:'Grief',                      desc:'The entire film is driven by Leonard\'s unresolved grief for his wife. His investigation is a coping mechanism rather than a rational pursuit.', color:'#7a3535' },
  { icon:Shield,    label:'Self-Deception',             desc:'Leonard chooses to ignore facts that threaten his narrative. The film asks: is self-deception sometimes necessary for survival?', color:'var(--color-ash)' },
  { icon:Scale,     label:'Justice vs. Revenge',        desc:'Leonard believes he seeks justice. Teddy suggests it has always been revenge — and that Leonard is now the instrument of injustice.', color:'var(--color-parchment)' },
  { icon:HelpCircle,label:'Reliability of Perception', desc:'Can we trust our own senses and memories? The film challenges us to question the very tools we use to understand the world.', color:'#6a7a5a' },
];

export default function Slide15Themes() {
  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-void)', display:'flex', flexDirection:'column', padding:'5% 7%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(166,166,161,0.04) 1px, transparent 1px)', backgroundSize:'32px 32px', pointerEvents:'none' }} />

      <motion.div initial={{ opacity:0, y:-15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }} style={{ marginBottom:'4%', zIndex:1 }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.4rem' }}>Analysis</span>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-white)' }}>Themes &amp; Moral Values</h1>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible"
        style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridTemplateRows:'repeat(2, 1fr)', gap:'1.5rem 2rem', flex:1, zIndex:1 }}>
        {themes.map((theme, i) => (
          <motion.div key={i}
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:0.2 + i*0.1, duration:0.65, ease:[0.76, 0, 0.24, 1] }}
            style={{ display:'flex', alignItems:'flex-start', gap:'0.9rem', padding:'0.75rem 0', borderTop:`1px solid rgba(255,255,255,0.07)` }}>
            <div style={{ width:'clamp(2rem, 2.5vw, 3rem)', height:'clamp(2rem, 2.5vw, 3rem)', borderRadius:'50%', border:`1px solid ${theme.color}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:'0.1rem' }}>
              <theme.icon size={16} strokeWidth={1.5} color={theme.color} />
            </div>
            <div>
              <div style={{ fontFamily:'var(--font-display)', fontSize:FS.head, fontWeight:400, color:'var(--color-white)', marginBottom:'0.3rem' }}>{theme.label}</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'var(--color-ash)', lineHeight:1.55 }}>{theme.desc}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
