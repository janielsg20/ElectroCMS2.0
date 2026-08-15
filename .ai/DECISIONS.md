# DECISIONS — Durable summary

- Puck owns visual editor mechanics.
- PGlite multi-tab Worker + Drizzle owns Studio structured storage.
- Incremental project_objects replace full-project autosave snapshots.
- Project revisions are checkpoints, separate from Undo.
- Generic content JSON store + typed field index; no dynamic DDL per field.
- RQB rule payload is reused; no duplicate condition AST.
- TanStack Query owns runtime query cache.
- Tiptap is the only core richtext engine.
- Zustand is core state runtime.
- Rete owns JS ActionFlow execution/history.
- Refine/TanStack/RHF own backend mechanics.
- Expo/RN is primary Native; Capacitor fallback.
- Themes are visual; Blueprint/Project Kit carries structure/demo data.
- Generated runtime dependencies are capability-pruned.
