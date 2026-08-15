# ENGINE RESPONSIBILITY MATRIX — Fifth Final

# Puck

## Delegate
- visual drag/drop;
- nested `slot` fields (v0.19+ standard);
- Components/Drawer;
- Outline;
- Fields;
- Preview;
- editor permissions via `resolvePermissions`;
- inline text editing (`contentEditable: true`);
- RichText/Tiptap integration;
- session visual history via `usePuck` / `initialHistory`;
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
- embedded PostgreSQL (WASM);
- IndexedDB-backed persistent DB (`idb://`);
- transactions;
- stable physical schema migrations;
- SQL execution;
- typed access via Drizzle.
- **Multi-tab coordination** via Leader Election in Worker.

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
- async query lifecycle (stale-while-revalidate);
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
- access-control provider surface (`accessControlProvider`);
- NotificationProvider;
- AuditLogProvider;
- CSV exchange via `useImport` and `useExport`.

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
runtime validation at boundaries (Studio and generated output).

ElectroCMS owns:
Form Document metadata, Field aliases, generated schema mapping and submit ActionGraph.

No second form state engine.

---

# React Query Builder

Owns:
- rule/group editing;
- combinators/operators;
- Diagnostics format (`formatQuery(query, 'diagnostics')`);
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
- History Plugin for Undo/Redo.

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
- Static Renderer (`@tiptap/static-renderer`) for HTML/React/other mappings.

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
native runtime, routing (Expo Router), Stack/standard JS Tabs and module ecosystem.

ElectroCMS adds:
route compiler, renderers, permission/capability mapping, export configuration.

Default to stable APIs.
Experimental navigation (Native Tabs) never becomes release-critical without fallback.

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
