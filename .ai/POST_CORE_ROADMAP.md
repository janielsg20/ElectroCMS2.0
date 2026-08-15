# POST-CORE ROADMAP

Not release blockers for F00–F27.

## Wave A — AI Assistant
Local-first core must remain functional without AI.
Provider abstraction may support:
- local model;
- OpenAI/provider;
- optional Puck AI adapter.

Puck AI is not core because current official workflow depends on Puck Cloud/account/API key.
AI never writes DB directly.
AI proposes validated Electro commands/objects.

## Wave B — Code Mode / Custom Code
Requires sandbox policy first.
No `eval`.
Target-specific security/compatibility diagnostics.

## Wave C — Collaboration
Yjs/CRDT only after:
- single-user object persistence stable;
- conflict model defined;
- document/action/schema concurrency tested.

## Wave D — Plugin/Provider SDK
Internal registries first.
Public API only after contracts stabilize.

## Wave E — GraphQL Provider
Optional adapter to ProviderRegistry.

## Wave F — Desktop wrappers
Windows/macOS/Linux native wrapper if product distribution requires it.
Do not redesign canonical model.

## Wave G — Deployment integrations
Cloudflare/Vercel/other optional.
Export remains independent.
