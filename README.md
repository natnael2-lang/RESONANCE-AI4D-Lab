# RESONANCE AI4D Lab: improved homepage prototype

A homepage prototype for the RESONANCE AI4D Lab @CTBE, built for the Web Developer technical exercise. It keeps the lab's existing content and academic identity and improves navigation, hierarchy, accessibility and responsiveness.

- Website assessment and prioritized recommendations: [ASSESSMENT.md](./ASSESSMENT.md)
- Author: Natnael Messay

## Setup and run

Requirements: Node.js 20 or newer.

```bash
git clone https://github.com/natnael2-lang/RESONANCE-AI4D-Lab.git
cd RESONANCE-AI4D-Lab
npm install
npm run dev        # opens http://localhost:5173
```

Other commands: `npm run build` (production build), `npm run preview` (serve the build).

## What the prototype contains

Hero, Our Vision, Key Focus Areas, Ready to Join Our Team, Our Partners and a footer, plus:

- A navigation bar with a dropdown, a "More" overflow menu, a mobile menu and a search dialog (press `/` or `Ctrl/Cmd + K`).
- A navbar that matches the width of the page content at the top and stretches to the full screen width once the page scrolls.
- A reading-progress line in the lab's greens.

## Editing content

All visible content lives in one file: `src/data/content.js`. To add a navbar tab, a vision pillar, a focus area or a partner, add one object to the matching array. The header, mobile menu, search, cards and footer all update from it. Logos live in `public/assets/`.

## Design and technical decisions

**Content first.** Every word comes from the existing site. The hero reuses the lab's first vision statement and highlights its key phrase. Where the existing site had a widget I could not preserve (the embedded application frame), I rebuilt it as a normal section with the same text.

**No scrolling windows.** On the current site, Our Vision, Key Focus Areas and the Join block sit in small scrolling frames, which is most noticeable on a phone. Here every section is part of the page.

**Visual identity from the logo.** The seal is dark green with a serif wordmark, so I used a green palette, the serif Playfair Display for headings and Inter for body text. The four focus-area tints (blue, green, purple, yellow) follow the existing site. Fonts are installed locally with `@fontsource`, so no request goes to Google Fonts.

**A light green hero.** Dark green appears in the bar, the buttons and the banner of the current site, which is repetitive even though it is the brand color. The hero is a very light green with dark text, so the navbar and the Join card are the only strong color blocks.

**One container.** A single `.page` class (max width 90rem, fluid padding) is used by the navbar and every section. A narrower cap (1200px) looked too small on wide monitors.

**The navbar matches the content.** At the top, the bar has exactly the width of the page content, so everything lines up. The first look creates the impression of the whole site, and an aligned layout feels simple and attractive. After scrolling, the bar stretches to the full screen width and stays pinned.

**Apply Now up front.** The call to action is in the hero as well as in the Join section. A visitor who does not want to scroll to the bottom can reach it from the first screen.

**The circles.** The rings spread outward from "AI4D" to show knowledge spreading from the lab to everyone else. The four dots are the four focus areas, in their card colors. It is decoration only: no new content, hidden from screen readers, and static for reduced motion.

**Navigation.** One bar for all pages. On desktop, tabs beyond the seventh collapse into "More". Dropdowns open on hover and on keyboard focus, with no JavaScript state. On a phone, the menu is a small light card under the bar, only as tall as its links, with no dark overlay, so the content stays visible. It locks page scroll and closes with Escape or a tap outside.

**Lines instead of boxes in Our Vision.** Thin dividers separate the pillars, which avoids boxes everywhere and scales: a new pillar is one more row.

**Partners.** Each logo sits in a card of the same size with a clear border. The grid adapts to the number of partners, so adding one is a single entry in `content.js`. I considered an auto-scrolling strip but, with only three partners, it would add motion for no benefit. The IDRC logo file already includes the Canada wordmark, so there are three cards.

**Accessibility.** A skip link, a single `h1`, sections labelled by their headings, visible focus rings, `aria-hidden` on decorative graphics, and every animation turned off for visitors who prefer reduced motion. Text colors were chosen for readable contrast. `[replace with your measured results from Lighthouse / axe]`

**Motion kept small.** One entrance sequence in the hero, a slow pulse on the decorative rings, and fade-in on scroll. These are plain CSS plus `IntersectionObserver`, with no animation library.

**Stack.** React with Vite for fast development and Tailwind CSS for a consistent design system, with no UI-component or animation libraries, which keeps the bundle small and easy to maintain.

**Cards that don't link.** The focus-area cards have no arrows or hover lift, because they lead nowhere separate.

## Known limitations

- Homepage only. Navigation links open the existing Google Sites pages. The other pages could reuse the same navbar, footer and `.page` container, with their content added to `content.js`.
- Logos are low-resolution crops from the live site. The original files should replace them.
- No automated tests. I checked the site manually. `[add exactly what you checked and the results, e.g. Lighthouse scores, a keyboard-only pass, a ~490px window]`
- The desktop dropdown does not close with Escape and uses simplified ARIA. The mobile menu and the search dialog do not fully trap keyboard focus.
- The hero repeats the first vision statement, which then appears again in the Vision section. I chose to reuse existing wording instead of writing a new tagline.
- The footer repeats the navbar links. Because the navbar stays pinned, they add little, but I kept them as a conventional end to the page.
- Content fades in on scroll through JavaScript, so there is no fallback when scripts are disabled.
- Search matches plain text only (no ranking or typo tolerance) over the content in `content.js`.
- English only, like the current site.

## Time spent

Approximately `[X]` hours. `[add a short breakdown, e.g. review and planning, implementation, polishing, documentation]`

## AI and development-tool disclosure

**Tools:** Claude (Anthropic), used in a chat interface. `[add any other tools, such as an editor assistant, if you used them]`

**How I used it**
- To draft and revise React and Tailwind components from my brief and my existing files, for layout, accessibility patterns and responsive behavior.
- To write the first versions of the assessment and this README, which I then edited.

**How I checked the output**
- I ran the project locally and reviewed it in the browser at desktop width and in a narrow window (about 490px), comparing it with screenshots of the current site. `[add other checks you really did: keyboard navigation, Lighthouse/axe]`
- I sent back screenshots and concrete feedback, and the code was revised until it matched my judgment.

**Where an idea came from**
- The circles motif was already in the code I started this chat with. `[state honestly where it came from: your own idea, an earlier AI tool, or a template]` I kept it because it fits the name and the focus areas.

**Suggestions I rejected or changed**
- A dark full-width hero: replaced with a very light hero that does not fill the page.
- Hiding the navbar on scroll down: changed so it stays pinned and stretches to full width.
- Numbered labels and arrows on the vision and focus cards, and uneven card widths: removed for a calmer, more honest layout.
- A dark mobile menu with a dark overlay over the whole page: replaced with a small light card and no overlay.
- Hotlinked Google Sites logo URLs: replaced with local files.
- A narrower 1200px content width: replaced with a wider fluid container.
- A separate Canada logo: dropped, because the IDRC image already includes it.
- An auto-scrolling partner strip: not built, because there are only three partners.

I reviewed and take responsibility for all code in this repository.