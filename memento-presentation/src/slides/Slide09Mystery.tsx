import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { polaroidDrop, killTweens } from '../animations/gsapHelpers';
import AssetImage from '../components/AssetImage';

const FS = {
  tag:     'clamp(13px, 1.3vw, 20px)',
  h1:      'clamp(38px, 5vw, 76px)',
  caption: 'clamp(13px, 1.3vw, 20px)',
  quote:   'clamp(17px, 1.8vw, 28px)',
};

const polaroids = [
  { src:'/assets/polaroids/polaroid-teddy.jpg',  alt:'Polaroid of Teddy',           caption:'Do not believe his lies',  rotate:-6, top:'20%', left:'5%',  delay:0.3 },
  { src:'/assets/polaroids/polaroid-natalie.jpg', alt:'Polaroid of Natalie',          caption:'She has also lost someone', rotate:4,  top:'20%',  left:'28%', delay:0.6 },
  { src:'/assets/polaroids/polaroid-motel.jpg',   alt:'Polaroid of Motel exterior',   caption:'Discount Inn — Room 21',    rotate:-3, top:'32%', left:'54%', delay:0.9 },
  { src:'/assets/characters/sammy.jpg',           alt:'Polaroid of Sammy Jankis',     caption:'Remember Sammy Jankis',    rotate:7,  top:'55%', left:'15%', delay:1.2 },
  { src:'/assets/screenshots/investigation.jpg',  alt:'Scene from investigation',     caption:'Fact — Not emotion',       rotate:-5, top:'62%', left:'58%', delay:1.5 },
];

export default function Slide09Mystery() {
  const polaroidRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    polaroidRefs.current.filter(Boolean).forEach((el, i) => { polaroidDrop(el, polaroids[i].delay, polaroids[i].rotate); });
    return () => { polaroidRefs.current.forEach(killTweens); };
  }, []);

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'#0f0e0c', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(196,180,154,0.03) 1px, transparent 1px)', backgroundSize:'28px 28px' }} />

      <motion.div initial={{ opacity:0, y:-15 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2, duration:0.7 }}
        style={{ position:'absolute', top:'4%', left:'50%', transform:'translateX(-50%)', textAlign:'center', zIndex:2, whiteSpace:'nowrap' }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block' }}>Storyline · Part III</span>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-white)' }}>The Mystery</h1>
      </motion.div>

      {polaroids.map((p, i) => (
        <div key={i} ref={el => { if (el) polaroidRefs.current[i] = el; }}
          style={{ position:'absolute', top:p.top, left:p.left, width:'clamp(200px, 14vw, 200px)', zIndex:3, opacity:0 }}>
          <div className="polaroid-frame">
            <AssetImage src={p.src} alt={p.alt} placeholderLabel={p.alt}
              style={{ width:'100%', aspectRatio:'1', objectFit:'cover', display:'block', filter:'sepia(0.2) brightness(0.9)' }} />
            <div style={{ fontFamily:'var(--font-mono)', fontSize:FS.caption, color:'#333', textAlign:'center', paddingTop:'0.4rem', lineHeight:1.4 }}>{p.caption}</div>
          </div>
        </div>
      ))}

      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:2 }} aria-hidden="true">
        <line x1="13%" y1="38%" x2="22%" y2="62%" stroke="rgba(141,41,41,0.3)" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="37%" y1="34%" x2="23%" y2="62%" stroke="rgba(141,41,41,0.3)" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="37%" y1="34%" x2="67%" y2="60%" stroke="rgba(141,41,41,0.3)" strokeWidth="1" strokeDasharray="4,4" />
      </svg>

      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2, duration:1 }}
        style={{ position:'absolute', bottom:'5%', left:'50%', transform:'translateX(-50%)', fontFamily:'var(--font-display)', fontSize:FS.quote, fontStyle:'italic', color:'var(--color-ash)', textAlign:'center', zIndex:2, whiteSpace:'nowrap' }}>
        "Facts, not memories. That's how you investigate." — Leonard Shelby
      </motion.div>
    </div>
  );
}
