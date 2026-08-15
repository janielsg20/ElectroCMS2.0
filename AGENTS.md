# AGENTS.md — ElectroCMS 2.0 Fifth Final

## Minimal read set for every implementation session
1. `.ai/RULES.md`
2. `.ai/MEMORY.md`
3. `.ai/STATE.md`
4. `.ai/TRACKING.md`
5. the active `.ai/microphases/MXX_Y.md`
6. only the architecture/spec files explicitly referenced by that microphase

## First session only
Also read:
- `.ai/PROMPT_MAESTRO_ELECTROCMS_2.md`
- `.ai/ENGINE_RESPONSIBILITY_MATRIX.md`
- `.ai/MODEL_OWNERSHIP.md`
- `.ai/PHASE_DEPENDENCY_GRAPH.md`

## Critical
- exactly one active microphase;
- engine-first: integrate OSS before custom code;
- no duplicate source of truth;
- no fake completion;
- no advance with relevant red tests/build;
- evidence before DONE;
- update MEMORY/STATE/TRACKING/CHANGELOG/HANDOFF.

Do not reload the entire documentation tree in every session.
