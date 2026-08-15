# NO-AUTONOMY RULES

Before creating anything, classify it.

## File
Which phase/package/engine/canonical owner?

## Component
Core / preset / composite / binding / form alias / filter alias / action / admin presentation?

## State
Studio transient / Puck / Rete / canonical project / runtime Zustand / content DB?

## Persistence
project_object / content entity / workspace preference / media byte / revision?

## Query behavior
Can RQB/TanStack Query already do it?

## Admin behavior
Can Refine/TanStack already do it?

## Workflow
Can Rete already do it?

## UI primitive
Can Radix/shadcn already do it?

## Native
Can Expo/Expo Router/Expo module already do it?

If a new subsystem is still needed, create an ADR explaining:
1. exact gap;
2. public engine APIs considered;
3. why adapter/composition fails;
4. cost;
5. target compatibility;
6. rollback/replacement path.

Fallback reading order:
Prompt -> Rules -> Engine Matrix -> Model Ownership -> Data Architecture -> Component Rationalization -> UX IA -> Phase -> Microphase -> official docs -> ADR.
