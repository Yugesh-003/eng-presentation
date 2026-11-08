import React from 'react';
import { ImageOff } from 'lucide-react';

interface AssetImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AssetImage({
  src,
  alt,
  placeholderLabel,
  className = '',
  style,
  ...rest
}: AssetImageProps) {
  const [error, setError] = React.useState(false);

  return error ? (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #191A1D 0%, #263B50 100%)',
        color: '#A6A6A1',
        gap: '0.5rem',
        ...style,
      }}
      aria-label={alt}
    >
      <ImageOff size={32} strokeWidth={1} />
      <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', padding: '0 1rem' }}>
        {placeholderLabel || alt}
      </span>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      {...rest}
    />
  );
}
