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
