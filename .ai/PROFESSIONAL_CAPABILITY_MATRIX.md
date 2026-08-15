# PROFESSIONAL CAPABILITY MATRIX — Human Summary

This matrix preserves professional capabilities from the original ElectroCMS scope while rationalizing their implementation.

## CMS
- Content Types/advanced fields/taxonomies/relations -> ElectroSchema + generic content store.
- Workflow/moderation/revisions -> Content workflow + audit/restore.
- Global Options -> singleton ContentType preset.
- User Profiles -> profile ContentType linked to user.
- Internal Data Store -> private/internal ContentType.
- Dedicated operational tables -> `storageHint=dedicated-target` compiled by supported server exporters, not Studio DDL.

## Dynamic Data
- Dynamic tags/fields/images/links -> ElectroBinding.
- Listings/related content -> Listing + Query.
- Multi-source/merge -> QueryDefinition.
- Query cache -> TanStack Query.
- Query validation -> RQB Diagnostics + fail-closed policy.
- Facets/counts/chips/hierarchy -> record_field_index + Filter.

## Forms
- Visual form -> ElectroDocument kind=form.
- State/validation -> RHF/Zod.
- Calculations/repeaters/conditions -> RHF + safe rules.
- Submit/Email/Webhook/Auth/Upload -> ActionGraph/providers.
- Frontend editing -> UpdateRecord action + permissions.

## Backend
- CRUD -> Refine.
- Table behavior -> TanStack Table.
- Quick Edit -> Refine update.
- Bulk -> TanStack selection + actions.
- Saved Views -> deliberate table-state serialization.
- CSV import/export -> Refine useImport/useExport + Electro mapping/validation.
- Kanban/Calendar/Metrics -> admin views over same DataProvider.
- Audit -> Refine AuditLogProvider/AuditPort.

## Visual Builder
- Components/Outline/Fields/Preview/Slots/History -> Puck.
- Breakpoints/platform/style/binding/actions/a11y -> Electro layers.
- Friendly widget catalog -> Core + Presets + Blocks + Bindings + Aliases.
- Navigation/Social/Commerce -> PALETTE_CATALOG_MATRIX, not extra engines.

## Reusable Design
- Studio Appearance -> Studio tokens/preferences.
- Frontend/Backend Theme -> project visual tokens.
- Template Pack -> template Documents.
- Blueprint -> structure/domain configuration.
- Project Kit -> combined installation UX.

## Cross-target
- Capability Analyzer -> support/fallback/blocker.
- professionalStudio -> portable metadata.
- RuntimeDependencyManifest -> minimal generated dependencies.
