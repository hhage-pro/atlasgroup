# Atlas website design system

## Active references
Four Higgsfield-generated standalone section concepts: concept-hero.png, concept-services.png, concept-approach.png, concept-contact.png. These implement the user-approved modern Atlas identity. User authorized autonomous website implementation; section concepts were internally selected, not separately user-approved.

## Deliberate corrections to generated concepts
- Use the actual approved vector A/arch and outlined wordmark, not the inconsistent generated logo substitutes.
- Approach concept unexpectedly included a second navigation: remove that duplicated header.
- Color tokens stay exactly #3268F5, #14263D, #FFFFFF, #F4F6F8. Generated photograph colors are natural, no blue wash.
- Use standalone Higgsfield architecture assets, not the concept images as UI. Hero receives the specified neutral black-to-transparent readability gradient. Other images have no tint.
- Add necessary form labels, consent, honest preview-delivery notice, validation, error and successful local-save states. The user has not supplied contact routing.
- Keep commercial claims modest; no fabricated stats, reviews, people, listings, rates, affiliation badges or guarantees.

## Inventory and tokens
- Manrope locally hosted at weights 400/500/600/700. Header UI 14px, body 16–18px/1.65; home H1 80–90px/1.02 desktop, 48–56px mobile; section H2 54–64px/1.1 desktop, 36–42px mobile. Tracking -.045em on headings, .1em uppercase labels.
- Max-width 1440px, desktop gutters 64px (32px tablet, 24px mobile), section spacing 112px, 32/48px gaps. Colors above; muted #657181, borders #DCE1E7.
- Straight rectangular media and buttons; tiny 2px radius controls only. No shadowed card grids. Fine rules, open rows, full-width color bands.
- Lucide outline ArrowUpRight/ArrowRight, ChevronDown, Menu, X, Play/Pause, Plus/Minus, Check at 20–24px, stroke 1.5. No decorative service icons.
- Motion: initial 650ms text rise, restrained image fade, 200ms control transitions. Reduced-motion preference disables animation/autoplay. Video includes genuine pause/play control and still fallback.

## Homepage sections
1. White 88px header, approved logo left, Services dropdown, Our approach anchor, About Atlas page, Let's talk action. Sticky header with fine bottom rule. Mobile menu disclosure.
2. Full-bleed 620–680px cinematic hero. Allowed copy: Your next chapter. Built together. / Real estate, insurance, mortgages, and construction. Connected around you. / Find your next step / Rooted in Michigan. Looking forward. No pretitle. Primary CTA scrolls to services. Real motion clip, pause control.
3. Open four-column service rail: Real estate, Insurance, Mortgages, Construction, each direct route with arrow.
4. White service explorer: OUR SERVICES label; One relationship. More possibilities.; exact concept explanatory paragraph. Left disclosure rows, right scene image. Each expanded row offers a link to its service page. Default real estate. Accessible buttons, only active panel shown.
5. Cool gray approach split: neighborhood photo left, Forward thinking. Michigan grounded. and concept body right; three numbered steps; Meet Atlas route.
6. Blue contact band: What does your next chapter look like? + concept body; name/email/service/message/consent form. Production delivery only when configured; local preview persistence otherwise.
7. Navy footer, approved reverse logo, A clearer way forward., services and Atlas links, Metro Detroit. Serving Michigan.; privacy/accessibility links and a short disclosure that images are illustrative concepts, not available listings or completed Atlas projects.

## Additional pages / state design
Service detail pages reuse established white editorial headings, 2-column intro + landscape photo, open divided offering rows, 3-step approach, native accessible FAQ disclosures, and blue contact CTA. Four differentiated pages. About reuses neighborhood story split and process typography. Contact uses the established form band. Privacy/accessibility are readable long-form pages. Unknown route has a real 404 view. Mobile: stacked content, 2x2 service rail, folded navigation, full-width form and clear tap areas.

## Required workflows
All navigation links resolve, mobile menu supports Escape, service tabs update content and image, video controls affect playback, inquiries validate and submit to local server without false delivery claims, service CTA preselects inquiry intent. Route titles and descriptions update. Native links support browser back/forward.

## Final fidelity review — 2026-09-22

Compared section concepts and browser screenshots using image inspection. Desktop 1440×900, mobile 390×900 and 320px, tablet 768px, and original concept image dimensions 2688×1520 checked. Concepts express the chosen design direction rather than separately user-approved website screenshots; the approved user reference is the modern Atlas logo-board/sign presentation.

| Element | Concept / brand reference | Implemented result |
| --- | --- | --- |
| Branding | Small blue emblem and uppercase wordmark | Exact outlined approved A/arch asset; generated logo substitutions intentionally corrected |
| Hero copy | Three-line headline, service sentence, next-step action | Same copy and hierarchy; no added eyebrow or badges |
| Palette | Ink navy / blue / white, neutral hero fade | Exact tokens; photographs untinted except hero readability gradient |
| Typography | Lighter contemporary grotesk | Locally hosted Manrope; responsive scale; refined heading tracking |
| Layout | Full-bleed film, open service rail, service explorer, story split, blue form band | Same section order and component model, no card-grid additions |
| Artwork | Cinematic Michigan-inspired architecture | Separate Higgsfield production scenes and real Seedance film replace concept composites |
| Forms | Minimal labeled fields | Added necessary consent, preview-delivery disclosure, validation and truthful saved state; name/email share a desktop row |
| Responsive | Same visual system in a stacked mobile layout | Fixed hidden-line-break spacing on contact heading, raised mobile input font size, no horizontal overflow at 320–1440px |
| Wide-screen | Aligned header/content gutters | Removed duplicate hero gutter at >1600px; final 2688px rendering inspected |
| Motion | Restrained film and reveals | Actual play/pause; reduced-motion preference prevents autoplay and animation |

Above-the-fold copy diff: no unintended additions, removals, or reordered copy. Actual approved logo replaces generated concept lettering. The supplementary stills have different architectural compositions than the concept placeholders by design. No unresolved functional or layout mismatches found in tested viewports. Live mail delivery and public deployment remain unconfigured; physical Safari/Android devices were not tested.

## Structure revision — 2026-09-22

- Parent/company structure: Atlas Group header and footer; company pages headed by division lockups (`public/brand/atlas-<company>-{primary,reverse,white}.svg`). Lockups reuse the emblem, the ATLAS glyphs and the GROUP sub-label metrics (scale .29, tracking 21, tightened to fit CONSTRUCTION under the wordmark). New glyphs E, I, N, C, M follow the existing 100-unit cap height and 12–13-unit stroke.
- Service rail and explorer now name the companies, with the service as a small uppercase sub-label in the rail.
- New founder section (navy band, 40/60 split, portrait with gradient caption, quote, bio, credential table of license types, note that numbers follow before launch). Reused on Home (with link to About) and About.
- New companies grid on About: 2×2 tiles of lockups with hairline borders, hover to cool gray.
- Footer disclosure now names the four companies as affiliates of Atlas Group, states that none is required, and carries Equal Housing Opportunity.
- Verified in the in-app browser at 375px: no horizontal overflow (`scrollWidth === innerWidth`), founder and companies sections stack cleanly; desktop verified at 1440px by headless Chrome captures of Home, Properties and About.
- Imagery revision (same day): every company page and the About panorama now has its own scene — interior (Properties), insurance colonial at dusk (Insurance), morning kitchen with keys (Mortgage), framed addition (Construction), golden-autumn home (About panorama). The neighborhood street remains the Approach image; the dusk hero and its film are unchanged.
