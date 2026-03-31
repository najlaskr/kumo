---
"@cloudflare/kumo": patch
---

Refine badge semantics/fill styling and banner tone updates

- Rework `Badge` variant model to prioritize semantic variants (`primary`, `secondary`, `error`, `warning`, `success`, `info`) with updated descriptions and `secondary` as default.
- Keep token color variants for product-specific use cases while updating class mappings so semantic and token variants are distinct.
- Update badge docs demos/content to focus on primary semantic badges and a consolidated "other variants" section.
- Adjust banner variant surfaces (`default`, `alert`, `error`) to stronger tinted backgrounds and borders.
- Update theme generator badge/semantic token mappings and regenerate `theme-kumo.css` to match the new badge color system.
