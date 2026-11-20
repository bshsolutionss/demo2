# EH Tax & Business Solutions

## 1. Project Overview

EH Tax & Business Solutions is a professional tax and business services brand.

This project aims to build a premium, modern, scalable, production-ready website that presents the company's verified services, establishes credibility, and generates consultation inquiries.

The website must combine:

- Professional software engineering practices
- Fully component-based development
- Clean, maintainable architecture
- Premium UI/UX design
- Cinematic video integration
- Smooth, purposeful animations
- Excellent responsiveness
- Accessibility and SEO
- High performance
- Long-term maintainability

**Important:** This is a real business website, not a demo, template showcase, or experimental project.

Every feature must be implemented with production-quality standards.

---

## 2. Business Information

**Business Name:** EH Tax & Business Solutions

**Industry:** Tax & Business Services

**Instagram:**  
https://www.instagram.com/ehtaxsolutions/

**Facebook:**  
https://www.facebook.com/people/EH-Tax-Business-Solutions/61594762776415/

**Business Location:** To be confirmed

**Phone / WhatsApp:** To be confirmed

**Business Email:** To be confirmed

**Original Logo:** [Supplied original logo](public/logos/eh-tax-logo.png)

**Original Videos:** Pending

### Business Content Rules

- Use verified business information only.
- Never invent credentials, achievements, testimonials, statistics, or addresses.
- Never invent tax-related claims or guarantees.
- Use clearly marked placeholders for missing information.
- Do not publish placeholder content as verified business information.
- All services must be confirmed before publication.

### Potential Services — Pending Verification

- Tax Preparation & Filing
- Tax Consultation
- Business Registration
- Accounting Services
- Bookkeeping
- Business Consulting
- Tax Compliance & Advisory

These are possible service categories, not confirmed offerings.

---

# 3. Technology Stack

Use the following technology stack unless the existing project configuration or AGENTS.md specifies otherwise.

| Category | Technology |
|---|---|
| Framework | Next.js 16 App Router |
| Frontend | React |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Forms | React Hook Form |
| Validation | Zod |
| Animations | CSS + IntersectionObserver |
| Package Manager | Existing project package manager |
| Deployment | Vercel |
| Version Control | Git / GitHub |

Do not install unnecessary dependencies.

Before adding a package, determine whether the requirement can be implemented using existing dependencies or native browser functionality.

---

# 4. Software Engineering Principles

The project must follow professional software development practices.

## 4.1 Component-Based Architecture

The entire website must be developed using reusable React components.

**Never build entire pages inside a single large page.tsx file.**

Every component must have one clear responsibility.

Examples:

- Header handles navigation.
- Hero handles hero presentation.
- HeroVideo handles video playback.
- Reveal handles scroll-triggered animations.
- ServiceCard handles individual service presentation.
- ConsultationForm handles consultation form interactions.
- Footer handles footer presentation.

Components must be reusable, readable, and independently maintainable.

## 4.2 Single Responsibility Principle

Each component, hook, utility, and module should have one primary responsibility.

Do not mix:

- UI rendering
- Business logic
- API requests
- Form validation
- Animation orchestration
- Data transformation

Separate these concerns into appropriate modules.

## 4.3 DRY — Don't Repeat Yourself

Avoid duplicated code.

If the same UI pattern appears in multiple places, extract a reusable component.

If the same logic appears repeatedly, extract a reusable hook or utility.

However, do not create unnecessary abstractions for elements used only once.

## 4.4 Separation of Concerns

Maintain clear boundaries between:

- Routing
- UI components
- Features
- Business content
- Hooks
- Utilities
- Validation
- Types
- Configuration
- Styling

## 4.5 TypeScript Standards

- Use strict TypeScript.
- Define meaningful interfaces and types.
- Avoid `any`.
- Type all component props.
- Type API responses and form data.
- Avoid unnecessary type assertions.
- Use shared types where appropriate.

## 4.6 React Best Practices

- Prefer functional components.
- Prefer Server Components by default.
- Use Client Components only where interactivity is required.
- Keep state as local as possible.
- Avoid unnecessary useEffect calls.
- Avoid unnecessary global state.
- Use custom hooks for reusable stateful logic.
- Avoid prop drilling when a simpler component composition solves the problem.

---

# 5. Recommended Project Architecture

Use a feature-oriented, component-based folder structure.

Adapt it to the existing project rather than blindly replacing existing directories.

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── not-found.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── ui/
│   │   └── (shadcn components)
│   │
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── desktop-nav.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── site-footer.tsx
│   │   └── container.tsx
│   │
│   ├── shared/
│   │   ├── section-heading.tsx
│   │   ├── section-container.tsx
│   │   ├── primary-cta.tsx
│   │   ├── reveal.tsx
│   │   └── video-player.tsx
│   │
│   └── forms/
│       ├── form-field.tsx
│       └── form-feedback.tsx
│
├── features/
│   ├── home/
│   │   ├── components/
│   │   │   ├── hero-section.tsx
│   │   │   ├── hero-video.tsx
│   │   │   ├── hero-content.tsx
│   │   │   ├── introduction-section.tsx
│   │   │   ├── services-preview.tsx
│   │   │   ├── why-choose-us.tsx
│   │   │   ├── insights-section.tsx
│   │   │   └── consultation-cta.tsx
│   │   │
│   │   └── index.ts
│   │
│   ├── services/
│   │   ├── components/
│   │   │   ├── service-card.tsx
│   │   │   └── service-details.tsx
│   │   │
│   │   ├── data/
│   │   │   └── services.ts
│   │   │
│   │   └── types.ts
│   │
│   └── consultation/
│       ├── components/
│       │   └── consultation-form.tsx
│       │
│       ├── schemas/
│       │   └── consultation.schema.ts
│       │
│       └── types.ts
│
├── hooks/
│   ├── use-in-view.ts
│   └── use-reduced-motion.ts
│
├── lib/
│   ├── utils.ts
│   └── validations/
│
├── config/
│   ├── site.ts
│   ├── navigation.ts
│   └── motion.ts
│
├── types/
│   └── index.ts
│
└── styles/
    └── tokens.css

public/
├── images/
├── videos/
├── logos/
└── icons/
```

### Architecture Rules

1. Keep `app/page.tsx` minimal.
2. Route files should compose feature components.
3. Place feature-specific components inside their feature folders.
4. Place genuinely reusable components inside `components/shared`.
5. Keep UI primitives inside `components/ui`.
6. Keep validation schemas separate from presentation.
7. Keep static business content centralized.
8. Do not create circular dependencies.
9. Use clear and consistent naming conventions.
10. Avoid deeply nested, unnecessarily complicated structures.

**Important:** This is a recommended architecture, not a requirement to create every folder immediately. Create files only when they serve an actual purpose.

---

# 6. Design Philosophy

The website must feel like a premium, professionally art-directed corporate experience.

## Design Reference

Pinterest:

https://www.pinterest.com/pin/479703797832817653/

Use the reference for:

- Staggered entrance animations
- Smooth scroll-triggered reveals
- Layered content transitions
- Visual pacing
- Sophisticated typography
- Section composition
- Motion sequencing

Do not copy its exact layout or branding.

## Visual Direction

- Modern editorial design
- Premium corporate identity
- Strong typography
- Clean layouts
- Asymmetric compositions
- Generous whitespace
- Subtle borders
- Purposeful imagery
- Restrained shadows
- Consistent spacing

### Avoid

- Generic AI-generated layouts
- Repetitive three-column card sections
- Excessive gradients
- Random decorative shapes
- Unnecessary glassmorphism
- Oversized rounded cards everywhere
- Unnecessary animations
- Generic stock photos
- Fake testimonials or statistics

## Branding

Use the actual company logo to establish:

- Primary color
- Secondary color
- Accent color
- Typography direction
- Button styling
- Overall visual identity

Until the logo is supplied, use a temporary neutral design system.

Do not assume the company's official brand colors.

---

# 7. Design System

Create a consistent design system using reusable tokens.

## Color Tokens

Define semantic colors such as:

```css
--background
--foreground
--primary
--primary-foreground
--secondary
--accent
--muted
--border
--surface
```

Use Tailwind CSS v4 theme configuration where appropriate.

## Typography

Establish a consistent type scale for:

- Display headings
- Section headings
- Subheadings
- Body text
- Captions
- Buttons
- Navigation

Typography must remain readable on all screen sizes.

## Spacing

Use consistent spacing tokens rather than random values.

## Components

Maintain consistent styles for:

- Buttons
- Navigation
- Cards
- Inputs
- Forms
- Links
- Section headings
- Media containers
- Feedback messages

Avoid introducing new styles when existing components can be reused.

---

# 8. Homepage Architecture

The homepage must be built using independent section components.

## 8.1 Header

Component: `SiteHeader`

Requirements:

- Original logo
- Desktop navigation
- Mobile navigation
- Consultation CTA
- Accessible keyboard navigation
- Responsive layout

## 8.2 Cinematic Hero

Component: `HeroSection`

Child components:

- `HeroVideo`
- `HeroContent`
- `HeroActions`

Requirements:

- Original business video
- Cinematic visual presentation
- Strong headline
- Supporting description
- Consultation CTA
- Responsive composition
- Poster fallback
- Smooth entrance animations

### Video Requirements

- Autoplay when supported
- Muted by default
- Loop
- playsInline
- Optimized loading
- Appropriate video compression
- Poster image fallback
- Visible pause/play control
- Reduced-motion support
- Graceful playback failure handling

Use authorized original video files.

Do not assume Instagram/Facebook embeds support unrestricted autoplay.

## 8.3 Business Introduction

Component: `IntroductionSection`

Present a concise introduction based on verified business information.

Use an editorial layout rather than a generic card grid.

## 8.4 Services Preview

Component: `ServicesPreview`

Requirements:

- Verified services only
- Reusable service components
- Strong typography
- Layered reveal animations
- Clear links to service details

Use numbered rows, editorial blocks, or another purposeful layout.

## 8.5 Why Choose EH

Component: `WhyChooseUs`

Explain confirmed business strengths.

Do not invent achievements or experience.

## 8.6 Insights

Component: `InsightsSection`

Present approved business educational content or social media updates.

Avoid fabricated articles.

## 8.7 Consultation CTA

Component: `ConsultationCTA`

Requirements:

- Clear heading
- Supporting description
- Consultation button
- Staggered reveal
- Functional destination once confirmed

## 8.8 Footer

Component: `SiteFooter`

Requirements:

- Business logo
- Navigation
- Social media links
- Verified contact details
- Copyright information
- Responsive layout

---

# 9. Animation Architecture

Animations must be reusable and centrally configured.

Do not implement different animation logic independently in every section.

## Motion Configuration

Use a shared configuration such as:

```text
config/motion.ts
```

Centralize:

- Animation durations
- Stagger delays
- Easing curves
- Reveal distances
- Reduced-motion behavior

## Hero Animation Sequence

1. Video or poster becomes visible.
2. Navigation fades into view.
3. Headline reveals line by line.
4. Supporting description appears.
5. Consultation button enters.
6. Supporting UI elements appear.

## Scroll Animation Sequence

For each section:

1. Section enters viewport.
2. Heading reveals.
3. Supporting content appears.
4. Cards reveal sequentially.
5. Internal card content reveals afterward.

## Animation Values

Suggested values:

| Property | Value |
|---|---|
| Reveal duration | 450–700ms |
| Vertical movement | 12–24px |
| Stagger delay | 60–100ms |
| Easing | Smooth ease-out |
| Hover duration | 150–250ms |

These are guidelines, not rigid requirements.

## Performance Rules

- Prefer opacity and transform animations.
- Avoid layout-triggering animation properties.
- Avoid unnecessary JavaScript animation libraries.
- Use IntersectionObserver when appropriate.
- Respect prefers-reduced-motion.
- Do not hide essential content if JavaScript fails.
- Avoid animations that interfere with scrolling.
- Keep interactions responsive.

---

# 10. Responsive Design

The website must work correctly across:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors
- Large displays

## Mobile Requirements

- Mobile-first layout
- Accessible navigation
- Readable typography
- Proper button sizes
- Responsive video
- No horizontal overflow
- Optimized media
- Appropriate spacing

Do not simply shrink desktop layouts.

Create intentional mobile compositions.

---

# 11. Forms and Consultation

Use reusable form components.

Recommended technologies:

- React Hook Form
- Zod

## Consultation Form

Potential fields:

- Full Name
- Email Address
- Phone Number
- Service of Interest
- Message

Confirm required fields and submission destination before implementing live submission.

## Form Requirements

- Client-side validation
- Server-side validation
- Accessible error messages
- Loading states
- Success and failure feedback
- Spam protection
- Safe handling of user information

Never display a successful submission message unless the submission actually succeeds.

Never expose secrets in client-side code.

---

# 12. SEO Requirements

Implement:

- Page-specific metadata
- Title and description
- Open Graph metadata
- Semantic headings
- Sitemap
- robots.txt
- Canonical URLs where appropriate
- Structured data using verified information
- Descriptive image alt text

Avoid keyword stuffing and fabricated business claims.

---

# 13. Performance Standards

Prioritize fast loading and responsive interactions.

## Optimization Requirements

- Use Next.js Image where appropriate.
- Optimize video formats and file sizes.
- Avoid unnecessary client-side JavaScript.
- Lazy-load below-the-fold media.
- Minimize third-party scripts.
- Prevent layout shifts.
- Optimize fonts.
- Avoid duplicate data fetching.
- Keep animation overhead low.

Aim for strong Core Web Vitals and Lighthouse results.

Do not claim performance targets have been achieved without measurement.

---

# 14. Accessibility Standards

Follow WCAG 2.2 AA principles where applicable.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus indicators
- Sufficient color contrast
- Accessible form labels
- Reduced-motion support
- Appropriate media controls
- Accessible error messages
- Logical heading hierarchy

Accessibility is a core requirement, not an optional enhancement.

---

# 15. Code Quality Standards

## Naming Conventions

Use consistent descriptive names.

Examples:

```text
hero-section.tsx
hero-video.tsx
service-card.tsx
consultation-form.tsx
use-in-view.ts
consultation.schema.ts
```

## Component Guidelines

- Keep components focused.
- Avoid excessively large components.
- Extract repeated logic.
- Use typed props.
- Prefer composition over complex conditional rendering.
- Avoid unnecessary abstractions.
- Keep business content separate from UI.
- Remove unused code and imports.

## State Management

Use local React state where appropriate.

Do not introduce Zustand, Redux, or another global state library unless a genuine requirement justifies it.

## Error Handling

Handle:

- Video loading failures
- Missing media
- Form submission failures
- Invalid input
- Missing content
- Unexpected runtime errors

Never silently swallow important errors.

---

# 16. Testing and Quality Assurance

Every completed feature must be verified.

## Functional Testing

- Navigation works.
- Buttons have valid destinations.
- Forms validate correctly.
- Media plays or falls back gracefully.
- Mobile navigation functions.
- No broken links.

## Responsive Testing

Test common mobile, tablet, and desktop viewport sizes.

## Accessibility Testing

Check:

- Keyboard navigation
- Focus states
- Form labels
- Reduced motion
- Color contrast
- Media controls

## Code Validation

Run available project scripts for:

- TypeScript checks
- ESLint
- Tests
- Production build

Do not claim checks passed unless they were actually executed successfully.

---

# 17. Git and Development Workflow

Follow a professional development workflow.

## Before Development

1. Read README.md.
2. Read AGENTS.md.
3. Inspect the existing project.
4. Understand the current dependencies.
5. Check Git status.
6. Identify reusable existing components.
7. Create a development plan.

Do not overwrite unrelated existing work.

## During Development

- Work in small, logical changes.
- Implement one feature or section at a time.
- Reuse existing components.
- Maintain TypeScript correctness.
- Avoid unnecessary dependencies.
- Validate changes regularly.
- Keep code readable and maintainable.

## Git Practices

Use meaningful commit messages.

Examples:

```text
feat: implement responsive site header
feat: add cinematic hero video
feat: create reusable reveal animation
feat: implement services preview
fix: improve mobile navigation
refactor: extract shared section components
```

Do not force-push or reset branches without explicit approval.

Do not commit secrets or environment files containing credentials.

---

# 18. Development Phases

## Phase 1 — Project Analysis

- Inspect existing codebase.
- Review dependencies.
- Read AGENTS.md.
- Confirm architecture.
- Identify available assets.
- Review verified business content.

## Phase 2 — Design System

- Establish color tokens.
- Configure typography.
- Define spacing.
- Create reusable buttons.
- Create layout components.
- Establish motion tokens.

## Phase 3 — Homepage Structure

- Header
- Hero
- Introduction
- Services
- Why Choose Us
- Insights
- Consultation
- Footer

Build the complete responsive structure before adding complex motion.

## Phase 4 — Video and Animations

- Integrate hero video.
- Implement poster fallback.
- Implement staggered hero reveals.
- Implement scroll-triggered reveals.
- Implement layered card animations.
- Verify reduced-motion behavior.

## Phase 5 — Homepage Review

- Review desktop design.
- Review mobile design.
- Review typography.
- Review spacing.
- Review animations.
- Review performance.
- Fix visual inconsistencies.

**Do not proceed to all inner pages until the homepage design is approved.**

## Phase 6 — Inner Pages

Develop:

- About Us
- Services
- Individual service details, if needed
- Contact
- FAQ, if approved

Reuse the established design system and shared components.

## Phase 7 — Functional Integration

- Consultation forms
- Contact integration
- WhatsApp integration
- Social media links
- Error and success handling

## Phase 8 — Production Readiness

- SEO
- Accessibility
- Performance
- Testing
- Production build
- Deployment preparation

---

# 19. AI Development Agent Instructions

These instructions apply to Claude Code, Codex, and other AI coding agents working on this repository.

## Mandatory Rules

1. Always read README.md and AGENTS.md before making changes.
2. Inspect existing code before implementing new functionality.
3. Follow the established component-based architecture.
4. Prefer reusable components over duplicated JSX.
5. Keep page.tsx files minimal.
6. Use strict TypeScript.
7. Use Server Components by default.
8. Introduce Client Components only when necessary.
9. Follow the existing package manager and project conventions.
10. Do not install unnecessary dependencies.
11. Do not rewrite unrelated functionality.
12. Do not invent business information.
13. Do not introduce fake testimonials or statistics.
14. Do not implement placeholder interactions that appear functional.
15. Prioritize accessibility and responsiveness.
16. Keep animations performant.
17. Test changes before reporting completion.
18. Clearly report files changed and validation results.
19. Never claim functionality is complete without verification.
20. Ask for approval before major architectural changes.

## Required Development Approach

For every significant feature:

**Step 1 — Analyze**

Inspect the relevant existing files and dependencies.

**Step 2 — Plan**

Identify required components, hooks, types, and utilities.

**Step 3 — Implement**

Write clean, reusable, maintainable code.

**Step 4 — Validate**

Run applicable TypeScript, lint, test, and build checks.

**Step 5 — Report**

Summarize:

- What was implemented
- Which files changed
- Which components were created or reused
- Which checks passed or failed
- Any remaining limitations

## Avoid Overengineering

Professional software development does not mean creating unnecessary complexity.

Do not introduce:

- Unnecessary global state
- Unnecessary custom hooks
- Excessive abstraction layers
- Unused utility functions
- Empty placeholder modules
- Complex architectures for simple features

Build only what the project needs while keeping future extension straightforward.

---

# 20. Definition of Done

A feature is considered complete only when:

- It meets its functional requirements.
- It follows the project architecture.
- Components are reusable where appropriate.
- TypeScript checks pass.
- Relevant tests pass.
- The UI works responsively.
- Accessibility requirements are considered.
- Error states are handled.
- No unrelated functionality is broken.
- The implementation has been reviewed.

---

# 21. Final Project Goal

Develop a premium, next-generation website for EH Tax & Business Solutions that combines outstanding visual design with professional software engineering.

The website must be:

- Component-based
- Scalable
- Maintainable
- Type-safe
- Responsive
- Accessible
- SEO-friendly
- Performance-optimized
- Visually distinctive
- Production-ready

**Core Philosophy:**

Build the website like a professional software engineering team would: plan the architecture, establish reusable components, implement features systematically, test thoroughly, and maintain clean code.

The final result must feel like a carefully designed, professionally developed business website — not a generic AI-generated landing page.



## Styling Rules — Mandatory

- Use **Tailwind CSS v4** for all component styling.
- Use Tailwind utility classes directly in JSX/TSX.
- Do not create separate `.css` files for individual components.
- Do not use CSS Modules, styled-components, or inline styles for normal styling.
- Use `globals.css` only for Tailwind imports, theme tokens, CSS variables, font definitions, and essential global styles.
- Use Tailwind responsive utilities for all responsive layouts.
- Use Tailwind utilities for hover, focus, transitions, and animations wherever possible.
- For complex animations that Tailwind cannot reasonably handle, minimal global CSS keyframes are allowed.
- Use `cn()` for conditional Tailwind classes.
- Follow a consistent, reusable Tailwind-based design system.
- Avoid arbitrary values when existing Tailwind utilities can achieve the same result.

**Important:** All UI components and pages must be styled primarily with Tailwind CSS v4. Do not introduce custom CSS files unless technically necessary.

## Current business information ? owner-supplied update

This section supersedes earlier service and location assumptions.

- Business: EH Tax & Business Solutions.
- Tagline: Your Goals. Our Priority.
- Service area: Central Florida, USA.
- Location reference: the welcome post is tagged in Sanford, Florida; no verified office address.
- Languages: English and Spanish.
- Clients: individuals, Hispanic families, small businesses, and entrepreneurs.
- Email: ehtaxsolutions@gmail.com.
- Instagram: https://www.instagram.com/ehtaxsolutions/.
- Facebook: https://www.facebook.com/people/EH-Tax-Business-Solutions/61594762776415/.
- Appointment requests: send a direct message on Instagram. Buttons open the supplied profile and instruct visitors to choose Message; no booking is simulated.
- Business formation inquiries: send EMPRESA by Instagram DM or email.

### Current services

- Individual and family U.S. tax preparation, including English/Spanish support and a focus on Hispanic households.
- Small business tax preparation.
- Business formation guidance for entrepreneurs; the business announcement specifically mentions LLC formation.

ITIN assistance and bookkeeping are not in the latest owner-supplied service list and must not be advertised. Do not claim a verified street address, postal code, credentials, or years of tax preparation experience.

### Accountant and education content

The public introduction describes the accountant as Venezuelan, focused on helping Hispanic families with U.S. taxes. Its statement about living in the United States for 10 years is historical personal background at the time of the post, not tax preparation experience. Her full name, credentials, and years of tax preparation experience remain unverified.

Source links supplied by the owner:
- Welcome / tax preparation: https://www.instagram.com/ehtaxsolutions/p/DdfX-dztHLU/
- Business formation: https://www.instagram.com/ehtaxsolutions/reel/DdzTa5PRHml/

The About page includes the nine supplied Instagram education links, grouped into family taxes, health coverage/retirement, deductions, and filing/payments. Their canonical list is in [tax-education.ts](features/insights/data/tax-education.ts). Link to original posts for date/context; do not reproduce unverified or time-sensitive tax rules, amounts, or eligibility claims.

## Approved design and routing update

The project owner requested the Pinterest reference https://www.pinterest.com/pin/874261346431088020/ and separate About and Contact pages. This supersedes the earlier homepage-only implementation scope. Adapt its light canvas, navy typography, orange calls to action, curved media composition, and staggered motion to EH's own identity; never copy its claims, statistics, or freight/AI content. The palette and typographic mark remain provisional until original branding is supplied.

- Home: focused introduction, confirmed services, a brief About link, and a Contact CTA.
- About (`/about`): business introduction, verified location and languages, and links to Contact.
- Contact (`/contact`): clickable verified email, social profiles, location, and language information. No fake booking or unconnected submission form.
- Use the verified information section above as the current source of truth; it supersedes earlier pending contact/service details.
- Maintain independent feature components, shared layout/navigation, minimal route files, Tailwind component styles, and reduced-motion support.

## Approved logo and Services page update

The project owner supplied the original EH Tax & Business Solutions logo. Use the original PNG at `public/logos/eh-tax-logo.png` in the shared header and footer, preserving its colors, proportions, and lettering. The later approved transparent cutout removes only the background. Remove temporary-wordmark notices. Use its charcoal and warm gold tones for the website; use dark text on gold buttons and a deeper gold for readable text on light surfaces. This branding supersedes the provisional navy/orange palette above. Original business video remains pending.

Services now has a dedicated route at `/services`, linked from desktop/mobile navigation and the footer. The homepage retains a concise linked overview; the Services page presents the current confirmed offerings and contact actions. Keep service data centralized in `features/services/data/services.ts`. Do not add guarantees, pricing, credentials, or unconfirmed services.

## Transparent logo asset

The owner requested background removal. The website now uses [the transparent PNG](public/logos/eh-tax-logo-transparent.png), generated with the built-in image editing tool, with original gold/silver lettering, arrow, and tagline retained. The original upload is kept unchanged. The cutout has been checked for alpha transparency and composited on the site's charcoal background for visual review. See [edit notes and prompt](public/logos/logo-edit-notes.md).


## Tax imagery update

The homepage hero now uses a generated tax-preparation photograph instead of the abstract orbit illustration. The Services page adds a separate editorial consultation image via ServicesImage. Both are clearly presented as illustrative imagery, without implying actual EH staff, clients, or premises. Original video remains pending. Use responsive next/image sizing and preserve reduced-motion and pause behavior. Assets and final generation prompts: [tax imagery notes](./public/images/tax-imagery-notes.md).


## Reference motion update

The owner-provided 16-second BSH screen recording shows a stationary hero with floating layered artwork and typewriter-style text; it does not demonstrate scroll transitions. Adapt this motion language to EH rather than duplicating the reference composition.

- Hero: 1200ms clipped image entrance; existing sequential headline/CTA entrances; two service overlays enter at 900ms and 1100ms, then float gently by 8px over 6-second alternate cycles.
- Audience copy: 18-second cycle, three six-second slots with stepped clipping, featuring individuals/families, small business owners and entrepreneurs. This decorative copy does not replace the static accessible heading or service links.
- A single visible media control pauses the photograph drift, floating layers and audience cycle. Motion begins only after client enhancement; without JavaScript a static first audience remains visible. Reduced motion removes loops and entrance movement.
- Shared Reveal supports rise and clipped-media variants, with 1000ms easing and 150ms stagger steps. Below-fold content reveals once; keyboard focus immediately reveals hidden content.
- Service rows use restrained background/padding transitions and icon rotation; service anchors clear the sticky header.
- Reuse config/motion.ts and shared Reveal. HeroMediaDetails is a small feature-specific presentation component passed into the existing VideoPlayer. No animation dependency, scroll hijacking, or new service claims.
