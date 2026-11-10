# iStudio Interior Design — Next.js + TypeScript

A responsive interior design website recreated from the supplied iStudio content and image assets.

## Stack
- Next.js App Router
- React + TypeScript (TSX)
- Tailwind CSS
- shadcn/ui-style components (`components/ui`)
- Radix Slot, class-variance-authority, clsx, tailwind-merge
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Check types and build

```bash
npm run typecheck
npm run build
```

## Pages
- `/` Home
- `/about` About
- `/services` Services
- `/projects` Projects (interactive category filters)
- `/team` Team
- `/contact` Contact (frontend demo form)

## shadcn/ui
The project includes a `components.json` configuration and reusable shadcn-style components in `components/ui`: Button, Badge, Card, Input, Select, Textarea and SectionTitle. Add more components with the shadcn CLI when needed.

The contact form currently demonstrates client-side submission only; connect it to your backend API to receive enquiries.


## Second visual edition

This edition introduces a distinct architectural-editorial direction:
- Ink-charcoal, chalk, concrete grey and cobalt blue palette
- High-contrast typography, square geometry and offset graphic shadows
- Expanded home page with design journal, materials palette and four-step process
- Expanded services page covering layout, finishes, lighting and styling
- Expanded studio story with a people-first design approach
- Responsive layouts and reduced-motion-aware interactions

The original routes, image assets, navigation, project filtering and enquiry form are retained.


## Dark / light mode

The header includes an accessible appearance toggle. The selected theme is saved in
localStorage (`istudio-theme`) and restored on the next visit. On a first visit, the
site follows the operating system's color-scheme preference. No extra package is required.
