# KENNECTION — Design Specification
**Ken Doll Pakistan · Model Studio · Brand Content · Film**

---

## Logo

Client has supplied the wordmark as a **transparent PNG** — use as-is throughout the site. No recreation needed.

- Loading screen: logo PNG centered, rendered white (use `filter: brightness(0) invert(1)` on dark background or as-is on light)
- Navbar: logo PNG at small scale, left-aligned
- Footer: logo PNG, reduced opacity ~60%, white tint
- Do **not** attempt to redraw or substitute with a font — the NN ligature is custom and must come from the supplied asset

---

## Visual Direction

**Aesthetic:** Dark luxury editorial — high contrast, masculine, cinematic. Think Dior Homme campaigns, not a generic photography portfolio.  
**Mood:** Brooding. Deliberate. Commanding. The site should feel like walking into a dimly lit studio where something important is being made.  
**Reference Energy:** Dior Men × A24 films × Hedi Slimane × Nick Knight photography

**What the imagery tells us:**
- Subject is shot with dramatic single-source hard lighting — deep shadows, strong highlights
- Dark backgrounds dominate — the site leans into this: dark hero, not white
- The talent is sharp, composed, direct — the site must match that energy
- Color pulled from imagery: near-black, rich shadows, warm skin tone highlight

**Hero section must be dark.** Light cream sections reserved for services and body text. The contrast between dark hero and light interior creates the editorial rhythm.

---

## Color Palette

| Role | Value | Usage |
|------|-------|-------|
| Studio Black | `#0A0908` | Hero background, footer — pulled from actual shoot imagery |
| Paper | `#F4F2EE` | Services, body sections — warm off-white |
| Warm White | `#FAFAF8` | Text on dark sections |
| Dust | `#C8C4BC` | Subtle dividers, meta text |
| Skin Warm | `#C4906A` | Single accent — pulled from subject's skin highlight in imagery |
| Deep Shadow | `#1A1410` | Secondary dark sections, marquee strip |

**Rule:** Hero and footer live in the dark. Body sections breathe in cream. The switch between dark and light is the visual tension that makes the site feel editorial, not corporate.

No gradients. No drop shadows. Depth through **lighting in photography and negative space in layout only.**

---

## Typography

| Role | Font | Weight | Style |
|------|------|--------|-------|
| Logo / Hero Display | Cormorant Garamond | 300 Light | Uppercase, tracked |
| Section Headings | Cormorant Garamond | 400 | Sentence case or italic |
| Subheadings / Labels | EB Garamond | 400 Italic | Small, refined |
| Body | Cormorant Garamond | 400 | 18–20px, generous line-height 1.8 |
| Caption / Meta | Letter-spaced sans: `DM Sans` or `Neue Haas` | 300 | 10–11px, all-caps, tracked 0.2em |

**Rule:** Serif dominates everything. The single sans is used only for micro-labels (service tags, nav utility items).

---

## Loading Screen

**Duration:** ~2.8 seconds before dissolve

### Sequence:
1. **0–0.4s** — Flat `#F4F2EE` background. Empty. Still.
2. **0.4–1.2s** — Logo PNG fades in: `opacity 0 → 1` + `scale(0.96) → scale(1)`. Single smooth reveal, not per-letter.
3. **1.2–1.8s** — Logo sits. Still.
4. **1.8–2.2s** — Thin horizontal line `scaleX(0 → 1)` sweeps beneath the logo. Origin: left.
5. **2.2–2.6s** — Tagline fades in below the line: *"Visual Studio · Pakistan"* in small italic EB Garamond.
6. **2.6–2.8s** — Short pause.
7. **2.8s+** — Loader splits: top half slides up, bottom half slides down. Homepage revealed beneath.

### Background:
Dark `#0A0908`. Logo PNG rendered white via `filter: brightness(0) invert(1)`. The curtain panels that split are also dark — they slide away to reveal the dark hero beneath, creating a seamless transition.

---

## What Kennection Actually Is

A **premium visual production studio** based in Pakistan. Brands and content creators come here to shoot:
- Commercial campaigns (fashion, beauty, lifestyle, consumer goods)
- Cinematic brand ads
- Content creator productions for brand deals
- Editorial photography

They provide the full setup: studio space, professional photographers, models/talent, Aputure + Astera lighting rigs, direction, and post.

**The client is the brand or content creator.** Kennection is the execution engine behind the final visual.

---

## Homepage Copy & Messaging

### Hero Headline options (pick one with client):
- *"Your Brand. Our Frame."*
- *"Where Brands Come to Look Iconic."*
- *"We Make Brands Look Like They Mean It."*
- *"Built for Brands That Don't Compromise."*

**Recommended:** `"Your Brand. Our Frame."` — short, possessive, positions Kennection as a collaborator not just a vendor.

### Hero subline:
*"Commercial photography, cinematic production and creative direction — all under one roof in Pakistan."*

### CTA:
`Book a Shoot →`  *(not "View Our Work" — this drives action)*

---

## Homepage Structure (Revised)

### 1. Nav
- Logo PNG left (white tinted)
- Right: `Work` · `Services` · `Book`
- `Book` is slightly differentiated — thin border or accent color `#C4906A`

---

### 2. Hero — Full viewport, dark
- Left: Label `— PRODUCTION STUDIO · PAKISTAN`
- Headline: `Your Brand. Our Frame.`
- Subline: *"Cinematic campaigns for brands and content creators."*
- CTA: `Book a Shoot →`
- Right: Full-bleed cinematic portrait/campaign still

---

### 3. Marquee Strip — dark background
```
BRAND CAMPAIGNS  ·  FASHION EDITORIALS  ·  CONTENT CREATOR PRODUCTIONS  ·  APUTURE LIGHTING  ·  ASTERA TUBES  ·  COMMERCIAL PHOTOGRAPHY  ·  CINEMATIC DIRECTION  ·
```

---

### 4. "What We Offer" — Services, light cream section

```
01  Campaign Photography     02  Video & Brand Ads       03  Studio & Lighting
──────────────────────       ──────────────────────       ──────────────────────
Fashion. Beauty.             Cinematic brand ads.         Aputure. Astera.
Lifestyle. Product.          Reels. Hero films.           Full lighting setups.
Commercial editorial.        Content creator shoots.      Available for hire.
```

Tagline below the grid, centered, italic Cormorant:
*"One studio. Every brand."*

---

### 5. Featured Work Grid
- Real campaign stills — product shots, model campaigns, lifestyle
- Grayscale default → color on hover
- Caption on hover: `Brand Name · Campaign Type`
- CTA below grid: `See All Work →`

---

### 6. "Who We Work With" — simple credibility section
Two columns, light background:
- Left pull-quote (Cormorant italic, large):
  *"From emerging labels to established brands — if the shot matters, this is where it gets made."*
- Right: 3 short lines:
  - `Fashion & Apparel Brands`
  - `Beauty & Lifestyle Labels`
  - `Content Creators & Influencers`
  - `Ad Agencies & Production Houses`
- Equipment row below: `Aputure · Astera · Sony · Canon · DJI`

---

### 7. Booking CTA — Full viewport, dark `#0A0908`
Center:
```
Ready to Shoot?
Let's Build Something Iconic.
```
Below: single email or WhatsApp link (whatever client prefers) in italic accent color
Bottom bar: `© 2025 Kennection` · `Instagram`

---

## Animation Principles

| Interaction | Animation |
|-------------|-----------|
| Page load | Curtain split (loader exit) |
| Section entry | `translateY(30px) → 0` + `opacity 0 → 1` on scroll, 0.7s ease |
| Nav links hover | Underline sweeps left-to-right, 0.3s |
| Image hover | Grayscale to color, 0.6s |
| CTA arrow | `→` slides right 6px on hover |
| Marquee | CSS infinite scroll, `animation: marquee 30s linear infinite` |
| Custom cursor | Dot (8px ink) + ring (36px, 1px border). Ring enlarges on hover over links. Gold fill on image hover. |

**Easing standard:** `cubic-bezier(0.76, 0, 0.24, 1)` for reveals. `ease` for hovers.  
**No bounces. No elastic. No spring physics.** Movements are deliberate and unhurried.

---

## Spacing System

- Base unit: `8px`
- Section vertical padding: `120–160px`
- Max content width: `1440px`
- Horizontal page margin: `6vw`

---

## What to Tell the Client

> The logo is used directly as a supplied transparent PNG — no font substitution. Ensure the PNG is high-resolution (minimum 800px wide) and has a clean transparent background before handoff.

> The site needs **3–5 high-quality hero images** minimum before build. Cinematic, dark, dramatic lighting preferred — not bright lifestyle shots.

---

## Next Steps

- [ ] Client approves direction (this doc)
- [ ] Collect hero photography assets
- [ ] Confirm services list and copy
- [ ] Confirm team members to feature
- [ ] Build: HTML/CSS prototype → review → final
