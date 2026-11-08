import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function FilmGrain() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 50,
        pointerEvents: 'none',
        overflow: 'hidden',
        ...(reduced ? {} : {}),
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
          opacity: 0.045,
          mixBlendMode: 'overlay',
          animation: reduced ? 'none' : 'noise 0.3s steps(1) infinite',
        }}
      />
    </div>
  );
}
