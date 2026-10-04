# RESONANCE AI4D Lab homepage: assessment and priorities

This is my review of the current homepage, written for the technical exercise. I looked at it on a desktop screen and in a narrow browser window (about 490px wide, to stand in for a phone). I did not add or change any content. The work is about presenting the existing content better.

## 1. Assessment

**Content organization.** The order is right: vision, focus areas, a call for applications, then partners. The problem is the framing. Every block is a white card inside a grey panel inside the white page, so there are boxes inside boxes and nothing stands out. "Our Partners:" is plain body text instead of a heading like the other sections. On desktop the Canada logo drops onto a row of its own, and the IDRC subtitle is cut off.

**Navigation.** Two menus do the same job. The "Home" dropdown lists every page, including Contact. A separate row of six big buttons repeats most of them, without Contact. On a phone, those buttons wrap into two uneven rows, and the menu opens as a dark panel with a dark overlay over the page.

**Visual design.** The same heavy dark green appears in the banner, the buttons and the bar. When you scroll, the bar turns near-black, which is not one of the lab's colors. Emoji act as icons, the body text is small and light grey, and "Apply Now" uses the default link blue on a white button over a green panel.

**Mobile responsiveness.** This is where the site struggles most. The hero title breaks inside a word ("RESONAN / CE"). Our Vision, Key Focus Areas and Ready to Join each sit in their own small scrolling window with a scrollbar, so you see a heading and a sliver of content and have to scroll inside the page to read it. On desktop the same happens in the Join block.

**Accessibility.** From what is visible: nested scrolling areas are hard to use with a keyboard or a screen reader, I did not see a skip link, and the small grey text may not have enough contrast. I have not measured contrast ratios.

**Clarity.** The wording is clear and I kept all of it. What is unclear is what the visitor should do. The lab is recruiting (MSc and PhD applications are open), but the only way to apply is a button in a nested frame at the bottom of the page, and the first screen has no action at all.

**Overall user experience.** The site has the right content in the right order, but visitors have to fight the layout to use it: two menus, scrolling windows inside a scrolling page, and the main action buried. Fixing structure will help more than adding anything.

## 2. Priorities

1. **Remove the nested scrolling.** Every section becomes part of the page. It is the most visible problem on a phone and the most unnecessary, because the content is short.
2. **Put the main action up front.** Applying is the main reason to come to this site right now, so "Apply Now" belongs in the first screen, not only at the bottom.
3. **One navigation that works on desktop and phone.**
4. **Fix the mobile hero title.**
5. **A calmer color scheme.** Dark green everywhere is repetitive and heavy, even though it is the brand color.
6. **Basic accessibility:** skip link, a single `h1`, labelled sections, visible focus, reduced motion.
7. **Partners with clear boundaries.**
8. **Content in one place,** so adding a tab or a partner later does not mean editing the layout.

## 3. What the prototype implements

- **No scrolling windows.** Vision, Focus Areas and Join are normal sections on every screen size. (Priority 1)
- **"Apply Now" in the hero,** next to the title, and again in the Join section at the bottom. A visitor who does not want to scroll to the end can act straight from the first screen, and the bottom button is there for those who read the whole page. (Priority 2)
- **One navigation bar.** At the top it has exactly the same width as the page content, so the layout lines up. Once you scroll, it stretches to the full screen width and stays pinned. I kept it contained at first on purpose. The first look creates the impression of the whole site, and a bar that matches the layout of the content feels orderly, simple and attractive, so it also gives me better control over how the page looks. (Priority 3)
- **A phone menu that does not cover the page.** It opens as a small light green card just under the bar, only as tall as its links, with no dark overlay, so the content and its dividing lines stay visible. (Priority 3)
- **The hero wraps at word boundaries.** (Priority 4)
- **A very light green hero.** The brand is green, but using dark green everywhere is redundant and tiring. A light green with thin rings gives a clean, slightly technical feel, and the dark bar and the Join card become the only strong color blocks. (Priority 5)
- **Rings that spread outward from "AI4D".** The circles express the idea behind the name: knowledge spreads from the AI4D Lab to everyone else. The four dots are the four focus areas, in the same colors as their cards. It is decoration only: it adds no facts or claims, it is hidden from screen readers, and the motion stops for people who prefer reduced motion. (Priority 5)
- **Lines instead of boxes in Our Vision.** Thin dividers separate the three pillars. This looks more professional, avoids boxes everywhere, and scales: a fourth pillar is just one more row. (Priority 5)
- **Skip link, one `h1`, labelled sections, visible focus rings, and no motion for people who prefer reduced motion.** (Priority 6)
- **Partners in cards of the same size with a clear border,** so each logo reads as its own item. I considered an auto-scrolling strip, but with only three partners it adds motion for nothing. The grid adapts to the number of partners, so adding one is a single entry in `content.js`. (Priority 7)
- **All content in one file** that the navbar, menu, search, cards and footer read from. (Priority 8)

## 4. Academic identity and existing content

Every word comes from the existing site. I invented no projects, partners, achievements or team members. The hero reuses the lab's first vision statement, and the three partners are the ones already on the site. The IDRC image already includes the Canada wordmark, so there are three cards. Navigation links still open the existing Google Sites pages. The serif headings and the greens come from the lab's seal and wordmark.

## 5. What I left out, and why

The exercise is limited to about four hours, so I kept to the homepage:
- **The inner pages** (Team, Research, Publications) are not redesigned.
- **The logos are low-resolution crops** from the live site. The lab's original files should replace them.
- **No automated tests.** I checked the layout by eye on a desktop screen and in a narrow window. I did not run an automated accessibility audit, which is why contrast is marked above as not measured.

## 6. How I worked

The design decisions in this document are mine. I made them from a UX/UI point of view and from my previous experience. I used Claude, an AI assistant, to implement those decisions in code and to help organize them into these documents.