# NexusNV Site Refresh Design

## Goal

Refresh the NexusNV homepage from a generic placeholder into a credible, vibrant company and builder ecosystem page.

The site should position Nexus Envision Sdn Bhd / NexusNV as a Malaysia-based data, ERP, automation, and platform engineering partner while using Azahari Zaman's public GitHub work as evidence of shipping discipline and technical breadth.

## Source Material

- NexusNV GitHub organization:
  - Name: Nexus Envision Sdn Bhd
  - Description: Your Data Pipeline Partner
  - Location: Malaysia
  - Public org repositories include `cognify`, `nexusnv.net-web`, `containers`, `chirpstack`, `chirpstack-docker`, `k8s-nexus-iot`, `coder`, `laravel-new`, `laravel-rw`, and archived CMS / IoT / platform experiments.
- Azahari Zaman GitHub profile:
  - Bio: DevOps + WebDev + Data Technologist
  - Location: Kuching, Sarawak, Malaysia
  - Website: azahari.me
  - Public repositories include Nexus / Atomy ERP work, Laravel packages, Hugging Face PHP integration, OctoberCMS / WinterCMS tooling, TypeScript app experiments, and DevOps-related forks.

Private repository names and descriptions may inform the positioning, but the public page should not link to private repositories or imply public access to private work.

## Positioning

The first impression should be company-first:

> NexusNV builds practical data, ERP, and automation systems from Malaysia.

The rest of the page should make the builder ecosystem visible:

- Public Nexus / Atomy packages show domain decomposition across accounting, compliance, CRM, inventory, workflow, audit, tenancy, reporting, sales, procurement, HR, routing, and platform primitives.
- Public NexusNV org work shows data aggregation, IoT infrastructure, Kubernetes deployment, containers, CMS, and modern TypeScript projects.
- Azahari's profile connects the company to a long-running engineering practice across DevOps, web development, and data systems.

## Page Structure

1. Fixed navigation
   - Brand: NexusNV
   - Links: Work, Capabilities, Ecosystem, GitHub, Contact

2. Hero
   - Strong company-first headline.
   - Short supporting copy naming data pipelines, ERP systems, automation, IoT, and platform engineering.
   - Primary CTA to GitHub organization.
   - Secondary CTA to contact email or founder profile.
   - Visual treatment should feel like an operational system map, not a marketing illustration.

3. Proof strip
   - 189 public repositories on Azahari's profile.
   - 15 public NexusNV repositories.
   - Malaysia-based.
   - GitHub account active since 2009.

4. Capabilities
   - Data pipelines and integration
   - ERP and business systems
   - IoT and edge infrastructure
   - DevOps and platform operations
   - AI and API tooling

5. Featured public work
   - `cognify`: active TypeScript work under NexusNV.
   - `nexusnv.net-web`: the public website.
   - `containers`: shared container tooling.
   - `huggingface-php`: PHP API implementation for Hugging Face Hub.
   - `atomy`: Nexus Atomy ERP monorepo.
   - `nexus`: Laravel headless ERP backend.

6. Ecosystem section
   - Show clusters rather than listing every repository:
     - ERP domain packages
     - Platform primitives
     - Compliance and finance
     - Operations orchestration
     - Web and CMS tooling

7. Founder / company section
   - Present Azahari as DevOps + WebDev + Data Technologist.
   - Mention Kuching, Sarawak, Malaysia.
   - Link GitHub, website, and organization.

8. Footer
   - NexusNV / Nexus Envision Sdn Bhd
   - GitHub org, founder profile, azahari.me, email.

## Visual Direction

Keep a dark technical interface, but make it more dimensional and specific:

- Neutral dark base with warm amber accents from the current site.
- Add restrained cyan / green signal colors for data-flow and system-health moments.
- Use compact, sharp cards with 8px radius or less.
- Avoid generic inspirational quotes.
- Avoid one-note amber-on-black repetition.
- Use small data labels, repository tags, activity hints, and system-map motifs to create texture.
- Keep text readable on mobile and avoid overly large type inside dense content.

## Content Boundaries

- Public repository links only.
- No private repository URLs.
- Do not claim client outcomes, revenue impact, certifications, or production status unless directly visible from public data.
- Use repo descriptions as evidence, but rewrite into website copy rather than dumping raw GitHub text.

## Implementation Notes

- Keep the app as a static server component page in `src/app/page.tsx`.
- Update `src/app/layout.tsx` metadata to replace placeholder language.
- Update `src/app/globals.css` for the richer theme, responsive polish, and small visual motifs.
- Do not introduce new runtime dependencies unless necessary.
- Verify with lint and production build.
