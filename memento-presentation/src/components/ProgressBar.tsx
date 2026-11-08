interface ProgressBarProps {
  progress: number; // 0–100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Presentation progress"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(255,255,255,0.08)',
        zIndex: 60,
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'var(--color-parchment)',
          transition: 'width 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      />
    </div>
  );
}
