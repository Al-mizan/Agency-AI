# Agency AI

A modern landing page for a creative digital agency, built with React, Vite, and the Tailwind CSS v4 stack. The site showcases services, portfolio highlights, team members, and a lead-capture form, blending polished visuals with practical conversion flows.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Key UI Sections](#key-ui-sections)
- [Configuration Notes](#configuration-notes)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive one-page layout with smooth section anchoring and clear CTAs.
- Theme toggle with user preference persisted in `localStorage`.
- Portfolio and team grids backed by reusable `Card` and `ProjectCard` components.
- Contact form wired to Web3Forms with optimistic state handling and toast feedback.
- DaisyUI-powered design system layered on Tailwind CSS v4 utilities.
- StrictMode-ready React 19 setup with modern SWC-based tooling.

## Tech Stack

- React 19 + Vite 7 (SWC, Fast Refresh)
- Tailwind CSS v4 + DaisyUI component presets
- React Hot Toast for lightweight notifications
- Radix UI helpers, clsx, and tailwind-merge utilities (installed for design authoring)
- ESLint 9 with React and Hooks plugins

## Project Structure

```text
Agency-AI/
├── public/
│   └── favicon.ico
├── src/
│   ├── App.jsx
│   ├── assets/
│   │   ├── assets.js
│   │   └── *.svg / *.png (brand and illustration assets)
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header with theme toggle and mobile menu
│   │   ├── Hero.jsx            # Hero banner with highlight imagery and social proof
│   │   ├── Companies.jsx       # Trusted-by marquee of partner logos
│   │   ├── Help.jsx            # Services intro section using shared Card component
│   │   ├── OurWork.jsx         # Portfolio carousel populated via ProjectCard
│   │   ├── MeetTeam.jsx        # Team roster grid using Employee cards
│   │   ├── ContactUs.jsx       # Lead form integrated with Web3Forms + toasts
│   │   └── Footer.jsx          # Multi-column footer and newsletter stub
│   ├── index.css               # Tailwind CSS v4 entry point with DaisyUI plugin
│   └── main.jsx                # React entry, StrictMode-enabled root
├── eslint.config.js
├── vite.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.18+, 20.x, or 22.x (per Vite 7 requirements)
- npm 9+ (bundled with recent Node releases)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) to view the site with Hot Module Replacement.

### Production Build

```bash
npm run build
npm run preview
```

`npm run preview` serves the output from `dist/` so you can verify the production bundle locally.

## Available Scripts

| Command          | Description                            |
| ---------------- | -------------------------------------- |
| `npm run dev`    | Start the Vite dev server with HMR.    |
| `npm run build`  | Generate an optimized production build.|
| `npm run preview`| Preview the production bundle locally. |
| `npm run lint`   | Run ESLint over the project files.     |

## Key UI Sections

- **Navbar**: Sticky navigation, theme switcher, responsive dropdown.
- **Hero + TrustedBy**: Gradient hero with social proof badge and call-to-action framing.
- **Companies**: Logo strip showcasing partner brands.
- **Help / OurWork / MeetTeam**: Shared `Card` typography with grid-based detail cards.
- **ContactUs**: Validated form posting to Web3Forms with toast-driven feedback states.
- **Footer**: Service links, anchor navigation, and newsletter placeholder.

## Configuration Notes

- **Contact form access key**: Update the `access_key` in `src/components/ContactUs.jsx` with your own Web3Forms token before deploying.
- **Theme styling**: DaisyUI is configured via the inline plugin declaration in `src/index.css`. Adjust the theme tokens there if you need bespoke branding.
- **Assets**: Logo and illustration references live in `src/assets/assets.js`. Swap paths or extend the exported arrays to refresh visuals.
- **SEO & Metadata**: Customize `index.html` (`<head>` section) with your titles, descriptions, and OG tags to fit deployment needs.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/amazing-feature`).
3. Commit changes with clear messages.
4. Run `npm run lint` and ensure the UI still behaves as expected.
5. Open a pull request describing your changes.
