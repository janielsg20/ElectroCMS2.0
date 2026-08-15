# 00 START HERE

## First implementation session
Read:
1. root `AGENTS.md`;
2. `PROMPT_MAESTRO_ELECTROCMS_2.md`;
3. `RULES.md`;
4. `ENGINE_RESPONSIBILITY_MATRIX.md`;
5. `MODEL_OWNERSHIP.md`;
6. `PHASE_DEPENDENCY_GRAPH.md`;
7. `MEMORY.md`;
8. `STATE.md`;
9. `TRACKING.md`;
10. active phase/microphase.

## Every later session
Use the shorter read set in root `AGENTS.md`.
Do not reload the complete spec by default.

## Before writing a subsystem
Ask:
**Does the approved OSS engine already own this responsibility?**

If yes:
- use the public/stable API;
- add a thin adapter;
- add Electro portable semantics/UX only when required;
- do not keep a parallel implementation.

## After a microphase
Run its gates, save real evidence, update MEMORY/STATE/TRACKING/CHANGELOG/HANDOFF, then proceed to the next microphase only if the relevant checks are green.
