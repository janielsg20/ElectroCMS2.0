# REDUNDANCY AUDIT — Fifth Final

## Engine duplication eliminated
- Visual DnD/Outline/Fields/Preview/Slots/session history -> Puck.
- Studio DB/transactions -> PGlite + Drizzle.
- Runtime query cache -> TanStack Query.
- Admin CRUD -> Refine.
- Table algorithms -> TanStack Table.
- Form state -> RHF.
- Validation -> Zod.
- Query rule tree/diagnostics/format helpers -> React Query Builder.
- Workflow JS engine/history -> Rete.
- Richtext editor/static renderer -> Tiptap.
- Runtime state/subscriptions/persist mechanism -> Zustand.
- Native routing/runtime/modules -> Expo/RN.

## Duplicate canonical models eliminated
- Template visual tree -> ElectroDocument kind=template.
- Form visual tree/definition -> ElectroDocument kind=form + formMeta.
- Backend visual tree -> ElectroDocument kind=backend-screen.
- Query AND/OR AST -> versioned RQB payload.
- Full app registries -> app registries referenced by IDs, not copied into project.
- Full-project autosave blob -> incremental project_objects.
- Dynamic field SQL schema -> generic records + typed field index.

## Component-class duplication eliminated
- Row/Column/Grid/etc. -> Container presets.
- DynamicText/Image/etc. -> Bindings.
- Form field types -> FormField aliases.
- Filter types -> Filter aliases.
- Commerce/social/business content -> Blocks/Actions/Bindings unless unique semantics justify Core.
- Complete mapping: PALETTE_CATALOG_MATRIX.md.

## Similar microphases intentionally retained
- Android exporter vs iOS exporter: different toolchains/signing.
- Rete POC vs final ActionFlow E2E: architecture proof vs product verification.
- Permission Simulator implementation vs Preview integration: single owner F12, consumer F17.
- Static vs PWA exporter: different runtime/offline requirements.
- Native layout vs content renderer: separate renderer families.
- Query design preview vs runtime trace: authoring vs observability.

## Final sequencing rule
No E2E/QA microphase may precede functional additions it is supposed to validate.
The final spec reorders affected phases so final QA is truly last.
