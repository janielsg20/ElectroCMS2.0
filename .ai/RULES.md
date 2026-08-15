# RULES — Fifth Final

1. **Local-first:** ninguna función core requiere cloud/API/account.
2. **Engine-first:** antes de programar una responsabilidad, consulta ENGINE_RESPONSIBILITY_MATRIX.
3. **No duplicate engines:** Puck visual; PGlite DB; Refine admin; TanStack Table tables; RHF/Zod forms; RQB conditions; TanStack Query cache; Rete workflows; Tiptap richtext; Zustand state; Expo native.
4. **Composition before experimental APIs:** Puck Composition pública antes de overrides/plugins experimentales.
5. **Puck AI no core:** no dependencia Puck Cloud/API key.
6. **One visual tree:** ElectroDocument para page/template/backend/form composition.
7. **No duplicate Form tree:** el formulario persistente es ElectroDocument kind=form con formMeta; no ElectroFormDefinition.
8. **No duplicate Query AST:** RQB rule payload versionado.
9. **No raw engine state in project:** no Puck AppState/history, Rete classes/history, TanStack state, Refine state, Zustand stores.
10. **Incremental save:** persistir dirty project_objects, no full project snapshot por cada edit.
11. **Revisions ≠ Undo:** Puck/Rete session history; project revisions cross-session.
12. **PGlite Worker:** DB detrás de official multi-tab worker; UI no raw DB.
13. **No dynamic DDL per field:** generic content store.
14. **Generic typed index only as needed:** searchable/filterable/sortable/faceted.
15. **Query fail closed:** unsupported RQB formatter rule = diagnostic/blocker.
16. **No custom query cache:** TanStack Query.
17. **No custom table algorithms:** TanStack Table/Refine.
18. **No custom form state:** RHF.
19. **No custom JS workflow runtime:** Rete engines.
20. **One richtext engine:** Tiptap.
21. **Read-only runtime pruning:** no Tiptap editor where only rendering exists.
22. **State:** Zustand; XState post-core.
23. **Native admin:** reuse Refine Core headless; no parallel CRUD hooks.
24. **Expo stability:** stable Stack/JS Tabs default; alpha features feature-gated.
25. **Runtime dependency pruning:** exporter includes only used engines.
26. **Component rationalization:** preset/composite/binding/alias before new component class.
27. **Progressive Disclosure:** power contextual, not all visible.
28. **AppShell invariant:** Settings gear last far-right Topbar.
29. **No silent loss:** compatibility blocker/warning/fallback explicit.
30. **No fake functionality:** no placeholder marked complete.
31. **No secrets:** project JSON/log/generated frontend.
32. **Security:** parameterized SQL, safe imports/files, server CSRF, permission enforcement.
33. **Accessibility:** keyboard/focus/labels/touch/reduced motion/DnD alternative.
34. **Evidence:** no completed state without test/build evidence.
35. **One active microphase.**

36. **Refine CSV:** useImport/useExport own CSV parsing/generation; Electro owns mapping, validation and permissions.
37. **Tiptap read-only:** use Static Renderer, not a home-grown generic HTML/React richtext renderer.
38. **Puck nesting:** new nested editor components use Slots; DropZone only legacy migration.
