# ARCHITECTURE

Layer direction:
`domain -> application/ports -> adapters -> Studio/runtime/exporters`.

## Domain
Portable definitions only.
No React/Puck/Drizzle/Expo/Rete/Refine imports.

## Application
Use-cases, validation orchestration, permissions, content workflow, repository/query/provider ports.

## Adapters
Puck, PGlite, RQB, Refine, Rete, Tiptap, Zustand, Expo, WordPress/LAMP compilers.

## Studio UI
AppShell and product workflows.
Never raw DB.

## Runtime
Web/React and Native renderers consume canonical project definitions.

## Exporters
Consume ElectroExportIR, capability registry and RuntimeDependencyManifest.
Never scrape Studio component state.

## Core principle
A capability belongs to Electro semantic definitions; a target implements it through an engine/adapter/compiler/fallback.
