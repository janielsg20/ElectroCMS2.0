# DESIGN SYSTEM — ElectroCMS Studio + Generated Projects

## Separation
1. Studio Design System: application UI only.
2. Frontend Project Theme: generated frontend.
3. Backend Project Theme: generated admin.
They can share design vocabulary but never mutate each other implicitly.

## Studio visual direction
High-density, minimal-clean, professional builder UI.
Dense information with readable hierarchy, not tiny controls.

## Studio tokens
- semantic background/surface/elevated/overlay;
- text primary/secondary/muted/disabled;
- border/default/subtle/strong;
- accent/selection/focus;
- success/warning/error/info;
- canvas/guides/snapping;
- spacing scale;
- control heights;
- typography;
- radii;
- shadows/elevation;
- icon sizes;
- motion durations/easing;
- panel widths;
- breakpoints.

## Studio Appearance
Configurable via Settings:
light/dark/system, colors, typography, icon sizing/style policy, radius, shadow, density, control size, button/field shape, menus, spacing, motion intensity and contrast.
Use tokens/CSS variables; do not hardcode feature styling.

## Control anatomy
Label -> control -> binding/token button if applicable -> scope/inheritance indicator -> reset/help -> validation.
Do not put every row in a card.

## Iconography
Use Lucide as the default OSS icon family through semantic Electro icon IDs and target adapters; reverify exact target packages at pinning.
Use one coherent icon system.
Primary nav uses icon + label.
Icon-only requires tooltip and aria-label.

## Motion
Motion communicates state/layout change.
Respect reduced-motion.
No decorative animation that delays editing.

## Project theme presets
High Density, Google Bento Grid, Minimal Clean, Elegant Editorial, Sophisticated Dark, SaaS Glassmorphism, Material Neutral, Neobrutalist Modern, Corporate Pro, Technical Dashboard.
All use the same theme schema.
