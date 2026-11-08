import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavControlsProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

const btnStyle = (enabled: boolean): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.4rem',
  height: '2.4rem',
  borderRadius: '50%',
  border: `1px solid ${enabled ? 'rgba(166,166,161,0.4)' : 'rgba(166,166,161,0.1)'}`,
  background: 'rgba(0,0,0,0.3)',
  color: enabled ? 'var(--color-ash)' : 'rgba(166,166,161,0.2)',
  cursor: enabled ? 'pointer' : 'default',
  transition: 'all 0.2s ease',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
});

export default function NavControls({ onPrev, onNext, canPrev, canNext }: NavControlsProps) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <button
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Previous slide"
        style={btnStyle(canPrev)}
        onMouseEnter={e => { if (canPrev) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,180,154,0.6)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-white)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = canPrev ? 'rgba(166,166,161,0.4)' : 'rgba(166,166,161,0.1)'; (e.currentTarget as HTMLElement).style.color = canPrev ? 'var(--color-ash)' : 'rgba(166,166,161,0.2)'; }}
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        aria-label="Next slide"
        style={btnStyle(canNext)}
        onMouseEnter={e => { if (canNext) (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,180,154,0.6)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-white)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = canNext ? 'rgba(166,166,161,0.4)' : 'rgba(166,166,161,0.1)'; (e.currentTarget as HTMLElement).style.color = canNext ? 'var(--color-ash)' : 'rgba(166,166,161,0.2)'; }}
      >
        <ChevronRight size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}
