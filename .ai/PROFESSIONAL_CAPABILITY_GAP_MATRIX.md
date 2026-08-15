# PROFESSIONAL CAPABILITY GAP MATRIX — Initial Final-Spec State

Maturity values:
- `Planificado`
- `Modelado portable`
- `Demo interactiva`
- `Implementado`

At specification time, no capability is marked Implementado unless real implementation evidence exists.

| Capability | Owner | Implementation class | Initial maturity | Main target strategy |
|---|---|---|---|---|
| Content Types + advanced fields | F08 | Core | Modelado portable | Generic store / target compiler |
| Taxonomies | F08 | Core | Modelado portable | Terms / WP taxonomy |
| Relations 1:1/1:N/N:N | F08 | Core | Modelado portable | relation_edges / target mapping |
| Content workflow | F08 | Core | Modelado portable | application service + target handler |
| Record revisions | F08/F12 | Core | Modelado portable | audit restore |
| Global Options | F08 | Preset | Modelado portable | singleton ContentType |
| User Profiles | F08/F12 | Preset | Modelado portable | profile record linked user |
| Internal Data Store | F08 | Preset | Modelado portable | internal ContentType |
| Dedicated operational table hint | F08 | Target Adapter | Modelado portable | LAMP/WP compile only |
| Dynamic fields/tags | F09 | Binding | Modelado portable | Binding resolver |
| Listings/related content | F09 | Core | Modelado portable | Listing + Query |
| Multi-source merge/union | F09 | Core | Modelado portable | QueryCombineAdapter |
| Query cache | F09 | Core/OSS | Planificado | TanStack Query |
| Query diagnostics | F09 | Core/OSS | Planificado | RQB diagnostics |
| Facets/counts/chips/hierarchy | F09 | Core | Modelado portable | field index + Filter |
| Form multi-step/conditions/repeater | F14 | Core/OSS | Modelado portable | Form Document + RHF |
| Form calculation | F14 | Core | Modelado portable | safe calculated values |
| Frontend record editing | F14 | Core | Modelado portable | Form + Update action |
| Email/Webhook | F13/F14 | Optional Provider | Modelado portable | provider/target adapter |
| Anti-bot | F14 | Optional Provider/Core policy | Modelado portable | honeypot/server/provider |
| CRUD admin | F15 | Core/OSS | Planificado | Refine |
| Quick Edit | F15 | Core/OSS | Modelado portable | Refine update |
| Bulk Actions | F15 | Core/OSS | Modelado portable | selection + ActionGraph |
| Saved Views | F15 | Core | Modelado portable | serialized view config |
| CSV Record import/export | F15 | Core/OSS | Modelado portable | Refine useImport/useExport |
| Kanban/Calendar | F15 | Core view | Modelado portable | same DataProvider |
| Dashboard/Metrics | F15 | Core view | Modelado portable | queries/admin document |
| Automation | F13 | Core/OSS | Modelado portable | domain events -> Rete |
| Audit | F12 | Core/OSS | Modelado portable | Refine AuditLog/AuditPort |
| Theme Builder conditions | F07 | Core | Modelado portable | Template Documents |
| Studio Appearance | F03 | Core | Modelado portable | Studio tokens |
| Project Themes | F07 | Core | Modelado portable | Theme tokens |
| Project Kits | F16 | Pack | Modelado portable | Theme+Templates+Blueprint |
| Layout/Basic/Content palette | F05/F06 | Core/Preset/Block | Modelado portable | Puck + registry |
| Navigation palette | F05/F06 | Core/Block | Modelado portable | Navigation/Routes/Auth |
| Social/Contact palette | F05/F06 | Block/Action | Modelado portable | Icon/Link/Share/Provider |
| Commerce palette | F16 | Pack/Block | Modelado portable | generic CMS/state/actions |
| Local/React/PWA | F22 | Target Adapter | Modelado portable | ExportIR |
| Android/iOS | F19-F23 | Target Adapter | Modelado portable | RN/Expo |
| LAMP | F24 | Target Adapter | Modelado portable | PHP/MySQL |
| WordPress | F25 | Target Adapter | Modelado portable | WP Theme+Plugin |
| AI assistant | Post-Core | Optional Provider | Planificado | local/provider adapter |
| Collaboration | Post-Core | Post-Core | Planificado | Yjs/CRDT evaluation |
| Custom code/plugin SDK | Post-Core | Post-Core | Planificado | sandbox/SDK first |

## Gate
No row may become `Implementado` until it references real evidence under `.ai/evidence/`.
