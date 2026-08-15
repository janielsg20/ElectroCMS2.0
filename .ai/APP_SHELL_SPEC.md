# APP SHELL SPEC

## Desktop >=1280
### Sidebar
- left;
- 100dvh;
- 240px expanded;
- 64px collapsed;
- fixed/sticky application region;
- right border.

Groups/order:

### Crear
Editor
Páginas
Plantillas
Componentes

### Administrar
Contenido
Modelos
Taxonomías
Relaciones
Consultas
Formularios
Backend
Roles
Medios

### Apariencia
Themes
Design System
Tokens

### Publicar
Preview
Compatibilidad
Exportar
Deploy

Active item:
icon + label + selected surface + accent bar + aria-current.

Collapsed:
icons + tooltip.

### Topbar
52px.

Left:
breadcrumb/context;
project name;
save status.

Center:
document;
platform;
breakpoint;
undo;
redo;
zoom.

Right:
Preview;
Export;
local/offline indicator;
Settings gear.

**Settings gear is always the final control at the far-right edge.**

### Context Panel
288px default.
240 min.
380 max.

Editor tabs:
- Components
- Pages
- Outline

Components and Outline compose Puck APIs; do not recreate their engines.

### Canvas
flex:1.
dominant region.
Puck.Preview mounts here during editing.

### Inspector
320px default.
280 min.
440 max.

Tabs:
Content, Layout, Style, Responsive, Data, Actions, Accessibility, Advanced.

### Statusbar
26px.
document/platform/breakpoint/zoom/selection/save/diagnostics.

## Laptop
Collapse global nav if needed.
Convert one side tool panel to overlay before shrinking Canvas below useful width.

## Tablet
Rail 56–64.
Tools in Sheet/Drawer.
One secondary tool at a time.

## Mobile
Compact topbar.
Bottom nav:
Components | Pages | Canvas | Properties | More.

More:
Outline, Data, Actions, State, Media, Settings, Export.

Properties = bottom sheet.
Outline = full-height sheet.
No compressed desktop layout.
