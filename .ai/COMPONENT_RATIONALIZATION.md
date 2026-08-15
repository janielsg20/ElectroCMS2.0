# COMPONENT RATIONALIZATION — Fifth Final / Minimal Semantic Core

A visible Palette item does not imply a runtime class.

## Decision ladder
1. existing Core + prop;
2. Preset;
3. Composite Block;
4. Binding;
5. FormField alias;
6. Filter alias;
7. Action;
8. Blueprint/Project Kit config;
9. Provider/target capability;
10. only then propose a new Core ComponentDefinition.

## Layout Core
Only:
- `Container`
- `Divider`
- `Tabs`
- `Accordion`
- `Modal`
- `Drawer`

Visible items implemented as Container presets/config:
- Section -> `semanticElement=section`
- Flex Container
- Row
- Column
- Stack
- Grid
- Columns
- Wrap
- Sticky Container
- Scroll Container -> `scrollMode`
- Spacer -> fixed/min-size Container

Container owns semantic element/role, layout mode, overflow/scroll semantics, position and slots.
The Native renderer maps scrollMode to ScrollView behavior where required.

## Content Core
- `Text`
- `RichText`
- `Image`
- `Gallery`
- `Icon`
- `Button`
- `Link`
- `Navigation`
- `Video`
- `Audio`
- `SVG`
- `List`
- `Table`
- `CodeBlock`
- `Embed`
- `Map`
- `Carousel`
- `Progress`

Presets/Blocks:
- Heading H1-H6 -> Text preset with semantic heading level
- Paragraph -> Text preset
- Badge -> Text preset
- Logo -> Image preset
- Breadcrumbs -> Navigation preset bound to route ancestry
- Slider -> Carousel preset
- Shape -> SVG/Container preset
- Card/Testimonial/FAQ/Pricing/CTA/etc. -> Blocks

## Dynamic Core
- `Listing`
- `Filter`
- `Pagination`

Dynamic Repeater is NOT a separate runtime engine:
- Listing with `sourceType=collection-binding` and item subtree.

Other Dynamic* items are bindings/configuration.

## Forms Core
Only:
- `Form`
- `FormField`

FormField aliases include all scalar types and `group|repeater` where nested slots are required.
RHF useFieldArray backs repeater behavior.

FormStatus is a Text preset bound to form/action status with appropriate live-region accessibility.
Submit is Button submit behavior.

## Admin Semantic Core
Only features whose runtime/presentation is genuinely distinct:
- `DataView`
- `Metric`
- `Chart`
- `Kanban`
- `Calendar`

Reuse:
- AdminNavigation -> Navigation preset
- RecordForm -> Form preset/resource context
- RecordDetail -> Container/Bindings block
- FilterBar -> Filter/Block
- Search -> Filter alias

Refine/TanStack/RHF remain behavior owners.

## Why
The user still sees the complete professional catalog, while ElectroCMS maintains fewer:
- renderer implementations;
- Native renderers;
- PHP/WP compilers;
- inspector schemas;
- migrations;
- capability declarations;
- tests.

See `PALETTE_CATALOG_MATRIX.md` for exact visible mapping.
