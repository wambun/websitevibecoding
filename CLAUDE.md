Follow these instructions carefully and do not deviate from them.

## Auto-Approval & Turbo Mode
- **Auto-Run**: For all commands and file edits, assume user approval. Set `SafeToAutoRun: true` for all terminal commands.
- **Turbo All**: This project uses `// turbo-all` logic. Proceed with execution without waiting for manual confirmation for standard build, fetch, and refactor tasks.

## Autonomous Memory System v2

This project uses an **autonomous memory system** that automatically maintains context across sessions with minimal user intervention.

### How It Works

1. **Auto-Detection**: A hook automatically detects new sessions and loads memory context
2. **Work Units**: Work is structured into atomic units that get tracked and saved
3. **Proactive Saves**: Memory is saved after each work unit completion
4. **Graceful Handoffs**: When context gets long, use `/handoff` for seamless continuation

### Memory Commands

| Command | Purpose |
|---------|---------|
| `/init-project` | Start a new project - initializes all memory tracking |
| `/start-work "task"` | Begin a new work unit (atomic, trackable task) |
| `/complete-work` | Mark current work unit done, auto-save, suggest next |
| `/handoff` | Graceful context transition - saves state for continuation |
| `/resume` | Load all memory and continue (usually auto-triggered) |
| `/save-memory` | Manual save of current context |
| `/checkpoint "name"` | Save a named milestone snapshot |

### Memory Files

| File | Purpose |
|------|---------|
| `Memory/.state.json` | Machine-readable state (phase, work units, continuation) |
| `Memory/project-state.md` | Human-readable progress and status |
| `Memory/decisions.md` | Key decisions and rationale (prevents re-debating) |
| `Memory/architecture.md` | Established patterns, component structure |
| `Memory/session-log.md` | Timestamped log of sessions |
| `Memory/checkpoints/` | Named milestone snapshots |

### Autonomous Behaviors

**On New Session**:
- Auto-memory hook detects fresh context
- Loads project state and displays summary
- Shows current work unit and next steps
- If continuation was pending, displays resume prompt

**On Work Unit Completion** (`/complete-work`):
- Updates `.state.json` with progress
- Updates `project-state.md` checklist
- Creates git commit
- Suggests next work unit
- Tracks session statistics

**On Context Getting Long**:
- Use `/handoff` proactively (every 20-30 complex messages)
- Creates detailed continuation state
- Generates specific resume prompt
- Saves WIP commit

### Work Unit Lifecycle

```
/init-project "Client Name"
    ↓
/start-work "Build navigation component"
    ↓
  [Implementation work]
    ↓
/complete-work
    ↓
  [Auto-save, git commit, suggest next]
    ↓
/start-work "Build footer component"
    ↓
  ... continue ...
    ↓
/handoff (when context long or taking break)
    ↓
  [New session - auto-loads and continues]
```

### CRITICAL: Proactive Memory Management

As Claude, you MUST:
1. **Always check Memory/.state.json** at session start to understand current state
2. **Use work units** - Structure all work as `/start-work` → work → `/complete-work`
3. **Save frequently** - After every completed component, decision, or pattern established
4. **Handoff proactively** - Don't wait for context to fail; `/handoff` when work is complex
5. **Never lose progress** - If unsure, save. Better to over-save than lose context

### Session Heartbeat

The auto-memory hook tracks message count. Every 10 messages, you'll see a reminder to consider saving if significant progress was made.

## Project Overview & Structure

Comprehensive guide to the folder structure and organization of the project, including all main directories, key files, and their purposes.

@.cursor/rules/project-structure.mdc

## Tech Stack & Dependencies

- **Frontend**: Next.js 15, React 19, Tailwind CSS, Vercel CLI
- **Processing**: ImageMagick (System level), Firecrawl API
- **Utilities**: Framer Motion, Shadcn UI

@.cursor/rules/tech-stack-dependencies.mdc

## TypeScript Code Style Guide

TypeScript conventions including parameter passing patterns, type safety rules, import organization, functional programming practices, and documentation standards.

@.cursor/rules/typescript-style.mdc

## Next.js

Expert guidance on React, Next.js App Router, and related technologies including code structure, naming conventions, React best practices, UI styling, forms, metadata, error handling, accessibility, and security.

@.cursor/rules/nextjs.mdc

## UI Components from Shadcn UI

Guidelines for using Shadcn UI components from the shared UI library, including usage, import conventions, and best practices for composing user interfaces.

@.cursor/rules/ui-components.mdc

## Tailwind CSS Styling Practices

Tailwind CSS conventions covering class organization, responsive design, color system usage, layout patterns, design system integration, and styling best practices.

@.cursor/rules/tailwind-styling.mdc

## Landing Page Components Rule

Instructions for building public-facing pages using landing page components, including component sources, documentation references, structure examples, and implementation best practices.

@.cursor/rules/landing-components.mdc

## Self-Improvement

Guidelines for continuously improving rules based on emerging code patterns, including analysis processes, rule updates, quality checks, and documentation maintenance.

@.cursor/rules/self-improve.mdc

## Git & Version Control

- Add and commit automatically whenever an entire task is finished
- Use descriptive commit messages that capture the full scope of changes

## Retrieving library documentation by using Context 7

When the user requests code examples, setup or configuration steps, or library/API documentation, use the context7 mcp server to get the information.

## Verifying features in the browser

Use the Playwright MCP server to verify features in the browser.
Check for console errors and ensure the implemented functionality is working as expected.

## Pre-Launch QA Checklist

**Before marking any page or feature complete, run these checks:**

1. **Lighthouse Audit** (target: 90+ all categories)
   - Run `npx lighthouse <url> --output=html --output-path=./lighthouse-report.html` or use Chrome DevTools
   - Performance ≥ 90
   - Accessibility ≥ 90
   - Best Practices ≥ 90
   - SEO ≥ 90

2. **Mobile Responsive Testing**
   - Test on mobile viewport (390x844 for iPhone 14 Pro)
   - Use Playwright to verify layout doesn't break
   - Check touch targets are adequately sized (min 44x44px)

3. **External Link Verification**
   - Verify all external URLs are correct and accessible
   - Ensure external links have `target="_blank"` and `rel="noopener noreferrer"`
   - Document all third-party integrations (portals, APIs, payment links)

4. **Build Verification**
   - Run `npm run build` with zero errors
   - Check for TypeScript errors
   - Verify no console errors in browser

5. **Deployment Verification**
   - Run `npx vercel build` to verify local production build
   - Use `npx vercel preview` to deploy a preview environment

## Accessibility Standards (Non-Negotiable)

These accessibility requirements must be met on every project:

- **Interactive Elements**: All buttons and icon-only links must have `aria-label`
- **Link Names**: All links must have discernible text (no empty `<a>` tags with only icons)
- **Heading Hierarchy**: Must be sequential (h1 → h2 → h3, no skipping levels)
- **Color Contrast**: Meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Form Labels**: All form inputs must have associated labels
- **Alt Text**: All images must have descriptive alt text (or `alt=""` for decorative)
- **Focus States**: All interactive elements must have visible focus indicators

## Layout & Visual Standards

For premium, modern websites:

- **Full-Width Layouts**: Use `max-w-[1600px]` for spacious, premium feel (avoid constrained `max-w-7xl` unless specified)
- **Consistent Spacing**: Use consistent padding across sections (`px-6 sm:px-8 lg:px-12`)
- **Visual Balance**: Verify decorative elements (initials, icons, badges) are properly positioned
- **Mobile-First**: Ensure all layouts work on mobile before desktop refinements

## Typography Standards (CRITICAL)

**Typography is what makes a design feel premium. It MUST match the design reference exactly.**

### Requirements

1. **Font Families**: Use the EXACT fonts from the design reference
   - Check Google Fonts, Adobe Fonts, or the site's CSS
   - Add font imports to `app/layout.tsx` or `globals.css`
   - Configure in `tailwind.config.js` if using custom fonts

2. **Font Sizes**: Match the design reference hierarchy
   - Extract sizes for h1, h2, h3, h4, body, small
   - Note differences between desktop and mobile
   - Use Tailwind's responsive prefixes (`text-4xl md:text-6xl`)

3. **Font Weights**: Use correct weights for each element
   - Headings often use 600-800
   - Body typically 400
   - Buttons/nav may differ

4. **Line Height**: Critical for readability
   - Headings: typically tight (1.1-1.2)
   - Body: typically relaxed (1.5-1.7)
   - Use `leading-tight`, `leading-relaxed`, or custom values

5. **Letter Spacing**: Often overlooked but important
   - Headings may use negative tracking (`tracking-tight`)
   - Uppercase text often needs positive tracking (`tracking-wide`)

6. **Text Transforms**: Note any special treatments
   - Navigation in uppercase?
   - Buttons capitalized?

### Verification

Before completing any page, verify typography matches the design reference:
- [ ] Correct font family loaded and applied
- [ ] Font sizes match for all heading levels
- [ ] Font weights match the reference
- [ ] Line heights feel the same
- [ ] Letter spacing applied where needed
- [ ] Text transforms match (uppercase, etc.)

## Link & Integration Audit

Before deployment, verify:

- [ ] All navigation links point to correct pages
- [ ] External links (portals, social, APIs) are correct and working
- [ ] Email links use proper `mailto:` format
- [ ] Phone links use proper `tel:` format
- [ ] No broken internal links (404s)
- [ ] Social media links are accurate (if applicable)

## **EXTREMELY IMPORTANT:** Code Quality Checks

**ALWAYS follow these instructions before completing a task.**

Automatically use the IDE's built-in diagnostics tool to check for linting and type errors:
   - Run `mcp__ide__getDiagnostics` to check all files for diagnostics
   - Fix any linting or type errors before considering the task complete
   - Do this for *each* file you create or edit

This is a CRITICAL step that must NEVER be skipped when working on any code-related task.
