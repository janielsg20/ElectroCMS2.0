# DETAILED EXECUTION PHASES — Fifth Final

## F00 — Auditoría funcional, OSS ownership y POCs
**Objetivo:** Probar con APIs oficiales que los engines elegidos cubren sus responsabilidades y congelar ADRs.
**Dependencias:** ninguna

- **M00.1 — Trazar Prompt Maestro 1.0 al plan 2.0**
  - `.ai/microphases/M00_1.md`
- **M00.2 — Auditar responsabilidades OSS**
  - `.ai/microphases/M00_2.md`
- **M00.3 — POC Visual Editor con Puck Composition**
  - `.ai/microphases/M00_3.md`
- **M00.4 — POC Studio DB genérica**
  - `.ai/microphases/M00_4.md`
- **M00.5 — POC Query portable**
  - `.ai/microphases/M00_5.md`
- **M00.6 — POC Action Flow Rete**
  - `.ai/microphases/M00_6.md`
- **M00.7 — POC Native runtime**
  - `.ai/microphases/M00_7.md`
- **M00.8 — Cerrar ADR de arquitectura**
  - `.ai/microphases/M00_8.md`

## F01 — Monorepo, boundaries, documentación y CI
**Objetivo:** Crear límites de paquetes, tooling, documentación/evidence y CI.
**Dependencias:** F00

- **M01.1 — Crear monorepo y paquetes propietarios**
  - `.ai/microphases/M01_1.md`
- **M01.2 — Configurar TypeScript y boundaries**
  - `.ai/microphases/M01_2.md`
- **M01.3 — Configurar lint, test y build**
  - `.ai/microphases/M01_3.md`
- **M01.4 — Crear Studio Vite/PWA bootstrap**
  - `.ai/microphases/M01_4.md`
- **M01.5 — Crear CI base**
  - `.ai/microphases/M01_5.md`
- **M01.6 — Documentar conventions**
  - `.ai/microphases/M01_6.md`

## F02 — Modelo canónico mínimo, ownership y versionado
**Objetivo:** Definir project objects/wrappers mínimos sin árboles, ASTs o registries duplicados.
**Dependencias:** F01

- **M02.1 — Definir ElectroProject y documentos**
  - `.ai/microphases/M02_1.md`
- **M02.2 — Definir Component/Layout/Style**
  - `.ai/microphases/M02_2.md`
- **M02.3 — Definir ownership de Schema, Query y Form Documents**
  - `.ai/microphases/M02_3.md`
- **M02.4 — Definir Action/State/Permission contracts**
  - `.ai/microphases/M02_4.md`
- **M02.5 — Definir Theme, Blueprint, Registries y Capability ownership**
  - `.ai/microphases/M02_5.md`
- **M02.6 — Serializer y migrations de proyecto**
  - `.ai/microphases/M02_6.md`
- **M02.7 — Definir ElectroExportIR**
  - `.ai/microphases/M02_7.md`
- **M02.8 — Clasificar ownership: Project Objects vs Registries vs Content Entities**
  - `.ai/microphases/M02_8.md`
- **M02.9 — Definir wrappers versionados para payloads de engines**
  - `.ai/microphases/M02_9.md`

## F03 — Design System, AppShell, Studio Appearance e Information Architecture
**Objetivo:** Construir AppShell, Design System, Studio Appearance, Palette e IA progresiva.
**Dependencias:** F02

- **M03.1 — Integrar shadcn/Radix y tokens Electro**
  - `.ai/microphases/M03_1.md`
- **M03.2 — Construir AppShell desktop**
  - `.ai/microphases/M03_2.md`
- **M03.3 — Construir Sidebar global**
  - `.ai/microphases/M03_3.md`
- **M03.4 — Construir Topbar y Settings Gear**
  - `.ai/microphases/M03_4.md`
- **M03.5 — Construir Context/Canvas/Inspector/Status**
  - `.ai/microphases/M03_5.md`
- **M03.6 — Adaptar laptop/tablet/mobile**
  - `.ai/microphases/M03_6.md`
- **M03.7 — Aplicar Progressive Disclosure y arquitectura de información**
  - `.ai/microphases/M03_7.md`
- **M03.8 — Diseñar Palette descubrible sin multiplicar componentes**
  - `.ai/microphases/M03_8.md`
- **M03.9 — Studio Appearance Editor completo**
  - `.ai/microphases/M03_9.md`
- **M03.10 — E2E AppShell**
  - `.ai/microphases/M03_10.md`

## F04 — PGlite Worker, persistencia incremental y Project Lifecycle
**Objetivo:** Implementar persistencia local multi-tab, incremental, recuperable y Project Manager.
**Dependencias:** F03

- **M04.1 — Crear schema físico estable por objetos y contenido**
  - `.ai/microphases/M04_1.md`
- **M04.2 — Inicializar PGlite Multi-Tab Worker y migrations**
  - `.ai/microphases/M04_2.md`
- **M04.3 — Persistencia incremental, autosave y recovery**
  - `.ai/microphases/M04_3.md`
- **M04.4 — Construir Project Home**
  - `.ai/microphases/M04_4.md`
- **M04.5 — New Project Wizard y project actions**
  - `.ai/microphases/M04_5.md`
- **M04.6 — Import/Backup/Restore**
  - `.ai/microphases/M04_6.md`
- **M04.7 — Workspace preferences**
  - `.ai/microphases/M04_7.md`
- **M04.8 — Construir Project Revision Checkpoints y Restore**
  - `.ai/microphases/M04_8.md`

## F05 — Puck Visual Editor Core
**Objetivo:** Integrar Puck mediante Composition/Slots sin segundo editor engine.
**Dependencias:** F04

- **M05.1 — Crear PuckAdapter y component mapping**
  - `.ai/microphases/M05_1.md`
- **M05.2 — Componer Components/Outline/Preview/Fields**
  - `.ai/microphases/M05_2.md`
- **M05.3 — Nested Slots, permissions y Puck data migration**
  - `.ai/microphases/M05_3.md`
- **M05.4 — Sincronizar Puck actions con ElectroDocument**
  - `.ai/microphases/M05_4.md`
- **M05.5 — Usar Puck visual history**
  - `.ai/microphases/M05_5.md`
- **M05.6 — Text/RichText inline editing**
  - `.ai/microphases/M05_6.md`
- **M05.7 — Extensiones de palette y outline solo necesarias**
  - `.ai/microphases/M05_7.md`
- **M05.8 — Editor core E2E**
  - `.ai/microphases/M05_8.md`

## F06 — Editor avanzado, responsive y portabilidad visual
**Objetivo:** Añadir responsive/advanced editing únicamente donde Electro aporta valor.
**Dependencias:** F05

- **M06.1 — ElectroLayout/Style inspector**
  - `.ai/microphases/M06_1.md`
- **M06.2 — Responsive inheritance y reset**
  - `.ai/microphases/M06_2.md`
- **M06.3 — Platform overrides y diagnostics**
  - `.ai/microphases/M06_3.md`
- **M06.4 — Advanced canvas guides/snapping**
  - `.ai/microphases/M06_4.md`
- **M06.5 — Multi-select, Group/Ungroup y Resize mediante extensión fina de Puck**
  - `.ai/microphases/M06_5.md`
- **M06.6 — Breadcrumbs y context actions**
  - `.ai/microphases/M06_6.md`
- **M06.7 — Mobile/tablet editor tools**
  - `.ai/microphases/M06_7.md`
- **M06.8 — Advanced editor QA**
  - `.ai/microphases/M06_8.md`

## F07 — Themes, Templates, Blocks y Global Components
**Objetivo:** Resolver diseño/reutilización con Theme, Template Documents, Blocks y Globals.
**Dependencias:** F06

- **M07.1 — Project Design Tokens y themes**
  - `.ai/microphases/M07_1.md`
- **M07.2 — Template Manager**
  - `.ai/microphases/M07_2.md`
- **M07.3 — Display Conditions**
  - `.ai/microphases/M07_3.md`
- **M07.4 — Saved blocks y global components**
  - `.ai/microphases/M07_4.md`
- **M07.5 — Theme/template import/export**
  - `.ai/microphases/M07_5.md`
- **M07.6 — Theme/template QA**
  - `.ai/microphases/M07_6.md`

## F08 — CMS Schema, Content Store, Workflow e Indexer
**Objetivo:** Implementar CMS, workflow/revisions/options/profiles/indexer sin DDL dinámico.
**Dependencias:** F07

- **M08.1 — Content Type y Field Registry**
  - `.ai/microphases/M08_1.md`
- **M08.2 — Group/Repeater/Calculated/Conditional**
  - `.ai/microphases/M08_2.md`
- **M08.3 — Taxonomías**
  - `.ai/microphases/M08_3.md`
- **M08.4 — Relaciones 1:1, 1:N, N:N**
  - `.ai/microphases/M08_4.md`
- **M08.5 — Record CRUD y validation**
  - `.ai/microphases/M08_5.md`
- **M08.6 — Generic Typed Field Indexer**
  - `.ai/microphases/M08_6.md`
- **M08.7 — Implementar workflow editorial y revisiones de Records**
  - `.ai/microphases/M08_7.md`
- **M08.8 — Modelar Global Options, Profiles y Data Stores sin nuevos engines**
  - `.ai/microphases/M08_8.md`
- **M08.9 — Content integrity y QA**
  - `.ai/microphases/M08_9.md`

## F09 — Bindings, Queries, Listings, Facets y Runtime Cache
**Objetivo:** Resolver dynamic data con Binding, RQB Diagnostics, TanStack Query y facets.
**Dependencias:** F08

- **M09.1 — ElectroBinding y Set From Data**
  - `.ai/microphases/M09_1.md`
- **M09.2 — ElectroQueryDefinition y RQB payload adapter**
  - `.ai/microphases/M09_2.md`
- **M09.3 — Query formatter fail-closed y field-path adapter**
  - `.ai/microphases/M09_3.md`
- **M09.4 — Relations/Taxonomy query semantics**
  - `.ai/microphases/M09_4.md`
- **M09.5 — Listing runtime para Query y Collection**
  - `.ai/microphases/M09_5.md`
- **M09.6 — Filter component único, facets y apply modes**
  - `.ai/microphases/M09_6.md`
- **M09.7 — URL state y Saved Queries**
  - `.ai/microphases/M09_7.md`
- **M09.8 — Integrar TanStack Query como runtime query cache**
  - `.ai/microphases/M09_8.md`
- **M09.9 — Añadir consultas multifuente y Merge/Union portable**
  - `.ai/microphases/M09_9.md`
- **M09.10 — Implementar facets, counts, chips y apply modes**
  - `.ai/microphases/M09_10.md`
- **M09.11 — Query/Binding E2E**
  - `.ai/microphases/M09_11.md`

## F10 — Media Library y Tiptap Rich Text
**Objetivo:** Gestionar media local y Tiptap con Static Renderer read-only.
**Dependencias:** F09

- **M10.1 — Media metadata y OPFS adapter**
  - `.ai/microphases/M10_1.md`
- **M10.2 — Validation/dedupe/thumbnails**
  - `.ai/microphases/M10_2.md`
- **M10.3 — Media Library UX**
  - `.ai/microphases/M10_3.md`
- **M10.4 — Tiptap adapter**
  - `.ai/microphases/M10_4.md`
- **M10.5 — Tiptap payload + Static Renderer multi-target**
  - `.ai/microphases/M10_5.md`
- **M10.6 — Media/RichText E2E**
  - `.ai/microphases/M10_6.md`

## F11 — Runtime State con Zustand
**Objetivo:** Implementar Zustand state y persistencia validada.
**Dependencias:** F10

- **M11.1 — ElectroStateDefinition**
  - `.ai/microphases/M11_1.md`
- **M11.2 — Zustand store adapter**
  - `.ai/microphases/M11_2.md`
- **M11.3 — Persistence adapters**
  - `.ai/microphases/M11_3.md`
- **M11.4 — State Bindings y Actions**
  - `.ai/microphases/M11_4.md`
- **M11.5 — State panel/debug**
  - `.ai/microphases/M11_5.md`
- **M11.6 — State E2E**
  - `.ai/microphases/M11_6.md`

## F12 — Auth, Users, Roles, Permissions y Audit
**Objetivo:** Implementar Auth, Users, Profiles, Permissions y Audit.
**Dependencias:** F11

- **M12.1 — ElectroRole/Permission model**
  - `.ai/microphases/M12_1.md`
- **M12.2 — Permission evaluator**
  - `.ai/microphases/M12_2.md`
- **M12.3 — Refine AccessControl adapter**
  - `.ai/microphases/M12_3.md`
- **M12.4 — AuthProvider Port y local runtime**
  - `.ai/microphases/M12_4.md`
- **M12.5 — Refine Audit/Notification integration**
  - `.ai/microphases/M12_5.md`
- **M12.6 — Integrar usuarios locales y Profile Content sin duplicar Auth**
  - `.ai/microphases/M12_6.md`
- **M12.7 — Permission Simulator y tests**
  - `.ai/microphases/M12_7.md`

## F13 — Action Flow, Automation y API Providers con Rete
**Objetivo:** Implementar Rete actions/automation/providers sin runtime paralelo.
**Dependencias:** F12

- **M13.1 — ElectroActionGraph + Rete adapter**
  - `.ai/microphases/M13_1.md`
- **M13.2 — Rete editor + history plugin**
  - `.ai/microphases/M13_2.md`
- **M13.3 — Rete ControlFlow/Dataflow runtime JS**
  - `.ai/microphases/M13_3.md`
- **M13.4 — Action node packs**
  - `.ai/microphases/M13_4.md`
- **M13.5 — HTTP/REST Provider Registry**
  - `.ai/microphases/M13_5.md`
- **M13.6 — Target compilers boundary**
  - `.ai/microphases/M13_6.md`
- **M13.7 — Añadir Domain Event Triggers y automatización**
  - `.ai/microphases/M13_7.md`
- **M13.8 — Definir Email y Webhook como providers opcionales**
  - `.ai/microphases/M13_8.md`
- **M13.9 — Action Flow E2E**
  - `.ai/microphases/M13_9.md`

## F14 — Forms Builder con RHF/Zod
**Objetivo:** Construir Form Documents sobre RHF/Zod y ActionGraph.
**Dependencias:** F10, F11, F12, F13

- **M14.1 — Form Documents y Field aliases**
  - `.ai/microphases/M14_1.md`
- **M14.2 — RHF runtime y Zod compiler**
  - `.ai/microphases/M14_2.md`
- **M14.3 — Visual form composition**
  - `.ai/microphases/M14_3.md`
- **M14.4 — Conditional/Multi-step/Draft**
  - `.ai/microphases/M14_4.md`
- **M14.5 — Submit ActionGraph integration**
  - `.ai/microphases/M14_5.md`
- **M14.6 — Calculated Form Fields y Frontend Record Editing**
  - `.ai/microphases/M14_6.md`
- **M14.7 — Anti-bot opcional y acciones Email/Webhook**
  - `.ai/microphases/M14_7.md`
- **M14.8 — Forms E2E**
  - `.ai/microphases/M14_8.md`

## F15 — Backend Builder, CSV Data Exchange, Refine y TanStack
**Objetivo:** Construir Backend con Refine/TanStack, adapters Chart/Calendar/Kanban y CSV data exchange.
**Dependencias:** F08, F09, F12, F14

- **M15.1 — ElectroDataProvider + Refine bootstrap**
  - `.ai/microphases/M15_1.md`
- **M15.2 — AdminScreen/Route definitions**
  - `.ai/microphases/M15_2.md`
- **M15.3 — Refine useTable + TanStack DataView**
  - `.ai/microphases/M15_3.md`
- **M15.4 — Create/Edit/Detail with Refine RHF**
  - `.ai/microphases/M15_4.md`
- **M15.5 — Dashboard, Metric, Chart, Saved Views**
  - `.ai/microphases/M15_5.md`
- **M15.6 — Kanban/Calendar/Bulk actions**
  - `.ai/microphases/M15_6.md`
- **M15.7 — Backend visual composition**
  - `.ai/microphases/M15_7.md`
- **M15.8 — Quick Edit y Inline Mutation con Refine**
  - `.ai/microphases/M15_8.md`
- **M15.9 — Importación y exportación CSV de Records con Refine**
  - `.ai/microphases/M15_9.md`
- **M15.10 — Backend E2E**
  - `.ai/microphases/M15_10.md`

## F16 — Blueprint Engine, Project Kits y Professional Capability Matrix
**Objetivo:** Entregar Project Kits/20 Blueprints y cerrar matriz profesional.
**Dependencias:** F15

- **M16.1 — ElectroBlueprint manifest e installer**
  - `.ai/microphases/M16_1.md`
- **M16.2 — Conflict resolver y selective install**
  - `.ai/microphases/M16_2.md`
- **M16.3 — Blueprint group: Commerce y operaciones**
  - `.ai/microphases/M16_3.md`
- **M16.4 — Blueprint group: Content y directorios**
  - `.ai/microphases/M16_4.md`
- **M16.5 — Blueprint group: Servicios y gestión**
  - `.ai/microphases/M16_5.md`
- **M16.6 — Blueprint group: Education/community**
  - `.ai/microphases/M16_6.md`
- **M16.7 — Crear Professional Capability Packs sin nuevos engines**
  - `.ai/microphases/M16_7.md`
- **M16.8 — Racionalizar Project Kit: Theme + Templates + Blueprint**
  - `.ai/microphases/M16_8.md`
- **M16.9 — Blueprint QA**
  - `.ai/microphases/M16_9.md`

## F17 — Preview, Debug y Runtime Diagnostics
**Objetivo:** Preview runtime separado y Debug/trace.
**Dependencias:** F16

- **M17.1 — Frontend runtime preview**
  - `.ai/microphases/M17_1.md`
- **M17.2 — Backend runtime preview**
  - `.ai/microphases/M17_2.md`
- **M17.3 — Preview routing y 404**
  - `.ai/microphases/M17_3.md`
- **M17.4 — Debug Console**
  - `.ai/microphases/M17_4.md`
- **M17.5 — Query/Action/State traces**
  - `.ai/microphases/M17_5.md`
- **M17.6 — Integrar Permission Simulator existente en Preview**
  - `.ai/microphases/M17_6.md`
- **M17.7 — Preview E2E**
  - `.ai/microphases/M17_7.md`

## F18 — Platform Capability Registry y Compatibility Analyzer
**Objetivo:** Compatibilidad multi-target y no silent loss.
**Dependencias:** F17

- **M18.1 — Capability model y registry**
  - `.ai/microphases/M18_1.md`
- **M18.2 — Component/style capabilities**
  - `.ai/microphases/M18_2.md`
- **M18.3 — Binding/query/form/action capabilities**
  - `.ai/microphases/M18_3.md`
- **M18.4 — Fallback registry**
  - `.ai/microphases/M18_4.md`
- **M18.5 — Compatibility Analyzer**
  - `.ai/microphases/M18_5.md`
- **M18.6 — Compatibility Screen**
  - `.ai/microphases/M18_6.md`
- **M18.7 — Capability regression fixtures**
  - `.ai/microphases/M18_7.md`

## F19 — React Native Renderer
**Objetivo:** React Native renderer sin DOM.
**Dependencias:** F18

- **M19.1 — NativeRenderer adapter y tokens**
  - `.ai/microphases/M19_1.md`
- **M19.2 — Native core layout**
  - `.ai/microphases/M19_2.md`
- **M19.3 — Native core content**
  - `.ai/microphases/M19_3.md`
- **M19.4 — Native Listing/Filter/Form**
  - `.ai/microphases/M19_4.md`
- **M19.5 — Native admin components**
  - `.ai/microphases/M19_5.md`
- **M19.6 — Native accessibility/style QA**
  - `.ai/microphases/M19_6.md`

## F20 — Expo Runtime, Router, Native Data y Native Admin
**Objetivo:** Expo runtime/router/SQLite/Native admin con Refine headless.
**Dependencias:** F12, F19

- **M20.1 — Expo project/runtime bootstrap**
  - `.ai/microphases/M20_1.md`
- **M20.2 — Expo Router stable Stack/JS Tabs compiler**
  - `.ai/microphases/M20_2.md`
- **M20.3 — Expo SQLite + Drizzle stable schema**
  - `.ai/microphases/M20_3.md`
- **M20.4 — Native data/query adapters**
  - `.ai/microphases/M20_4.md`
- **M20.5 — Native state/auth restore**
  - `.ai/microphases/M20_5.md`
- **M20.6 — Assets and route source generation**
  - `.ai/microphases/M20_6.md`
- **M20.7 — Integrar Refine Core en Admin Native**
  - `.ai/microphases/M20_7.md`
- **M20.8 — Aplicar política estable de Expo Router y version pinning**
  - `.ai/microphases/M20_8.md`
- **M20.9 — Native source smoke test**
  - `.ai/microphases/M20_9.md`

## F21 — Native Device Capabilities
**Objetivo:** Device capabilities solo cuando se usan.
**Dependencias:** F20

- **M21.1 — Native permissions compiler**
  - `.ai/microphases/M21_1.md`
- **M21.2 — Files y Secure Storage**
  - `.ai/microphases/M21_2.md`
- **M21.3 — Location y Camera/Media**
  - `.ai/microphases/M21_3.md`
- **M21.4 — Notifications, Haptics y Share**
  - `.ai/microphases/M21_4.md`
- **M21.5 — Contacts, Calendar y Biometrics**
  - `.ai/microphases/M21_5.md`
- **M21.6 — Native preview/device workflow**
  - `.ai/microphases/M21_6.md`

## F22 — ElectroExportIR, Local/React/Static/PWA y Dependency Pruning
**Objetivo:** Local/React/Static/PWA con ExportIR, professionalStudio y dependency pruning.
**Dependencias:** F18

- **M22.1 — ExportIR builder y validation**
  - `.ai/microphases/M22_1.md`
- **M22.2 — Local project package**
  - `.ai/microphases/M22_2.md`
- **M22.3 — React source exporter con dependency pruning**
  - `.ai/microphases/M22_3.md`
- **M22.4 — Static exporter**
  - `.ai/microphases/M22_4.md`
- **M22.5 — PWA exporter**
  - `.ai/microphases/M22_5.md`
- **M22.6 — Asset localization and generated docs**
  - `.ai/microphases/M22_6.md`
- **M22.7 — Generar Runtime Dependency Manifest y podar dependencias**
  - `.ai/microphases/M22_7.md`
- **M22.8 — Generar professionalStudio manifest portable**
  - `.ai/microphases/M22_8.md`
- **M22.9 — Web export build fixtures**
  - `.ai/microphases/M22_9.md`

## F23 — Android/iOS Export y Capacitor Fallback
**Objetivo:** Android/iOS y Capacitor fallback explícito.
**Dependencias:** F20, F21, F22

- **M23.1 — Expo export profile**
  - `.ai/microphases/M23_1.md`
- **M23.2 — Android exporter y build**
  - `.ai/microphases/M23_2.md`
- **M23.3 — iOS exporter y build**
  - `.ai/microphases/M23_3.md`
- **M23.4 — Signing diagnostics**
  - `.ai/microphases/M23_4.md`
- **M23.5 — Capacitor fallback exporter**
  - `.ai/microphases/M23_5.md`
- **M23.6 — Mobile export comparison UI**
  - `.ai/microphases/M23_6.md`
- **M23.7 — Mobile export fixtures**
  - `.ai/microphases/M23_7.md`

## F24 — LAMP Exporter
**Objetivo:** LAMP funcional/seguro.
**Dependencias:** F18, F22

- **M24.1 — LAMP project structure**
  - `.ai/microphases/M24_1.md`
- **M24.2 — MySQL content store/compiler**
  - `.ai/microphases/M24_2.md`
- **M24.3 — Routes/renderers/forms**
  - `.ai/microphases/M24_3.md`
- **M24.4 — Auth/RBAC/admin**
  - `.ai/microphases/M24_4.md`
- **M24.5 — Action/query target adapters**
  - `.ai/microphases/M24_5.md`
- **M24.6 — Installer/security fixture**
  - `.ai/microphases/M24_6.md`

## F25 — WordPress Theme + Companion Plugin Exporter
**Objetivo:** WordPress Theme+Plugin funcional/seguro.
**Dependencias:** F18, F22

- **M25.1 — WordPress export structure**
  - `.ai/microphases/M25_1.md`
- **M25.2 — Theme templates/rendering**
  - `.ai/microphases/M25_2.md`
- **M25.3 — CPT/Taxonomy/Fields mapping**
  - `.ai/microphases/M25_3.md`
- **M25.4 — Forms/Queries/Filters**
  - `.ai/microphases/M25_4.md`
- **M25.5 — Roles/Admin/Actions**
  - `.ai/microphases/M25_5.md`
- **M25.6 — Activation/migration/uninstall QA**
  - `.ai/microphases/M25_6.md`

## F26 — Hardening, OSS Stability, Deploy Boundaries y Post-Core Guardrails
**Objetivo:** Hardening, dependency stability/licensing y post-core boundaries.
**Dependencias:** F25

- **M26.1 — Security hardening fail-closed**
  - `.ai/microphases/M26_1.md`
- **M26.2 — Accessibility hardening**
  - `.ai/microphases/M26_2.md`
- **M26.3 — Performance hardening**
  - `.ai/microphases/M26_3.md`
- **M26.4 — Offline/recovery hardening**
  - `.ai/microphases/M26_4.md`
- **M26.5 — Deployment Provider boundary**
  - `.ai/microphases/M26_5.md`
- **M26.6 — Future features document**
  - `.ai/microphases/M26_6.md`
- **M26.7 — Auditar APIs experimentales y fijar dependency baseline**
  - `.ai/microphases/M26_7.md`

## F27 — Cross-Target QA, Editable Store Fixture, Coverage y Release
**Objetivo:** Cross-target same-state proof, coverage audit y release gate.
**Dependencias:** F26

- **M27.1 — Canonical E2E project**
  - `.ai/microphases/M27_1.md`
- **M27.2 — Studio/offline/editor QA**
  - `.ai/microphases/M27_2.md`
- **M27.3 — Web/React/PWA equivalence**
  - `.ai/microphases/M27_3.md`
- **M27.4 — Android/iOS equivalence**
  - `.ai/microphases/M27_4.md`
- **M27.5 — LAMP/WordPress equivalence**
  - `.ai/microphases/M27_5.md`
- **M27.6 — Large project/performance regression**
  - `.ai/microphases/M27_6.md`
- **M27.7 — Security/accessibility final audit**
  - `.ai/microphases/M27_7.md`
- **M27.8 — Usar una tienda editable como fixture single-source cross-target**
  - `.ai/microphases/M27_8.md`
- **M27.9 — Cerrar Professional Capability Coverage Matrix**
  - `.ai/microphases/M27_9.md`
- **M27.10 — Documentation/release gate**
  - `.ai/microphases/M27_10.md`

