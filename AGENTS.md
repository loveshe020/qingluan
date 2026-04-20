# AGENTS.md

## Project overview

Build a polished marketing website for **青鸾书院** (**Qingluan Academy**), a traditional Chinese metaphysics consultancy serving international clients online.

The website should position the brand as:
- thoughtful
- elegant
- culturally rooted
- modern and globally accessible
- professional rather than sensational

Core disciplines:
- **Bazi**
- **Qimen Dunjia**
- **Feng Shui**

The site is meant to attract English-speaking international clients first, while preserving the Chinese brand identity.

---

## Primary goal

Create a conversion-focused website that helps visitors quickly understand:
1. what Qingluan Academy is
2. what services are offered
3. who the services are for
4. how to book a consultation

The site should feel trustworthy, calm, and premium.

---

## Product positioning

Do **not** frame the brand as generic fortune-telling.

Frame it as:
- **Chinese Metaphysics for modern life, decision-making, and space alignment**
- ancient wisdom translated into practical guidance
- structured, reflective, and personalized consultation

Use language such as:
- clarity
- timing
- direction
- patterns
- reflection
- alignment
- environment
- decision-making

Avoid language such as:
- guaranteed results
- 100% accurate
- get rich
- fix your relationship instantly
- supernatural claims
- fear-based manipulation

---

## Target audience

Primary audience:
- English-speaking users worldwide
- spiritually open but quality-sensitive clients
- professionals, creatives, entrepreneurs, and thoughtful seekers
- people interested in life direction, timing, relationships, home energy, and self-understanding

Secondary audience:
- overseas Chinese
- design-conscious homeowners
- users curious about Chinese philosophy and metaphysical systems

---

## Brand identity

### Brand name
- Primary display: **青鸾书院**
- Secondary English name: **Qingluan Academy**

### Tone
- calm
- refined
- intelligent
- grounded
- welcoming
- not overly mystical
- not cold or corporate

### Visual direction
Use a premium East-meets-modern aesthetic.

Suggested design cues:
- generous whitespace
- elegant typography
- restrained ornament
- subtle Chinese-inspired visual motifs
- soft gradients or paper-like textures
- refined dividers, lines, and cards
- polished responsiveness

### Color direction
Use a palette inspired by:
- ink black
- warm ivory
- muted jade / celadon
- deep teal
- subtle gold accents

Do not use flashy neon colors or cliché occult visuals.

---

## Recommended stack

Default to:
- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- shadcn/ui where useful
- clean component structure
- mobile-first responsive layout

The site should be easy to extend later with:
- booking integration
- blog/newsletter
- bilingual support
- testimonials CMS
- service detail pages

If no backend is required yet, implement as a frontend marketing site with clean mock data and clear placeholders.

---

## Site map

Create these routes/pages:

1. `/` — Home
2. `/about` — About Qingluan Academy
3. `/services` — Services overview
4. `/services/bazi` — Bazi Clarity Reading
5. `/services/qimen-dunjia` — Qimen Decision Session
6. `/services/feng-shui` — Remote Feng Shui Audit
7. `/faq` — Frequently Asked Questions
8. `/contact` — Contact / inquiry page
9. `/book` — Booking CTA page

Optional:
- `/journal` or `/insights` for future articles
- `/legal` for disclaimer / terms / privacy if needed

---

## Core pages and content requirements

### 1. Home page

Must include:
- hero section
- concise value proposition
- services overview
- how it works
- reasons to trust the brand
- audience fit section
- CTA to book
- disclaimer footer section

Suggested hero copy direction:
- **Chinese Metaphysics for Life, Career, and Space**
- **Ancient Chinese Wisdom for Modern Decision-Making**

Suggested supporting copy:
- Bazi for self-understanding and life direction
- Qimen Dunjia for timing and strategic reflection
- Feng Shui for home and workspace harmony

### 2. About page

Include:
- what Qingluan Academy stands for
- the philosophy behind the work
- how traditional systems are translated into modern, practical language
- a section for founder/team bio placeholder
- values: depth, clarity, respect, confidentiality, cultural integrity

### 3. Services overview

Show 3 primary offerings as premium cards:
- Bazi Clarity Reading
- Qimen Decision Session
- Remote Feng Shui Audit

Each card should include:
- short explanation
- ideal client/use case
- CTA to detail page

### 4. Service detail pages

Each service page should include:
- clear title
- short service summary
- who it is for
- what is covered
- process
- deliverables
- pricing placeholder
- CTA button

#### Bazi page
Position as:
- birth chart reading for self-understanding, career direction, relationships, and life patterns

#### Qimen page
Position as:
- timing and strategy session for important choices, transitions, and decision support

#### Feng Shui page
Position as:
- remote review of home/workspace using layout, flow, and environmental guidance

### 5. FAQ page

Include questions such as:
- Do I need prior knowledge?
- What do I need to prepare?
- Are sessions online?
- Are sessions recorded?
- Can I ask about career / relationships / relocation?
- What is your cancellation policy?
- Is this medical, legal, or financial advice?

### 6. Contact page

Include:
- inquiry form UI
- email placeholder
- optional social links placeholder
- short trust-building note

### 7. Book page

This page should be designed for future booking integration.
For now:
- include service options
- CTA buttons
- placeholder text for Calendly / external booking integration

---

## Copywriting rules

Write all public-facing copy in natural, polished English.

The tone should be:
- elegant
- warm
- clear
- intelligent

Avoid:
- awkward literal translations from Chinese
- overexplaining technical jargon
- fear-based sales language
- exaggerated mystical claims

When using Chinese metaphysics terms:
- keep the original term visible where useful
- immediately explain it in plain English

Example:
- **Bazi** — a Chinese birth chart system used to understand personal patterns and life direction
- **Qimen Dunjia** — a classical system often used for timing, strategy, and situational insight
- **Feng Shui** — environmental guidance focused on flow, balance, and spatial harmony

---

## Homepage section order

Recommended order for `/`:

1. Header / navigation
2. Hero
3. Intro statement about Qingluan Academy
4. Three service cards
5. How it works
6. Why work with us
7. Who this is for
8. Testimonials placeholder
9. Final CTA
10. Footer with disclaimer

---

## Navigation

Top nav should include:
- Home
- About
- Services
- FAQ
- Contact
- Book

Header should remain clean and compact.
Book button should be visually emphasized.

---

## Components to build

Build reusable components where appropriate:

- `SiteHeader`
- `SiteFooter`
- `HeroSection`
- `SectionHeading`
- `ServiceCard`
- `ProcessSteps`
- `TrustSection`
- `FAQAccordion`
- `TestimonialCard`
- `CTASection`
- `InquiryForm`

Use accessible semantic HTML and good spacing.

---

## UI/UX expectations

- Mobile-first responsive
- High readability
- Strong hierarchy
- Clear CTAs
- Calm premium feel
- Accessibility-aware structure
- Fast static rendering

Avoid clutter.
Avoid overly long paragraphs.
Use tasteful section rhythm.

---

## Images and art direction

Use placeholders or generated abstract visuals if needed.

Preferred imagery direction:
- refined architectural or interior textures
- subtle East Asian cultural references
- ink, paper, light, geometry, windows, screens, lattice, stone, mist
- calm spatial photography
- no stereotypical “fortune teller” imagery
- no crystal-ball clichés
- no tacky zodiac graphics

If illustration is used, keep it minimal and elegant.

---

## SEO direction

Basic SEO should be included.

Use metadata for:
- 青鸾书院 | Qingluan Academy
- Bazi consultation
- Qimen Dunjia consultation
- Feng Shui consultation
- Chinese metaphysics online
- online spiritual consultation
- life direction and timing consultation

Include sensible page titles and meta descriptions.

---

## Trust and compliance

Add a clear disclaimer in footer and/or service pages:

> Services are intended for personal insight, reflection, and guidance. They are not a substitute for medical, legal, psychological, or financial advice. Results and interpretations are not guaranteed.

Also avoid any language that implies certainty or professional licensure outside the actual scope.

---

## Placeholder content blocks

Use these service summaries as defaults.

### Bazi Clarity Reading
A personalized reading based on your birth information to explore character tendencies, strengths, relationship patterns, and life direction.

### Qimen Decision Session
A focused consultation for timing, choices, and strategic reflection around important life or work decisions.

### Remote Feng Shui Audit
A remote assessment of your home or workspace with practical guidance to improve flow, comfort, focus, and harmony.

---

## Suggested homepage copy snippets

### Hero headline options
- Chinese Metaphysics for Life, Career, and Space
- Ancient Chinese Wisdom for Modern Decision-Making

### Hero body
Private online consultations in Bazi, Qimen Dunjia, and Feng Shui for those seeking clarity, alignment, and a more thoughtful way to navigate life.

### How it works
1. Choose a service
2. Complete the intake form
3. Meet online for your session
4. Receive structured guidance and next steps

### Why work with Qingluan Academy
- rooted in traditional systems
- translated for modern life
- private and personalized
- thoughtful, calm, and practical

---

## Technical expectations for Codex

When implementing:
- keep code modular and readable
- use TypeScript types
- avoid unnecessary complexity
- prefer server components where appropriate
- keep styling consistent
- ensure pages look complete with placeholder content
- do not leave broken links or empty states
- include a clean README if useful

If a booking provider is not yet configured, create a polished placeholder flow rather than failing.

---

## Acceptance criteria

The project is successful if:
1. the site looks premium and trustworthy
2. a first-time visitor can understand the three services quickly
3. the navigation is clear
4. the site works well on mobile and desktop
5. the pages are implementation-ready for real booking and content later
6. the brand feels culturally distinctive without becoming cliché

---

## Nice-to-have enhancements

If time allows:
- soft scroll reveal animations
- elegant hover states
- testimonials placeholder carousel
- newsletter signup section
- future bilingual architecture
- journal page scaffold
- subtle decorative motif based on Qingluan / classical academy aesthetics

---

## Final instruction

Make strong design decisions.
Do not produce a generic startup template.
The output should feel like a refined cultural brand with modern product thinking.
