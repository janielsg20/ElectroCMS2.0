# ARCHITECTURAL DECISIONS — Fifth Final

This file logs the critical technical decisions accepted during Phase F00.

## Core Foundation (F00 Validated)

### D001: Engine-first Supremacy
- **Decision**: No core CMS functionality (editor, DB, CRUD, queries, rich-text) will be built from scratch.
- **Rationale**: Leverage community stability and focus ElectroCMS on "portable professional semantics."

### D002: One Visual Tree (ElectroDocument)
- **Decision**: Pages, Templates, Forms, and Backend Screens all use the same `ElectroDocument` schema.
- **Rationale**: Simplifies the rendering engine and ensures 100% feature parity across all document types.

### D003: Generic Content Store (No DDL)
- **Decision**: Logical content types and fields are stored as JSONB in a generic table.
- **Rationale**: Prevents browser-side `ALTER TABLE` performance issues and enables instant schema changes.

### D004: Fail-closed Query Policy
- **Decision**: Any visual query rule that cannot be safely mapped to a parameterized SQL fragment must block execution.
- **Rationale**: Security-first approach to prevent accidental data leaks or injection.

### D005: Multi-tab Database Worker
- **Decision**: PGlite must run in a dedicated Web Worker with Leader Election.
- **Rationale**: Required for data consistency when a user opens multiple Studio tabs.

## Explicitly Excluded (Do Not Build)

- **Parallel Form AST**: Forms are just Documents.
- **Custom CSV Engine**: Refine `useImport/Export` is the only transport.
- **Universal History**: Each engine (Puck, Rete) manages its own session history.
- **Raw SQL in UI**: All database access must go through an adapter or repository.

## Post-Core Guard
The following are NOT required for the 2.0 release:
- Multi-user collaboration (Yjs).
- Built-in AI generation (optional provider only).
- Public Plugin SDK.
- GraphQL-first specific provider.
