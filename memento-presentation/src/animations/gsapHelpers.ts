import gsap from 'gsap';

/** Ken-Burns slow zoom on a background element */
export function kenBurns(el: Element, direction: 'in' | 'out' = 'in') {
  const scale = direction === 'in' ? 1.08 : 0.95;
  return gsap.to(el, {
    scale,
    duration: 20,
    ease: 'none',
    repeat: -1,
    yoyo: true,
  });
}

/** Slow horizontal pan */
export function slowPan(el: Element, direction: 'left' | 'right' = 'right') {
  const x = direction === 'right' ? '3%' : '-3%';
  return gsap.to(el, {
    x,
    duration: 18,
    ease: 'none',
    repeat: -1,
    yoyo: true,
  });
}

/** Polaroid drop-in with rotation */
export function polaroidDrop(
  el: Element,
  delay: number = 0,
  rotation: number = -4
) {
  gsap.set(el, { opacity: 0, y: -80, rotate: 0 });
  return gsap.to(el, {
    opacity: 1,
    y: 0,
    rotate: rotation,
    duration: 0.9,
    delay,
    ease: 'back.out(1.4)',
  });
}

/** Stagger text words in one-by-one */
export function staggerWords(els: Element[], delayStart: number = 0.3) {
  gsap.set(els, { opacity: 0, y: 15 });
  return gsap.to(els, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.08,
    delay: delayStart,
    ease: 'power2.out',
  });
}

/** CSS clip-path timeline line draw (left → right) */
export function drawLine(el: Element, delay: number = 0) {
  gsap.set(el, { clipPath: 'inset(0 100% 0 0)' });
  return gsap.to(el, {
    clipPath: 'inset(0 0% 0 0)',
    duration: 1.2,
    delay,
    ease: 'power2.inOut',
  });
}

/** Projector flicker effect */
export function projectorFlicker(el: Element) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
  tl.to(el, { opacity: 0.5, duration: 0.05, ease: 'none' })
    .to(el, { opacity: 1,   duration: 0.05, ease: 'none' })
    .to(el, { opacity: 0.7, duration: 0.03, ease: 'none' })
    .to(el, { opacity: 1,   duration: 0.08, ease: 'none' });
  return tl;
}

/** Vignette pulse */
export function vignettePulse(el: Element) {
  return gsap.to(el, {
    opacity: 0.4,
    duration: 3,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
}

/** Grade bar fill from left */
export function fillBar(el: Element, width: string, delay: number = 0) {
  gsap.set(el, { width: '0%' });
  return gsap.to(el, {
    width,
    duration: 1.2,
    delay,
    ease: 'power2.out',
  });
}

/** Star rating reveal */
export function revealStars(els: Element[], delay: number = 0.4) {
  gsap.set(els, { opacity: 0, scale: 0.5 });
  return gsap.to(els, {
    opacity: 1,
    scale: 1,
    duration: 0.4,
    stagger: 0.1,
    delay,
    ease: 'back.out(1.7)',
  });
}

/** Infinite film strip scroll */
export function filmStripScroll(el: Element) {
  return gsap.to(el, {
    x: '-50%',
    duration: 18,
    ease: 'none',
    repeat: -1,
  });
}

/** Kill all tweens on an element (call on unmount) */
export function killTweens(el: Element | null) {
  if (el) gsap.killTweensOf(el);
}
