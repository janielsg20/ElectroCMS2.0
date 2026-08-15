# EDITOR ENGINE — Fifth Final

Engine: Puck.

## Composition
- Components -> Puck.Components/Drawer.
- Outline -> Puck.Outline.
- Canvas -> Puck.Preview.
- Inspector Content -> Puck.Fields.
- Nested content -> Puck Slots (`field.type="slot"`).

## Legacy data
DropZone/zones is migration-only.
Use Puck official migrate helper; new project data never adopts legacy zones as the permanent shape.

## Electro additions
- Pages tab.
- Layout/Style/Responsive/Data/Actions/A11y/Advanced inspector tabs.
- custom breakpoints/platform overrides.
- guides/rulers/snapping.
- Palette metadata/presets/blocks.
- global components.
- compatibility diagnostics.
- project-object persistence mapping.

## History
Puck history = session visual undo/redo.
ProjectRevision = cross-session restore.
They are not the same subsystem.

## Styling
Map Electro Studio tokens to Puck's official CSS custom properties/theme variables before considering UI overrides.

## History policy
Use Puck public history API. A configurable limit may trim histories through `setHistories`/`setHistoryIndex`; do not create another stack.

## Stability
Public Composition/Slots APIs first.
Experimental API requires adapter/fallback.
Puck AI remains optional post-core while cloud/account/API-key dependent.
