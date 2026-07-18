<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mobile-first UI priority

This site is built and must stay **mobile-first**. Any UI/UX change — new pages, sections, or edits to existing ones — has to follow this order:

1. Design and implement the base (unprefixed) Tailwind classes for the smallest viewport (~320–375px) first: single-column stacks, full-width tap targets, readable base font sizes, no fixed pixel widths that can overflow.
2. Layer `sm:` / `md:` / `lg:` variants on top only to enhance for larger screens (multi-column grids, side-by-side layout, larger type). Never write desktop styles first and try to patch mobile in afterward.
3. Interactive elements (buttons, links, form fields) need a minimum ~44×44px tap target on mobile.
4. Wide content (tables, marquees, filter rows) must scroll inside its own `overflow-x-auto`/`overflow-hidden` container — the page (`document.documentElement`) itself must never scroll horizontally.
5. Before calling a UI change done, check it in a mobile viewport (320–390px wide) in addition to desktop.
