# DATA MODELS — Fifth Final

## Project objects
- ElectroProjectDefinition
- ElectroDocument (`page|template|form|backend-screen|reusable-component`)
- ElectroSchema
- ElectroQueryDefinition
- ElectroActionGraph
- ElectroStateDefinition
- ElectroRole / PermissionPolicy
- ElectroRouteDefinition
- ElectroTheme / ElectroDesignSystem
- project-specific reusable definitions

There is no separate ElectroFormDefinition or ElectroTemplate visual tree.

## Content/runtime entities
- ContentRecord
- TaxonomyTerm
- RelationEdge
- RecordFieldIndexEntry
- MediaAsset metadata
- User / safe public descriptor
- Profile Record
- AuditEvent
- FormDraft
- Runtime state persistence payload

## Engine wrappers
- RQB query rule payload
- Tiptap JSON

## Runtime-only objects
Never persist as canonical definitions:
- Puck state/history
- Rete runtime/history
- Refine hooks
- TanStack Query cache
- TanStack Table row/table state
- RHF form state
- Zustand store instance
- Expo Router navigation state
