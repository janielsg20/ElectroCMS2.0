# TRACEABILITY MATRIX — Atomic Requirements -> Fifth Final Owners

| Req ID | Description | Observable Behavior | Engine Owner | Phase | Targets | Rationalization |
|---|---|---|---|---|---|---|
| **Product** | | | | | | |
| R001 | Local-first core | Studio/Editor works without internet | PGlite / OPFS / SQLite | F04/F20/F22 | All | Preservation |
| R002 | Responsive Studio | UI adapts to Desktop, Tablet, Mobile | shadcn/Tailwind | F03 | Web | Adaptive UI |
| R003 | One canonical visual model | One tree for all kinds | ElectroDocument | F02 | All | Structural Unification |
| R004 | Puck visual editing | DnD, Slots, Inline edit, History | Puck | F05/F06 | All | Engine-first |
| R005 | Custom breakpoints | Per-platform overrides inherited | Puck Viewports / Electro | F06 | All | Config-first |
| R006 | Project manager | Recovery, revisions, incremental save | PGlite Worker / Electro | F04 | All | Preservation |
| R007 | Separate Appearance/Theme | Studio vs Frontend vs Backend styles | StudioAppearanceProfile | F03/F07 | All | Separation of Concerns |
| R008 | Themes, Templates, Kits | Packaged design/content units | Project Kit / Electro | F07/F16 | All | Logic Preset |
| R009 | Content Types & Fields | 1:1, 1:N, N:N Relations, Fields | ElectroSchema / PGlite | F08 | All | CMS Core |
| R010 | Workflow & Status | Moderation states, history, restore | Electro CMS / Auth | F08/F12 | All | Core Capability |
| R011 | Options, Profiles, Stores | ContentType presets for special data | Electro CMS | F08/F12 | All | Model Preset |
| R012 | Bindings | Component props bound to data/state | ElectroBinding | F09 | All | Binding Logic |
| R013 | Visual queries | Multi-source merge, diagnostics | RQB / TanStack Query | F09 | All | Engine Payload |
| R014 | Listings & Filters | Faceted search, chips, hierarchy | TanStack Table / Indexer | F09 | All | Engine + Index |
| R015 | Media library | Local OPFS store, metadata | MediaBlobStore / PGlite | F10 | All | Storage Port |
| R016 | Tiptap rich text | Static target rendering | Tiptap / Static Renderer | F10 | All | Engine-first |
| R017 | Zustand state | Validated hydration/persistence | Zustand / Zod | F11 | All | Engine-first |
| R018 | Auth & Permissions | RBAC, field/route/action policies | Auth / ElectroPermission | F12 | All | Adapter Layer |
| R019 | Action Flow | Rete automation, triggers, events | Rete / ActionGraph | F13 | All | Engine-first |
| R020 | Visual Forms | RHF, conditions, multi-page, calc | ElectroDocument (form) | F14 | All | RHF/Zod Binding |
| R021 | Visual Backend | CRUD, Bulk, Kanban, Calendar | Refine / TanStack Table | F15 | All | Engine-first |
| R022 | CSV Import/Export | Refine exchange with mapping/val | Refine useImport/Export | F15 | Web | Engine + Adapter |
| R023 | 20 Blueprints | Ready-to-use project structures | Blueprint Catalog | F16 | All | Content Preset |
| R024 | Pro Capability Catalog | Feature matrix with evidence | FEATURE_MATRIX | F16 | All | Documentation |
| R025 | Preview & Debug | Runtime renderers, state inspection | Runtime Renderer | F17 | All | UI Overlay |
| R026 | Compatibility Diag | Blocker/warning for target gaps | Capability Analyzer | F18 | All | Diagnostic Logic |
| R027 | RN/Expo Output | Android/iOS app source/build | Expo / React Native | F19-F23 | Mobile | Engine-first |
| R028 | Native Capabilities | Device APIs & permissions | Expo Modules | F21 | Mobile | Adapter |
| R029 | Web Exports | Local, React, Static, PWA | ExportIR | F22 | Web | Generator |
| R030 | Capacitor Fallback | Hybrid bridge when native fails | Capacitor | F23 | Mobile | Fallback Port |
| R031 | LAMP Export | PHP/MySQL standalone output | LAMP Compiler | F24 | Server | Generator |
| R032 | WordPress Export | Theme + Companion Plugin | WP Compiler | F25 | Server | Generator |
| R033 | Dependency Pruning | Production build pods engines | Export Pipeline | F22 | All | Optimization |
| R034 | professionalStudio | Portable semantic manifest | professionalStudio IR | F22 | All | Metadata |
| R035 | Testing Gates | Lint, typecheck, test, build | Test Strategy | F26/F27 | All | Quality |
| R036 | Store Fixture | Cross-target proof of work | Release Fixture | F27 | All | E2E Proof |
| **UI/UX** | | | | | | |
| U001 | AppShell Spec | Fixed layout dimensions | AppShell | F03 | Web | Design Constraint |
| U002 | Settings Gear | Last right topbar control | Topbar | F03 | Web | Design Constraint |
| U003 | Progressive Disclosure | Contextual power visibility | Studio UX | F03 | Web | UX Pattern |
| U004 | Main Nav style | Icon+Label / Collapsed tooltip | Sidebar | F03 | Web | UX Pattern |
| U005 | Custom Controls | No browser-default appearance | shadcn/Radix | F03 | Web | Design Constraint |
| U006 | Studio Appearance | Token-based CMS skinning | StudioAppearanceProfile | F03 | Web | Configuration |
| U007 | Palette Catalog | Layout to Commerce categories | Palette Registry | F05/F16 | Web | Metadata |
| U008 | Palette Rationalization | Items map to presets/bindings | COMPONENT_RATIONALIZATION | F05/F16 | All | Architecture Rule |
| U009 | Empty/Error states | UI states designed for all views | UX Design | F03 | All | UX Pattern |
| U010 | Mobile AppShell | Tools to Sheet/Drawer, no shrink | Mobile Studio | F03 | Web | UX Pattern |
| **Architecture** | | | | | | |
| A001 | Engine-first | No duplicate core engines | RULES | F02 | All | Policy |
| A002 | PGlite Worker | Multi-tab persistence | PGlite | F04 | Web | Engine-first |
| A003 | Generic CMS Store | No dynamic DDL per field | Electro CMS | F08 | All | Structural Policy |
| A004 | Typed Record Index | Field-path indexing for queries | Indexer | F08 | All | Optimization |
| A005 | RQB Fail-closed | Invalid query blocks execution | RQB Diagnostics | F09 | All | Security Policy |
| A006 | Query Cache | Async data management | TanStack Query | F09 | All | Engine-first |
| A007 | Form Tree Unity | Form is ElectroDocument kind=form | ElectroDocument | F02/F14 | All | Structural Unification |
| A008 | Doc Tree Unity | Templates/Backend are Documents | ElectroDocument | F02/F07/F15 | All | Structural Unification |
| A009 | Puck Slots | Nested editor model | Puck Slots | F05 | All | Engine-first |
| A010 | Zustand Validation | Zod validation on hydration | Zod / Zustand | F11 | All | Security Policy |
| A011 | ExportIR | Exporters use IR, not UI state | ElectroExportIR | F18/F22 | All | Separation of Concerns |
