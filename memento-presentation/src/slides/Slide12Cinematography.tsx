import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { kenBurns, slowPan, killTweens } from '../animations/gsapHelpers';
import AssetImage from '../components/AssetImage';

const FS = {
  tag:   'clamp(13px, 1.3vw, 20px)',
  h1:    'clamp(38px, 5vw, 76px)',
  label: 'clamp(13px, 1.3vw, 20px)',
  val:   'clamp(16px, 1.6vw, 24px)',
  badge: 'clamp(12px, 1.2vw, 18px)',
};

const cinemaPoints = [
  { label:'Director of Photography', value:'Wally Pfister (later Academy Award winner for Inception)' },
  { label:'Visual Language', value:'Tight, intimate close-ups that mirror Leonard\'s narrow field of awareness. The camera sees only what he sees.' },
  { label:'Natural Lighting', value:'Pfister used available and practical light sources to give the film a documentary-like, grounded quality.' },
  { label:'B&W vs Colour', value:'Black-and-white (chronological) versus warm colour (reverse order) creates an instant visual code for the audience.' },
  { label:'Reversed Footage', value:'Nolan literally reversed some sequences in post, then ran them forward — creating genuinely disorienting continuity.' },
];

export default function Slide12Cinematography() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) { slowPan(bgRef.current, 'left'); kenBurns(bgRef.current, 'in'); }
    return () => { if (bgRef.current) killTweens(bgRef.current); };
  }, []);

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'#111111', overflow:'hidden' }}>
      <div ref={bgRef} style={{ position:'absolute', inset:'-5%', transformOrigin:'center' }}>
        <AssetImage src="/assets/screenshots/bw-sequence.jpg" alt="Memento black and white cinematography" placeholderLabel="B&W Cinematography"
          style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(1) brightness(0.55) contrast(1.2)' }} />
      </div>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 50%, transparent 20%, rgba(0,0,0,0.7) 100%)' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, transparent 30%, rgba(17,17,17,0.9) 60%, #111111 100%)' }} />

      <motion.div initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}
        style={{ position:'absolute', top:'7%', left:'5%', zIndex:2 }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'#888888', display:'block', marginBottom:'0.3rem' }}>Visual Language</span>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'#E8E8E8', lineHeight:1.1 }}>Cinematography &amp;<br />Visual Presentation</h1>
      </motion.div>

      <div style={{ position:'absolute', top:'28%', right:'4%', width:'38%', bottom:'10%', zIndex:2, display:'flex', flexDirection:'column', gap:'1rem', justifyContent:'center' }}>
        {cinemaPoints.map((item, i) => (
          <motion.div key={i} initial={{ opacity:0, y:15, filter:'blur(4px)' }} animate={{ opacity:1, y:0, filter:'blur(0px)' }}
            transition={{ delay:0.3 + i*0.15, duration:0.7, ease:[0.76, 0, 0.24, 1] }}>
            <div style={{ fontFamily:'var(--font-body)', fontSize:FS.label, letterSpacing:'0.15em', textTransform:'uppercase', color:'#888888', marginBottom:'0.25rem' }}>{item.label}</div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:FS.val, fontWeight:300, color:'#C8C8C8', lineHeight:1.55 }}>{item.value}</div>
            {i < cinemaPoints.length - 1 && <div style={{ marginTop:'1rem', height:'1px', background:'rgba(255,255,255,0.08)' }} />}
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5, duration:0.8 }}
        style={{ position:'absolute', bottom:'5%', left:'5%', fontFamily:'var(--font-body)', fontSize:FS.badge, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(136,136,136,0.6)', zIndex:2 }}>
        Shot on 35mm film · Panavision anamorphic lenses · 2.39:1 aspect ratio
      </motion.div>
    </div>
  );
}
