import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const btnStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'clamp(36px, 3.5vw, 52px)',
  height: 'clamp(36px, 3.5vw, 52px)',
  border: '1px solid rgba(166,166,161,0.2)',
  borderRadius: '50%',
  background: 'rgba(11,11,12,0.6)',
  backdropFilter: 'blur(8px)',
  cursor: 'pointer',
  color: 'var(--color-ash)',
  transition: 'border-color 0.2s, color 0.2s',
};

export default function NavControls({ onPrev, onNext }: NavControlsProps) {
  const iconSize = 20;

  return (
    <div style={{
      position: 'absolute',
      bottom: '2%',
      right: '3%',
      display: 'flex',
      gap: 'clamp(8px, 1vw, 16px)',
      zIndex: 60,
      pointerEvents: 'auto',
    }}>
      <motion.button
        onClick={onPrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={btnStyle}
        aria-label="Previous slide"
      >
        <ChevronLeft size={iconSize} />
      </motion.button>
      <motion.button
        onClick={onNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={btnStyle}
        aria-label="Next slide"
      >
        <ChevronRight size={iconSize} />
      </motion.button>
    </div>
  );
}
