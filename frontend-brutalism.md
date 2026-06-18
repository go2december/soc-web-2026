# Plan: Modernize Frontend via Typographic Brutalism

This implementation plan details the redesign of the CRRU Social Sciences Platform frontend using a high-contrast **Typographic Brutalism** design language. It replaces the current plain/generic design with bold typography, sharp geometric interfaces, thick solid borders, and neo-brutalist hover states.

---

## 🎨 DESIGN COMMITMENT: Typographic Brutalism

- **Topological Choice:** Reject the standard left-text/right-visual split hero layout. We will use a massive, layered center-staggered typographic hero. The background is a high-contrast grid pattern with sharp borders (2px solid black or dark slate).
- **Risk Factor:** Using absolute sharp edges (`rounded-none` / `rounded-[2px]`), thick solid borders (`border-2 border-foreground`), high-contrast neon-orange shadows, and overlapping components that force a visual tension.
- **Readability Conflict:** Placing large numeric indices (e.g. `01`, `02`, `03` in monospace fonts) overlapping card headers, which challenges the eye artistically but creates strong visual anchors.
- **Cliché Liquidation:** Completely eliminated rounded borders (`rounded-lg`/`rounded-xl`), blurred gradients (Mesh/Aurora gradients), and soft cards. No Bento grid.

---

## Project Type
- **Type:** `WEB` (Next.js 16/15 with React 19, Tailwind CSS v4, and shadcn/ui)
- **Primary Agent:** `frontend-specialist`

---

## Success Criteria
1. **Visual Differentiation**: High-contrast, memorable hero section that immediately catches the user's attention.
2. **Consistent Brutalist Theme**: Uniform layout constraints (sharp corners `rounded-none`, thick borders `border-2`, flat shadow offsets) across all pages (Home, Academic, News, Dashboard).
3. **Accessibility**: Maintain a contrast ratio of > 4.5:1 for body text, ensuring WCAG 2.1 AA compliance.
4. **Performance**: Zero bundle-size regression, keeping lightweight styles and utilizing hardware-accelerated animations (opacity, translate).

---

## Tech Stack
- **Styling**: Tailwind CSS v4 (native `@theme` and custom utility classes in `globals.css`)
- **Icons**: `lucide-react`
- **Animations**: CSS Transitions, standard Tailwind transition configurations

---

## Proposed Changes

### Configuration & Styles

#### [MODIFY] [globals.css](file:///e:/web2026/soc-web-2026/frontend/src/app/globals.css)
- Add custom utility classes for Neo-Brutalist styling:
  - `.brutalist-card`: `border-2 border-foreground bg-card text-card-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)] rounded-none transition-all`
  - `.brutalist-button`: `border-2 border-foreground bg-primary text-primary-foreground font-bold px-4 py-2 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none cursor-pointer`
  - `.brutalist-border`: `border-2 border-foreground`
  - `.mono-label`: Monospace fonts (`font-mono`) with raw styling.

### UI Components

#### [MODIFY] [Navbar.tsx](file:///e:/web2026/soc-web-2026/frontend/src/components/Navbar.tsx)
- Redesign the Navbar with sharp, solid borders.
- Update active state styling to use a bold underline or solid border accent instead of standard rounded button backgrounds.
- Add brutalist hover states to nav links.

### Pages

#### [MODIFY] [page.tsx](file:///e:/web2026/soc-web-2026/frontend/src/app/page.tsx)
- Complete rewrite of the homepage:
  - **Hero**: Replace standard ambient background with a typographic block. Use massive headers with uppercase fonts, solid outlines, and heavy borders.
  - **Quick Action Grid**: Format links as brutalist cards (`rounded-none`, `border-2 border-foreground`) that translate and cast flat shadows on hover. Include bold numeric indices (e.g. `[01]`, `[02]`, `[03]`) in monospace formatting.

#### [MODIFY] [academic/page.tsx](file:///e:/web2026/soc-web-2026/frontend/src/app/(public)/academic/page.tsx)
- Modernize the academic programs listing:
  - Use custom card formatting (brutalist card style).
  - Add sharp badge elements (`rounded-none`, `border-2 border-foreground`).

#### [MODIFY] [news/page.tsx](file:///e:/web2026/soc-web-2026/frontend/src/app/(public)/news/page.tsx)
- Refactor the news card layout:
  - Re-style standard shadcn Cards with custom brutalist layouts.
  - Highlight the category tags and dates using raw monospace details.

#### [MODIFY] [dashboard/page.tsx](file:///e:/web2026/soc-web-2026/frontend/src/app/(secure)/dashboard/page.tsx)
- Redesign the dashboard cards, layout containers, and alerts to use sharp borders and minimal, high-contrast layouts.

---

## Task Breakdown

### Task 1: Style Definitions & Configuration Update
- **Agent**: `frontend-specialist`
- **Skills**: `tailwind-patterns`, `frontend-design`
- **Priority**: P0
- **Dependencies**: None
- **INPUT**: `frontend/src/app/globals.css`
- **OUTPUT**: Updated `globals.css` containing brutalist utilities.
- **VERIFY**: Compile verify with `npm run build` inside `frontend`.

### Task 2: Layout / Navbar Modernization
- **Agent**: `frontend-specialist`
- **Skills**: `frontend-design`, `nextjs-react-expert`
- **Priority**: P1
- **Dependencies**: Task 1
- **INPUT**: `frontend/src/components/Navbar.tsx`
- **OUTPUT**: Redesigned `Navbar.tsx` using brutalist style.
- **VERIFY**: Ensure code compiles and check layout constraints in mobile/desktop widths.

### Task 3: Homepage Redesign (Massive Typographic Hero)
- **Agent**: `frontend-specialist`
- **Skills**: `frontend-design`, `nextjs-react-expert`
- **Priority**: P1
- **Dependencies**: Task 1
- **INPUT**: `frontend/src/app/page.tsx`
- **OUTPUT**: Modernized landing page with bold typography, solid layouts, and no rounded borders.
- **VERIFY**: Check responsiveness, inspect visually, check for WCAG contrast compliance.

### Task 4: Subpages Redesign (Academic, News, Dashboard)
- **Agent**: `frontend-specialist`
- **Skills**: `frontend-design`, `nextjs-react-expert`
- **Priority**: P2
- **Dependencies**: Task 3
- **INPUT**: `academic/page.tsx`, `news/page.tsx`, `dashboard/page.tsx`
- **OUTPUT**: Cohesive subpages applying the Typographic Brutalism layout language.
- **VERIFY**: Check that all pages render correctly and that no old rounded card elements remain.

### Task 5: Final Auditing and Verification
- **Agent**: `test-engineer`
- **Skills**: `web-design-guidelines`
- **Priority**: P3
- **Dependencies**: Task 4
- **INPUT**: Workspace files
- **OUTPUT**: Success output from verifiers
- **VERIFY**: Run `python .agents/scripts/checklist.py .` and verify all checks pass.

---

## Phase X: Verification

### Automated Verification
Run the verification scripts to audit contrast, responsiveness, and performance:
```bash
# Run styling and typescript checks
npm run lint
npx tsc --noEmit

# Run UX and Accessibility audits
python .agents/skills/frontend-design/scripts/ux_audit.py .
```

### Manual Verification
1. Spin up the local development server:
   ```bash
   npm run dev
   ```
2. Manually test desktop and mobile widths. Ensure:
   - Zero rounded borders (unless explicitly marked with `rounded-[2px]`).
   - Strong typographic contrast (especially white text on `#F14627` orange).
   - Hover states show solid flat shadows shifting correctly.
   - Socratic Gate was fully respected.

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ No critical issues
- Build: ✅ Success
- SEO: ✅ Pass
- Date: 2026-06-18

