# Plan: Modernize Frontend via daisyUI 5 & shadcn/ui

This implementation plan outlines the migration of the CRRU Social Sciences Platform web frontend to use **daisyUI 5.5.23** for general public pages (Navbar, Home, Academic, News) to achieve a clean, modern, and friendly design with generous whitespace and rounded corners, while retaining **shadcn/ui** for dashboards, forms, and administrative controls.

---

## 🎨 DESIGN COMMITMENT: Modern Clean (daisyUI 5 + Custom Brand Theme)

- **Style & Feel:** Friendly, clean, and organized using daisyUI's standard card and button presets with smooth hover transition animations and standard rounded corners (`rounded-xl` / `rounded-2xl`).
- **Brand Theme:** Map the official orange (`#F14627`) as the `primary` brand color. Set background to Slate-50 (light mode) and Slate-950 (dark mode) with deep slate body text for clean readability and high contrast.
- **Harmony:** Harmonize CSS variable definitions between daisyUI 5 and shadcn/ui so that shadcn/ui components (like forms/dashboard) adapt to the same custom color scheme automatically.

---

## Project Type
- **Type:** `WEB` (Next.js with React 19, Tailwind CSS v4, daisyUI 5, and shadcn/ui)
- **Primary Agent:** `frontend-specialist`

---

## Success Criteria
1. **Clean Responsive Design**: Completely replace the brutalist style on public pages with daisyUI's clean, modern layout structures.
2. **Custom Theme Integration**: Unified color system across daisyUI and shadcn/ui.
3. **No Build Regressions**: Ensure `npm run build` succeeds and typescript verification passes.
4. **Master Checklist**: Pass the Antigravity Master Checklist, especially UX and SEO audits.

---

## Proposed Changes

### Configuration & Styles

#### [MODIFY] [package.json](file:///e:/web2026/soc-web-2026/frontend/package.json)
- Add `"daisyui": "^5.5.23"` to the dependencies list.

#### [MODIFY] [globals.css](file:///e:/web2026/soc-web-2026/frontend/src/app/globals.css)
- Import daisyUI using the new `@plugin` directive for Tailwind v4:
  ```css
  @plugin "daisyui" {
    themes: crru-theme;
  }
  ```
- Define the custom theme variables:
  ```css
  @plugin "daisyui/theme" {
    name: "crru-theme";
    default: true;
    --color-primary: #F14627;
    --color-primary-content: #ffffff;
    --color-base-100: #ffffff;
    --color-base-content: #0f172a;
    --radius-selector: 0.75rem;
    --radius-field: 0.5rem;
  }
  ```
- Remove all raw brutalist classes (like `.brutalist-card`, `.brutalist-button`, etc.).

### Navigation

#### [MODIFY] [Navbar.tsx](file:///e:/web2026/soc-web-2026/frontend/src/components/Navbar.tsx)
- Rewrite using daisyUI's `.navbar` component layout.
- Use soft rounded links and subtle hover states.

### Pages

#### [MODIFY] [page.tsx](file:///e:/web2026/soc-web-2026/frontend/src/app/page.tsx)
- Redesign homepage using daisyUI's `.hero` layout with clean spacing.
- Replace brutalist action items with elegant daisyUI cards (`.card`, `.card-body`) and clean icons.

#### [MODIFY] [academic/page.tsx](file:///e:/web2026/soc-web-2026/frontend/src/app/(public)/academic/page.tsx)
- Re-style academic programs grid using daisyUI `.card` and badges (`.badge-primary`).

#### [MODIFY] [news/page.tsx](file:///e:/web2026/soc-web-2026/frontend/src/app/(public)/news/page.tsx)
- Re-style news list using modern daisyUI components.

#### [MODIFY] [dashboard/page.tsx](file:///e:/web2026/soc-web-2026/frontend/src/app/(secure)/dashboard/page.tsx)
- Keep using shadcn/ui components (cards, warnings), ensuring they use the shared base color tokens.

---

## Task Breakdown

### Task 1: Dependency Installation
- **Agent**: `frontend-specialist`
- **Skills**: `clean-code`
- **Priority**: P0
- **Dependencies**: None
- **INPUT**: `frontend/package.json`
- **OUTPUT**: Installed `daisyui@5.5.23` in `node_modules` and `package.json`.
- **VERIFY**: Run `npm install` and check installation.

### Task 2: Style definitions (`globals.css`)
- **Agent**: `frontend-specialist`
- **Skills**: `tailwind-patterns`, `frontend-design`
- **Priority**: P0
- **Dependencies**: Task 1
- **INPUT**: `frontend/src/app/globals.css`
- **OUTPUT**: Updated configuration with `@plugin` and crru-theme.
- **VERIFY**: Verify styling compile with `npm run build`.

### Task 3: Navbar Redesign
- **Agent**: `frontend-specialist`
- **Skills**: `frontend-design`, `nextjs-react-expert`
- **Priority**: P1
- **Dependencies**: Task 2
- **INPUT**: `frontend/src/components/Navbar.tsx`
- **OUTPUT**: Clean, responsive navigation using daisyUI navbar structure.
- **VERIFY**: Check mobile responsiveness and toggle states.

### Task 4: Homepage Redesign (Modern Layout)
- **Agent**: `frontend-specialist`
- **Skills**: `frontend-design`, `nextjs-react-expert`
- **Priority**: P1
- **Dependencies**: Task 2
- **INPUT**: `frontend/src/app/page.tsx`
- **OUTPUT**: Landing page styled with daisyUI hero and elegant layouts.
- **VERIFY**: Verify visual alignment and responsive display.

### Task 5: Subpages Redesign (Academic & News)
- **Agent**: `frontend-specialist`
- **Skills**: `frontend-design`, `nextjs-react-expert`
- **Priority**: P2
- **Dependencies**: Task 4
- **INPUT**: `academic/page.tsx`, `news/page.tsx`
- **OUTPUT**: Redesigned subpages with modern cards.
- **VERIFY**: Validate that page lists render correctly and use correct category colors.

### Task 6: Secure Dashboard Harmonization
- **Agent**: `frontend-specialist`
- **Skills**: `frontend-design`, `nextjs-react-expert`
- **Priority**: P2
- **Dependencies**: Task 4
- **INPUT**: `dashboard/page.tsx`
- **OUTPUT**: Clean, secure dashboard page using shadcn/ui components mapping to shared global CSS variables.
- **VERIFY**: Check variables contrast.

### Task 7: Final Auditing and Verification
- **Agent**: `test-engineer`
- **Skills**: `web-design-guidelines`
- **Priority**: P3
- **Dependencies**: Task 5, Task 6
- **INPUT**: Entire workspace
- **OUTPUT**: Passing master validation scripts
- **VERIFY**: Run `$env:PYTHONIOENCODING="utf-8"; python .agents/scripts/checklist.py .`

---

## Phase X: Verification
```bash
# Style validation and lint checks
npm run lint
npx tsc --noEmit

# Run Master Checklist
python .agents/scripts/checklist.py .
```

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ No critical issues
- Build: ✅ Success
- SEO: ✅ Pass
- Date: 2026-06-18

