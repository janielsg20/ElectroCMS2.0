# UX / INFORMATION ARCHITECTURE

ElectroCMS must feel:
**WordPress + Elementor + JetEngine power, simplified inside a modern visual builder.**

# 1. Progressive Disclosure

Power exists, but not all at once.

Order:
1. primary task;
2. contextual settings;
3. advanced settings;
4. diagnostics/developer detail.

Do not show every relation/index/capability option during a simple text edit.

---

# 2. Top-level navigation rationalization

Top-level Sidebar stays:

## Crear
Editor
Páginas
Plantillas
Componentes

## Administrar
Contenido
Modelos
Taxonomías
Relaciones
Consultas
Formularios
Backend
Roles
Medios

## Apariencia
Themes
Design System
Tokens

## Publicar
Preview
Compatibilidad
Exportar
Deploy

Not top-level:
- Elements -> Editor > Components.
- Layers -> Editor > Outline.
- Fields -> Models > Fields.
- Records -> Content.
- Filters -> Queries + Filter components.
- Dashboards -> Backend.
- Settings -> gear.
- Import -> Project Home / Project menu.
- Export already under Publicar.

This reduces navigation duplication.

---

# 3. Main navigation

Default:
Icon + label.

Icon-only:
- collapsed sidebar;
- universal compact toolbar actions;
- space-constrained mobile control.

Always:
tooltip + aria-label for icon-only.

Use one icon family/stroke system.

---

# 4. High Density

High Density means:
many useful facts/actions per viewport, well grouped.

It does NOT mean:
- 18px touch targets;
- unreadable 10px text;
- no breathing room;
- border around every field.

Use hierarchy:
Section -> Group -> Control.

Cards only for real conceptual grouping.

---

# 5. Palette

Desktop:
two-column compact grid when the Context Panel width allows.

Each item:
- icon;
- name;
- one-line description;
- optional badge Core/Preset/Block/Alias.

Search:
- name;
- intent/function;
- category;
- keywords;
- familiar conceptual references.

Examples:
search `posts` -> Listing, Heading/Text bindings, Featured Image preset.
search `JetEngine` -> relevant Electro dynamic tools, clearly described as conceptual equivalence, not code compatibility.

Favorites/Recent:
preferences, not copied components.

---

# 6. Inspector

Tabs:
Content
Layout
Style
Responsive
Data
Actions
Accessibility
Advanced

Do not show empty/irrelevant fields.

Advanced groups collapsed by default.
Error badge remains visible even when group collapsed.

Labels:
user-language first.
Technical term in help if useful.

Example:
`Dirección`
help: `Flex direction — determina si los hijos se colocan horizontal o verticalmente.`

---

# 7. Numeric/unit controls

Show common units first:
px, %, rem, auto when context permits.

Advanced:
em, vw, vh, etc.

Spacing:
visual Margin/Padding control.
Link/unlink sides state must be obvious.

---

# 8. Responsive values

Each responsive property visibly shows:
- Base;
- Inherited from Desktop/etc.;
- Override here.

Actions:
Override
Reset

Never let the user edit an inherited value without understanding the scope.

---

# 9. Empty states

Examples:

Canvas:
`Empieza a construir`
Actions:
Add Container
Insert Template
Open Components

Inspector:
`No hay elemento seleccionado`
`Selecciona un elemento para editar sus propiedades.`

Outline:
`Aún no hay elementos.`

Content:
`No existen registros de este tipo.`

Queries:
`Crea una consulta para alimentar Listings y Filters.`

Export:
`Selecciona un destino para comprobar compatibilidad.`

No blank white regions.

---

# 10. Feedback

Routine success:
Toast/status.

Recoverable error:
inline + retry.

Destructive confirmation:
Dialog.

Settings/tools:
Sheet.

Small contextual selector:
Popover.

---

# 11. Mobile

Do not shrink desktop panels.

Use:
- screen routes;
- bottom nav;
- full-height sheets;
- bottom sheets;
- cards;
- compact toolbars.

All important functions remain accessible.
