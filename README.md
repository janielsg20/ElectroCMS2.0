# ElectroCMS 2.0 — Fifth & Final Master Specification

Final audited specification for rebuilding ElectroCMS 2.0 from zero.

## Final structure
- 28 dependency-ordered phases.
- 218 prescriptive microphases.
- one active microphase at a time.
- every microphase states why it exists, engine owner, preconditions, line-by-line implementation, artifacts, tests and evidence.
- OSS engines own their mature responsibilities; ElectroCMS owns portable semantics, professional UX, adapters, compatibility and exporters.

## Start
Read root `AGENTS.md`.

## Architecture principle
Do not turn every visible feature into a new engine, model or component class.
Prefer:
Core Component -> Preset -> Block -> Binding -> Alias -> Action -> Provider.

## Final review improvements
The fifth review closes remaining gaps around Puck Slots, RQB Diagnostics, Tiptap Static Renderer, Refine CSV import/export, full Studio Appearance, CMS storage hints, media fallback, validated Zustand hydration, documentation/evidence and E2E ordering.

The source of truth is `.ai/PROMPT_MAESTRO_ELECTROCMS_2.md`.
