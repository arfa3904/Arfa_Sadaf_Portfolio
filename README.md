# Arfa Sadaf — Portfolio

Premium dark-themed developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · GSAP (ScrollTrigger) · Lenis smooth scroll · Three.js (hero particle field) · Recharts · React Router · EmailJS

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## Contact form (EmailJS)

The contact form sends via [EmailJS](https://www.emailjs.com/). Without credentials it falls back to opening the visitor's email client instead.

1. Create an EmailJS account, an Email Service, and an Email Template with variables `from_name`, `from_email`, `subject`, `message`.
2. Copy `.env.example` to `.env` and fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```
3. Restart the dev server.

## Assets

- `public/profile.jpg` — hero/about portrait
- `public/resume.pdf` — downloadable resume (linked from the navbar and hero)

## Structure

```
src/
  components/    # ui/, layout/, three/ — reusable building blocks
  sections/      # one file per landing-page section
  hooks/         # useLenis, useCounter, useActiveSection, ...
  lib/           # data.ts (all content), utils.ts, emailConfig.ts
  pages/         # Home.tsx assembles all sections
```

All portfolio content (projects, skills, experience, stats) lives in `src/lib/data.ts` — edit that file to update copy without touching components.
