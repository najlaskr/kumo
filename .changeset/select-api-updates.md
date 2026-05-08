---
"@cloudflare/kumo": patch
---
Updates `Select` label API to use Base UI's `Select.Label` for better accessibility and hover coupling issues.

- Switch `Select` over to Base UI’s `Select.Label` so the trigger gets its accessible name without relying on a native `<label>`—fixes the hover coupling bug and silences the dev warning while preserving tooltips/optional badges via our `Label` component.  
- Inline the Field wrapper behavior (error normalization, helper text toggling, `aria-describedby` wiring) so the label, description, and error props keep working exactly as before.  
- Allow `Label` to accept an `id`, and document the updated compound pieces (`Select.Label`, `Select.Group`, `Select.GroupLabel`, `Select.Separator`) so manual composition stays clear.