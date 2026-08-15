# TEST STRATEGY

## Test layers
1. Domain/unit.
2. Engine adapter contract.
3. Storage/integration.
4. Studio component/interaction.
5. E2E browser.
6. Generated-target fixture.
7. Cross-target equivalence.
8. Security/accessibility/performance regression.

## Mandatory global commands
- lint
- typecheck
- test
- build

## Major fixtures
- Puck nested Slots + legacy zones migration.
- Two-tab PGlite Worker leader/handoff.
- Incremental project_objects save + revision restore.
- CMS records + typed field index rebuild.
- RQB Diagnostics invalid query + fail-closed formatter.
- TanStack Query invalidation.
- Media OPFS + IndexedDB Blob fallback.
- Tiptap Static Renderer read-only output.
- Zustand corrupted persisted payload/migration.
- Auth/profile/permission denial.
- Rete flow/history/automation loop guard.
- Forms calculation/multistep/frontend edit/security.
- Refine backend CRUD/Quick Edit/Bulk/Saved View.
- Refine CSV import/export with invalid rows/permissions.
- 20 Blueprint install/rollback.
- Compatibility supported/adapted/fallback/blocked.
- Expo source/prebuild + Native admin + device capability.
- React install/typecheck/build.
- PWA offline.
- LAMP install/security.
- WordPress Theme+Plugin activation/migration/security.
- Editable Store cross-target equivalence.

## Evidence
Never write “passed” without command/report evidence in `.ai/evidence/`.
