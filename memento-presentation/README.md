# Memento (2000) – Cinematic Web Presentation

A premium, interactive, cinematic web-based presentation for **Career Development Skills Practical** — built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and GSAP.

## Live Demo

> _Deploy to Vercel and add your URL here._

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 + TypeScript | UI framework |
| Vite 8 | Build tool & dev server |
| Tailwind CSS v4 | Utility classes & design tokens |
| Framer Motion | Slide transitions & entrance animations |
| GSAP 3 | Ken-Burns, polaroid drop, film strip, flicker |
| Lucide React | All icons |

---

## Local Development

```bash
# 1. Clone the repo
git clone <your-github-url>
cd memento-presentation

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## Adding Images

Drop your image files into `public/assets/` matching the paths below.  
When a file is missing, a styled gradient placeholder renders automatically.

| File path | Used on slide |
|-----------|--------------|
| `public/assets/poster/memento-poster.jpg` | 01, 02 |
| `public/assets/characters/leonard-bw.png` | 06 |
| `public/assets/characters/leonard-color.png` | 05, 07 |
| `public/assets/characters/natalie.png` | 05 |
| `public/assets/characters/teddy.png` | 05, 09 |
| `public/assets/characters/sammy.png` | 09 |
| `public/assets/characters/nolan.jpg` | 04 |
| `public/assets/screenshots/motel-room.jpg` | 07 |
| `public/assets/screenshots/investigation.jpg` | 08, 09 |
| `public/assets/screenshots/bw-sequence.jpg` | 10, 11, 12 |
| `public/assets/screenshots/twist-scene.jpg` | 14 |
| `public/assets/polaroids/polaroid-teddy.jpg` | 09 |
| `public/assets/polaroids/polaroid-natalie.jpg` | 09 |
| `public/assets/polaroids/polaroid-motel.jpg` | 09 |
| `public/assets/polaroids/polaroid-sammy.jpg` | 06 |
| `public/assets/backgrounds/void-bg.jpg` | 16 |

---

## Navigation

| Action | Key / Control |
|--------|--------------|
| Next slide | `→` Arrow or `Space` |
| Previous slide | `←` Arrow |
| Slide overview | Grid icon (top-right) |
| Jump to slide | Click thumbnail in overview |
| Close overview | `Escape` or `×` button |
| Fullscreen | `⤢` button (top-right) |

---

## Deployment to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "feat: Memento cinematic presentation"
git remote add origin <your-github-url>
git push -u origin main

# 2. Import repo in Vercel dashboard
# → vercel.com/new → Import Git Repository
# → Framework: Vite (auto-detected)
# → Deploy
```

The included `vercel.json` handles SPA routing automatically.

---

## Project Structure

```
src/
├── animations/        # GSAP helpers & Framer Motion variants
├── components/        # Reusable UI components
├── data/              # Slide registry (metadata + lazy imports)
├── hooks/             # Presentation state, fullscreen, reduced-motion
├── slides/            # 18 individual slide components
└── styles/            # Global CSS tokens & base styles

public/
└── assets/            # Image assets (see table above)
```

---

## Slides

| # | Title | Colour Mode |
|---|-------|------------|
| 01 | MEMENTO (2000) – Title | Dark Cold |
| 02 | Introduction | Dark Cold |
| 03 | Movie Details | Dark Cold |
| 04 | About the Director | Dark Warm |
| 05 | Main Characters | Dark Cold |
| 06 | Understanding Leonard Shelby | Dark Cold |
| 07 | Storyline – The Beginning | Dark Warm |
| 08 | Storyline – The Investigation | Dark Cold |
| 09 | Storyline – The Mystery | Dark Cold |
| 10 | Unique Storytelling Structure | Monochrome |
| 11 | Direction and Screenplay | Dark Warm |
| 12 | Cinematography | Monochrome |
| 13 | Film Editing and Sound | Dark Cold |
| 14 | Major Plot Twist | Reveal (Red) |
| 15 | Themes and Moral Values | Dark Cold |
| 16 | Key Learnings | Dark Warm |
| 17 | Personal Review | Dark Warm |
| 18 | Conclusion – Remember the Truth | Dark Cold |
