---
name: Atelier Vulcan System
colors:
  surface: '#f9f9f8'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#765840'
  on-secondary: '#ffffff'
  secondary-container: '#fdd5b6'
  on-secondary-container: '#785b42'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#121c28'
  on-tertiary-container: '#7a8594'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdcc1'
  secondary-fixed-dim: '#e6bfa1'
  on-secondary-fixed: '#2b1704'
  on-secondary-fixed-variant: '#5c412a'
  tertiary-fixed: '#d9e3f4'
  tertiary-fixed-dim: '#bdc7d8'
  on-tertiary-fixed: '#121c28'
  on-tertiary-fixed-variant: '#3d4855'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.14em
  label-mono:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
---

## Brand & Style

This design system delivers an ultra-minimalist, high-end luxury creative studio aesthetic, anchored in the principles of Swiss typographic discipline, architectural monograph layout, and modern industrial craft. Designed for Vulcan International (`vulint`), the experience commands gravitas through disciplined restraint, vast whitespace rhythm, and razor-sharp geometric precision. 

The emotional response evoked is quiet authority, architectural permanence, and bespoke craftsmanship. Every layout operates like an elite exhibition catalogue or architectural folio: zero visual noise, content-first framing, and absolute geometric certainty. The aesthetic draws directly from the faceted triangular "V" monogram—channeling bevels, diagonal cuts, and hairline divisions that celebrate structural form over superficial ornament.

## Colors

The palette is rooted in gallery neutrals, architectural concrete, and mineral accents:

- **Canvas & Whitespace**: Primary canvas tone is `#FBFBFA` (warm porcelain), with secondary surface layers at `#F5F5F3`. Surface containers and hairpins utilize `#E5E5E3` and `#D1D1CE`.
- **Text & Mass**: Pitch black and deep carbon (`#111111` and `#1C1C1E`) drive primary text, solid buttons, and heavy structural anchors, providing clinical contrast. Midtone text and secondary labels rest at `#8E8E93`.
- **Strategic Mineral Accents**: 
  - `primary_color_hex` (`#111111`) serves as the dominant presence for structural framing and typography.
  - `secondary_color_hex` (`#9E7D62` — Volcanic Bronze) is deployed sparingly for curated highlights, active states, active tab indicators, and boutique metadata tags.
  - `tertiary_color_hex` (`#2B3542` — Deep Volcanic Slate) serves as an alternative deep foundation for architectural contrast blocks and hero dark sections.

The system is light-first by default to evoke printed gallery books, with seamless inversion capabilities to deep matte carbon (`#111111`) for cinematic showcase viewports.

## Typography

Typography adheres strictly to Swiss Modernism: pristine grotesque mechanics, negative tracking on large headlines, and tracked-out micro-caps for indexes, folio markers, and metadata.

- **Scale & Rhythm**: Headings employ razor-sharp, negative tracking (`-0.02em` to `-0.04em`) to lock character pairs tightly like cast lead type.
- **Editorial Sub-systems**: All architectural tags, system indicators, item numbers, and section labels use `label-caps` (`10px / 0.14em tracking`) in all-caps.
- **Form Follows Function**: Body copy maintains generous line-heights (`1.6` multiplier) to honor readability against expansive negative space.

## Layout & Spacing

The layout philosophy implements a strict architectural grid system, evoking oversized coffee-table publications and gallery wall plans:

- **Grid Architecture**: 12-column dynamic modular grid with generous outer margins (`4rem` / `64px` on desktop) ensuring wide perimeter borders. Columns are separated by razor gutters (`1.5rem`).
- **Reflow & Breakpoints**:
  - Desktop (>1200px): Full 12-column layout with expansive multi-column whitespace buffers (e.g., text spans 5 columns, skips 2 columns, metadata occupies 3 columns).
  - Tablet (768px - 1199px): 8-column layout; perimeter margins tighten to `2.5rem`.
  - Mobile (<768px): 4-column layout; perimeter margins shift to `1.25rem` (`margin-mobile`), maintaining tight, functional containment.
- **Horizontal & Vertical Baseline**: Rhythmic vertical spacing leans on large intervals (`space-xl` and double `space-xl`) between chapters and project items, establishing visual breathing room and museum-grade pacing.

## Elevation & Depth

Visual hierarchy abandons artificial drop shadows and blurred skeuomorphism completely in favor of structural, planar discipline:

- **Surface Tonal Layers**: Elevation is communicated through shifts in solid warm tones. Base canvas rests at `#FBFBFA`, layered cards or inspect panels step to `#F5F5F3`, and active/selected segments recess into `#E5E5E3`.
- **Architectural Hairlines**: Depth boundaries are defined strictly through crisp 1px low-contrast outlines (`#E5E5E3` on light canvas, `#262626` on dark modules). Dividers never exceed 1px.
- **Faceted Overlays & Geometry**: Floating viewports and modal drawers utilize no blur, opting instead for solid, uncompromising planes framed with hairline borders and an optional single `#111111` 10% diffuse floor tint for modal focus.
- **Shadow Exclusion**: Ambient blurry drop shadows are prohibited across all standard components, ensuring elements feel tactile, authentic, and physically flush with the page plane.

## Shapes

The shape system is absolute and uncompromising: **`0` (Sharp)**.

All buttons, inputs, dialogs, media framing containers, chips, and cards maintain pristine `0px` border-radii. This zero-radius mandate directly honors the sharp, architectural angles of the faceted 'V' brandmark. Precision 45-degree and 60-degree corner notches or chamfers may be selectively applied as intentional decorative accents on primary action indicators, technical badges, or hero framing masks.

## Components

### Buttons
- **Primary**: Solid carbon black (`#111111`) fill, crisp white (`#FBFBFA`) text, `0px` radius, uppercase `label-mono` type. Padding: `14px 28px`. Hover interaction: instantaneous transition to volcanic slate (`#2B3542`) or fine 1px inset bronze border (`#9E7D62`).
- **Secondary / Ghost**: Transparent fill, 1px perimeter border in `#111111` (or `#E5E5E3` for muted variant). Hover interaction: fill inverts smoothly to `#111111` with text changing to white.
- **Text Link Action**: Bare text accompanied by an architectural directional arrow (`→`), baseline underlined with a 1px gap, shifting right by `4px` on hover.

### Inputs & Text Areas
- **Form Fields**: Crisp bottom hairline rule (1px `#D1D1CE`) or full 1px perimeter box with zero corner radius. Background is `#F5F5F3` or pure transparent.
- **Labels**: Floating uppercase `label-caps` in `#8E8E93`, shifting to volcanic bronze (`#9E7D62`) upon field focus. Focus border transitions from `#D1D1CE` to solid `#111111`.

### Chips & Badges
- **Specification Chips**: Sharp rectangular tags (`0px` radius) with a 1px hairline border (`#E5E5E3`), containing micro-caps metadata text. Active chips feature a solid `#111111` fill or a subtle warm bronze outline (`#9E7D62`).

### Lists & Folio Indexes
- **Index List**: Monograph-style horizontal rows separated by 1px `#E5E5E3` rules. Left-aligned numerical counter (`01`, `02`, `03` in `label-mono`), center-aligned title in `headline-sm`, and right-aligned category tags in `label-caps`. Hover activates an instantaneous background shift to `#F5F5F3`.

### Cards & Project Frames
- **Architectural Cards**: Zero border radius, framed with hairline rules or borderless against alternating background steps (`#F5F5F3`). Imagery features an ultra-subtle zoom (1.02x) over 400ms ease-out on cursor hover, never breaking outside its strict rectangular frame.

### Checkboxes & Radios
- **Checkboxes**: Sharp square (`16px × 16px`), 1px solid border. Checked state fills with `#111111` accompanied by a geometric white inner check or solid square block.
- **Radios**: Sharp square container with an inner concentric square pip, avoiding rounded forms to preserve total geometric consistency.

### Monogram Symbolism
- The faceted geometric 'V' is leveraged as an interactive watermark, precision grid alignment device, and loading motif. The diagonal angle from the logo's inner slash informs divider slant angles and directional hover markers across the interface.