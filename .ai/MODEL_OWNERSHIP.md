# MODEL OWNERSHIP — Fifth Final Review

This file prevents duplicate sources of truth.

# 1. Persisted Project Objects

## ElectroProjectDefinition
Owns:
- identity;
- schemaVersion;
- locale;
- project-level settings;
- active frontend/backend design refs;
- route refs;
- origin Blueprint/Project Kit metadata;
- export-profile refs.

Does NOT embed:
- all visual documents;
- records;
- media bytes;
- core registries;
- Puck/Rete runtime state;
- undo stacks;
- Refine/TanStack/Zustand runtime state.

## ElectroDocument — the only visual tree
Kinds:
- `page`;
- `template`;
- `form`;
- `backend-screen`;
- `reusable-component` when the reusable/global strategy requires a document.

ElectroDocument owns:
- root/node graph;
- slots;
- props;
- ElectroLayout;
- ElectroStyle;
- responsive/platform overrides;
- bindings;
- action references;
- conditions;
- accessibility;
- kind-specific metadata.

### Consequences
- Template is NOT a second visual tree.
- Form is NOT a second visual tree.
- Backend is NOT a second visual tree.
- Native is NOT a second visual tree.

`formMeta` owns only data mapping, drafts/security/anti-bot behavior, submitGraphRef and target behavior.
`templateMeta` owns template kind/display conditions.
`backendMeta` owns resource/screen/navigation/permission configuration.

## ElectroSchema
Owns CMS metadata:
content types, fields, taxonomies, relations, workflow, index flags and storage hints.
It is not a SQL/Drizzle schema.

## ElectroQueryDefinition
Owns:
- sources;
- combine mode;
- RQB engine payload;
- relation/taxonomy context;
- sort;
- pagination/offset;
- aggregate;
- cache policy;
- parameters.

It does NOT duplicate RQB's AND/OR tree.

## ElectroActionGraph
Portable semantic node/edge descriptors.
No Rete instances/classes/history.

## ElectroStateDefinition
Portable state declarations.
No Zustand Store object.

## ElectroRole / PermissionPolicy
Portable policies.
No Refine runtime state.

## ElectroRouteDefinition
Portable route metadata.
No web/native router object.

## ElectroTheme / ElectroDesignSystem
Project output visual design only.
Studio Appearance is a user/workspace preference, not ElectroTheme.

## Project-specific reusable definitions
Only definitions created/imported for this project.

---

# 2. Application Registries — not copied wholesale to the project

- Core Component Registry.
- Field Type Registry.
- Action Node Registry.
- Provider Registry.
- Platform Capability Registry.
- Blueprint Catalog.
- Core Studio presets.
- Core Project Theme presets.

Project objects store references/version/overrides only.

---

# 3. Content/Runtime Entities — not inside ElectroProjectDefinition

- ContentRecord.
- TaxonomyTerm.
- RelationEdge.
- Media metadata.
- Media bytes.
- Users/credentials/sessions.
- User Profile records.
- Audit events.
- Form drafts.
- Runtime persisted Zustand values.

---

# 4. Engine payload wrappers

Allowed when reusing the OSS data format reduces duplicated architecture:

```ts
type EnginePayload<T = unknown> = {
  engine: string;
  schemaVersion: number;
  value: T;
}
```

Initial uses:
- React Query Builder rule tree.
- Tiptap JSON document.

Forbidden canonical payloads:
- Puck AppState/history;
- Puck legacy DropZone zones as permanent data;
- Rete runtime instances/history;
- Refine hook/query state;
- TanStack Table state unless deliberately serialized as a SavedView;
- Zustand Store instances;
- Drizzle runtime schema objects.

---

# 5. Export ownership

ElectroExportIR reads:
1. committed Project Objects;
2. required content/terms/relations;
3. referenced media;
4. application registries to resolve contracts/capabilities;
5. target profile.

It never scrapes transient Studio UI state.
