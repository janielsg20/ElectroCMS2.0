# REQUIREMENTS — Atomic Final Inventory

## Product
- R001 Local-first core without mandatory cloud/API/account.
- R002 React/TypeScript Studio responsive on desktop/tablet/mobile.
- R003 One canonical visual document model.
- R004 Puck visual editing with nesting, direct edit, history and advanced Electro overlays.
- R005 Custom breakpoints, inheritance and platform overrides.
- R006 Project manager with incremental save, recovery, import/export and revisions.
- R007 Separate Studio Appearance, Frontend Theme and Backend Theme.
- R008 Themes, Template Packs, Saved Blocks, Global Components and Project Kits.
- R009 Content Types, advanced fields, taxonomies, 1:1/1:N/N:N relations.
- R010 Workflow, moderation/status transitions and record history.
- R011 Global Options, User Profiles and Internal Data Stores.
- R012 Bindings and dynamic data.
- R013 Visual queries, multi-source merge/union, cache, invalid diagnostics.
- R014 Listings and faceted filters with counts/chips/hierarchy/URL/apply modes.
- R015 Media library and safe local asset store.
- R016 Tiptap rich text with static target rendering.
- R017 Zustand state with validated persistence.
- R018 Local users/Auth, roles, field/resource/route/action permissions.
- R019 Rete Action Flow, automation/domain events, HTTP, optional Email/Webhook.
- R020 Visual Forms with RHF/Zod, conditions, multipage, repeaters, calculations, frontend edit and security.
- R021 Visual Backend with Refine/TanStack, CRUD, Quick Edit, Bulk, Saved Views, Kanban, Calendar, Metrics.
- R022 CMS Record CSV import/export through Refine with Electro mapping/validation.
- R023 Twenty editable Blueprints plus Blank.
- R024 Professional capability catalog with maturity/evidence.
- R025 Frontend/Backend Preview and Debug.
- R026 Target compatibility diagnostics with no silent loss.
- R027 React Native/Expo Android/iOS output.
- R028 Native device capabilities and permission compiler.
- R029 Local, React, Static and PWA export.
- R030 Capacitor explicit fallback.
- R031 Functional LAMP export.
- R032 Functional WordPress Theme + Companion Plugin export.
- R033 Runtime dependency pruning.
- R034 professionalStudio portable manifest.
- R035 Security, accessibility, performance and deterministic testing gates.
- R036 One editable Store fixture proves same state through Preview/Backend/all exports.

## UI/UX
- U001 AppShell dimensions/default placement are fixed by APP_SHELL_SPEC.
- U002 Settings gear is the last far-right Topbar control.
- U003 Progressive Disclosure; power is contextual.
- U004 Main navigation icon+label; collapsed icon-only with tooltip/aria-label.
- U005 No browser-default-looking controls.
- U006 Full Studio Appearance customization via tokens.
- U007 Palette catalog includes Layout, Basic, Content, Navigation, Dynamic Data, Forms, Filters, Social/Contact, Admin and Commerce Pack.
- U008 Friendly Palette entries may be presets/blocks/bindings/aliases rather than runtime classes.
- U009 Empty/loading/error/disabled/saving/blocked states are designed, not omitted.
- U010 Mobile reorganizes tools rather than shrinking desktop panels.

## Architecture
- A001 Engine-first/no duplicate engines.
- A002 PGlite multi-tab Worker with incremental project_objects.
- A003 Generic CMS record store; no dynamic Studio DDL per field.
- A004 Typed record_field_index only for declared searchable/filterable/sortable/faceted fields.
- A005 RQB Diagnostics + fail-closed compiler policy.
- A006 TanStack Query owns runtime data cache.
- A007 Form is ElectroDocument kind=form, not a separate visual tree.
- A008 Template/Backend also reuse ElectroDocument.
- A009 Puck Slots are the nested editor model; DropZone only legacy migration.
- A010 Runtime persisted Zustand values are validated on hydration.
- A011 Target exporters consume ExportIR, not Studio UI state.

Each requirement must be mapped in FEATURE_MATRIX/TRACEABILITY/phase ownership before release.
