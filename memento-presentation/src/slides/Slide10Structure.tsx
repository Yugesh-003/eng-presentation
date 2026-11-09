import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const FS = {
  tag:    'clamp(13px, 1.3vw, 20px)',
  h1:     'clamp(38px, 5vw, 76px)',
  body:   'clamp(16px, 1.6vw, 24px)',
  barTag: 'clamp(13px, 1.3vw, 20px)',
  segLbl: 'clamp(12px, 1.2vw, 18px)',
  segDsc: 'clamp(13px, 1.3vw, 20px)',
  conv:   'clamp(13px, 1.3vw, 20px)',
};

const colourSegments = [
  { label:'C1', desc:'Scene opens with murder reversed',      color:'#C4B49A' },
  { label:'C2', desc:'Leonard investigates — present moment', color:'#B8A890' },
  { label:'C3', desc:'Confrontation with Natalie',            color:'#AC9C80' },
  { label:'C4', desc:'Jimmy Grantz — Abandoned building',     color:'#A09070' },
  { label:'C5', desc:'Final revelation with Teddy',           color:'#947C5A' },
];

const bwSegments = [
  { label:'B1', desc:'Leonard on phone — unknown caller' },
  { label:'B2', desc:'Recounting Sammy Jankis story' },
  { label:'B3', desc:'Questioning his own memory' },
  { label:'B4', desc:'The night of his wife\'s death' },
];

export default function Slide10Structure() {
  const colourBarRef = useRef<HTMLDivElement>(null);
  const bwBarRef     = useRef<HTMLDivElement>(null);
  const segmentRefs  = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.set([colourBarRef.current, bwBarRef.current], { clipPath:'inset(0 100% 0 0)' });
    gsap.to(colourBarRef.current, { clipPath:'inset(0 0% 0 0)', duration:1.2, delay:0.5, ease:'power2.inOut' });
    gsap.to(bwBarRef.current,     { clipPath:'inset(0 0% 0 0)', duration:1.2, delay:0.9, ease:'power2.inOut' });
    gsap.set(segmentRefs.current.filter(Boolean), { opacity:0, y:10 });
    gsap.to(segmentRefs.current.filter(Boolean), { opacity:1, y:0, duration:0.5, stagger:0.1, delay:1.4, ease:'power2.out' });
  }, []);

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'#111111', display:'flex', flexDirection:'column', padding:'5% 7%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />

      <motion.div initial={{ opacity:0, y:-15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }} style={{ marginBottom:'4%', zIndex:1 }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'#888888', display:'block', marginBottom:'0.4rem' }}>Narrative Architecture</span>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'#E8E8E8', marginBottom:'0.5rem' }}>The Unique Storytelling Structure</h1>
        <p style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'#888888', lineHeight:1.6, maxWidth:'65%', marginBottom:'4%' }}>
          Memento uses two interlocking narrative threads. Colour sequences run in reverse chronological order, while black-and-white sequences run forward — converging at the film's climax.
        </p>
      </motion.div>

      {/* Colour stream */}
      <div style={{ marginBottom:'4%', position:'relative', zIndex:1 }}>
        <div style={{ fontFamily:'var(--font-body)', fontSize:FS.barTag, letterSpacing:'0.2em', textTransform:'uppercase', color:'#C4B49A', marginBottom:'0.5rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
          <div style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#C4B49A' }} />
          Colour Sequences — Reverse Chronological
        </div>
        <div ref={colourBarRef} style={{ display:'flex', gap:'2px', height:'clamp(2rem, 4vh, 4rem)', clipPath:'inset(0 100% 0 0)' }}>
          {colourSegments.map((s, i) => (
            <div key={i} ref={el => { if (el) segmentRefs.current[i] = el; }}
              style={{ flex:1, background:s.color, display:'flex', alignItems:'flex-end', justifyContent:'flex-start', padding:'0.3rem 0.5rem', opacity:0 }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:FS.segLbl, color:'#160F0A', fontWeight:700 }}>{s.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', gap:'2px', marginTop:'0.4rem' }}>
          {colourSegments.map((s, i) => (
            <div key={i} style={{ flex:1 }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize:FS.segDsc, color:'#888', lineHeight:1.3 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* B&W stream */}
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{ fontFamily:'var(--font-body)', fontSize:FS.barTag, letterSpacing:'0.2em', textTransform:'uppercase', color:'#888888', marginBottom:'0.5rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
          <div style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#888888' }} />
          B&amp;W Sequences — Chronological
        </div>
        <div ref={bwBarRef} style={{ display:'flex', gap:'2px', height:'clamp(2rem, 4vh, 4rem)', clipPath:'inset(0 100% 0 0)' }}>
          {bwSegments.map((s, i) => (
            <div key={i} ref={el => { if (el) segmentRefs.current[colourSegments.length + i] = el; }}
              style={{ flex:1, background:`hsl(0,0%,${25 + i*8}%)`, display:'flex', alignItems:'flex-end', justifyContent:'flex-start', padding:'0.3rem 0.5rem', opacity:0 }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:FS.segLbl, color:'#E8E8E8', fontWeight:700 }}>{s.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', gap:'2px', marginTop:'0.4rem' }}>
          {bwSegments.map((s, i) => (
            <div key={i} style={{ flex:1 }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize:FS.segDsc, color:'#888', lineHeight:1.3 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.5, duration:0.8 }}
          style={{ marginTop:'1.5rem', display:'flex', alignItems:'center', gap:'0.5rem' }}>
          <div style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.1)' }} />
          <span style={{ fontFamily:'var(--font-body)', fontSize:FS.conv, color:'#888', letterSpacing:'0.15em', textTransform:'uppercase', whiteSpace:'nowrap' }}>Both timelines converge at the abandoned building — the film's climax</span>
          <div style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.1)' }} />
        </motion.div>
      </div>
    </div>
  );
}
