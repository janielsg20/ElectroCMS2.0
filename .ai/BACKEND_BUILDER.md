# BACKEND BUILDER — Fifth Final

Visual layout:
Puck Admin component registry using ElectroDocument kind=backend-screen.

Runtime orchestration:
Refine Core.

Table behavior:
TanStack Table.

Forms:
RHF/Zod.

Permissions:
ElectroPermission + Refine AccessControl adapter + service enforcement.

Cache:
TanStack Query.

## Screens
Dashboard, List, Create, Edit, Detail, Custom, Kanban, Calendar.

## Professional behavior
- Quick Edit -> Refine update mutation.
- Bulk Actions -> TanStack selected IDs + ActionGraph/Refine mutations.
- Saved Views -> deliberately serialize filters/sort/column visibility/order/page size/pinning; never rows.
- Metrics/Charts -> saved queries/aggregates.
- CSV Import -> Refine useImport + Electro field mapping/Zod/permissions.
- CSV Export -> Refine useExport + current filter/view/permission-aware column selection.
- Audit/Notifications -> Refine provider adapters.
- Role-specific navigation.

## Native
Reuse Refine Core headlessly.
Prefer the documented Refine Native Expo Router integration when compatible with pinned versions; otherwise a thin router adapter is allowed.
Presentation remains React Native lists/cards/forms.
Never create a parallel Native CRUD/cache framework.
