# Design

## System Overview

Occuhealth Ireland uses a committed corporate healthcare palette: strong blue, bright lime, clean white space, and workplace photography with blue overlays. The website should feel more premium and fluid than the source decks while staying immediately recognisable as the same brand.

## Colour

Core tokens are based on the master deck palette and expressed in OKLCH in CSS:

- Brand blue: corporate, trustworthy, dominant.
- Deep blue: section backgrounds, overlays, footer, high-contrast text.
- Lime: emphasis, rules, numbers, active states, and select panels.
- White/off-white: breathing room and clinical clarity.
- Muted blue-grey: secondary copy and borders.

Lime is not used for small low-contrast body copy on white. It works best as a large headline accent, rule, icon detail, number, or button fill on blue.

## Typography

Use one humanist/geometric sans family throughout, preferably Manrope loaded from Google Fonts. Headings are large, confident, tightly set, and balanced. Body text is generous and calm, with line lengths capped for readability. Avoid all-caps body copy; short labels can use restrained uppercase.

## Layout

Use a spacious single-page structure with 1280px to 1400px content width. Sections should alternate between white editorial layouts, deep blue brand moments, image-led areas, and selective service grids. Avoid placing every item in a card. Cards, where used, are shallow, squared-off, and functional.

## Motifs

The Occuhealth "O" appears as cropped circular rings, circular image masks, timeline nodes, and subtle line work. It should support the brand rhythm rather than repeat the logo everywhere.

## Components

- Sticky corporate navigation with accessible mobile menu.
- Cinematic hero with blue-tinted workplace imagery and subtle ring motif.
- Editorial section headings with selective lime emphasis.
- Asymmetric service grid with line icons and restrained hover states.
- Split value section with organisational and employee benefits.
- Wellness feature grid with alternating blue, lime, and white blocks.
- Responsive process timeline using numbered circular nodes.
- Human CTA and footer with approved contact details.

## Motion

Motion is restrained: hero load choreography, subtle image scale, IntersectionObserver reveals, timeline progress, and small arrow movement on hover. Respect `prefers-reduced-motion` and never hide content by default while waiting for JavaScript.

## Imagery

Use workplace, consultation, hands, collaboration, and wellbeing photography. Images should feel Irish or European where possible, professional but not staged, and should avoid hospital corridors, doctors posing, influencer wellness scenes, and generic handshake imagery.
