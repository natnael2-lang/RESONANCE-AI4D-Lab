# Website Assessment: RESONANCE AI4D Lab (homepage)

Based on the live site (https://sites.google.com/aait.edu.et/resonance-lab/home), desktop screenshots, and a fetch of its navigation structure. Items marked *(verify)* should be confirmed on a real phone and with an accessibility checker before being treated as fact.

## Site constraints worth knowing
The current site is a Google Site: the navigation, search and layout are template-controlled, which limits how far it can be improved in place. This prototype shows what a purpose-built front end could do; migrating would be a separate decision for the lab.

## What works
- Clear green identity, consistent with the lab's brand.
- Vision and focus areas are short, scannable and well chunked into cards.
- A prominent call to action for MSc/PhD applications.
- Partner logos are present, which builds credibility.

## Findings

| Area | Observation |
|---|---|
| Content organization | The homepage never states in one plain sentence what the lab is. The vision text is the first content, and the "Our Partners" label is small, unstyled text. The CTA is the last substantive block, so applicants must scroll. |
| Navigation | Two navigation systems appear at once: a top dropdown menu and a row of green buttons repeating the same items. "Contact" appears only in the dropdown. "Get Involved" has a sub-menu that is not discoverable. |
| Visual design | Hero text sits in a bordered box over a busy gradient. The "Apply Now" button uses default blue link styling that clashes with the green palette. Emoji icons render differently across platforms. |
| Mobile responsiveness | *(verify)* Google Sites stacks content, but the hero box, button row and cards were designed at desktop width. |
| Accessibility | The CTA appears to be an embedded frame with its own scrollbar, which creates a scroll trap and a keyboard/screen-reader hazard. White text on the light-green end of the CTA gradient likely has low contrast *(measure)*. Focus-area cards are not links. Emoji are decorative but may be read aloud. Partner logos need alt text *(verify)*. The Canada logo is cropped. |
| Clarity | The Innovation Hub text and the lab's overall mission are the same idea repeated. Focus-area cards give a title only, with no link to detail. |
| Content freshness | The Get Involved sub-page is labelled "Application 2025/26". Confirm with the lab whether this is the current cycle; if not, the homepage CTA ("applications now open") could mislead applicants. |
| Overall UX | Visitors have no direct path from a focus area to the research page, and no visible contact route. |

## Prioritized recommendations
1. **Remove the embedded CTA frame** and make it a native section with a real link. (Accessibility, conversion.)
2. **One clear navigation**: a single header nav (with a mobile menu), include Contact, drop the duplicate button row.
3. **Fix contrast** on the CTA and any light-on-light text; keep a visible focus style. (Accessibility.)
4. **Lead with purpose and action**: state the lab's mission in the hero and put the apply action up front.
5. **Make focus areas links** to the Research page.
6. **Give partners a proper section** with heading, consistent logo sizing, alt text and uncropped logos.
7. **Add a footer** with contact details and affiliation.
8. **Mobile-first, semantic layout** (landmarks, heading order, skip link).

9. **Search that covers the whole site** (pages, focus areas, applications), reachable from a visible header control and the `/` key.
10. **A scalable navigation**: tabs, focus areas and partners come from one data file, so adding a new tab or area does not require redesigning the page; extra tabs fall into a "More" menu.
11. **Purposeful motion**: reveal-on-scroll and a resonance motif guide attention to the vision, focus areas and the apply action, and switch off for users who prefer reduced motion.

## Out of scope for this prototype
Inner pages (Research, Team, Publications, News), content writing, CMS migration, search.
