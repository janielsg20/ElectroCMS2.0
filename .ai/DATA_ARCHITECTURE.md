# DATA ARCHITECTURE — Fifth Final

# 1. PGlite execution model

PGlite runs behind its official multi-tab Worker strategy.

Why:
- keep heavy DB work outside main UI;
- coordinate a single logical connection;
- support multiple Studio tabs;
- prevent independent databases/connections.

UI never gets raw PGlite.

---

# 2. Stable Studio tables

## projects
Project metadata/current state.

## project_objects
Incremental canonical object persistence.

Columns conceptually:
- projectId
- objectId
- kind
- schemaVersion
- payload JSONB
- checksum
- updatedAt

Kinds include:
- project-definition
- document
- schema
- query
- form-definition
- action-graph
- state-definition
- roles/policies
- route
- theme
- reusable-component
- settings when project-specific

## project_revisions
Checkpoint manifest:
- revisionId
- projectId
- reason
- createdAt
- object version/checksum refs
- optional source/export metadata

Not every keystroke.

## content_records
- id
- projectId
- contentTypeId
- status
- data JSONB
- timestamps

## taxonomy_terms
## record_terms
## relation_edges

## record_field_index
Generic typed index only for fields marked:
- searchable
- filterable
- sortable
- faceted

Conceptual columns:
- projectId
- recordId
- contentTypeId
- fieldId
- ordinal
- valueType
- textValue
- normalizedText
- numberValue
- dateValue
- boolValue

Do not index every field.

## workspace_preferences
Studio-only.

## media_metadata
Bytes use `MediaBlobStorePort`: OPFS preferred, IndexedDB Blob fallback after capability test.

## audit_events
Optional but core-ready for workflow/revisions/audit.

## form_drafts
Only when enabled.

## auth/user tables
Only for runtime/profile that requires local auth.

---

# 3. Incremental autosave

For a stable edit:
1. Adapter identifies dirty canonical object IDs.
2. Wait debounce/idle.
3. Validate each object.
4. Serialize deterministically.
5. Calculate checksum.
6. Begin transaction.
7. Upsert dirty `project_objects`.
8. Update project timestamps/current metadata.
9. Commit.
10. UI shows Saved.

Do not rewrite unrelated project objects.

---

# 4. Revisions vs Undo

## Undo/Redo
Session:
- Puck history for document edit;
- Rete history for workflow graph.

## Project Revision
Cross-session:
- checkpoint of committed canonical object versions;
- manual/publish/export/pre-destructive-operation/coarse interval.

Restore revision creates a new current version.
Do not mutate old revision history.

---

# 5. CMS schema

ElectroSchema remains metadata.
No ALTER TABLE for dynamic field changes.

A field can be added instantly.
Record validation follows current schema.

When `searchable/filterable/sortable/faceted` changes:
- mark index rebuild needed;
- rebuild `record_field_index` for that field/content type;
- do not rebuild physical schema.

---

# 6. Query strategy

Priority:
1. Generic field index for indexed fields/facets/sorts.
2. JSON extraction for unindexed fields.
3. relation/taxonomy tables for graph/term semantics.
4. Provider adapter for external sources.

All values parameterized.

---

# 7. Native

Expo SQLite mirrors the same conceptual tables.
JSON becomes JSON text where required.
Generic field index makes cross-dialect filters predictable.

---

# 8. Backup/Import

Portable package contains:
- project object set;
- revision metadata/checkpoint;
- content data;
- terms/relations/index rebuild metadata;
- media;
- manifest/checksums;
- professionalStudio manifest.

Import validates before any write.

## Final storage baseline
PGlite DB persistence defaults to `idb://` for broad browser compatibility. OPFS-based PGlite filesystems are optional optimizations only after F00 capability/benchmark validation. This does not change the MediaBlobStore policy above.


# 9. PGlite persistent filesystem baseline

Default Studio DB persistence uses `idb://...` for the compatibility baseline.
Alternative PGlite filesystems are optional optimizations only after F00 capability/benchmark approval.

This rule is separate from MediaBlobStore:
- PGlite owns structured project/content data.
- MediaBlobStore owns large binary assets.

# 10. Target dedicated storage hint

`ElectroSchema.ContentType.storageHint = generic | dedicated-target`.

- Studio PGlite: always generic.
- Native SQLite: always generic initially.
- LAMP/WordPress: exporter may compile `dedicated-target` to a dedicated table only when target adapter, migration and compatibility rules support it.
- The hint never triggers dynamic Studio DDL.
