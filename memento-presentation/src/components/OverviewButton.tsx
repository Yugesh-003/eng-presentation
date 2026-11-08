import { Grid } from 'lucide-react';
import { motion } from 'framer-motion';

interface OverviewButtonProps {
  onClick: () => void;
}

export default function OverviewButton({ onClick }: OverviewButtonProps) {
  return (
    <motion.button
      onClick={onClick}
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
      aria-label="Open slide overview"
    >
      <Grid size={16} />
    </motion.button>
  );
}
