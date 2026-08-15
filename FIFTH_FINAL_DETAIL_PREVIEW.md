# FIFTH FINAL DETAIL PREVIEW

---

## .ai/PROMPT_MAESTRO_ELECTROCMS_2.md

# PROMPT MAESTRO — ELECTROCMS 2.0
## Cuarta revisión lógica: OSS-first, local-first, multi-target y prescriptiva

# 0. Cómo debes obedecer este documento

Este Prompt Maestro no es una descripción inspiracional. Es un contrato de implementación.

Actúa como:
- Principal Software Architect;
- Senior React/TypeScript Engineer;
- Senior Product Designer de visual builders;
- especialista en CMS dinámicos;
- especialista en WordPress/PHP/MySQL;
- especialista en local-first/offline;
- especialista en React Native/Expo;
- especialista en accesibilidad, seguridad, testing y generación de código.

No improvises otra arquitectura.

Antes de cada microfase:
1. lee `TRACKING.md`;
2. lee `MEMORY.md`;
3. lee `RULES.md`;
4. lee `ENGINE_RESPONSIBILITY_MATRIX.md`;
5. lee la fase activa;
6. lee la microfase activa;
7. identifica el engine OSS owner;
8. identifica qué debe construir ElectroCMS;
9. identifica qué está prohibido reconstruir;
10. lista los archivos existentes relacionados;
11. escribe/actualiza tests;
12. implementa;
13. ejecuta gates;
14. actualiza documentación;
15. solo entonces avanza.

Si una función ya la resuelve correctamente un engine OSS aprobado:
- úsala;
- adáptala;
- compónla;
- estilízala;
- crea la semántica portable necesaria.

NO escribas otro motor competidor.

---

# 1. Misión de producto

Construye ElectroCMS 2.0 desde cero.

ElectroCMS es un CMS visual no-code/low-code profesional, local-first y multi-target.

Debe combinar, con identidad propia y una experiencia simplificada, capacidades conceptualmente comparables a:
- WordPress;
- Elementor;
- ACF;
- JetEngine;
- JetFormBuilder;
- JetSmartFilters;
- JetStyleManager;
- visual backend builders;
- Webflow/Framer-like visual editing patterns;
- app builders para mobile.

Estas plataformas son referencias de capacidad.
No copies:
- código;
- marcas;
- iconografía;
- textos;
- composición visual propietaria.

El producto final debe permitir a un usuario no técnico construir visualmente:
- sitios;
- páginas;
- headers;
- footers;
- templates;
- frontend;
- backend administrativo;
- dashboards;
- CMS;
- Content Types;
- fields;
- taxonomies;
- relations;
- queries;
- filters;
- forms;
- roles;
- media;
- state;
- automation/action flows;
- tiendas;
- directorios;
- CRM;
- LMS;
- reservas;
- inventarios;
- apps de negocio.

---

# 2. Requisitos no negociables

## 2.1 Local-first

Sin conexión deben continuar funcionando:
- Project Home;
- abrir proyecto;
- editar documentos;
- Puck editor;
- Models/Content;
- Queries;
- Forms;
- Backend local;
- Media local;
- State/Actions que no dependan de red;
- Preview;
- Export local/source.

No son obligatorios:
- cloud;
- Firebase;
- Gemini;
- API externa;
- cuenta SaaS;
- servidor ElectroCMS.

Integraciones externas son providers opcionales.

## 2.2 Multi-target

Destinos de primera clase:
- Local;
- Static;
- React;
- PWA;
- Android Native;
- iOS Native;
- Capacitor hybrid fallback;
- LAMP;
- WordPress Theme + Companion Plugin.

Ningún destino puede perder funciones silenciosamente.

## 2.3 Responsive

Studio:
- Desktop;
- Laptop;
- Tablet;
- Mobile.

Generated projects:
- custom breakpoints;
- Web responsive;
- Native adaptive.

## 2.4 Accesibilidad

Objetivo WCAG 2.2 AA en Studio/Web.
React Native accessibility equivalente:
- labels;
- roles;
- font scaling;
- focus/screen-reader semantics;
- touch targets.

---

# 3. Regla de arquitectura: Engine Ownership

Para cada responsabilidad pregunta primero:

### Visual editor?
Puck.

### Studio database?
PGlite + Drizzle.

### Admin CRUD?
Refine.

### Table behavior?
TanStack Table.

### Form state?
React Hook Form.

### Validation?
Zod.

### Query rules UI/formatters?
React Query Builder.

### Runtime query cache?
TanStack Query.

### Workflow graph/runtime JS/history?
Rete.

### Rich text?
Tiptap.

### Runtime state?
Zustand.

### Native runtime/router?
Expo + React Native + Expo Router.

### Native DB?
Expo SQLite + Drizzle.

### Native device API?
Expo module/adapter.

### Accessible Studio primitive?
shadcn/Radix.

Si el engine lo hace:
NO reconstruirlo.

---

# 4. Stack core

- React + TypeScript strict.
- Vite Studio.
- PWA support.
- Puck.
- PGlite.
- Drizzle.
- TanStack Query.
- Refine Core.
- TanStack Table.
- React Hook Form.
- Zod.
- React Query Builder.
- Rete.js.
- rete-engine.
- rete-history-plugin.
- Tiptap.
- Zustand.
- shadcn/ui source.
- Radix primitives.
- Tailwind/CSS para Studio/Web output.
- React Native.
- Expo.
- Expo Router.
- Expo SQLite.
- NativeWind/StyleSheet adapter.
- Capacitor fallback.

Post-core:
- Yjs;
- XState;
- GraphQL provider;
- custom code sandbox;
- public plugin SDK;
- desktop wrappers.

---


# 4A. Auxiliary UI engines — conditional, adapter-bound

Do not build complex visualization/calendar/drag engines from zero.

- Lucide: default icon family through semantic Electro icon IDs.
- Apache ECharts: Web/Studio/React/LAMP/WP client Chart renderer.
- Victory Native: Native Chart renderer only when used and compatible.
- FullCalendar Standard: Web/Studio/React/LAMP/WP Calendar renderer; no Premium/Scheduler default dependency.
- react-native-calendars: Native Calendar supported views.
- dnd-kit: Web Kanban drag/sort.

These libraries are NOT serialized into project models.
They are target adapters and RuntimeDependencyManifest includes them only when a project actually uses the capability.

# 5. Model ownership

No construyas un mega Project JSON.

## 5.1 Project Objects persistentes

Persistir independientemente:
- ProjectDefinition;
- Documents;
- Schema;
- QueryDefinitions;
- ActionGraphs;
- StateDefinitions;
- Roles/Policies;
- Routes;
- Theme/DesignSystem;
- project-specific reusable/global component definitions.

## 5.2 Registries de aplicación

NO copiar completos dentro de cada proyecto:
- ComponentRegistry;
- FieldTypeRegistry;
- ActionNodeRegistry;
- ProviderRegistry;
- PlatformCapabilityRegistry;
- BlueprintCatalog.

Project objects solo referencian IDs/versiones necesarios.

## 5.3 Content/runtime entities

Fuera de ProjectDefinition:
- records;
- taxonomy terms;
- relation edges;
- media metadata/bytes;
- users/profile records;
- audit events;
- drafts.

---

# 6. ElectroDocument como único árbol visual

Un solo canonical visual tree.

`ElectroDocument.kind`:
- page;
- template;
- form;
- backend-screen;
- reusable/global component document cuando sea útil.

No crear otro tree para:
- Template;
- Form;
- Backend;
- Mobile.

Cada ElectroNode:
- id;
- componentRef/version;
- props;
- slots;
- layout;
- style;
- responsive overrides;
- platform overrides;
- bindings;
- action refs;
- display conditions;
- accessibility metadata.

Form visual layout y su `formMeta` viven en el mismo Document kind=form; no existe ElectroFormDefinition paralelo.
Backend visual layout usa Admin nodes.
Template es Document kind=template.

---

# 7. Engine Payload Policy

No dupliques un AST OSS solo por “pureza”.

Permitido:
```ts
{
  engine: "rqb",
  schemaVersion: 1,
  value: ...
}
```

y:
```ts
{
  engine: "tiptap",
  schemaVersion: 1,
  json: ...
}
```

El adapter:
- valida;
- migra;
- interpreta.

Prohibido persistir:
- Puck AppState/history;
- Rete class instances/history;
- Refine hooks/state;
- TanStack table runtime state;
- Zustand store object;
- Drizzle schema runtime object.

---

# 8. AppShell exacto

No cambies por preferencia estética.

## Desktop

### Sidebar
- left;
- 240px expanded;
- 64px collapsed;
- 100dvh.

### Topbar
- 52px.

### Context Panel
- 288px;
- min 240;
- max 380.

### Canvas
- flex:1;
- región dominante.

### Inspector
- 320px;
- min 280;
- max 440.

### Statusbar
- 26px.

### Settings
Icono engranaje.
Siempre último control del extremo derecho del Topbar.

---


# 8A. Studio Appearance — independent from project themes

Settings gear > Studio Appearance must edit a `StudioAppearanceProfile` stored as user/workspace preference.

Controls:
- light/dark/system;
- semantic colors;
- typography;
- icon size/style policy;
- radii;
- shadows/elevation;
- density;
- control size;
- button/field shape;
- menu appearance;
- spacing;
- motion intensity;
- contrast preference.

Implementation:
1. change Studio tokens/CSS variables only;
2. preview/apply/revert;
3. allow personal Studio presets;
4. respect reduced-motion and accessibility constraints;
5. never mutate Frontend Theme, Backend Theme, ElectroDocument or ExportIR.

# 9. Sidebar / Information Architecture

## Crear
- Editor
- Páginas
- Plantillas
- Componentes

## Administrar
- Contenido
- Modelos
- Taxonomías
- Relaciones
- Consultas
- Formularios
- Backend
- Roles
- Medios

## Apariencia
- Themes
- Design System
- Tokens

## Publicar
- Preview
- Compatibilidad
- Exportar
- Deploy

No crear top-level:
- Layers;
- Fields;
- Filters;
- Dashboards;
- Settings;
- Import.

Esas funciones tienen owner contextual:
- Layers -> Editor Outline;
- Fields -> Models;
- Filters -> Queries/Editor;
- Dashboards -> Backend;
- Settings -> gear;
- Import -> Project Home/project menu.

---

# 10. UX: Progressive Disclosure

La potencia debe existir, pero no toda visible simultáneamente.

Orden de exposición:
1. acción principal;
2. opciones contextuales;
3. opciones avanzadas;
4. diagnostics.

High Density no significa controles microscópicos.

Jerarquía visual:
Section -> Group -> Control.

No pongas borde/card alrededor de cada control.

Main nav:
icon + label.

Icon-only:
solo collapsed/universal + tooltip + aria-label.

---

# 11. Design System

Usa shadcn/Radix como primitive behavior.

ElectroCMS aplica:
- tokens;
- iconography;
- density;
- typography;
- state styling;
- layout.

Primitives:
- Button;
- IconButton;
- Input;
- Textarea;
- NumberInput;
- Select;
- Combobox;
- Checkbox;
- RadioGroup;
- Switch;
- Slider;
- Tabs;
- Accordion;
- Tooltip;
- Popover;
- Menu;
- ContextMenu;
- Dialog;
- Sheet;
- Drawer;
- Toast;
- Tree when a non-Puck tree is truly needed;
- Command Palette.

No controles browser-default-looking en UI final.

---

# 12. Editor — Composition first con Puck

Context tabs:
1. Components
2. Pages
3. Outline

Canvas:
Puck Preview.

Inspector Content:
Puck Fields.

## 12.1 Components
Usa Puck.Components/Drawer.

Electro añade:
- search;
- categories;
- favorites;
- recent;
- presets;
- blocks;
- aliases;
- descriptions;
- synonym index.

No segundo DnD engine.

## 12.2 Outline
Usa Puck.Outline base.

Electro añade wrappers solo para gaps:
- rename;
- lock;
- visibility;
- context actions;
- global component metadata.

No segundo tree/DnD state.

## 12.3 Preview
Puck.Preview.

Electro añade:
- workspace background;
- zoom/fit;
- guides;
- rulers;
- snapping;
- platform diagnostics.

## 12.4 Fields
Puck.Fields para component content props.
Custom Puck fields para Electro controls.

## 12.5 Nested content
Todo nested content nuevo usa Puck Slots (`field.type="slot"`).
No diseñes nuevas estructuras con DropZone/zones.
Legacy data usa únicamente el helper oficial de migración DropZone -> Slots dentro del Puck adapter.
ElectroNode slots deben alinearse con el modelo recursivo de Slots para reducir transformaciones.

---

# 13. Puck stability policy

Usa public Composition API primero.

Para apariencia de las superficies Puck usa primero sus CSS custom properties/theme tokens oficiales mapeados desde los Studio tokens. No uses `overrides` experimentales para styling básico.

No hagas release-critical:
- overrides experimentales;
- experimental plugins;
- experimental fullscreen;
sin adapter/fallback.

Puck AI no es core.
Mientras requiera Puck Cloud/account/API key:
- solo post-core provider opcional;
- nunca requisito del editor local.

---

# 14. Editor advanced requirements

Aunque Puck sea engine, el producto debe ofrecer:
- click insert;
- nested containers;
- Flex/Grid;
- relative/absolute;
- reorder;
- visual resize;
- direct Text/RichText edit;
- multi-select;
- copy/paste;
- duplicate;
- delete;
- lock;
- hide;
- rename;
- group/ungroup;
- Save as Block;
- Save as Template;
- Global Components;
- context menu;
- shortcuts;
- rulers;
- guides;
- snapping;
- distance indicators;
- ancestry breadcrumbs;
- outline;
- undo/redo;
- autosave;
- recovery.

Implementación:
1. Puck public API.
2. Thin Electro adapter/overlay.
3. Nunca segundo canvas/DnD.
4. No fork Puck por defecto.

---

# 15. Undo, Autosave y Revisions son diferentes

## Undo/Redo
Puck session history. Settings puede limitar el tamaño mediante la API pública history/setHistories; no construyas una history stack paralela.

## Action Graph Undo/Redo
Rete History Plugin.

## Autosave
Dirty project objects -> PGlite incremental transaction.

## Revisions
Cross-session checkpoints de committed project objects.

No universal History Engine.

---

# 16. Breakpoints

Initial:
- Desktop;
- Laptop;
- Tablet landscape;
- Tablet portrait;
- Mobile large;
- Mobile small.

User:
- edit widths;
- create custom;
- rename custom;
- override property;
- inherit;
- reset;
- visibility;
- order;
- sizing;
- alignment;
- spacing;
- portrait/landscape preview.

Use Puck viewports for editor frame.
Canonical responsive values remain Electro.

---

# 17. Component rationalization

Palette item ≠ runtime class.

Classify:
- Core;
- Preset;
- Composite Block;
- Binding;
- Form alias;
- Filter alias;
- Action;
- Blueprint configuration.

## Layout Core
Container
Divider
Tabs
Accordion
Modal
Drawer

Section/Row/Column/Stack/Grid/Wrap/Columns/Flex/Sticky/Scroll/Spacer:
Container presets/configuration.

## Content Core
Text
RichText
Image
Gallery
Icon
Button
Link
Navigation
Video
Audio
SVG
List
Table
CodeBlock
Embed
Map
Carousel
Progress

Heading/Paragraph/Badge:
Text presets.

Breadcrumbs:
Navigation preset.

## Dynamic Core
Listing
Filter
Pagination

Dynamic Repeater:
Listing preset with collection binding.

Dynamic Text/Image/Author/etc.:
Binding.

## Forms Core
Form
FormField

All field types, including Group/Repeater, are FormField aliases/configuration.
Form Status is a Text preset bound to form/action status.

## Commerce
Commerce Pack:
Schema + queries + blocks + bindings + state + actions.
No separate commerce engine.

---

# 18. Palette UX

Desktop two-column compact grid when width allows.

Item:
- icon;
- name;
- one-line description;
- type badge when useful.

Categorías visibles exactas:
- Layout;
- Basic;
- Content;
- Navigation;
- Dynamic Data;
- Forms;
- Filters;
- Social / Contact;
- Admin;
- Commerce Pack.

Search by:
- name;
- function;
- category;
- keywords/synonyms;
- familiar conceptual references.

`PALETTE_CATALOG_MATRIX.md` determina si cada item es Core, Preset, Block, Binding, Alias, Action o Provider.

Favorites/Recent:
Workspace preference, not duplicate component.

Drag AND click-to-insert.

---

# 19. Inspector

Exact tabs:
1. Content
2. Layout
3. Style
4. Responsive
5. Data
6. Actions
7. Accessibility
8. Advanced

## Layout
sizing, flex/grid, position, order, z-index, overflow.

## Style
typography, foreground, background, gradients/images, border, radius, shadow, opacity, visual effects, hover/focus/active/disabled, transition/motion.

## Responsive
breakpoint source/inherit/override/reset/visibility/order/platform.

## Data
Set From Data.

## Actions
event -> ActionGraph.

## Advanced
IDs/classes on Web, safe attrs, conditions, diagnostics.

No arbitrary JS.

---

# 20. Studio persistence: PGlite Worker

PGlite runs behind official multi-tab Worker strategy.

Compatibility baseline: persistent `idb://` dataDir. Other PGlite filesystems are opt-in only after capability/benchmark validation.
Media bytes use MediaBlobStorePort: OPFS preferred with IndexedDB Blob fallback; this is not a second structured ProjectRepository.

Stable schema:
- projects;
- project_objects;
- project_revisions;
- content_records;
- taxonomy_terms;
- record_terms;
- relation_edges;
- record_field_index;
- workspace_preferences;
- media_metadata;
- audit_events;
- form_drafts optional;
- runtime auth/user tables where needed.

UI never accesses raw DB.

---

# 21. Incremental project save

On stable edit:
1. determine dirty objectId(s);
2. debounce/idle;
3. validate;
4. deterministic serialize;
5. checksum;
6. transaction;
7. upsert dirty project_objects;
8. update project timestamp;
9. commit;
10. Saved state.

Do not rewrite whole project for one text change.

---

# 22. Project revisions

Checkpoint:
- manual;
- pre-import;
- pre-destructive migration;
- publish/export release;
- coarse auto interval.

Revision stores manifest/object-version refs.

Restore:
create a new current version from old refs.
Do not mutate old history.

---

# 23. Project Home

Without open project:
show Project Home.

Toolbar:
Search -> Active/Archived/Trash -> Sort -> Grid/List -> New Project.

Project card:
thumbnail;
name;
origin kit/blueprint;
modified;
status;
overflow.

Actions:
Open;
Rename;
Duplicate;
Archive;
Backup;
Trash.

Permanent Delete:
Trash only + destructive confirmation.

New:
Basic -> Project Kit/Blueprint -> Design -> Demo Data -> Review.

---

# 24. ElectroSchema / CMS

ContentType:
- slug;
- singular/plural;
- description;
- icon;
- capabilities;
- public/private/internal;
- singleton;
- supports;
- templates;
- workflow;
- field groups.

FieldRegistry includes:
text, textarea, richtext, number, currency, email, phone, URL, date, time, datetime, color, select, radio, checkbox, switch, image, gallery, file, map, relation, user, taxonomy, repeater, group, calculated, conditional.

No ALTER TABLE per field.

---


## ContentType storage hint

ContentType may declare `storageHint = generic | dedicated-target`.
The Studio and Native editor runtime still use the generic store.
LAMP/WordPress exporters may compile high-volume operational types to a dedicated target table when their adapter supports it and Compatibility reports the adaptation.
Do not create dynamic Studio DDL from this hint.

# 25. Generic Content Store

Record:
- id;
- contentTypeId;
- status;
- data JSON;
- timestamps.

Taxonomies:
taxonomy_terms + record_terms.

Relations:
relation_edges.

Dynamic field index:
record_field_index.

Only index fields marked:
searchable/filterable/sortable/faceted.

---

# 26. Workflow and revisions for content

ContentType can define:
- Draft;
- Pending;
- Published;
- Archived;
- custom statuses.

Transitions:
permission-aware.

Record history:
audit events / previousData safe.

Restore:
new update created from old revision.

No second workflow/revision engine.

---

# 27. Global Options / Profiles / Data Stores

Use ContentType presets.

Global Options:
singleton internal ContentType.

User Profile:
ContentType linked to user.

Internal Data Store:
private ContentType.

Flexible content:
Group/Repeater/block-like fields.

No special DB engine.

---

# 28. Bindings

ElectroBinding:
- literal;
- current record field;
- relation;
- query result;
- state;
- route param;
- URL search;
- current user;
- form value;
- action output;
- environment;
- media.

Inspector:
Set From Data.

Store reference, not resolved value.

Type-check.
Missing source -> diagnostic.

---

# 29. Queries

ElectroQueryDefinition:
- source(s);
- combine mode;
- RQB rules wrapper;
- relation/taxonomy context;
- sort;
- offset;
- pagination;
- aggregate;
- cache policy;
- params.

RQB owns rule tree UI.

Before execution/compilation use RQB `formatQuery(..., "diagnostics")` and convert DiagnosticsResult into Electro diagnostics. Use `@react-querybuilder/core` in non-UI compilers. Unsupported/invalid rules fail closed; never accept a true/no-op fallback silently.

Do not create second rule AST.

## Query security
Parameterized values.
Unsupported formatter rule => blocker/fail closed.
Never accept a true/no-op fallback silently.

---

# 30. Runtime query cache

Use TanStack Query.

Electro defines:
- query keys;
- invalidation;
- stale/retry policy;
- trace metadata.

Refine admin already uses TanStack Query.

No custom query cache engine.

---

# 31. Multi-source queries

Sources:
- ContentType;
- SavedQuery;
- Relation;
- Provider.

Combine:
- single;
- merge;
- union.

Validate result shapes.
No arbitrary cross-provider SQL join.

If pagination/count cannot be represented:
diagnostic.

---

# 32. Filters / facets

One Filter component.

Aliases:
Search, Select, Range, Checkboxes, Radio, Date, Taxonomy, Sort.

Properties:
- applyMode live/manual/url/reload;
- faceted;
- showCount;
- showChips;
- hierarchy.

Facet counts:
record_field_index.

Load More:
Pagination mode.

Reset:
action.

---

# 33. Media

PGlite:
metadata.

OPFS:
bytes.

Library:
- images;
- SVG;
- video;
- audio;
- docs;
- fonts;
- icons;
- folders;
- tags;
- search;
- filters;
- favorites;
- recent;
- metadata;
- alt;
- dimensions;
- size;
- optimization;
- dedupe;
- safe delete;
- usage references.

Validate MIME/content/path.
Sanitize SVG.

---

# 34. Rich Text

One engine: Tiptap.

Puck RichText uses Tiptap.

Record editor:
Tiptap adapter.

Persist wrapper:
engine=tiptap + version + JSON.

Generated read-only frontend/server:
use Tiptap Static Renderer / HTML utilities and explicit Native mappings; do not build a duplicate generic rich-text renderer.
Do NOT ship Tiptap editor if no editing exists.

---

# 35. Runtime State

ElectroStateDefinition:
- id;
- name;
- type;
- scope;
- default;
- persistence;
- sensitivity.

Scopes:
component;
page;
app;
session;
persistent.

Zustand executes.

Derived:
selectors.

No XState core.

---

# 36. Auth / users / profiles

AuthProvider:
- login;
- logout;
- register;
- currentUser;
- restore session.

Credential storage outside ElectroProject.

Current User binding exposes safe public fields only.

Profiles:
ContentType linked to user.

Roles:
capability policies.

---

# 37. Permissions

ElectroPermissionEvaluator is canonical.

Enforce:
- route;
- resource;
- action;
- field;
- export;
- settings.

Refine AccessControlProvider adapts it to admin UI.

Hiding a button is not enforcement.
Service/server/native layer must also deny.

---

# 38. Action Flow / Automation

Rete:
editor, graph, history, JS execution.

ElectroActionGraph:
portable descriptors.

Categories:
- Triggers;
- Logic;
- Data;
- State;
- Navigation/UI;
- Auth;
- Provider/API;
- Native.

Domain-event triggers:
- Record Created/Updated/Deleted;
- Status Changed;
- User Registered;
- Form Submitted.

Use correlation/depth guard.

No generic parallel JS workflow runtime.

---

# 39. Providers

Core:
HTTP/REST.

Optional:
EmailProvider.

Webhook:
HTTP action.

Secrets:
refs only.

No GraphQL core.
No mandatory network.

LAMP/WP may use target-native mail.

---

# 40. Forms

Visual hierarchy:
ElectroDocument Form/FormField nodes.

`ElectroDocument.kind="form"` owns `formMeta`:
mapping/security/draft/submitGraph refs.
There is no separate ElectroFormDefinition.

RHF:
runtime state.

Zod:
validation.

Capabilities:
- conditional fields;
- multi-step;
- repeaters;
- drafts;
- calculated fields;
- record create/update;
- frontend editing;
- register/login;
- media upload;
- relation update;
- navigate;
- messages;
- email;
- webhook.

Anti-bot:
local honeypot/time rules optional.
External CAPTCHA provider optional.
Server CSRF belongs to server targets.

Submit:
ActionGraph.

---

# 41. Backend

Refine Core owns:
CRUD orchestration/data lifecycle.

TanStack Table owns:
table state.

RHF owns:
record forms.

ElectroCMS owns:
- AdminScreen configuration;
- visual backend document;
- navigation;
- columns;
- row/bulk actions;
- permissions;
- theme;
- mobile renderer.

Features:
- Dashboard;
- List;
- Create;
- Edit;
- Detail;
- Quick Edit;
- Bulk actions;
- Saved Views;
- Kanban — record grouping/status, Web drag via dnd-kit + non-drag Move action;
- Calendar — FullCalendar Standard Web, target adapter Native;
- Charts — ChartSpec + Apache ECharts Web/server-client and Victory Native adapter;
- Metrics;
- Filters;
- Search;
- role-specific navigation.

---


# 41A. CMS Record Import/Export

Content and Backend list screens must support CSV data exchange without a second CSV engine.

Use Refine:
- `useExport` for CSV export through DataProvider;
- `useImport` for CSV parse/batched create/createMany.

ElectroCMS adds:
- column -> stable Field ID mapping;
- Zod/FieldRegistry validation;
- relation/taxonomy resolution policy;
- create-only import in core v2; duplicate-key policy skip/error; any future update/upsert must use Refine update/updateMany rather than a parallel CSV engine;
- permission checks;
- current-filter/current-view export;
- secret/hidden-field exclusion;
- progress/error report;
- audit via normal mutations.

Complex media/richtext/repeater fields require explicit JSON/reference mapping or are reported unsupported for CSV. Never export binary media or credentials.

# 42. Native admin

React Native output with admin uses Refine Core headless where Core APIs are runtime-agnostic.

Presentation:
Native components/FlatList/cards.

Router:
Expo Router. Verify and prefer the documented Refine Native/Expo Router integration when compatible; otherwise write only a thin router adapter, not a parallel CRUD framework.

Data:
Expo SQLite.

Do not create a second CRUD/cache framework for Native.

---

# 43. Themes

Separate:
1. Studio Appearance.
2. Frontend Theme.
3. Backend Theme.

Theme = visual tokens only.

Presets:
- High Density;
- Google Bento Grid;
- Minimal Clean;
- Elegant Editorial;
- Sophisticated Dark;
- SaaS Glassmorphism;
- Material Neutral;
- Neobrutalist Modern;
- Corporate Pro;
- Technical Dashboard.

Same Theme engine.

---

# 44. Templates

Template = ElectroDocument kind template.

Kinds:
- Page;
- Header;
- Footer;
- Single;
- Archive;
- 404;
- Section;
- Modal;
- Backend Screen.

Display Conditions:
include/exclude:
- route;
- content type;
- taxonomy;
- role;
- target when applicable.

---

# 45. Saved Blocks / Global Components

Saved Block:
portable composite subtree.

Global Component:
versioned reusable definition + instances/overrides.

Do not make every block a hardcoded component class.

---

# 46. Project Kit semantics

Theme:
visual only.

Template Pack:
documents only.

Blueprint:
schema + documents + backend + queries + forms + actions + roles + optional demo data.

Project Kit:
UX package combining Theme + Templates + Blueprint.

Installer options:
- Design only;
- Templates;
- Structure;
- Demo Data.

This preserves old “complete theme package” behavior without architectural mixing.

---

# 47. Blueprint catalog

Release blueprints:
1. Store
2. Blog
3. Real Estate
4. LMS
5. Booking
6. CRM
7. Directory
8. Creative Portfolio
9. Inventory
10. Restaurant
11. Events
12. Membership
13. Marketplace
14. Jobs
15. Clinic
16. Property Management
17. Helpdesk
18. NGO/Donations
19. Vehicles
20. Tattoo Studio

Plus:
Blank starter.

All use one installer/core.

---

# 48. Roles presets

- Administrator
- Designer
- Editor
- Author
- Manager
- Collaborator
- Client
- Registered User

Editable.
Never `if roleName === "Admin"` in feature UI.
Use capabilities.

---

# 49. Preview

Preview uses runtime renderers, not Puck chrome.

Frontend preview.
Backend preview.
Route preview.
Role simulation.
Platform/breakpoint.

No selection overlays unless debug mode explicitly asks.

---

# 50. Debug

Tabs:
- Data;
- State;
- Queries;
- Actions;
- Permissions;
- Diagnostics.

Redact sensitive values.
Do not ship by default.

---

# 51. Platform Capability Registry

Every:
- component;
- layout/style feature;
- binding;
- query feature;
- form field/action;
- provider;
- action node;

declares target support.

Targets:
Local/Web/React/Static/PWA/Android/iOS/Capacitor/LAMP/WordPress.

Status:
native/adapted/fallback/unsupported/planned.

Diagnostic:
code;
source;
reason;
fix/fallback.

---

# 52. React Native renderer

Map canonical components, not DOM.

Container -> View/Flex.
Scroll -> ScrollView/FlatList.
Text/Heading -> Text.
Image -> native image.
Button -> Pressable.
Listing -> FlatList.
Form -> native RHF controls.
Admin -> Native cards/forms.

Grid:
simple adapted;
advanced diagnostic.

---

# 53. Expo Router policy

Use stable APIs.

Default:
Stack.

Tabs:
standard JavaScript Tabs when requested.

Do not default to unstable native tabs while alpha.

Generated code uses Expo Router navigation APIs.

Reverify dependency versions before pinning.

---

# 54. Native DB

Expo SQLite + Drizzle.

Same conceptual tables:
project/runtime content records;
terms;
relations;
field index;
auth/profile as needed.

No ContentType-specific table generation.

---

# 55. Native capabilities

Adapters:
- Files
- SecureStore
- Location
- Camera/Media
- Notifications
- Haptics
- Share
- Contacts
- Calendar
- Biometrics

Only include/request when used.

---

# 56. Export pipeline

For any target:

1. select committed revision/object set;
2. validate project objects;
3. resolve content/media;
4. capability scan;
5. block fatal diagnostics;
6. build ElectroExportIR;
7. build RuntimeDependencyManifest;
8. compile target;
9. localize assets;
10. generate config/docs;
11. typecheck/lint/build target;
12. verify artifact exists;
13. produce report.

Never mutate project during export.

---

# 57. Runtime Dependency Manifest

Generated output only receives what it needs.

Never by default:
- Puck editor;
- Rete editor/history;
- Studio debug;
- Studio settings.

Conditional:
- rete-engine if workflows execute client-side;
- Refine if admin exists;
- TanStack Table if Web table exists;
- Tiptap editor if richtext editing exists;
- TanStack Query if async/query runtime exists;
- Zustand if state used;
- Expo modules only when capability used.

---

# 58. professionalStudio manifest

Local/React/LAMP/WordPress exports include a versioned manifest preserving:
- schema;
- relations;
- operations;
- templates;
- admin screen metadata;
- capability IDs;
- source/project version;
- migration metadata.

Do not include:
- editor history;
- workspace preferences;
- secrets;
- engine runtime classes.

Purpose:
- reimport;
- diagnostics;
- migrations;
- equivalence testing;
- preserve professional semantics.

---

# 59. Local/React/Static/PWA

## Local
portable package + content/media + manifests + recovery/revision info.

## React
legible source, router, components, styles, runtime data, forms/actions/state used, README.

## Static
only if compatible.

## PWA
manifest, service worker, offline shell.

No cloud dependency.

---

# 60. Android/iOS

Primary:
Expo native.

Android:
source always;
APK/AAB only when toolchain/signing valid.

iOS:
source/Xcode;
IPA only on valid macOS/signing environment.

Do not claim artifact before file verification.

---

# 61. Capacitor

Hybrid fallback.

Show tradeoffs.
Never auto-switch.

---

# 62. LAMP

Generate functional:
- PHP;
- router;
- services;
- repositories;
- MySQL/MariaDB;
- auth/session;
- permissions;
- CRUD;
- query/filter;
- forms;
- media;
- actions;
- migrations;
- installer.

Security:
PDO prepared;
CSRF;
escape;
password hash;
safe upload.

---

# 63. WordPress

Generate:
A. Theme.
B. Companion Plugin.

Theme:
style/functions/header/footer/page/single/archive/404/custom templates/assets.

Plugin:
CPT;
taxonomies;
fields/meta/custom tables where justified;
relations;
roles;
forms;
queries;
filters;
actions;
admin screens;
migrations.

No mandatory Elementor/ACF/JetEngine/etc.

Use:
sanitize;
escape;
nonces;
capability checks.

---

# 64. Professional capability preservation

Do not drop:
- workflow;
- revisions;
- global options;
- profiles;
- internal data stores;
- flexible/repeater/group content;
- multi-source query/merge;
- query cache;
- facets/indexer/chips/hierarchy;
- form calculation;
- frontend edit;
- quick edit;
- bulk actions;
- saved views;
- Kanban;
- Calendar;
- automation;
- audit;
- blueprint kits;
- CMS CSV record import/export;
- Navigation/Social/Contact/business Palette catalog;
- Studio Appearance customization;
- target `storageHint` for optional dedicated server tables.

Implement through existing engines/config, not new engines.

---

# 65. Security

Validate:
- imports;
- wrappers;
- versions;
- checksums;
- ZIP paths;
- file MIME/content;
- SVG;
- HTML/Embed;
- query rules;
- provider config.

No eval.
No secrets in project JSON.
No passwords plaintext.
Parameterize SQL.
Server CSRF.
Permission enforcement.
Redact traces.

---

# 66. Performance

Required strategies:
- PGlite Worker;
- incremental project object save;
- debounced stable edits;
- Puck local history;
- generic field index only where needed;
- TanStack Query cache;
- TanStack Table/Virtual when measured;
- media lazy thumbnails;
- target dependency pruning;
- no full project rewrite on every keystroke.

---

# 67. Accessibility

Studio and outputs:
- keyboard;
- focus-visible;
- screen readers;
- semantic labels;
- errors;
- text scaling;
- contrast;
- reduced motion;
- touch;
- DnD alternative;
- native accessibility props.

---

# 68. Testing protocol

Each microphase chooses relevant:
- unit;
- contract;
- integration;
- E2E;
- export fixture;
- native fixture;
- PHP/WP fixture.

Always:
- lint;
- typecheck;
- test;
- build.

No “passes” claim without command evidence.

---

# 69. Phase order

F00 Audit/POCs.
F01 Monorepo.
F02 Canonical ownership.
F03 Design/AppShell/IA.
F04 PGlite Worker/Persistence/Projects.
F05 Puck Core.
F06 Advanced Editor/Responsive.
F07 Themes/Templates/Reuse.
F08 CMS/Workflow/Indexer.
F09 Bindings/Queries/Filters/Cache.
F10 Media/Tiptap.
F11 State/Zustand.
F12 Auth/Roles.
F13 Rete Actions/Automation/Providers.
F14 Forms.
F15 Backend.
F16 Blueprints/Professional Packs.
F17 Preview/Debug.
F18 Capability Analyzer.
F19 RN Renderer.
F20 Expo Runtime/Native Admin.
F21 Native APIs.
F22 Web/Local exports.
F23 Mobile export.
F24 LAMP.
F25 WordPress.
F26 Hardening/Deploy/Post-core guard.
F27 Cross-target QA/Release.

Do not reorder unless an ADR demonstrates a dependency error.

---

# 70. Microphase execution contract

For EACH microphase:

1. Verify active phase/microphase.
2. Read Engine Responsibility.
3. State why the microphase exists.
4. State what OSS already provides.
5. State what ElectroCMS must add.
6. State what must NOT be built.
7. List files/packages.
8. List preconditions.
9. Define input.
10. Define output.
11. Define persistent data.
12. Define transient data.
13. Define canonical model impact.
14. Define adapter impact.
15. Define UI location if any.
16. Define happy path.
17. Define empty state.
18. Define error state.
19. Define disabled/blocked state.
20. Define responsive.
21. Define accessibility.
22. Define security.
23. Write tests.
24. Implement adapter/domain/config.
25. Implement UI/runtime.
26. Connect persistence.
27. Run lint.
28. Run typecheck.
29. Run tests.
30. Run build.
31. Run E2E/target fixture.
32. Fix all relevant failures.
33. Record exact evidence.
34. Update MEMORY/TRACKING/CHANGELOG.
35. Advance only then.

---

# 71. No-autonomy fallback order

If the AI does not know how to implement a detail:

1. Prompt Maestro.
2. RULES.
3. ENGINE_RESPONSIBILITY_MATRIX.
4. MODEL_OWNERSHIP.
5. DATA_ARCHITECTURE.
6. COMPONENT_RATIONALIZATION.
7. UX_INFORMATION_ARCHITECTURE.
8. phase file.
9. microphase file.
10. official engine docs.
11. ADR.

Do not invent a convention silently.

---

# 72. Experimental API policy

Before dependency pinning/release:
- verify current official versions;
- verify licenses;
- verify API stability;
- run adapter contract tests.

Experimental/alpha capability must:
- be feature-gated;
- have fallback;
- not be release-critical unless ADR accepts risk.

---

# 73. Post-core scope

Do not block core on:
- AI;
- collaboration;
- XState;
- GraphQL;
- code sandbox;
- public plugin SDK;
- desktop native wrappers.

Document in POST_CORE_ROADMAP.

---

# 74. Single-source editable Store release fixture

Final QA must use one real Store project.

Edit:
- identity;
- claim;
- theme;
- featured product;
- content;
- dashboard.

Same state feeds:
- Editor;
- Preview;
- Backend;
- Compatibility;
- Local;
- React;
- Native;
- LAMP;
- WordPress.

No hidden demo copies.

---

# 75. Definition of Done

ElectroCMS 2.0 core is not complete until:

- local/offline works;
- project persistence/recovery works;
- Puck editor real;
- responsive/custom breakpoints real;
- models/fields/taxonomies/relations real;
- workflow/revisions real;
- bindings/query/listing/filter/facets real;
- media/richtext real;
- state real;
- auth/permissions real;
- Rete actions/automation real;
- forms real;
- Refine backend real;
- 20 blueprints real/editable;
- Preview/Debug real;
- Compatibility blocks silent loss;
- React export builds;
- Native source/build validation;
- LAMP installs;
- WordPress Theme+Plugin installs;
- runtime dependencies are pruned;
- professionalStudio manifest generated;
- accessibility/security/performance gates pass;
- no fake buttons;
- no permanent fake data;
- no duplicated core engines;
- no P0/P1 requirement gap.


---

## .ai/FINAL_FIFTH_REVIEW_AUDIT.md

# FINAL FIFTH REVIEW AUDIT — ElectroCMS 2.0

Date: 2026-08-14
Status: **APPROVED — FINAL MASTER SPEC**

## Quantitative result
- Phases: **28**
- Microphases: **218**
- Microphase numbering gaps: **0**
- Exact normalized duplicate titles: **0**
- Microphases missing Why/Result/Engine/Preconditions/Steps/Artifacts/Tests: **0**
- Required documentation files missing: **0**

## Final structural changes

### Canonical model
- FormDefinition visual duplication removed: forms are ElectroDocument `kind=form`.
- Templates and Backend screens remain ElectroDocument kinds.
- RQB owns the query rule tree through a versioned engine payload.
- Registries remain application registries rather than copied into every project.

### Puck
- New nested content uses Slots.
- DropZone/zones are migration-only.
- Composition API is the default integration path.
- Official CSS custom-property theming is used before experimental overrides.
- Puck public history remains the undo engine; Electro only applies a configurable trimming policy.
- Puck AI remains optional/post-core while it is cloud/account/API-key dependent.

### Storage
- PGlite stays behind the multi-tab Worker.
- `idb://` is the compatibility baseline for the Studio DB.
- MediaBlobStore uses OPFS preferentially with IndexedDB Blob fallback.
- project_objects saves incrementally.
- project_revisions are coarse cross-session checkpoints.
- dynamic CMS fields never create Studio tables.
- record_field_index indexes only fields that request search/filter/sort/facets.
- `dedicated-target` is an exporter hint, not Studio DDL.

### Query/filter
- RQB official Diagnostics run before compilation.
- `@react-querybuilder/core` is used in non-UI compilers.
- unsupported/fallback rule handling is fail-closed.
- TanStack Query owns runtime cache/invalidation.
- facets/counts/chips use the generic typed index.

### Rich text/state
- Tiptap Static Renderer replaces the custom generic read-only renderer concept.
- Zustand persisted values are runtime-validated/migrated before hydration.

### Backend/data exchange
- Refine owns CRUD/data lifecycle.
- TanStack owns table algorithms.
- CSV import/export uses Refine useImport/useExport.
- Core v2 CSV import is create/createMany only; duplicate conflicts skip/error.
- Any future update/upsert must use Refine update/updateMany, not mutate useImport into a second CSV engine.
- Quick Edit/Bulk/Saved Views continue through existing Refine/TanStack engines.

### Complex admin UI
- Lucide: semantic icon adapter.
- Apache ECharts: Web/server-client chart renderer.
- Victory Native: conditional Native chart renderer.
- FullCalendar Standard: Web calendar.
- react-native-calendars: Native supported calendar views.
- dnd-kit: Web Kanban drag/sort.
- Accessible non-drag Kanban move remains the universal fallback.
No custom chart/calendar/drag engine is required.

### Palette/component core
The Core semantic component count was reduced further.
Section/Scroll/Spacer -> Container presets.
Heading/Badge -> Text presets.
Breadcrumbs -> Navigation preset.
Dynamic Repeater -> Listing collection preset.
Form repeater/group -> FormField types.
Form Status -> Text binding preset.
RecordForm/AdminNavigation/RecordDetail/FilterBar -> reuse Form/Navigation/Container/Filter.

The full visible catalog remains available through Palette presets/blocks/bindings/aliases.

### Studio UX
Full Studio Appearance is now explicit and independent from project themes:
mode, colors, typography, icon policy, radius, shadows, density, control sizes/shapes, menu appearance, spacing, motion and contrast.
Workspace keeps left/right nav, width, icon/text mode, group order and saved layouts.

### Phase logic
Forms occur only after Media, State, Auth and Action Flow.
Backend occurs after Data, Queries, Permissions and Forms.
Functional additions introduced by previous reviews were reordered before their E2E/QA microphase.
Final QA now actually validates the final phase contents.

## Similar titles inspected
- M23.2 Android exporter y build <-> M23.3 iOS exporter y build (0.80)
- M00.6 POC Action Flow Rete <-> M13.9 Action Flow E2E (0.80)
- M15.10 Backend E2E <-> M17.2 Backend runtime preview (0.77)
- M19.2 Native core layout <-> M19.3 Native core content (0.76)
- M12.7 Permission Simulator y tests <-> M17.6 Integrar Permission Simulator existente en Preview (0.75)

These similarities are semantic neighbors, not duplicate owners; their different lifecycle/target/test responsibilities are documented in REDUNDANCY_AUDIT.md.

## Final rule
Do not add another core subsystem because a reference platform exposes a named feature.
First map the feature to an existing Electro semantic model and an approved OSS engine.
A new subsystem requires an ADR demonstrating a real gap.


---

## .ai/ENGINE_RESPONSIBILITY_MATRIX.md

# ENGINE RESPONSIBILITY MATRIX — Fifth Final

# Puck

## Delegate
- visual drag/drop;
- nested `slot` fields;
- Components/Drawer;
- Outline;
- Fields;
- Preview;
- editor permissions;
- inline text;
- RichText/Tiptap integration;
- session visual history;
- viewport frame configuration;
- onAction/action lifecycle used by the adapter.

## ElectroCMS adds
- AppShell;
- canonical ElectroDocument mapping;
- searchable Palette metadata;
- responsive/platform semantics;
- advanced style/data/action/a11y inspector;
- guides/rulers/snapping;
- saved/global components;
- compatibility/export.

## Never build
- second canvas/DnD engine;
- second basic Outline tree;
- second base field editor;
- second visual-history engine.

## API policy
New nested components use Slots.
DropZone exists only in legacy migration logic.
Composition APIs first.
Experimental APIs require adapter/fallback.
Puck AI is post-core/optional while it requires a cloud/account/API key.

---

# PGlite + Drizzle

## Delegate
- embedded PostgreSQL;
- IndexedDB-backed persistent DB;
- transactions;
- stable physical schema migrations;
- SQL execution;
- typed access.

## ElectroCMS adds
- official multi-tab Worker integration;
- repositories/ports;
- project_objects persistence;
- project revisions;
- generic content semantics;
- typed field index.

## Storage policy
`idb://` is the compatibility baseline for PGlite DB persistence.
Other filesystems are opt-in after capability/benchmark verification.
Media bytes use MediaBlobStorePort: OPFS preferred with IndexedDB Blob fallback.

## Never build
- parallel structured ProjectRepository;
- direct raw DB access from React UI;
- table-per-field/content type in the Studio.

---

# TanStack Query

Owns:
- async query lifecycle;
- cache;
- loading/error;
- retry/refetch/invalidation.

ElectroCMS owns:
- query-key policy;
- content-aware invalidation;
- offline tuning;
- query diagnostics.

No custom generic runtime query cache.

---

# Refine Core

Owns:
- DataProvider orchestration;
- List/Create/Edit/Show lifecycle;
- useTable;
- form/admin orchestration;
- TanStack Query integration;
- access-control provider surface;
- NotificationProvider;
- AuditLogProvider;
- CSV useImport/useExport.

ElectroCMS owns:
- AdminScreen/backend document metadata;
- ElectroDataProvider;
- canonical PermissionEvaluator;
- design/UX;
- CSV field mapping/validation/permission rules;
- Native presentation adapter.

Do not build:
- another CRUD framework;
- another CSV parser/exporter when Refine useImport/useExport covers the transport;
- another admin cache.

AccessControlProvider does not replace service/route/server enforcement.

---

# TanStack Table

Owns:
sorting, filtering, grouping, pagination, selection, order, visibility, sizing, pinning, expanding and controlled table state.

ElectroCMS persists only:
configuration and deliberately saved SavedView state.

---

# React Hook Form + Zod

RHF owns:
form values, dirty/touched, arrays, submit lifecycle.

Zod owns:
runtime validation at boundaries.

ElectroCMS owns:
Form Document metadata, Field aliases, generated schema mapping and submit ActionGraph.

No second form state engine.

---

# React Query Builder

Owns:
- rule/group editing;
- combinators/operators;
- Diagnostics format;
- formatter/processors;
- parameterized SQL/Drizzle output when compatible.

ElectroCMS owns:
- source(s);
- dynamic field/index mapping;
- relations/taxonomies;
- multi-source semantics;
- target gaps;
- severity/fail-closed policy.

Use `@react-querybuilder/core` where UI React package is not needed.
Do not create a parallel rule AST.

---

# Rete

Owns:
- graph canvas;
- sockets/connections;
- Dataflow/ControlFlow engine in JS runtimes;
- History Plugin.

ElectroCMS owns:
- semantic node catalog;
- portable graph descriptors;
- injected Data/State/UI/Auth/API/Native ports;
- domain-event automation;
- server target compilers.

No second JS workflow runtime/history.

---

# Tiptap

Owns:
- richtext editor/document JSON;
- editing/history/extensions;
- Static Renderer for HTML/React/other mappings.

ElectroCMS owns:
- allowed extension profile;
- Electro toolbar/styling;
- versioned wrapper;
- Native node mappings;
- target compatibility diagnostics.

Do not build a second read-only HTML/React renderer.

---

# Zustand

Owns:
- React/vanilla runtime state;
- selectors/subscriptions;
- persist middleware.

ElectroCMS owns:
- StateDefinitions/scopes;
- generated stores;
- storage selection;
- Zod validation/migration of hydrated persisted data;
- bindings/actions.

XState is post-core unless a concrete statechart requirement appears.

---

# Expo / React Native / Expo Router

Own:
native runtime, routing, Stack/standard JS Tabs and module ecosystem.

ElectroCMS adds:
route compiler, renderers, permission/capability mapping, export configuration.

Default to stable APIs.
Experimental navigation never becomes release-critical without fallback.

---

# Expo SQLite + Drizzle

Own stable Native DB/migrations/access.
ElectroCMS maps the same generic CMS/index semantics.

---

# shadcn/ui + Radix

Own accessible primitive behavior.
ElectroCMS owns tokens, density, branding and application composition.

---

# NativeWind / StyleSheet

Renderer/output implementation only.
Never canonical ElectroStyle.

---

# Capacitor

Explicit hybrid fallback only.
Never silently replace React Native/Expo.

# Auxiliary UI engines

See `AUXILIARY_UI_ENGINE_MATRIX.md`.
- Lucide -> icon assets/components.
- Apache ECharts -> Web/server-client chart rendering.
- Victory Native -> Native chart rendering when used/compatible.
- FullCalendar Standard -> Web calendar.
- react-native-calendars -> Native calendar.
- dnd-kit -> Web Kanban drag/sort.

All are adapter-bound and dependency-pruned; none changes canonical project models.


---

## .ai/COMPONENT_RATIONALIZATION.md

# COMPONENT RATIONALIZATION — Fifth Final / Minimal Semantic Core

A visible Palette item does not imply a runtime class.

## Decision ladder
1. existing Core + prop;
2. Preset;
3. Composite Block;
4. Binding;
5. FormField alias;
6. Filter alias;
7. Action;
8. Blueprint/Project Kit config;
9. Provider/target capability;
10. only then propose a new Core ComponentDefinition.

## Layout Core
Only:
- `Container`
- `Divider`
- `Tabs`
- `Accordion`
- `Modal`
- `Drawer`

Visible items implemented as Container presets/config:
- Section -> `semanticElement=section`
- Flex Container
- Row
- Column
- Stack
- Grid
- Columns
- Wrap
- Sticky Container
- Scroll Container -> `scrollMode`
- Spacer -> fixed/min-size Container

Container owns semantic element/role, layout mode, overflow/scroll semantics, position and slots.
The Native renderer maps scrollMode to ScrollView behavior where required.

## Content Core
- `Text`
- `RichText`
- `Image`
- `Gallery`
- `Icon`
- `Button`
- `Link`
- `Navigation`
- `Video`
- `Audio`
- `SVG`
- `List`
- `Table`
- `CodeBlock`
- `Embed`
- `Map`
- `Carousel`
- `Progress`

Presets/Blocks:
- Heading H1-H6 -> Text preset with semantic heading level
- Paragraph -> Text preset
- Badge -> Text preset
- Logo -> Image preset
- Breadcrumbs -> Navigation preset bound to route ancestry
- Slider -> Carousel preset
- Shape -> SVG/Container preset
- Card/Testimonial/FAQ/Pricing/CTA/etc. -> Blocks

## Dynamic Core
- `Listing`
- `Filter`
- `Pagination`

Dynamic Repeater is NOT a separate runtime engine:
- Listing with `sourceType=collection-binding` and item subtree.

Other Dynamic* items are bindings/configuration.

## Forms Core
Only:
- `Form`
- `FormField`

FormField aliases include all scalar types and `group|repeater` where nested slots are required.
RHF useFieldArray backs repeater behavior.

FormStatus is a Text preset bound to form/action status with appropriate live-region accessibility.
Submit is Button submit behavior.

## Admin Semantic Core
Only features whose runtime/presentation is genuinely distinct:
- `DataView`
- `Metric`
- `Chart`
- `Kanban`
- `Calendar`

Reuse:
- AdminNavigation -> Navigation preset
- RecordForm -> Form preset/resource context
- RecordDetail -> Container/Bindings block
- FilterBar -> Filter/Block
- Search -> Filter alias

Refine/TanStack/RHF remain behavior owners.

## Why
The user still sees the complete professional catalog, while ElectroCMS maintains fewer:
- renderer implementations;
- Native renderers;
- PHP/WP compilers;
- inspector schemas;
- migrations;
- capability declarations;
- tests.

See `PALETTE_CATALOG_MATRIX.md` for exact visible mapping.


---

## .ai/PALETTE_CATALOG_MATRIX.md

# PALETTE CATALOG MATRIX — Fifth Final

The Palette may expose many friendly items, but every item must map to one existing runtime responsibility.

Legend:
- **CORE**: owns unique runtime semantics.
- **PRESET**: inserts a Core component with predefined props/layout.
- **BLOCK**: composite subtree/template.
- **BINDING**: existing component + ElectroBinding.
- **ALIAS**: same canonical FormField/Filter with a type.
- **ACTION**: button/icon/link configured with ActionGraph.
- **PROVIDER**: optional adapter capability.

# Layout

| Visible item | Implementation |
|---|---|
| Section | PRESET Container (`semanticElement=section`) |
| Container | CORE |
| Flex Container | PRESET Container |
| Row | PRESET Container |
| Column | PRESET Container |
| Stack | PRESET Container |
| Grid | PRESET Container |
| Columns | PRESET Container/Grid |
| Wrap | PRESET Container |
| Sticky Container | PRESET Container |
| Scroll Container | PRESET Container (`scrollMode`) |
| Spacer | PRESET Container |
| Divider/Separator | CORE |
| Tabs Container | CORE Tabs |
| Accordion Container | CORE Accordion |
| Modal | CORE |
| Drawer | CORE |
| Off-canvas | PRESET Drawer |

# Basic / Media

| Visible item | Implementation |
|---|---|
| Text | CORE |
| Heading H1-H6 | PRESET Text + semantic heading level |
| Paragraph | PRESET Text |
| Rich Text | CORE |
| Image | CORE |
| Gallery | CORE |
| Icon | CORE |
| Button | CORE |
| Link | CORE |
| Logo | PRESET Image |
| Video | CORE |
| Audio | CORE |
| SVG | CORE |
| Shape | PRESET SVG/Container style |
| List | CORE |
| Table | CORE only when generic semantic table is needed |
| Code | CORE CodeBlock |
| HTML | CORE Embed, Web capability |
| Iframe | CORE Embed, Web capability |
| Map | CORE provider-aware |
| Carousel | CORE |
| Slider | PRESET Carousel |
| Badge | PRESET Text |
| Progress | CORE |
| Breadcrumbs | PRESET Navigation + route ancestry binding |

# Content / Business Blocks

| Visible item | Implementation |
|---|---|
| Card | BLOCK |
| Article Card | BLOCK |
| Testimonial | BLOCK |
| Team Member | BLOCK |
| FAQ | BLOCK using Accordion |
| Timeline | BLOCK |
| Counter | BLOCK/core optional only if unique animation semantics justify |
| Metric/KPI | BLOCK or Admin Metric |
| Pricing Table | BLOCK |
| Feature List | BLOCK |
| Table of Contents | BLOCK derived from RichText/headings |
| Call to Action | BLOCK |
| Popup | Modal BLOCK/template |
| Contact Card | BLOCK |
| Business Hours | BLOCK + data binding |
| Address/Contact Info | BLOCK Text/Icon/Link |
| Download/File Card | BLOCK + Media binding |

# Navigation / Account

| Visible item | Implementation |
|---|---|
| Navigation/Menu | CORE Navigation |
| Mobile Navigation | PRESET Navigation + Drawer |
| Breadcrumbs | PRESET Navigation + route ancestry binding |
| Site Search | PRESET Filter Search + navigation action |
| User Menu | BLOCK Navigation + CurrentUser binding |
| Login Link/Button | Button/Link + Auth ACTION |
| Register Link/Button | Button/Link + Auth ACTION |
| Logout | Button/Link + Auth ACTION |
| Pagination | CORE Pagination |

# Social / Contact

| Visible item | Implementation |
|---|---|
| Social Icons | BLOCK Icon + Link |
| Share Buttons | BLOCK Button/Icon + Share ACTION |
| Email Link | PRESET Link |
| Phone Link | PRESET Link |
| WhatsApp/Message link | PRESET Link/provider-aware deep link |
| Contact Form | BLOCK using Form Document |
| Map/Location | CORE Map or Native Location binding |

Do not create a social-network engine.

# Dynamic Data

| Visible item | Implementation |
|---|---|
| Dynamic Field | BINDING to Text/Heading/etc. |
| Dynamic Image | BINDING to Image |
| Dynamic Link | BINDING to Link/Button |
| Author/User | BINDING |
| Date | BINDING |
| Taxonomy/Terms | BINDING/List |
| Metadata | BINDING |
| Calculated Field | BINDING from ElectroSchema calculated value |
| Query Result | Listing |
| Listing Grid | CORE Listing + layout preset |
| Related Content | Listing + relation query |
| Relation | Binding/Listing/Query |
| Conditional Content | node display condition |
| Repeater | PRESET Listing with collection binding |
| Pagination | CORE |

# Forms

CORE:
- Form
- FormField

ALIASES of FormField:
- Text
- Number
- Email
- Phone
- URL
- Textarea
- Select
- Radio
- Checkbox
- Switch
- Date
- Time
- File
- Image
- Hidden when explicitly required

Other visible form items:
- Form Status/Success/Error -> Text preset bound to Form/Action status with live-region semantics.
- Submit -> Button with submit behavior.
- CAPTCHA/anti-bot -> security/provider configuration, not another visual engine.
- Multi-step -> Form configuration + containers/step metadata.
- Conditional Field -> FormField condition.

# Filters

CORE:
- Filter
- Pagination
- AppliedFilterChips where shown.

ALIASES:
- Search
- Select
- Range
- Checkboxes
- Radio
- Date
- Taxonomy
- Sort

Load More:
Pagination mode.

Reset:
Button/ACTION.

# Commerce Pack

Commerce is not a second component engine.

| Visible item | Implementation |
|---|---|
| Product Card | BLOCK |
| Product Grid | Listing preset |
| Product Title | Text binding |
| Price / Old Price | Text binding |
| Product Image | Image binding |
| Product Gallery | Gallery binding |
| Variations | Form/State |
| Buy Button | Button + ACTION |
| Add to Cart | Button + State/Action |
| Cart Counter | Badge + State binding |
| Inventory | Binding |
| Stock Badge | Badge + Binding |
| Wishlist | Button + State/Action |
| Checkout | Form Document/Template |
| Order Summary | BLOCK/List |
| Related Products | Listing relation/query |

# Admin Palette

- Admin Navigation — PRESET Navigation with admin route source.
- DataView — CORE presentation; Refine/TanStack behavior.
- Record Form — PRESET Form with resource context; RHF/Refine behavior.
- Record Detail — BLOCK using Container/Bindings.
- Metric — CORE.
- Chart — CORE presentation with chart adapter.
- Kanban — CORE view.
- Calendar — CORE view.
- Filter Bar — BLOCK using Filter controls.

# Custom items

## Saved Block
User-created composite subtree.
No JavaScript code.

## Global Component
Reusable versioned visual definition.

## Custom Visual Component
Allowed only through a future/public component SDK after the contracts stabilize.
Core v2 may import/register trusted internal component definitions but does not expose arbitrary runtime JavaScript execution.

# Palette UX requirements

Categories:
1. Layout
2. Basic
3. Content
4. Navigation
5. Dynamic Data
6. Forms
7. Filters
8. Social / Contact
9. Admin
10. Commerce Pack

Each item:
- stable ID;
- icon;
- human name;
- one-line description;
- category;
- searchable keywords/synonyms;
- implementation kind badge when useful;
- target capability badge only when it prevents surprise.

Search may recognize familiar conceptual terms such as WordPress/Elementor/JetEngine vocabulary, but ElectroCMS uses original names, UI and code.


---

## .ai/microphases/M03_9.md

# M03.9 — Studio Appearance Editor completo

**Fase propietaria:** F03 — Design System, AppShell e Information Architecture

## Por qué existe
El Prompt original exige que la apariencia del propio CMS sea configurable de forma independiente al frontend/backend. La cuarta revisión solo cubría light/dark/density de forma parcial.

## Resultado exacto
Al cerrar esta microfase, **Studio Appearance Editor completo** debe existir como capacidad real, integrada y verificable; no se acepta solo una pantalla o un schema sin comportamiento.

## Engine owner
`shadcn/Radix + Electro Studio tokens`

## Responsabilidad ElectroCMS
Implementar solo configuración, UX, canonical metadata, adapters y validación propios de ElectroCMS. Reutilizar las APIs OSS indicadas.

## Ubicación visual
Settings gear > Studio Appearance; preview inmediato del propio Studio sin mutar el proyecto generado.

## Precondiciones
- La microfase anterior de F03 está COMPLETADA.
- Los contratos canónicos y adapters de engine necesarios existen.
- Tests existentes están verdes antes de comenzar.

## Implementación línea por línea
1. Define `StudioAppearanceProfile` como preference schema, NO como ElectroTheme del proyecto.
2. Incluye mode light/dark/system, semantic colors, typography scale/family, icon size/style policy, radii, shadows/elevation, density, control height/size, button shape, field shape, menu appearance, spacing scale, animation intensity y contrast preference.
3. Todos los valores se expresan mediante Studio design tokens; no escribas valores mágicos por feature.
4. Aplica cambios mediante CSS variables/theme provider del Design System, no re-renderizando/reconfigurando engines Puck/Refine.
5. Implementa Preset selector y `Guardar como preset personal`; presets personales viven en workspace/user preferences.
6. Separa claramente `Studio Appearance` de Frontend Theme y Backend Theme con copy explicativa.
7. Implementa Preview/Apply/Revert; cerrar Settings con cambios no aplicados pide decisión solo si hay cambios pendientes.
8. Reduced-motion del sistema debe limitar motion aunque el profile pida animación alta.
9. Contraste/accesibilidad inválidos generan warning y opción Restore Accessible Defaults.
10. Prueba que cambiar Studio appearance no modifica ElectroDocument, Theme del proyecto ni ExportIR.

## Artefactos obligatorios al cerrar
- `StudioAppearanceProfile schema`
- `StudioAppearanceSettingsPanel`
- `Studio token provider`
- `appearance isolation E2E`

## Estados y errores
- Define ready/loading/empty/error/disabled/blocked según aplique.
- Error recuperable debe ofrecer Retry/Repair.
- No ocultar capability unsupported como éxito.

## Responsive y accesibilidad
- Desktop high-density sin overflow.
- Tablet usa Sheet/Drawer para tooling secundario.
- Mobile no comprime paneles desktop.
- Keyboard, focus-visible, labels/aria, touch targets y reduced motion.

## Tests obligatorios
1. Unit/contract.
2. Integration con engine real.
3. Negative/error path.
4. Persistence/round-trip si aplica.
5. E2E de la UI.
6. lint.
7. typecheck.
8. test.
9. build.

## Prohibido
- No reutilizar ElectroTheme del frontend como settings del Studio.
- No permitir CSS arbitrario en esta pantalla.
- No guardar esta preference dentro de ExportIR.

## Evidencia TRACKING
- archivos modificados;
- API OSS utilizada;
- tests/comandos;
- resultado build;
- limitaciones;
- siguiente microfase exacta.


---

## .ai/microphases/M05_3.md

# M05.3 — Nested Slots, permissions y Puck data migration

**Fase propietaria:** F05 — Puck Visual Editor Core

## Por qué existe
Esta microfase existe para **Nested Slots, permissions y Puck data migration** dentro de la responsabilidad de `F05`: integrar Puck sin duplicar su editor. Debe cerrar una capacidad concreta y no abrir un subsystem paralelo.

## Resultado exacto
Al cerrar esta microfase, **Nested Slots, permissions y Puck data migration** debe existir como capacidad real, integrada y verificable. No se acepta placeholder ni una implementación paralela al engine.

## Engine owner
`Puck`

### Regla
Antes de escribir código, consulta la API pública del engine. Si ya existe la capacidad, úsala. ElectroCMS solo debe aportar canonical mapping, configuración, UX, adapter, target semantics o exportación.

## Packages/área de código
`editor-puck + studio/editor`

## Ubicación visual
Editor dentro del AppShell: Components/Pages/Outline a la izquierda, Canvas central, Inspector derecho.


## Precondiciones
- `M05.2` COMPLETADA.
- Engine owner disponible detrás de su adapter.
- No existen errores P0/P1 de la dependencia inmediata.
- Tests existentes están verdes antes de modificar comportamiento.

## Implementación línea por línea
1. Para todos los nuevos containers anidados usa Puck `field: { type: "slot" }`; `DropZone` no es una base nueva permitida.
2. Container/Section/Tabs/Accordion/etc. exponen slots explícitos y estables en su Puck config.
3. Alinea ElectroNode slots con el modelo recursivo inline de Puck Slots para minimizar transformaciones.
4. Usa `allow`/`disallow` del Slot cuando una definición restrinja children.
5. Mapea Electro lock/editability a Puck permissions públicas cuando corresponda.
6. Si se importa data Puck legacy con `zones`, usa el helper/migration oficial de Puck para DropZone -> Slot dentro del adapter; no mantengas dos formatos permanentes.
7. Usa utilities públicas como `walkTree` para traversals/migrations del payload Puck cuando sirvan; no escribas otro walker de Puck por reflejo.
8. Canonical ElectroDocument nunca persiste `zones` legacy ni Puck component runtime functions.
9. Prueba insert/nest/reorder, slot restrictions y una fixture legacy migrada.

## Artefactos obligatorios al cerrar
- `implementation artifact in the phase-owned package`
- `unit/integration test proving observable behavior`

## Flujo de datos obligatorio
1. Usuario/Runtime produce una intención.
2. UI/hook llama al adapter o application service propietario.
3. El engine OSS ejecuta la responsabilidad que le pertenece.
4. ElectroCMS normaliza solo lo que necesita persistencia/portabilidad.
5. Storage o target adapter persiste/ejecuta.
6. Resultado tipado vuelve a UI/runtime.
7. Error/diagnostic permanece visible y reparable.

## Estados cuando apliquen
- initial;
- loading;
- ready;
- empty;
- error;
- disabled;
- saving;
- saved;
- blocked.

## Responsive si existe UI
- Desktop >=1280: patrón completo/high density.
- Laptop 1024–1279: reduce herramientas secundarias antes de reducir la región principal.
- Tablet 768–1023: tools secundarias a Sheet/Drawer.
- Mobile <768: route/card/bottom-sheet/full-height tool; nunca desktop comprimido.

## Accesibilidad
- keyboard;
- focus-visible;
- aria-label en icon-only;
- labels persistentes;
- errores no dependientes del color;
- alternativa a DnD cuando aplique;
- touch targets correctos;
- reduced motion donde corresponda.

## Tests obligatorios
1. Unit/contract para lógica Electro propia.
2. Integration con engine/storage real.
3. Negative/error test.
4. Persistence/round-trip si toca canonical data.
5. E2E si existe interacción de usuario.
6. Target fixture si afecta export/native/server.
7. `lint`.
8. `typecheck`.
9. `test`.
10. `build`.

## Prohibido
- reconstruir una función disponible en el engine;
- añadir subsystem/widget/model únicamente por conveniencia;
- persistir engine internals como proyecto canónico;
- usar datos hardcoded permanentes;
- declarar COMPLETADA sin evidencia.

## Evidencia que debes registrar en TRACKING
- archivos modificados;
- API/engine utilizado;
- tests exactos;
- build/fixture result;
- blockers o adaptación;
- próxima microfase exacta.


---

## .ai/microphases/M09_3.md

# M09.3 — Query formatter fail-closed y field-path adapter

**Fase propietaria:** F09 — Bindings, Queries, Listings, Facets y Runtime Cache

## Por qué existe
Esta microfase existe para **Query formatter fail-closed y field-path adapter** dentro de la responsabilidad de `F09`: resolver bindings/queries/listings/facets/cache. Debe cerrar una capacidad concreta y no abrir un subsystem paralelo.

## Resultado exacto
Al cerrar esta microfase, **Query formatter fail-closed y field-path adapter** debe existir como capacidad real, integrada y verificable. No se acepta placeholder ni una implementación paralela al engine.

## Engine owner
`React Query Builder + query adapter`

### Regla
Antes de escribir código, consulta la API pública del engine. Si ya existe la capacidad, úsala. ElectroCMS solo debe aportar canonical mapping, configuración, UX, adapter, target semantics o exportación.

## Packages/área de código
`query-rqb + queries`

## Ubicación visual
Administrar > Consultas, Inspector > Data o frontend filters.


## Precondiciones
- `M09.2` COMPLETADA.
- Engine owner disponible detrás de su adapter.
- No existen errores P0/P1 de la dependencia inmediata.
- Tests existentes están verdes antes de modificar comportamiento.

## Implementación línea por línea
1. Antes de compilar una query ejecuta `formatQuery(query, { format: "diagnostics", fields, validator... })` usando React Query Builder/@react-querybuilder/core.
2. Convierte `DiagnosticsResult.diagnostics`, `stats` y field summary a Electro QueryDiagnostics con source rule IDs/paths.
3. Cualquier invalid rule, missing field, placeholder, type mismatch o custom validation failure que afecte ejecución produce warning/blocker según policy; no continúes como si fuera válida.
4. Para SQL/Drizzle, mapea fieldId a `record_field_index` cuando el field esté indexado; usa JSON extraction segura cuando no lo esté.
5. Usa `formatQuery()` parameterized/Drizzle output cuando sea compatible.
6. Mantén política fail-closed adicional: configura/detecta formatter fallback y NO aceptes `(1 = 1)`/equivalente como sustituto silencioso de una regla que debía filtrar.
7. Relations/taxonomies se resuelven en la capa Electro alrededor del output RQB.
8. En compilers/server utilities usa `@react-querybuilder/core` cuando no necesites React UI, evitando cargar el paquete visual.
9. Nunca concatene user values dentro de SQL.
10. Prueba missing field, invalid value type, unsupported operator, muted rule policy e injection payload.

## Artefactos obligatorios al cerrar
- `query/binding/filter adapter o runtime module`
- `query safety/result integration test`
- `form adapter/schema/config`
- `validation/submit E2E`

## Flujo de datos obligatorio
1. Usuario/Runtime produce una intención.
2. UI/hook llama al adapter o application service propietario.
3. El engine OSS ejecuta la responsabilidad que le pertenece.
4. ElectroCMS normaliza solo lo que necesita persistencia/portabilidad.
5. Storage o target adapter persiste/ejecuta.
6. Resultado tipado vuelve a UI/runtime.
7. Error/diagnostic permanece visible y reparable.

## Estados cuando apliquen
- initial;
- loading;
- ready;
- empty;
- error;
- disabled;
- saving;
- saved;
- blocked.

## Responsive si existe UI
- Desktop >=1280: patrón completo/high density.
- Laptop 1024–1279: reduce herramientas secundarias antes de reducir la región principal.
- Tablet 768–1023: tools secundarias a Sheet/Drawer.
- Mobile <768: route/card/bottom-sheet/full-height tool; nunca desktop comprimido.

## Accesibilidad
- keyboard;
- focus-visible;
- aria-label en icon-only;
- labels persistentes;
- errores no dependientes del color;
- alternativa a DnD cuando aplique;
- touch targets correctos;
- reduced motion donde corresponda.

## Tests obligatorios
1. Unit/contract para lógica Electro propia.
2. Integration con engine/storage real.
3. Negative/error test.
4. Persistence/round-trip si toca canonical data.
5. E2E si existe interacción de usuario.
6. Target fixture si afecta export/native/server.
7. `lint`.
8. `typecheck`.
9. `test`.
10. `build`.

## Prohibido
- reconstruir una función disponible en el engine;
- añadir subsystem/widget/model únicamente por conveniencia;
- persistir engine internals como proyecto canónico;
- usar datos hardcoded permanentes;
- declarar COMPLETADA sin evidencia.

## Evidencia que debes registrar en TRACKING
- archivos modificados;
- API/engine utilizado;
- tests exactos;
- build/fixture result;
- blockers o adaptación;
- próxima microfase exacta.


---

## .ai/microphases/M10_5.md

# M10.5 — Tiptap payload + Static Renderer multi-target

**Fase propietaria:** F10 — Media Library y Tiptap Rich Text

## Por qué existe
Esta microfase existe para **Tiptap payload + Static Renderer multi-target** dentro de la responsabilidad de `F10`: gestionar media/richtext. Debe cerrar una capacidad concreta y no abrir un subsystem paralelo.

## Resultado exacto
Al cerrar esta microfase, **Tiptap payload + Static Renderer multi-target** debe existir como capacidad real, integrada y verificable. No se acepta placeholder ni una implementación paralela al engine.

## Engine owner
`Tiptap + OPFS/PGlite`

### Regla
Antes de escribir código, consulta la API pública del engine. Si ya existe la capacidad, úsala. ElectroCMS solo debe aportar canonical mapping, configuración, UX, adapter, target semantics o exportación.

## Packages/área de código
`richtext-tiptap + media`

## Ubicación visual
Administrar > Medios y RichText field/editor surfaces.


## Precondiciones
- `M10.4` COMPLETADA.
- Engine owner disponible detrás de su adapter.
- No existen errores P0/P1 de la dependencia inmediata.
- Tests existentes están verdes antes de modificar comportamiento.

## Implementación línea por línea
1. Persiste rich text como `{ engine:"tiptap", schemaVersion, json }`.
2. Studio/Backend que permiten rich-text editing usan Tiptap editor con un único extension profile versionado.
3. Para Web/React read-only usa `@tiptap/static-renderer` o `@tiptap/html` según el target; no construyas un parser/renderer HTML paralelo.
4. Para React output que necesita React Elements usa el static renderer correspondiente; custom Tiptap nodes declaran mappings explícitos.
5. Para LAMP/WordPress pre-rendera HTML seguro durante export/build o usa la estrategia PHP/HTML compatible documentada; valida/sanitiza contenido antes de output.
6. Para React Native usa el JSON/static-renderer mapping layer para producir Native Text/View/Link semantics; implementa únicamente mappings RN, no otro richtext AST/editor.
7. `RuntimeDependencyManifest` incluye Tiptap editor solo cuando la app generada permite editar rich text; read-only no debe cargar editor UI.
8. Unhandled node/mark/extension produce compatibility diagnostic; nunca se omite silenciosamente.
9. Prueba read-only React/server output sin editor instance y Native mapping fixture.

## Artefactos obligatorios al cerrar
- `media/richtext adapter correspondiente`
- `round-trip/security/render test`

## Flujo de datos obligatorio
1. Usuario/Runtime produce una intención.
2. UI/hook llama al adapter o application service propietario.
3. El engine OSS ejecuta la responsabilidad que le pertenece.
4. ElectroCMS normaliza solo lo que necesita persistencia/portabilidad.
5. Storage o target adapter persiste/ejecuta.
6. Resultado tipado vuelve a UI/runtime.
7. Error/diagnostic permanece visible y reparable.

## Estados cuando apliquen
- initial;
- loading;
- ready;
- empty;
- error;
- disabled;
- saving;
- saved;
- blocked.

## Responsive si existe UI
- Desktop >=1280: patrón completo/high density.
- Laptop 1024–1279: reduce herramientas secundarias antes de reducir la región principal.
- Tablet 768–1023: tools secundarias a Sheet/Drawer.
- Mobile <768: route/card/bottom-sheet/full-height tool; nunca desktop comprimido.

## Accesibilidad
- keyboard;
- focus-visible;
- aria-label en icon-only;
- labels persistentes;
- errores no dependientes del color;
- alternativa a DnD cuando aplique;
- touch targets correctos;
- reduced motion donde corresponda.

## Tests obligatorios
1. Unit/contract para lógica Electro propia.
2. Integration con engine/storage real.
3. Negative/error test.
4. Persistence/round-trip si toca canonical data.
5. E2E si existe interacción de usuario.
6. Target fixture si afecta export/native/server.
7. `lint`.
8. `typecheck`.
9. `test`.
10. `build`.

## Prohibido
- reconstruir una función disponible en el engine;
- añadir subsystem/widget/model únicamente por conveniencia;
- persistir engine internals como proyecto canónico;
- usar datos hardcoded permanentes;
- declarar COMPLETADA sin evidencia.

## Evidencia que debes registrar en TRACKING
- archivos modificados;
- API/engine utilizado;
- tests exactos;
- build/fixture result;
- blockers o adaptación;
- próxima microfase exacta.


---

## .ai/microphases/M15_9.md

# M15.9 — Importación y exportación CSV de Records con Refine

**Fase propietaria:** F15 — Backend Builder con Refine y TanStack

## Por qué existe
El Prompt original exige importación/exportación de datos del CMS. Refine ya ofrece `useImport` y `useExport`, por lo que ElectroCMS debe integrarlos en vez de construir un parser/export engine CSV propio.

## Resultado exacto
Al cerrar esta microfase, **Importación y exportación CSV de Records con Refine** debe existir como capacidad real, integrada y verificable; no se acepta solo una pantalla o un schema sin comportamiento.

## Engine owner
`Refine Core useImport/useExport + ElectroDataProvider + FieldRegistry/Zod`

## Responsabilidad ElectroCMS
Implementar solo configuración, UX, canonical metadata, adapters y validación propios de ElectroCMS. Reutilizar las APIs OSS indicadas.

## Ubicación visual
Administrar > Contenido y Backend List: acciones Importar/Exportar en toolbar/overflow según permisos.

## Precondiciones
- La microfase anterior de F15 está COMPLETADA.
- Los contratos canónicos y adapters de engine necesarios existen.
- Tests existentes están verdes antes de comenzar.

## Implementación línea por línea
1. Usa Refine `useExport` para recorrer `getList` del ElectroDataProvider y producir CSV; no escribas un CSV generator/parser paralelo.
2. Usa Refine `useImport` para parsear CSV y llamar `create`/`createMany` por lotes.
3. Core v2 CSV import es **create-only** porque `useImport` delega en create/createMany. No añadas update/upsert dentro de esta microfase.
4. Si una columna configurada como unique ya existe, la política del import es `error` o `skip` configurable; muestra el conflicto. Update/upsert queda como mejora futura separada que, si se acepta, deberá usar Refine `useUpdate/useUpdateMany`, no modificar useImport.
5. Construye `ContentCsvMapping` Electro que mapea headers a Field IDs estables, no solo labels visibles.
6. Wizard exacto: Select file -> Detect headers -> Map fields -> Validate sample -> Relation/term policy -> Confirm -> Import -> Summary.
7. Usa `mapData` para convertir IDs/slugs de relaciones/taxonomías a la forma esperada por ElectroDataProvider.
8. FieldRegistry/Zod valida cada row antes de mutation; row inválida se reporta y no se crea.
9. RichText/media/repeater complejos usan explicit JSON/reference mapping o se marcan unsupported; nunca binarios inline.
10. `batchSize` se ajusta por límites/benchmark; progress usa `onProgress` y summary usa `onFinish` succeeded/errored.
11. Export respeta current filters/sort/view/column selection cuando se configure y excluye credentials/secrets/fields no legibles por el rol.
12. Mutations normales generan audit/invalidation mediante DataProvider/Refine; no escribas logs/caché paralelos.
13. Prueba createMany, fallback create, relation mapData, invalid row, duplicate skip/error, permission denial, filtered export y round-trip de fields simples.

## Artefactos obligatorios al cerrar
- `ContentCsvMapping schema`
- `ImportRecordsWizard`
- `ExportRecordsAction`
- `CSV import/export E2E fixture`

## Estados y errores
- Define ready/loading/empty/error/disabled/blocked según aplique.
- Error recuperable debe ofrecer Retry/Repair.
- No ocultar capability unsupported como éxito.

## Responsive y accesibilidad
- Desktop high-density sin overflow.
- Tablet usa Sheet/Drawer para tooling secundario.
- Mobile no comprime paneles desktop.
- Keyboard, focus-visible, labels/aria, touch targets y reduced motion.

## Tests obligatorios
1. Unit/contract.
2. Integration con engine real.
3. Negative/error path.
4. Persistence/round-trip si aplica.
5. E2E de la UI.
6. lint.
7. typecheck.
8. test.
9. build.

## Prohibido
- No implementar Papa Parse/CSV parsing manual si useImport/useExport ya lo cubren.
- No saltarse ContentService/DataProvider validation.
- No exportar campos ocultos/sensibles por conveniencia.

## Evidencia TRACKING
- archivos modificados;
- API OSS utilizada;
- tests/comandos;
- resultado build;
- limitaciones;
- siguiente microfase exacta.


---

## .ai/microphases/M20_7.md

# M20.7 — Integrar Refine Core en Admin Native

**Fase propietaria:** F20 — Expo Runtime, Router, Native Data y Native Admin

## Por qué existe
Evitar que Native admin cree un segundo data/cache/permission framework.

## Resultado exacto
Al cerrar esta microfase, **Integrar Refine Core en Admin Native** debe quedar integrado, persistido/exportable cuando corresponda y cubierto por pruebas. No basta con un tipo, un botón o un placeholder.

## Engine owner
`Expo Router + Expo SQLite + Drizzle + Refine Core`

## Responsabilidad ElectroCMS
Construye únicamente la semántica portable, adapter, configuración, UX y diagnostics que el engine no trae. No dupliques el motor.

## Ubicación visual
Generated Native runtime; Studio solo muestra preview/config/diagnostics.

## Precondiciones
- La microfase anterior de la fase está COMPLETADA o la dependencia está documentada como ya disponible.
- Los contratos canónicos necesarios existen.
- El engine owner está encapsulado detrás del adapter correspondiente.

## Implementación línea por línea
1. Generated Native admin reutiliza Refine Core headless para resource/data mutation/access semantics; no crea un segundo CRUD framework.
2. Antes de escribir routing glue, verifica la integración Expo Router documentada por el ecosistema Refine (`@refinenative/expo-router`) y su compatibilidad con la versión fijada.
3. Si esa integración compatible existe, úsala detrás de `NativeRefineRouterAdapter`; no copies su router logic.
4. Si la integración no soporta la versión pinned, implementa únicamente un thin RouterProvider/route adapter sobre Expo Router y documenta la incompatibilidad; no sustituyas Refine DataProvider/useList/useCreate/useUpdate.
5. Presentation Native usa FlatList/cards/Pressable/native Form controls; no importa DOM UI ni TanStack Table solo por paridad con Web.
6. ElectroDataProvider y ElectroPermissionEvaluator mantienen la misma contract semantics con Expo SQLite/Auth adapters.
7. List/Create/Edit/Detail Native consumen Refine Core hooks/provider lifecycle cuando sean runtime-compatible.
8. Route protection usa Expo Router + same Auth/Permission context y enforcement en services.
9. RuntimeDependencyManifest registra exactamente Refine packages/integration incluidos.
10. Prueba List/Create/Edit/Detail + deep link + denied route sobre Expo SQLite.

## Artefactos obligatorios al cerrar
- `NativeRefineAdapter`
- `native admin CRUD fixture`

## Estados y errores
- Define empty/loading/error/disabled/blocked cuando tengan sentido.
- Un caso unsupported nunca se convierte silenciosamente en success.
- Diagnostics deben incluir código, ubicación, causa y acción sugerida.

## Responsive y accesibilidad si toca UI
- Desktop high-density sin overflow.
- Tablet usa Sheet/Drawer para tooling secundario.
- Mobile usa route/card/bottom-sheet, no desktop comprimido.
- Keyboard/focus-visible/aria-label.
- Alternative a DnD/gestos.

## Tests obligatorios
1. Unit/contract del valor Electro.
2. Integration con engine/storage real.
3. Negative/failure path.
4. Round-trip si persiste canonical data.
5. E2E si existe UI.
6. Target fixture si afecta export/native/server.
7. lint.
8. typecheck.
9. test.
10. build.

## Prohibido
- No crear subsystem paralelo.
- No persistir engine internals como modelo canónico.
- No usar mocks permanentes.

## Evidencia TRACKING
- archivos modificados;
- engine/API usado;
- pruebas ejecutadas;
- build/fixture;
- blockers/adaptations;
- siguiente microfase.


---

## .ai/microphases/M22_7.md

# M22.7 — Generar Runtime Dependency Manifest y podar dependencias

**Fase propietaria:** F22 — ElectroExportIR, Local/React/Static/PWA y Dependency Pruning

## Por qué existe
Impedir que los proyectos exportados carguen editores/engines que no necesitan.

## Resultado exacto
Al cerrar esta microfase, **Generar Runtime Dependency Manifest y podar dependencias** debe quedar integrado, persistido/exportable cuando corresponda y cubierto por pruebas. No basta con un tipo, un botón o un placeholder.

## Engine owner
`ElectroExportIR + target generators`

## Responsabilidad ElectroCMS
Construye únicamente la semántica portable, adapter, configuración, UX y diagnostics que el engine no trae. No dupliques el motor.

## Ubicación visual
Publicar > Exportar y generated output reports.

## Precondiciones
- La microfase anterior de la fase está COMPLETADA o la dependencia está documentada como ya disponible.
- Los contratos canónicos necesarios existen.
- El engine owner está encapsulado detrás del adapter correspondiente.

## Implementación línea por línea
1. Analiza ExportIR y produce `RuntimeDependencyManifest` por target.
2. Puck nunca se incluye en runtime generado salvo una feature explícita de edición visual futura.
3. Rete editor/history nunca se incluye; solo `rete-engine` si ActionGraphs se ejecutan en ese JS runtime.
4. Refine Core se incluye solo si el output contiene admin/CRUD runtime.
5. TanStack Table se incluye solo en Web data-table views que lo necesitan; Native cards no lo requieren.
6. Tiptap editor se incluye solo si output permite richtext edit; read-only frontend usa Tiptap Static Renderer target-specific output.
7. TanStack Query se incluye si data/providers/query cache lo requieren.
8. Expo modules/permissions se incluyen únicamente si Capability Analyzer detecta uso.
9. NativeWind solo Native; Capacitor solo fallback selected.
10. Generated package lock/build fixture verifica que no haya dependency leak del Studio.

## Artefactos obligatorios al cerrar
- `RuntimeDependencyManifest`
- `dependency pruning tests`

## Estados y errores
- Define empty/loading/error/disabled/blocked cuando tengan sentido.
- Un caso unsupported nunca se convierte silenciosamente en success.
- Diagnostics deben incluir código, ubicación, causa y acción sugerida.

## Responsive y accesibilidad si toca UI
- Desktop high-density sin overflow.
- Tablet usa Sheet/Drawer para tooling secundario.
- Mobile usa route/card/bottom-sheet, no desktop comprimido.
- Keyboard/focus-visible/aria-label.
- Alternative a DnD/gestos.

## Tests obligatorios
1. Unit/contract del valor Electro.
2. Integration con engine/storage real.
3. Negative/failure path.
4. Round-trip si persiste canonical data.
5. E2E si existe UI.
6. Target fixture si afecta export/native/server.
7. lint.
8. typecheck.
9. test.
10. build.

## Prohibido
- No crear subsystem paralelo.
- No persistir engine internals como modelo canónico.
- No usar mocks permanentes.

## Evidencia TRACKING
- archivos modificados;
- engine/API usado;
- pruebas ejecutadas;
- build/fixture;
- blockers/adaptations;
- siguiente microfase.
