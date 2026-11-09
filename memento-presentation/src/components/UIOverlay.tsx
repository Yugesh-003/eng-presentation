import ProgressBar from './ProgressBar';
import SlideCounter from './SlideCounter';
import NavControls from './NavControls';
import FullscreenButton from './FullscreenButton';
import OverviewButton from './OverviewButton';

interface UIOverlayProps {
  currentSlide: number;
  totalSlides: number;
  progress: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleOverview: () => void;
}

export default function UIOverlay({
  currentSlide,
  totalSlides,
  progress,
  onPrev,
  onNext,
  onToggleOverview,
}: UIOverlayProps) {
  return (
    <>
      {/* Progress bar – top */}
      <ProgressBar progress={progress} />

      {/* Top-right controls */}
      <div
        style={{
          position: 'absolute',
          top: '1.2rem',
          right: '1.2rem',
          zIndex: 60,
          display: 'flex',
          gap: '0.4rem',
          alignItems: 'center',
          pointerEvents: 'auto',
        }}
      >
        <OverviewButton onClick={onToggleOverview} />
        <FullscreenButton />
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.2rem',
          left: '1.5rem',
          right: '1.5rem',
          zIndex: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pointerEvents: 'none',
        }}
      >
        <SlideCounter current={currentSlide} total={totalSlides} />
        <NavControls
          onPrev={onPrev}
          onNext={onNext}
          canPrev={currentSlide > 0}
          canNext={currentSlide < totalSlides - 1}
        />
      </div>
    </>
  );
}
