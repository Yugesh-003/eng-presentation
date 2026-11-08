import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import { Camera, Calendar, Globe2, Award, Clock, Users } from 'lucide-react';

const FS = {
  tag:   'clamp(13px, 1.3vw, 20px)',
  h1:    'clamp(38px, 5vw, 76px)',
  label: 'clamp(13px, 1.3vw, 20px)',
  val:   'clamp(18px, 1.9vw, 30px)',
  sub:   'clamp(14px, 1.4vw, 22px)',
};

const details = [
  { icon: Camera, label: 'Director', primary: 'Christopher Nolan', secondary: 'Also Writer & Producer' },
  { icon: Calendar, label: 'Release Date', primary: 'Sep 5, 2000 (Venice)', secondary: 'US: March 16, 2001' },
  { icon: Globe2, label: 'Country / Language', primary: 'United States', secondary: 'English' },
  { icon: Award, label: 'Production', primary: 'Newmarket Films', secondary: 'Summit Entertainment' },
  { icon: Clock, label: 'Runtime', primary: '113 minutes', secondary: 'Colour + Black & White' },
  { icon: Users, label: 'Cast', primary: 'Guy Pearce · Carrie-Anne Moss', secondary: 'Joe Pantoliano · Mark Boone Jr.' },
];

export default function Slide03Details() {
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.animate([{ width:'0%' }, { width:'100%' }], { duration:800, delay:400, fill:'forwards', easing:'ease-out' });
    }
  }, []);

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-charcoal)', display:'flex', flexDirection:'column', padding:'5% 7%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 100% 0%, rgba(141,41,41,0.06) 0%, transparent 50%)', pointerEvents:'none' }} />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ zIndex:1 }}>
        <motion.span variants={fadeUp} style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.6rem' }}>
          Movie Details
        </motion.span>
        <motion.h1 variants={fadeUp} style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-white)', marginBottom:'0.5rem' }}>
          At a Glance
        </motion.h1>
        <div ref={lineRef} style={{ height:'1px', background:'rgba(255,255,255,0.1)', width:'0%', marginBottom:'4%' }} />
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible"
        style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridTemplateRows:'repeat(2, 1fr)', gap:'2rem 3rem', flex:1, zIndex:1 }}>
        {details.map((item, i) => (
          <motion.div key={i} variants={fadeUp} style={{ display:'flex', flexDirection:'column', gap:'0.6rem' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}>
              <item.icon size={18} strokeWidth={1.5} color="var(--color-blood)" />
              <span style={{ fontFamily:'var(--font-body)', fontSize:FS.label, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--color-ash)' }}>{item.label}</span>
            </div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:FS.val, fontWeight:400, color:'var(--color-parchment)', lineHeight:1.3 }}>{item.primary}</div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:FS.sub, fontWeight:300, color:'var(--color-ash)' }}>{item.secondary}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
