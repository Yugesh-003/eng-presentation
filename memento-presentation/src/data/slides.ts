import { lazy } from 'react';

export interface SlideData {
  id: number;      // 1-indexed for display
  title: string;
  subtitle?: string;
  colorMode: 'dark-cold' | 'dark-warm' | 'monochrome' | 'reveal';
  component: React.LazyExoticComponent<() => JSX.Element>;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: 'MEMENTO',
    subtitle: '2000',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide01Title')),
  },
  {
    id: 2,
    title: 'Introduction',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide02Introduction')),
  },
  {
    id: 3,
    title: 'Movie Details',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide03Details')),
  },
  {
    id: 4,
    title: 'The Director',
    colorMode: 'dark-warm',
    component: lazy(() => import('../slides/Slide04Director')),
  },
  {
    id: 5,
    title: 'Main Characters',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide05Characters')),
  },
  {
    id: 6,
    title: 'Leonard Shelby',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide06Leonard')),
  },
  {
    id: 7,
    title: 'The Beginning',
    colorMode: 'dark-warm',
    component: lazy(() => import('../slides/Slide07Beginning')),
  },
  {
    id: 8,
    title: 'The Investigation',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide08Investigation')),
  },
  {
    id: 9,
    title: 'The Mystery',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide09Mystery')),
  },
  {
    id: 10,
    title: 'Storytelling Structure',
    colorMode: 'monochrome',
    component: lazy(() => import('../slides/Slide10Structure')),
  },
  {
    id: 11,
    title: 'Direction & Screenplay',
    colorMode: 'dark-warm',
    component: lazy(() => import('../slides/Slide11Direction')),
  },
  {
    id: 12,
    title: 'Cinematography',
    colorMode: 'monochrome',
    component: lazy(() => import('../slides/Slide12Cinematography')),
  },
  {
    id: 13,
    title: 'Editing & Sound',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide13Editing')),
  },
  {
    id: 14,
    title: 'The Plot Twist',
    colorMode: 'reveal',
    component: lazy(() => import('../slides/Slide14PlotTwist')),
  },
  {
    id: 15,
    title: 'Themes & Values',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide15Themes')),
  },
  {
    id: 16,
    title: 'Key Learnings',
    colorMode: 'dark-warm',
    component: lazy(() => import('../slides/Slide16Learnings')),
  },
  {
    id: 17,
    title: 'Personal Review',
    colorMode: 'dark-warm',
    component: lazy(() => import('../slides/Slide17Review')),
  },
  {
    id: 18,
    title: 'Conclusion',
    colorMode: 'dark-cold',
    component: lazy(() => import('../slides/Slide18Conclusion')),
  },
];

export default slides;
