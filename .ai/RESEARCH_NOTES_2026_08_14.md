# RESEARCH NOTES — Fifth Final

These notes record engine capabilities verified from official documentation/repositories during the final architecture review. Re-verify exact versions before dependency pinning.

## Puck
Verified:
- Composition surfaces for Components/Fields/Outline/Preview.
- Slots are the recommended nested component model.
- DropZone/zones are deprecated/replacement path; official migration helper exists.
- Puck exposes visual history/action surfaces.
- RichText uses Tiptap.
- Experimental APIs must not be a sole critical dependency.
Decision:
new nested editor architecture uses Slots only; legacy zones are migration input.

## PGlite
Verified:
- one logical/exclusive DB connection model;
- official multi-tab Worker with leader/proxy behavior;
- persistent IndexedDB dataDir;
- alternate filesystem tradeoffs;
- Vite integration considerations.
Decision:
Worker-backed DB, `idb://` compatibility baseline; alternative DB filesystem only after F00 proof.

## Refine
Verified:
- DataProvider CRUD lifecycle;
- TanStack Query integration;
- useTable/forms/access/audit/notifications;
- CSV `useImport` and `useExport`;
- headless architecture and Native ecosystem integration.
Decision:
do not build parallel CRUD/cache/CSV engines.

## TanStack Table / Query
Verified:
- table state algorithms;
- async cache/invalidation lifecycle.
Decision:
Electro stores configuration/SavedViews/query policy, not replacement algorithms.

## React Query Builder
Verified:
- visual condition tree;
- parameterized/export formats including Drizzle-oriented output;
- Diagnostics format result with annotated query/flat entries/stats/field summary.
Decision:
use official diagnostics before compilation and fail closed on unsupported/fallback rules.

## Rete
Verified:
- graph editor ecosystem;
- Dataflow/ControlFlow engine;
- History Plugin.
Decision:
Rete owns JS workflow execution/history; Electro owns portable node semantics/target adapters.

## Tiptap
Verified:
- Static Renderer can render JSON without an editor instance to HTML/React/other mapped formats.
Decision:
do not maintain a separate generic read-only richtext renderer.

## Zustand
Verified:
- persist/custom storage/version/migrate.
- JSON storage alone is not runtime type validation.
Decision:
validate rehydrated values with generated Zod/schema before accepting them.

## Expo / Expo Router / Expo SQLite
Verified:
- file-based Native routing;
- stable Stack and standard JS Tabs;
- experimental navigation features must be treated as such;
- SQLite persistence and module ecosystem.
Decision:
stable navigation is the generated default; capabilities/modules are dependency-pruned.

## Fifth-review impact
The final architecture became smaller at the engine level while adding missing product-level coverage:
Studio Appearance, CMS CSV data exchange, full Palette categories, target storage hints, exact evidence/docs and correct E2E ordering.
