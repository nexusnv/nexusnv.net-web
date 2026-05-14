# NexusNV Site Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic NexusNV placeholder homepage with a vibrant, credible company and builder ecosystem page grounded in public GitHub context.

**Architecture:** Keep the site as a static App Router page using server-rendered React data arrays in `src/app/page.tsx`. Use `src/app/globals.css` for theme tokens, layout motifs, animation, and responsive styling, and update `src/app/layout.tsx` metadata for public-facing SEO copy.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4 theme tokens, static external links.

---

## File Structure

- Modify `src/app/page.tsx`: Replace placeholder data and sections with structured static content for navigation, hero, proof stats, capabilities, featured public work, ecosystem clusters, founder/company, and footer.
- Modify `src/app/globals.css`: Update theme tokens and add background, grid, glass/panel, animation, and focus styles used by the refreshed page.
- Modify `src/app/layout.tsx`: Replace placeholder metadata with company/builder ecosystem copy.

## Task 1: Homepage Content And Structure

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace static content arrays**

Replace the current `stats`, `features`, and quote-oriented content with arrays for stats, capabilities, featured repositories, ecosystem clusters, and contact links. Use only public repository URLs.

- [ ] **Step 2: Rewrite the page markup**

Build sections in this order: navigation, hero, proof strip, capabilities, featured work, ecosystem clusters, founder/company, footer.

- [ ] **Step 3: Check TypeScript locally**

Run: `npx tsc --noEmit`

Expected: no TypeScript errors.

## Task 2: Visual Theme And Responsive Polish

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update theme tokens**

Set a neutral dark base, warm amber primary accent, cyan and green supporting accents, and readable text/border tokens.

- [ ] **Step 2: Add reusable visual classes**

Add classes for system-map background treatment, panels, focus-visible states, subtle data-flow animation, and responsive text safety.

- [ ] **Step 3: Check CSS through lint**

Run: `npm run lint`

Expected: lint completes without errors.

## Task 3: Metadata And Production Verification

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update metadata**

Set the title and description to describe NexusNV as a Malaysia-based data, ERP, automation, and platform engineering company with a public builder ecosystem.

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: build completes successfully.

- [ ] **Step 3: Review final diff**

Run: `git diff -- src/app/page.tsx src/app/globals.css src/app/layout.tsx`

Expected: changes are scoped to the approved design.
