interface SlideCounterProps {
  current: number;  // 0-indexed
  total: number;
}

export default function SlideCounter({ current, total }: SlideCounterProps) {
  const display = String(current + 1).padStart(2, '0');
  const totalDisplay = String(total).padStart(2, '0');

  return (
    <div
      aria-label={`Slide ${current + 1} of ${total}`}
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.3rem',
        userSelect: 'none',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 1.4vw, 1.3rem)',
          fontWeight: 300,
          color: 'var(--color-white)',
          letterSpacing: '0.05em',
        }}
      >
        {display}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.65rem, 0.8vw, 0.8rem)',
          color: 'var(--color-ash)',
          letterSpacing: '0.1em',
        }}
      >
        / {totalDisplay}
      </span>
    </div>
  );
}
