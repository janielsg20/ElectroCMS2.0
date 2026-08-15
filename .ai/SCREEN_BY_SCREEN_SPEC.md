# SCREEN BY SCREEN SPEC

## Project Home
Toolbar:
Search -> status Active/Archived/Trash -> Sort -> Grid/List -> New Project.

Project card:
thumbnail, name, blueprint, modified time, status, overflow.
Overflow:
Open/Rename/Duplicate/Archive/Backup/Trash.

## Editor
AppShell exact.
Context:
Components / Pages / Outline.
Canvas:
Puck.Preview.
Inspector:
Puck.Fields + Electro tabs.
Topbar:
project/document/platform/breakpoint/history/zoom/preview/export/settings.

## Pages
Page tree/list.
Search/filter/New.
Row: name, route, template, status, overflow.

## Templates
Filter kinds:
Page/Header/Footer/Single/Archive/404/Section/Modal/Backend.
Cards: thumbnail/name/type/usage/conditions.

## Components
One searchable Palette driven by `PALETTE_CATALOG_MATRIX.md`.
Categories:
Layout / Basic / Content / Navigation / Dynamic Data / Forms / Filters / Social-Contact / Admin / Commerce Pack.
Saved Blocks and Global Components are filter/subviews, not a second insertion engine.
Badge Core/Preset/Block/Binding/Alias only when useful for advanced users.
Desktop prefers a compact two-column grid when the Context Panel has sufficient width.

## Content
Toolbar order:
Content Type -> Search -> Filters -> Saved View -> View -> More -> New.
`More` contains Import CSV / Export CSV when permission and selected ContentType allow it.
Desktop DataView table.
Mobile cards/list.
Import opens the mapping/validation wizard; Export reuses current filters/view when configured.

## Models
Left model list.
Main:
Identity, Fields, Validation, Relations summary, Templates, Advanced.
No SQL column UI.

## Taxonomies
List left; identity/hierarchy/attached types/fields/templates main.

## Relations
Source -> cardinality -> Target.
Structured editor and migration/data-impact summary.

## Queries
List left.
Source + RQB condition editor + sort/page + preview.

## Forms
The Forms list contains ElectroDocuments with `kind=form`.
Open/Edit uses the same Puck Visual Editor.
Form palette is Form + FormField aliases; Group/Repeater are FormField types with nested slots.
Inspector exposes Content/Validation/Conditions/Mapping/Style/Actions.
Submit pipeline links to the form document's `formMeta.submitGraphRef`.
Status messages are Text presets bound to form/action status.

## Backend
Screen list left.
Visual admin document center.
Inspector right.
Refine owns CRUD/data lifecycle/CSV import-export.
TanStack owns data-table behavior.
Toolbar/actions expose Quick Edit, Bulk, Saved Views and Import/Export according to resource/permissions.
RecordForm reuses Form semantics; AdminNavigation reuses Navigation.

## Roles
Role list left.
Permission groups.
Field policies separate.

## Media
Folders left.
Search/type/tags/upload toolbar.
Asset grid/list.
Inspector with usage references.

## Themes/Design System/Tokens
Only project output design.
Studio appearance lives under Settings.

## State
Definitions table.
Runtime Zustand values only in Debug.

## Action Flow
Palette left.
Rete graph center.
Inspector right.
History/test/validation top.

## Preview
Runtime renderer, no editor chrome/selection overlay.

## Compatibility
Target selector.
Ready / Adaptations / Warnings / Blockers.
Click diagnostic navigates to source.

## Export
Destinations left.
Config center.
Compatibility right.
Export disabled on blockers.

## Deploy
Optional provider adapter.
Empty state if no provider connected.
Never required for local export.

## Settings Gear
Right Sheet 360–420 desktop.
Categories:
General, Workspace, Studio Appearance, Editor, Storage, Export Defaults, Integrations, Advanced.

### Workspace
Sidebar side/width/display, group order, panel widths/visibility, named workspaces, Restore Default.

### Studio Appearance
Light/Dark/System, semantic colors, typography, icons, radius, shadow, density, control size/shape, menu appearance, spacing, motion and contrast.
Preview / Apply / Revert.
Never changes frontend/backend project themes.

### Editor
Rulers, guides, snapping, snap threshold, visual history limit, canvas behavior.

### Storage
DB/media usage, backups/revisions/recovery, diagnostics.

Closing returns focus to the gear button.
