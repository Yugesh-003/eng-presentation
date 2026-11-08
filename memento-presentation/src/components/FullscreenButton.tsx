import { Maximize2, Minimize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFullscreen } from '../hooks/useFullscreen';

export default function FullscreenButton() {
  const { isFullscreen, toggle } = useFullscreen();

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'clamp(32px, 3vw, 44px)',
        height: 'clamp(32px, 3vw, 44px)',
        border: '1px solid rgba(166,166,161,0.2)',
        borderRadius: '50%',
        background: 'rgba(11,11,12,0.6)',
        backdropFilter: 'blur(8px)',
        cursor: 'pointer',
        color: 'var(--color-ash)',
      }}
      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
    >
      {isFullscreen
        ? <Minimize2 size={16} />
        : <Maximize2 size={16} />
      }
    </motion.button>
  );
}
