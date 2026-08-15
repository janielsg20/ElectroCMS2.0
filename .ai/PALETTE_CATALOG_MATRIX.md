# PALETTE CATALOG MATRIX — Fifth Final

The Palette may expose many friendly items, but every item must map to one existing runtime responsibility.

Legend:
- **CORE**: owns unique runtime semantics.
- **PRESET**: inserts a Core component with predefined props/layout.
- **BLOCK**: composite subtree/template.
- **BINDING**: existing component + ElectroBinding.
- **ALIAS**: same canonical FormField/Filter with a type.
- **ACTION**: button/icon/link configured with ActionGraph.
- **PROVIDER**: optional adapter capability.

# Layout

| Visible item | Implementation |
|---|---|
| Section | PRESET Container (`semanticElement=section`) |
| Container | CORE |
| Flex Container | PRESET Container |
| Row | PRESET Container |
| Column | PRESET Container |
| Stack | PRESET Container |
| Grid | PRESET Container |
| Columns | PRESET Container/Grid |
| Wrap | PRESET Container |
| Sticky Container | PRESET Container |
| Scroll Container | PRESET Container (`scrollMode`) |
| Spacer | PRESET Container |
| Divider/Separator | CORE |
| Tabs Container | CORE Tabs |
| Accordion Container | CORE Accordion |
| Modal | CORE |
| Drawer | CORE |
| Off-canvas | PRESET Drawer |

# Basic / Media

| Visible item | Implementation |
|---|---|
| Text | CORE |
| Heading H1-H6 | PRESET Text + semantic heading level |
| Paragraph | PRESET Text |
| Rich Text | CORE |
| Image | CORE |
| Gallery | CORE |
| Icon | CORE |
| Button | CORE |
| Link | CORE |
| Logo | PRESET Image |
| Video | CORE |
| Audio | CORE |
| SVG | CORE |
| Shape | PRESET SVG/Container style |
| List | CORE |
| Table | CORE only when generic semantic table is needed |
| Code | CORE CodeBlock |
| HTML | CORE Embed, Web capability |
| Iframe | CORE Embed, Web capability |
| Map | CORE provider-aware |
| Carousel | CORE |
| Slider | PRESET Carousel |
| Badge | PRESET Text |
| Progress | CORE |
| Breadcrumbs | PRESET Navigation + route ancestry binding |

# Content / Business Blocks

| Visible item | Implementation |
|---|---|
| Card | BLOCK |
| Article Card | BLOCK |
| Testimonial | BLOCK |
| Team Member | BLOCK |
| FAQ | BLOCK using Accordion |
| Timeline | BLOCK |
| Counter | BLOCK/core optional only if unique animation semantics justify |
| Metric/KPI | BLOCK or Admin Metric |
| Pricing Table | BLOCK |
| Feature List | BLOCK |
| Table of Contents | BLOCK derived from RichText/headings |
| Call to Action | BLOCK |
| Popup | Modal BLOCK/template |
| Contact Card | BLOCK |
| Business Hours | BLOCK + data binding |
| Address/Contact Info | BLOCK Text/Icon/Link |
| Download/File Card | BLOCK + Media binding |

# Navigation / Account

| Visible item | Implementation |
|---|---|
| Navigation/Menu | CORE Navigation |
| Mobile Navigation | PRESET Navigation + Drawer |
| Breadcrumbs | PRESET Navigation + route ancestry binding |
| Site Search | PRESET Filter Search + navigation action |
| User Menu | BLOCK Navigation + CurrentUser binding |
| Login Link/Button | Button/Link + Auth ACTION |
| Register Link/Button | Button/Link + Auth ACTION |
| Logout | Button/Link + Auth ACTION |
| Pagination | CORE Pagination |

# Social / Contact

| Visible item | Implementation |
|---|---|
| Social Icons | BLOCK Icon + Link |
| Share Buttons | BLOCK Button/Icon + Share ACTION |
| Email Link | PRESET Link |
| Phone Link | PRESET Link |
| WhatsApp/Message link | PRESET Link/provider-aware deep link |
| Contact Form | BLOCK using Form Document |
| Map/Location | CORE Map or Native Location binding |

Do not create a social-network engine.

# Dynamic Data

| Visible item | Implementation |
|---|---|
| Dynamic Field | BINDING to Text/Heading/etc. |
| Dynamic Image | BINDING to Image |
| Dynamic Link | BINDING to Link/Button |
| Author/User | BINDING |
| Date | BINDING |
| Taxonomy/Terms | BINDING/List |
| Metadata | BINDING |
| Calculated Field | BINDING from ElectroSchema calculated value |
| Query Result | Listing |
| Listing Grid | CORE Listing + layout preset |
| Related Content | Listing + relation query |
| Relation | Binding/Listing/Query |
| Conditional Content | node display condition |
| Repeater | PRESET Listing with collection binding |
| Pagination | CORE |

# Forms

CORE:
- Form
- FormField

ALIASES of FormField:
- Text
- Number
- Email
- Phone
- URL
- Textarea
- Select
- Radio
- Checkbox
- Switch
- Date
- Time
- File
- Image
- Hidden when explicitly required

Other visible form items:
- Form Status/Success/Error -> Text preset bound to Form/Action status with live-region semantics.
- Submit -> Button with submit behavior.
- CAPTCHA/anti-bot -> security/provider configuration, not another visual engine.
- Multi-step -> Form configuration + containers/step metadata.
- Conditional Field -> FormField condition.

# Filters

CORE:
- Filter
- Pagination
- AppliedFilterChips where shown.

ALIASES:
- Search
- Select
- Range
- Checkboxes
- Radio
- Date
- Taxonomy
- Sort

Load More:
Pagination mode.

Reset:
Button/ACTION.

# Commerce Pack

Commerce is not a second component engine.

| Visible item | Implementation |
|---|---|
| Product Card | BLOCK |
| Product Grid | Listing preset |
| Product Title | Text binding |
| Price / Old Price | Text binding |
| Product Image | Image binding |
| Product Gallery | Gallery binding |
| Variations | Form/State |
| Buy Button | Button + ACTION |
| Add to Cart | Button + State/Action |
| Cart Counter | Badge + State binding |
| Inventory | Binding |
| Stock Badge | Badge + Binding |
| Wishlist | Button + State/Action |
| Checkout | Form Document/Template |
| Order Summary | BLOCK/List |
| Related Products | Listing relation/query |

# Admin Palette

- Admin Navigation — PRESET Navigation with admin route source.
- DataView — CORE presentation; Refine/TanStack behavior.
- Record Form — PRESET Form with resource context; RHF/Refine behavior.
- Record Detail — BLOCK using Container/Bindings.
- Metric — CORE.
- Chart — CORE presentation with chart adapter.
- Kanban — CORE view.
- Calendar — CORE view.
- Filter Bar — BLOCK using Filter controls.

# Custom items

## Saved Block
User-created composite subtree.
No JavaScript code.

## Global Component
Reusable versioned visual definition.

## Custom Visual Component
Allowed only through a future/public component SDK after the contracts stabilize.
Core v2 may import/register trusted internal component definitions but does not expose arbitrary runtime JavaScript execution.

# Palette UX requirements

Categories:
1. Layout
2. Basic
3. Content
4. Navigation
5. Dynamic Data
6. Forms
7. Filters
8. Social / Contact
9. Admin
10. Commerce Pack

Each item:
- stable ID;
- icon;
- human name;
- one-line description;
- category;
- searchable keywords/synonyms;
- implementation kind badge when useful;
- target capability badge only when it prevents surprise.

Search may recognize familiar conceptual terms such as WordPress/Elementor/JetEngine vocabulary, but ElectroCMS uses original names, UI and code.
