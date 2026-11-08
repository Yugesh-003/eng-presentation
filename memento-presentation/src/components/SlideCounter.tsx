interface SlideCounterProps {
  current: number;
  total: number;
}

export default function SlideCounter({ current, total }: SlideCounterProps) {
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div style={{
      position: 'absolute',
      bottom: '2.5%',
      left: '3%',
      display: 'flex',
      alignItems: 'baseline',
      gap: '0.4rem',
      zIndex: 60,
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(16px, 1.6vw, 24px)',
        fontWeight: 600,
        color: 'var(--color-white)',
        letterSpacing: '0.05em',
      }}>
        {pad(current)}
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(13px, 1.2vw, 18px)',
        color: 'var(--color-ash)',
      }}>
        / {pad(total)}
      </span>
    </div>
  );
}
