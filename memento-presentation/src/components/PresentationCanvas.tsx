import { ReactNode } from 'react';

interface PresentationCanvasProps {
  children: ReactNode;
}

/**
 * Maintains a 16:9 aspect ratio fitting the full viewport.
 * Uses CSS min() — no JS resize logic needed, no transform distortion.
 */
export default function PresentationCanvas({ children }: PresentationCanvasProps) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          /* 16:9 letterbox: width is viewport width OR constrained by height */
          width: 'min(100vw, 177.778vh)',
          height: 'min(100vh, 56.25vw)',
          overflow: 'hidden',
          background: 'var(--color-void)',
          flexShrink: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
}
