# Arfa Sadaf — Portfolio

Premium dark-themed developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · GSAP (ScrollTrigger) · Lenis smooth scroll · Three.js (hero particle field) · React Router

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Contact form

The contact form validates input client-side, then opens the visitor's default email client via a `mailto:` link addressed to `sadafarfa147@gmail.com`, pre-filled with the subject, name, email, and message.

## Assets

- `public/profile.jpg` — hero/about portrait
- `public/resume.pdf` — downloadable resume (linked from the navbar and hero)

## Structure

```
src/
  components/    # ui/, layout/, three/ — reusable building blocks
  sections/      # one file per landing-page section
  hooks/         # useLenis, useCounter, useActiveSection, ...
  lib/           # data.ts (all content), utils.ts
  pages/         # Home.tsx assembles all sections
```

All portfolio content (projects, skills, experience, stats) lives in `src/lib/data.ts` — edit that file to update copy without touching components.
