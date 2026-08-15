# PHASE DEPENDENCY GRAPH

F00 Audit/POCs
 -> F01 Monorepo
 -> F02 Canonical ownership
 -> F03 Design/AppShell/IA
 -> F04 Storage/Projects
 -> F05 Puck Core
 -> F06 Advanced Editor
 -> F07 Themes/Templates
 -> F08 CMS/Workflow/Indexer
 -> F09 Query/Binding/Filters/Cache
 -> F10 Media/Tiptap
 -> F11 State
 -> F12 Auth/Permissions
 -> F13 Actions/Automation/Providers
 -> F14 Forms
 -> F15 Backend
 -> F16 Blueprints/Project Kits
 -> F17 Preview/Debug
 -> F18 Compatibility
 -> F19 Native Renderer
 -> F20 Expo Runtime/Native Admin
 -> F21 Native APIs
 -> F22 Local/React/Static/PWA
 -> F23 Mobile Export
 -> F24 LAMP
 -> F25 WordPress
 -> F26 Hardening
 -> F27 Cross-target Release

Special prerequisites:
- F14 requires F10/F11/F12/F13.
- F15 requires F08/F09/F12/F14.
- F20 requires F12/F19.
- F23 requires F20/F21/F22.

No phase may implement a production workaround for a dependency that is scheduled later.
