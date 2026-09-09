# Design

## Source of truth

Use `occuhealth branding stuff/OccUhealth_MINI BRAND DOCUMENT.pdf` (May 2026) and its accompanying SVGs. The latest client feedback makes the original “Built around your organisation” photo/content composition the reference for the whole page. Use balanced typography, purposeful green accents and a thin frame around the shared founders photograph. Avoid small introductory labels and oversized headings.

## Colour

The interface has exactly three colour values:

- Cobalt blue `#005B9D`: dominant backgrounds, headings, body text on light surfaces, and primary actions.
- Brand off-white `#F6F8F9`: light surfaces and typography on blue.
- Brand green `#AAC334`: benefit headings, oval artwork, prominent actions and selective icon accents.

Use only these three brand colours. Blue on green is reserved for large or bold text and icons; body copy sits on off-white or blue for stronger contrast. Do not introduce additional blues, grey text or decorative mixed-colour gradients. Transparency is reserved for photographic overlays and official motifs. Photography retains its natural colours.

The historical `--brand-blue-deep` and similar aliases resolve to the same cobalt blue; they are not separate shades.

## Typography

Use the bundled Nexa Bold for headings and key messaging, Neue Haas Unica W1G Regular for body copy, and Helvetica as fallback. Preserve the designer's wordmark geometry rather than recreating it as text. Headings are balanced, readable and no larger than 6rem; body copy uses comfortable line lengths.

## Layout and components

Use a spacious single-page layout with a maximum content width of 1360px. Alternate cobalt sections with off-white sections and people-focused imagery.

- Split hero: blue text panel beside natural photography, with a headline capped at 4rem and no introductory eyebrow. An off-white navigation bar and service links establish a consistent frame.
- The original shared founder photograph inside the official double-O, with Cathy O’Reilly labelled on the left and Sharon Cleary on the right.
- Blue Services section with photographic panels, off-white content, oval navigation and all service titles visible.
- Off-white Value section with green/blue benefit headings and a blue outcomes band below.
- Screening programmes pairing a workplace photograph with concise capability summaries.
- Blue contact section with clear office details and portraits of the clinical team.
- Off-white footer with the blue wordmark and complete contact information.

Use consistent 10px rounded corners for photographic panels. Section headings share a 2–3rem scale. Keep the original brand colours solid and avoid excessive shadows. Section names are clear headings, without repeated tiny uppercase labels.

## Brand artwork

`public/brand/` contains web-ready SVGs derived from the supplied designer files. Wordmarks retain their path geometry, colours and canvas; only Illustrator metadata and out-of-canvas swatches are removed. The double-O symbols reuse the original two paths without redrawing or recolouring them. Choose the blue mark on off-white and the inverse mark on blue. Do not substitute CSS circles for the brand symbol.

## Motion and accessibility

Keep motion restrained and respect reduced-motion preferences. Content must remain visible without entrance animations. Provide visible keyboard focus, at least 44px interactive targets and readable layouts from 320px upwards. Body text must maintain WCAG AA contrast; green is not a body-text colour.

## Imagery

Keep workplace, consultation and founder photography visible. Favour practical professional interactions over abstract illustrations or generic medical imagery. Keep contact details and the service description easy to find, as required by the guide.
