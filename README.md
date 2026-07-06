# Inforens — Team Page

A Next.js (App Router) + Tailwind CSS + shadcn/ui implementation of the Inforens
team page, built with the `inforens-branding` design system.

## Route
`/team` (the root `/` redirects here for easy local preview)

## ⚠️ Before publishing
`data/team.ts` contains **placeholder names, roles, bios, and photos** for
everyone except the founder, Yash Gulati. Replace every `Placeholder Mentor` /
`Placeholder Name` entry with real teammates, mentors, and support staff, and
swap the `i.pravatar.cc` avatar URLs for real photos (e.g. in `/public`).

## Structure
- `app/team/page.tsx` — the page: hero, stats strip, tabbed team groups
  (Core Team / Mentors / Support Team), and a mentor/careers CTA.
- `components/team-member-card.tsx` — reusable profile card with a
  hover-reveal LinkedIn icon.
- `components/ui/*` — shadcn/ui primitives (Button, Badge, Tabs, Separator).
- `data/team.ts` — all team member data + summary stats, in one place.

## Getting started
```bash
npm install
npm run dev
```
Then visit http://localhost:3000/team.

## Design notes
- Follows the Inforens brand system: brand orange `#db5800`, `rounded-2xl`
  cards, `bg-stone-100`/`bg-stone-800` surfaces, Inter font, Framer Motion
  fade-up + stagger animations on scroll.
- Team groups are tabbed with shadcn `<Tabs>` rather than three stacked
  sections, so visitors can jump straight to Mentors or Support without
  scrolling past the full core team.
- Cards use a hover-reveal social icon and subtle lift, in line with current
  team-page conventions (photo-forward grid, minimal chrome, tab-based
  filtering instead of long single-scroll pages).
