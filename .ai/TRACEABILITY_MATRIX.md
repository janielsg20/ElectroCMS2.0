# TRACEABILITY MATRIX — Original ElectroCMS Scope -> Fifth Final Owners

| Original capability family | Final owner | Rationalized solution |
|---|---|---|
| Local/offline | F04/F20/F22 | PGlite Worker / SQLite / local export |
| Project CRUD/import/recovery/incremental save | F04 | project_objects + revisions |
| Configurable Studio navigation/workspaces | F03/F04 | AppShell + workspace preferences |
| Full Studio appearance | F03 | StudioAppearanceProfile/tokens |
| Visual DnD/nesting/layers/fields/preview | F05 | Puck Composition + Slots |
| Legacy Puck zones | F05 | official DropZone->Slot migration only |
| Advanced editor selection/guides/snapping | F06 | thin Electro overlays |
| Breakpoints/custom responsive | F06 | Electro overrides + Puck viewports |
| Frontend/backend design themes | F07 | project Theme |
| Header/Footer/Single/Archive/404 | F07 | Template Documents |
| Saved/global components | F07 | Blocks/Global Definitions |
| Full reusable package with design/content | F16 | Project Kit |
| CPT/fields/taxonomies/relations | F08 | ElectroSchema + generic store |
| Own tables | F08/F24/F25 | dedicated-target storage hint, server compiler |
| Workflow/revisions | F08/F12 | workflow + audit restore |
| Options/profiles/data stores | F08/F12 | ContentType presets |
| Dynamic fields/images/links | F09 | Binding |
| Query rules/invalid diagnostics | F09 | RQB + Diagnostics |
| Query cache | F09 | TanStack Query |
| Multi-source/merge | F09 | QueryCombineAdapter |
| Listings/smart facets/URL/chips | F09 | Listing/Filter/indexer |
| Media | F10 | PGlite metadata + MediaBlobStore |
| Rich text | F10 | Tiptap + Static Renderer |
| State | F11 | Zustand + validated hydration |
| Users/roles/permissions | F12 | Auth + ElectroPermission + Refine adapter |
| Automation/action flow | F13 | Rete engines/history |
| API/Email/Webhook | F13 | optional providers |
| Forms/multistep/calculation/frontend edit | F14 | Form Document + RHF/Zod/ActionGraph |
| Backend CRUD/table | F15 | Refine + TanStack |
| Quick Edit/Bulk/Saved Views/Kanban/Calendar | F15 | Refine/TanStack admin views |
| Record CSV import/export | F15 | Refine useImport/useExport + Electro mapping |
| 20 project presets | F16 | Blueprint catalog |
| Palette navigation/social/business/commerce | F05/F06/F16 | Core + Blocks + Actions + Packs |
| Preview/debug | F17 | runtime renderer/diagnostics |
| No silent target loss | F18 | Capability Analyzer |
| Android/iOS | F19-F23 | React Native/Expo |
| Local/Static/React/PWA | F22 | ExportIR + dependency pruning |
| Capacitor | F23 | explicit hybrid fallback |
| LAMP | F24 | PHP/MySQL generator |
| WordPress | F25 | Theme + Companion Plugin |
| Security/a11y/performance/testing | F26/F27 | hardening and fixtures |
| professionalStudio | F22 | portable professional metadata |
| Editable Store same-state proof | F27 | single-source release fixture |

A visible widget may map to a Preset/Block/Binding/Alias and still fully satisfy the user-facing capability without a unique runtime class.
