# MEMORY — Fifth Final

## Core decisions
- Puck visual editor.
- PGlite + Drizzle behind multi-tab Worker.
- project_objects incremental persistence.
- project_revisions checkpoints; not every edit.
- generic content_records JSON + relation/taxonomy + typed record_field_index.
- React Query Builder rules wrapper; no second condition AST.
- TanStack Query runtime cache.
- Refine + TanStack backend.
- RHF + Zod forms.
- Tiptap only richtext.
- Zustand state.
- Rete editor/engine/history + domain-event automation.
- React Native/Expo/Expo Router Native.
- Expo SQLite + Drizzle.
- Refine Core reused for Native admin.
- RuntimeDependencyManifest prunes generated dependencies.
- professionalStudio manifest preserves portable professional semantics.

## Removed/deferred
- Lexical removed.
- XState post-core.
- Yjs post-core.
- GraphQL-specific provider post-core.
- custom code sandbox post-core.
- Puck AI post-core/optional; not local-first core.
- universal CommandBus/history removed.
- full project autosave snapshots removed.
- dynamic table-per-field schema removed.
- custom JS workflow runtime removed.

## Phase dependency correction
F10 Media -> F11 State -> F12 Auth -> F13 Actions -> F14 Forms -> F15 Backend.

## AppShell
Sidebar 240/64.
Topbar 52.
Context 288.
Canvas flex.
Inspector 320.
Status 26.
Settings gear last at far right.

## Current roadmap
28 phases.
216 microphases.
Start F00/M00.1.
