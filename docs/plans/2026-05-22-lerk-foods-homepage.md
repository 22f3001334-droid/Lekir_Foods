# Lerk Foods Homepage Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a premium, royal dark Lerk Foods catering homepage that follows `insrurction.md` and separates the four previously clubbed middle sections into distinct premium sections.

**Architecture:** Scaffold a focused Next.js App Router app with a server `page.tsx` rendering one client homepage component for Framer Motion interactions. Keep copy, image URLs, navigation, FAQs, stats, and card data centralized in `lib/site-data.ts`, with reusable section/card primitives in `components/HomePage.tsx`. Use Tailwind CSS plus a small utility layer for gold gradients, royal cards, overlays, and shared section spacing.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, lucide-react, `next/font`, `next/image`.

---

## Phase 1: Project Shell and Design System

### Task 1: Scaffold Next.js Configuration

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `.gitignore`

**Steps:**
1. Add npm scripts for `dev`, `build`, `start`, `lint`, and `typecheck`.
2. Add dependencies for Next.js, React, Tailwind, Framer Motion, and lucide-react.
3. Configure remote image hosts for `images.unsplash.com`.
4. Configure Tailwind content paths and brand color tokens.

**Verify:**
- Run: `npm install`
- Run: `npm run typecheck`

### Task 2: Add Global Layout and CSS Utilities

**Files:**
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `app/page.tsx`

**Steps:**
1. Load Poppins and Cormorant Garamond via `next/font/google`.
2. Add metadata for Lerk Foods catering in Chennai.
3. Add reusable CSS utilities: `.gold-gradient-text`, `.gold-gradient-bg`, `.gold-border`, `.royal-card`, `.cinematic-overlay`, `.section-padding`.
4. Set the global dark base, smooth scrolling, typography defaults, and responsive container behavior.

**Verify:**
- Run: `npm run lint`

## Phase 2: Content and Section Components

### Task 3: Centralize Homepage Content

**Files:**
- Create: `lib/site-data.ts`

**Steps:**
1. Add nav links, trust cards, services, separated feature sections, stats, testimonials, FAQs, and footer details.
2. Add image URLs and alt text for each visual section.
3. Keep CTA text aligned with `insrurction.md`.

**Verify:**
- Run: `npm run typecheck`

### Task 4: Build Homepage Sections

**Files:**
- Create: `components/HomePage.tsx`

**Steps:**
1. Build header and responsive mobile navigation.
2. Build hero section with dark overlay, gold ornaments, two CTAs, and right-side dining image.
3. Build sections 1-3: services intro, burgundy trust strip, and occasion cards.
4. Build sections 4-7 as independent wrappers with unique background, spacing, image treatment, CTA or visual anchor.
5. Build stats strip, testimonials, FAQ accordion, footer CTA, and footer.

**Verify:**
- Run: `npm run typecheck`

## Phase 3: Motion, Responsiveness, and Verification

### Task 5: Add Interactions and Responsive Polish

**Files:**
- Modify: `components/HomePage.tsx`
- Modify: `app/globals.css`

**Steps:**
1. Add subtle fade-up and stagger animations with Framer Motion.
2. Add hover zoom to images and hover lift to service cards.
3. Add count-up stats on scroll.
4. Add smooth FAQ expand/collapse.
5. Ensure mobile stacks two-column sections, uses a hamburger nav, and keeps CTAs full width where needed.

**Verify:**
- Run: `npm run lint`
- Run: `npm run typecheck`
- Run: `npm run build`
- Run: `npm run dev` and inspect the homepage at the local URL.

---

## Acceptance Checks

- Royal dark, burgundy, and gold palette is consistent with the prompt.
- The four middle sections are separate full-width sections with independent spacing and visual treatments.
- Typography uses Constantia fallback for headings, Poppins for body, and Cormorant Garamond for the logo.
- FAQ content is present in the page markup and accessible through an accordion.
- The page is responsive and does not introduce bright white backgrounds.
