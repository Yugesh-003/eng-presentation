import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { kenBurns, staggerWords, polaroidDrop, killTweens } from '../animations/gsapHelpers';
import AssetImage from '../components/AssetImage';

const FS = {
  tag:    'clamp(13px, 1.3vw, 20px)',
  h1:     'clamp(38px, 5vw, 76px)',
  h2:     'clamp(16px, 1.6vw, 24px)',
  body:   'clamp(16px, 1.6vw, 24px)',
  mono:   'clamp(16px, 1.6vw, 24px)',
  monoBig:'clamp(20px, 2.1vw, 32px)',
  caption:'clamp(13px, 1.3vw, 20px)',
};

const tattoos = [
  'John G. raped and murdered my wife.',
  'Remember Sammy Jankis.',
  'The facts, not your emotional reaction.',
  'Never answer the phone.',
  'I am not a killer.',
];

const polaroids = [
  { src:'/assets/characters/natalie.jpg', alt:'Polaroid — Sammy Jankis', caption:'SHE\'LL HELP OUT OF PITY', rotate:4,  top:'10%', right:'33%',  delay:0.4 },
  { src:'/assets/characters/teddy.jpg',    alt:'Polaroid — Leonard',       caption:'DONT BELIVE HIS LIES',       rotate:-5, top:'68%', right:'28%', delay:0.9 },
];

export default function Slide06Leonard() {
  const bgRef  = useRef<HTMLDivElement>(null);
  const tatRef = useRef<HTMLDivElement>(null);
  const polRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (bgRef.current)  kenBurns(bgRef.current, 'in');
    if (tatRef.current) staggerWords(tatRef.current.querySelectorAll<HTMLElement>('[data-word]'), 1.2);
    polRefs.current.filter(Boolean).forEach((el, i) => polaroidDrop(el, polaroids[i].delay, polaroids[i].rotate));
    return () => {
      if (bgRef.current)  killTweens(bgRef.current);
      if (tatRef.current) killTweens(tatRef.current);
      polRefs.current.forEach(killTweens);
    };
  }, []);
// c:\Users\Yugesh\.gemini\antigravity\brain\87fec264-0899-4d88-ae22-9f0cdd5bdc7b\assets_needed.md
  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-void)', overflow:'hidden', display:'grid', gridTemplateColumns:'50% 50%' }}>
      <div ref={bgRef} style={{ position:'absolute', inset:'-5%', transformOrigin:'center' }}>
        <AssetImage src="/assets/characters/leonard-color.png" alt="Leonard Shelby" placeholderLabel="Leonard Shelby"
          style={{ width:'100%', height:'100%', objectFit:'cover', filter:'brightness(0.18) contrast(1.2) grayscale(0.6)' }} />
      </div>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 30% 50%, rgba(38,59,80,0.15) 0%, transparent 60%)' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(11,11,12,0.3) 40%, rgba(11,11,12,0.6) 100%)' }} />

      {/* Left column */}
      <div style={{ position:'relative', zIndex:2, padding:'6% 4% 6% 7%', display:'flex', flexDirection:'column', justifyContent:'center', gap:'1.4rem' }}>
        <motion.div initial={{ opacity:0, y:-15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
          <span style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.4rem' }}>Character Study</span>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-white)', lineHeight:1.15 }}>Understanding<br />Leonard Shelby</h1>
        </motion.div>

        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.7 }}>
          <div style={{ fontFamily:'var(--font-body)', fontSize:FS.h2, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--color-ash)', marginBottom:'0.5rem' }}>Medical Condition</div>
          <div style={{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'clamp(22px, 2.3vw, 36px)', color:'var(--color-parchment)', marginBottom:'0.5rem' }}>Anterograde Amnesia</div>
          <div style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'var(--color-ash)', lineHeight:1.65 }}>
            Leonard cannot form new memories after the traumatic incident. Every time he falls asleep or loses focus, he forgets. He awakens to a world without context.
          </div>
        </motion.div>

        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7, duration:0.7 }}>
          <div style={{ fontFamily:'var(--font-body)', fontSize:FS.h2, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--color-ash)', marginBottom:'0.5rem' }}>His System</div>
          <div style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'var(--color-ash)', lineHeight:1.65 }}>
            To compensate, he uses three tools: Polaroid photographs with handwritten notes, paper notes carried on his person, and permanent tattoos on his own body for the most critical truths.
          </div>
        </motion.div>
      </div>

      {/* Right column — tattoos + polaroids */}
      <div style={{ position:'relative', zIndex:2, padding:'6% 5%', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1, duration:0.8 }} style={{ marginBottom:'1.5rem' }}>
          <div style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-parchment)', display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem' }}>
            <div style={{ width:'2rem', height:'1px', background:'var(--color-parchment)' }} />
            Tattoos — His Only Truth
            <div style={{ flex:1, height:'1px', background:'rgba(196,180,154,0.3)' }} />
          </div>
          <div ref={tatRef} style={{ display:'flex', flexDirection:'column', gap:'0.6rem' }}>
            {tattoos.map((t, i) => (
              <div key={i} data-word style={{ fontFamily:'var(--font-mono)', fontSize:FS.monoBig, color:'var(--color-white)', borderLeft:'2px solid var(--color-blood)', paddingLeft:'0.75rem', opacity:0, lineHeight:1.4 }}>{t}</div>
            ))}
          </div>
        </motion.div>

        {polaroids.map((p, i) => (
          <div key={i} ref={el => { if (el) polRefs.current[i] = el; }}
            style={{ position:'absolute', top:p.top, right:p.right, width:'clamp(100px, 12vw, 180px)', opacity:0, zIndex:3 }}>
            <div className="polaroid-frame">
              <AssetImage src={p.src} alt={p.alt} placeholderLabel={p.alt}
                style={{ width:'100%', aspectRatio:'1', objectFit:'cover', display:'block', filter:'sepia(0.2) brightness(0.9)' }} />
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'clamp(11px, 1.1vw, 16px)', color:'#333', textAlign:'center', paddingTop:'0.4rem', lineHeight:1.4 }}>{p.caption}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
