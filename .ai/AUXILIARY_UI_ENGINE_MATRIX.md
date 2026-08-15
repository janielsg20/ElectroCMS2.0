# AUXILIARY UI ENGINE MATRIX — Fifth Final

These engines cover complex UI behavior not owned by Puck/Refine/TanStack themselves.
They live behind target adapters and are dependency-pruned.

## Icons — Lucide
Studio/Web:
Lucide React family.

Native:
Lucide React Native family when compatible with pinned RN/Expo.

Electro owns semantic icon IDs (`settings`, `add`, `delete`, etc.), not package component names in project data.
Exporter maps semantic IDs to the target icon package.
Do not draw/maintain a proprietary 1000-icon set.

## Charts

Canonical:
`ChartSpec` embedded in Chart component props:
- type;
- query/data binding;
- x/y/category/value fields;
- series;
- labels/legend;
- formatting;
- accessible summary.

Web/Studio/React/LAMP/WP client:
Apache ECharts adapter.

Native:
Victory Native adapter if compatible with pinned Expo/RN/Skia stack and the project uses charts.

Rules:
- no home-grown axes/scales/tooltip/chart engine;
- dependency included only if Chart is used;
- Native incompatibility may fall back to Metric/DataView with explicit Compatibility adaptation, never silently disappear.

## Calendar

Canonical:
`CalendarViewSpec`:
- query/resource;
- start/end/title/id fields;
- view;
- click/select/update actions;
- timezone/locale.

Web/Studio/React/LAMP/WP client:
FullCalendar **Standard** only.

Never depend on FullCalendar Premium/Scheduler plugins in the default distributable architecture.

Native:
`react-native-calendars` adapter for month/agenda/date-selection views when compatible.

Resource scheduling features outside Standard are not silently promised.

## Kanban drag/reorder

Canonical:
Kanban columns map to a record status/group field.
A move is a normal DataProvider update/action.

Studio/Web/React:
dnd-kit for drag/drop/sort interaction.

Accessibility:
keyboard/non-drag `Move to...` action must always exist.

Native:
start with the same semantic Kanban columns and accessible Move action/list presentation.
A Native gesture DnD adapter is optional and dependency-pruned; do not create a custom gesture engine.

## Licensing/stability
Exact versions/licenses are reverified at F00/F26 pinning.
Only permissive/default-standard packages enter core generated targets.
