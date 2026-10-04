# RESONANCE AI4D Lab: improved homepage prototype

A homepage prototype for the RESONANCE AI4D Lab @CTBE, built for the Web Developer technical exercise. It keeps the lab's existing content and academic identity and improves navigation, hierarchy, accessibility and responsiveness.

- Website assessment and prioritized recommendations: [ASSESSMENT.md](./ASSESSMENT.md)
- Author: `[your full name]`

## Setup and run

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/natnael2-lang/RESONANCE-AI4D-Lab.git
cd RESONANCE-AI4D-Lab
npm install
npm run dev        # opens http://localhost:5173
```

Other commands: `npm run build` (production build), `npm run preview` (serve the build).

> Check these script names against `package.json` before submitting.

## What the prototype contains

Hero, Our Vision, Key Focus Areas, Ready to Join Our Team, Our Partners and a footer, plus:

- A navigation bar with a dropdown, a "More" overflow menu, a mobile drawer and a search dialog (press `/` or `Ctrl/Cmd + K`).
- A navbar that floats at the top and stretches to the full screen width once the page scrolls.
- A reading-progress line in the lab's greens.

## Editing content

All visible content lives in one file: `src/data/content.js`. To add a navbar tab, a vision pillar, a focus area or a partner, add one object to the matching array. The header, mobile menu, search, cards and footer all update from it. Logos live in `public/assets/`.

## Design and technical decisions

**Content first.** Every word comes from the existing site. The hero reuses the lab's first vision statement and highlights its key phrase. Where the existing site had a widget I could not preserve (the embedded application frame), I rebuilt it as a normal section with the same text.

**Visual identity from the logo.** The seal is dark green with a serif wordmark, so I used a green palette and the serif Playfair Display for headings and Inter for body text. The four focus-area tints (blue, green, purple, yellow) follow the existing site. Fonts are installed locally with `@fontsource`, so no request goes to Google Fonts.

**One container.** A single `.page` class (max width 90rem, fluid padding) is used by the navbar and every section. A narrower cap (1200px) looked too small on wide monitors.

**Navigation.** One bar for all pages. On desktop, tabs beyond the seventh collapse into "More". Dropdowns open on hover and on keyboard focus, with no JavaScript state. On mobile, a drawer locks page scroll and closes with Escape.

**Accessibility.** A skip link, a single `h1`, sections labelled by their headings, visible focus rings, `aria-hidden` on decorative graphics, and every animation turned off for visitors who prefer reduced motion. Text colors were chosen for strong contrast on light and dark backgrounds.

**Motion kept small.** One entrance sequence in the hero, a slow pulse on the decorative rings, and fade-in on scroll. These are plain CSS plus `IntersectionObserver`, with no animation library.

**Stack.** React with Vite for fast development, Tailwind CSS for a consistent design system, and no other runtime dependencies, which keeps the bundle small and easy to maintain.

**Cards that don't link.** The focus-area cards have no arrows or hover lift, because they lead nowhere separate.

**Partners.** The IDRC logo file already includes the Canada wordmark, so the prototype shows three partner cards.

## Known limitations

- Homepage only. Navigation links open the existing Google Sites pages.
- Logos are low-resolution crops from the live site. The original files should replace them.
- No automated tests. `[add what you checked manually and the results, e.g. Lighthouse scores, keyboard pass, mobile widths]`
- The desktop dropdown does not close with Escape and uses simplified ARIA. The mobile menu and the search dialog do not fully trap keyboard focus.
- The hero repeats the first vision statement, which then appears again in the Vision section. I chose to reuse existing wording instead of writing a new tagline.
- Content fades in on scroll through JavaScript, so there is no fallback when scripts are disabled.
- Search matches plain text only (no ranking or typo tolerance) over the content in `content.js`.
- English only, like the current site.

## Time spent

Approximately `[X]` hours. `[add a short breakdown, e.g. review and planning, implementation, polishing, documentation]`

## AI and development-tool disclosure

**Tools:** Claude (Anthropic), used in a chat interface. `[add any other tools, such as an editor assistant, if you used them]`

**How I used it**
- To draft and revise React and Tailwind components from my brief and my existing files, for layout, accessibility patterns and responsive behavior.
- To write the first versions of the assessment and this README, which I then edited. `[confirm and edit to match what you did]`

**How I checked the output**
- I ran the project locally and reviewed it in the browser at desktop width, comparing it with screenshots of the current site. `[add other checks you really did: mobile widths, keyboard navigation, Lighthouse/axe]`
- I sent back screenshots and concrete feedback, and the code was revised until it matched my judgment.

**Suggestions I rejected or changed**
- A dark full-width hero: replaced with a very light hero that does not fill the page.
- Hiding the navbar on scroll down: changed so it stays pinned and stretches to full width.
- Numbered labels and arrows on the vision and focus cards, and uneven card widths: removed for a calmer, more honest layout.
- Hotlinked Google Sites logo URLs: replaced with local files.
- A narrower 1200px content width: replaced with a wider fluid container.
- A separate Canada logo: dropped, because the IDRC image already includes it.

I reviewed and take responsibility for all code in this repository.