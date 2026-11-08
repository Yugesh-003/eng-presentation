import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import AssetImage from '../components/AssetImage';

const FS = {
  tag:   'clamp(13px, 1.3vw, 20px)',
  h1:    'clamp(38px, 5vw, 76px)',
  name:  'clamp(22px, 2.4vw, 36px)',
  role:  'clamp(14px, 1.4vw, 22px)',
  body:  'clamp(16px, 1.6vw, 24px)',
};

const characters = [
  {
    name: 'Leonard Shelby',
    actor: 'Guy Pearce',
    role: 'Protagonist',
    desc: 'Former insurance investigator suffering from anterograde amnesia following a traumatic attack. Relies on Polaroid photos, handwritten notes, and body tattoos to navigate daily life.',
    img: '/assets/characters/leonard-color.jpg',
    color: 'var(--color-parchment)',
  },
  {
    name: 'Natalie',
    actor: 'Carrie-Anne Moss',
    role: 'Ambiguous Ally',
    desc: 'A local bartender who helps Leonard, though her true motivations remain unclear. She may be manipulating him for her own ends — exploiting his memory condition.',
    img: '/assets/characters/natalie.jpg',
    color: 'var(--color-ash)',
  },
  {
    name: 'Teddy',
    actor: 'Joe Pantoliano',
    role: 'Undercover Cop',
    desc: 'A shady police contact who claims to be helping Leonard. His true role in the events surrounding the murder is the film\'s central mystery.',
    img: '/assets/characters/teddy.jpg',
    color: 'var(--color-blood)',
  },
  {
    name: 'Sammy Jankis',
    actor: 'Stephen Tobolowsky',
    role: 'Case from the Past',
    desc: 'An anterograde amnesia patient Leonard investigated as an insurance claims officer before the attack on his wife. Sammy\'s story serves as a haunting parallel — and possibly a mirror — to Leonard.',
    img: '/assets/characters/sammy.jpg',
    color: 'var(--color-steel)',
  },
];

export default function Slide05Characters() {
  return (
    <div style={{ position:'relative', width:'100%', height:'100%', background:'var(--color-void)', display:'flex', flexDirection:'column', padding:'4% 5%', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(166,166,161,0.03) 1px, transparent 1px)', backgroundSize:'28px 28px', pointerEvents:'none' }} />

      <motion.div initial={{ opacity:0, y:-15 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }} style={{ marginBottom:'3%', zIndex:1 }}>
        <span style={{ fontFamily:'var(--font-body)', fontSize:FS.tag, letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--color-blood)', display:'block', marginBottom:'0.4rem' }}>Cast</span>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:FS.h1, fontWeight:300, color:'var(--color-white)' }}>Main Characters</h1>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible"
        style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1.5rem', flex:1, zIndex:1 }}>
        {characters.map((char, i) => (
          <motion.div key={i} variants={fadeUp}
            style={{ display:'flex', flexDirection:'column', borderTop:`2px solid ${char.color}`, paddingTop:'1rem', gap:'0.75rem' }}>
            <div style={{ height:'40%', overflow:'hidden', borderRadius:'2px' }}>
              <AssetImage src={char.img} alt={char.name} placeholderLabel={char.name}
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', filter:'grayscale(0.3) brightness(0.8)' }} />
            </div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:FS.name, fontWeight:400, color:'var(--color-white)', lineHeight:1.2 }}>{char.name}</div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:FS.role, letterSpacing:'0.1em', color:char.color }}>
              {char.actor} &nbsp;·&nbsp; <em>{char.role}</em>
            </div>
            <div style={{ fontFamily:'var(--font-body)', fontSize:FS.body, fontWeight:300, color:'var(--color-ash)', lineHeight:1.6 }}>{char.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
