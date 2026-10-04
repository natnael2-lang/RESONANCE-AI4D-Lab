# RESONANCE AI4D Lab: Improved Homepage Prototype

A React + Tailwind CSS homepage prototype for the RESONANCE AI4D Lab (Web Developer technical exercise). The website review and prioritized recommendations are in [ASSESSMENT.md](ASSESSMENT.md).

## Setup and run
Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Brand consistency
The design was matched to the existing site rather than reinvented.

| Element | Source |
|---|---|
| Hero gradient `#0e3f37 → #0e4f36 → #15582f`, call-to-action gradient `#025947 → #33923d → #64ca33`, nav teal `#004340` | Colours sampled from screenshots of the current site (`tailwind.config.js`, `brand-*`) |
| Playfair Display for headings and the wordmark; Inter for body text | Matches the serif of the existing "RESONANCE AI4D Lab" wordmark; both self-hosted via npm |
| Four pastel card tints (blue, green, purple, yellow) | The existing Key Focus Areas cards |
| Logo and partner logos | Cropped from the live site's screenshots (`public/assets/`) |
| Logo accents (`logo-blue`, `logo-rose`, `logo-sage`) | Sampled from the lab's circular logo |

The one addition is the **resonance motif**: concentric rings with the four focus areas as nodes, a visual idea for the lab's name, drawn in the site's own colours.

## What changed, and why
| Goal | Implementation |
|---|---|
| Clear sections, clear main point | Hero keeps the site's title and highlights the key phrase of the lab's first vision statement ("Responsible AI for development"). Sections alternate dark / light / white using the site's own headings. |
| Navigation that does not hide content | Header is `sticky` (in normal flow), so content starts below it. It tucks away on scroll down and returns on scroll up or keyboard focus. Anchors use `scroll-padding-top`. |
| Search | Header button, `/` or Ctrl/Cmd+K opens a keyboard-navigable dialog (arrows, Enter, Esc) searching pages, vision, focus areas, application and partners. |
| New navbar tabs / focus areas | Data-driven from `src/data/content.js`. Add one object to `nav` (optional `children` for a dropdown) and it appears in the header, drawer, footer and search. Tabs past `MAX_VISIBLE_TABS` collapse into "More". |
| Responsive | Inline nav from 1280px, slide-in drawer below. Fluid type and grids; no horizontal scroll at 390px or 1440px (checked in headless Chromium). |
| Expressive | Staggered hero entrance, rippling rings, scroll-reveal sections, drawing green rules in the vision list, hover motion on focus-area cards and partners, a soft ping on the Apply button. All motion is off under `prefers-reduced-motion`. |
| Different from the standard | Asymmetric 7/5 focus-area grid, numbered editorial vision list, motif instead of boxed emoji. |

## Content integrity
Every visible word comes from the existing site: the title, the three vision pillars, the four focus-area titles, the call-to-action text, the navigation labels (including "Application 2025/26") and partner names. Nothing was invented. The only added strings are functional interface labels: "Skip to main content", "Search", "Esc", "No results", "Back to top" and accessibility labels.
## Project structure
```
src/
  data/content.js        all text, links, nav, focus areas, partners
  hooks/                 useScrollState (header), useInView (reveal)
  components/            Header, SearchDialog, Hero, Vision, FocusAreas, Join, Partners, Footer, Reveal, Ripples, Icon
public/assets/           logo and partner logos
```

## Accessibility
Skip link, landmarks, one `h1` with ordered headings, visible focus ring, keyboard-operable menus and search (`role="dialog"`, `aria-activedescendant`), decorative graphics hidden from assistive tech. White-on-green pairs measured: hero 11.8:1 to 8.5:1; call-to-action text sits over the dark part of the gradient (the bright-green end is decorative only, because white on `#64ca33` fails contrast on the current site).

## Known limitations
- Logos are low-resolution crops from screenshots and may look soft on high-density screens. Replace `public/assets/*.png` with the original files. The IDRC logo's subtitle is cut off on the live site, so only its mark and name are used; the Canada logo is also cut off, so it appears as text.
- Focus-area cards have titles only because the site gives no descriptions.
- Navigation links go to the existing Google Sites pages, which I did not open individually. Verify they resolve.
- "Application 2025/26" and "applications are now open" come from the current site; confirm with the lab that they are current.
- Search covers homepage-level content only, not inner-page text.
- Checked only in headless Chromium (layout, overflow, menu, search); not tested on real devices or with a screen reader, and no automated tests.
- Only the homepage is covered.

## Approximate time spent
`<fill in honestly>`

## AI and development-tool disclosure
`<Edit to reflect what you actually did.>`
- **Tools used:** Claude (Anthropic) generated the assessment draft and the code from screenshots of the site, the site's navigation structure and the exercise brief; it also sampled colours and cropped logos from the screenshots.
- **How checked:** `<what you reviewed and tested: browsers, phone width, keyboard-only pass, Lighthouse/axe results>`. A production build was run, and headless Chromium confirmed no horizontal overflow, a working mobile menu and working search.
- **Suggestions rejected or changed:** `<list them>`. (One example from the process: an earlier version used a different serif font, extra gold/clay accent colours and some invented headings; these were replaced with the site's own typeface, colours and wording.)
