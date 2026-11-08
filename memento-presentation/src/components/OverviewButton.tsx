import { LayoutGrid } from 'lucide-react';

interface OverviewButtonProps {
  onClick: () => void;
}

export default function OverviewButton({ onClick }: OverviewButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Open slide overview"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.1rem',
        height: '2.1rem',
        borderRadius: '0.4rem',
        border: '1px solid rgba(166,166,161,0.3)',
        background: 'rgba(0,0,0,0.3)',
        color: 'var(--color-ash)',
        cursor: 'pointer',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,180,154,0.5)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-ash)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(166,166,161,0.3)'; }}
    >
      <LayoutGrid size={14} strokeWidth={1.5} />
    </button>
  );
}
