# WIDGET / COMPONENT SYSTEM — Fifth Final

Source of truth for the visible catalog:
`PALETTE_CATALOG_MATRIX.md`.

Every Palette item declares:
- stable `paletteItemId`;
- display name;
- icon;
- short description;
- category;
- search synonyms;
- implementation kind: Core/Preset/Block/Binding/Alias/Action/Provider;
- target capability summary.

Every Core ComponentDefinition declares:
- stable `componentId`;
- schemaVersion;
- props schema;
- slot schema;
- defaults;
- inspector groups;
- binding-compatible props;
- available events/actions;
- accessibility defaults;
- layout/style capability;
- platform capability declarations;
- editor renderer;
- target renderers/adapters;
- migration strategy.

## Rules

- Puck owns insertion/slots/editor behavior.
- Core components remain deliberately small; Section/Heading/Badge/Breadcrumbs/Repeater/AdminNavigation/RecordForm are presets or blocks, not independent engines.
- Saved Blocks and Global Components can expand the catalog without adding render engines.
- Dynamic Data uses Binding rather than Dynamic* component classes.
- Form field types are FormField aliases.
- Filter types are Filter aliases.
- Commerce uses schemas/listings/state/actions/blocks.
- Social/Contact uses existing Icon/Link/Button/Actions; no social engine.
- Navigation is a semantic Core component because routing/menu semantics are distinct.
- Arbitrary custom JavaScript component execution is post-core and requires an SDK/sandbox policy.
