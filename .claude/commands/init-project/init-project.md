---
description: Initialize a new project and start the full autonomous workflow
---

# Initialize Project & Start Autonomous Workflow

**Arguments**: $ARGUMENTS

Parse the arguments to extract:
- **Client/Project Name**: The name in quotes (required)
- **--old "URL"**: The existing site URL to migrate content from
- **--new "URL"**: The design reference URL to clone

Example: `"Acme Corp" --old "https://acme.com" --new "https://design-ref.com"`

---

## PHASE 0: INITIALIZATION

### Step 1: Parse Arguments

Extract from the arguments:
```
Client Name: [extracted name]
Old Site URL: [extracted --old value]
New Design URL: [extracted --new value]
```

If any required value is missing, ask for it before proceeding.

### Step 2: Initialize Memory State

Create/update `Memory/.state.json`:

```json
{
  "project": {
    "name": "[Client Name]",
    "client": "[Client Name]",
    "oldSiteUrl": "[Old URL]",
    "newDesignUrl": "[New URL]",
    "startedAt": "[Current ISO timestamp]",
    "phase": "phase0_initialization"
  },
  "session": {
    "id": "session-[timestamp]-[random]",
    "startedAt": "[Current ISO timestamp]",
    "lastActivity": "[Current ISO timestamp]",
    "messageCount": 1,
    "workUnitsCompleted": 0
  },
  "progress": {
    "currentWorkUnit": "Project initialization",
    "completedUnits": [],
    "pendingUnits": [
      "Fetch old site data via Firecrawl",
      "Fetch design reference via Firecrawl",
      "Analyze design reference visuals",
      "Generate PRD with sitemap",
      "Content mapping strategy",
      "Build navigation component",
      "Build footer component",
      "Build home page"
    ],
    "blockers": []
  },
  "continuation": {
    "needed": false,
    "reason": "",
    "resumePrompt": "",
    "savedAt": ""
  },
  "meta": {
    "version": "2.0",
    "lastSave": "[Current ISO timestamp]",
    "totalSessions": 1,
    "totalWorkUnits": 0
  }
}
```

### Step 3: Update Project State File

Update `Memory/project-state.md`:

```markdown
# Project State

> Last updated: [timestamp]

## Project Info

- **Client**: [Client Name]
- **Old site URL**: [Old URL]
- **Design reference URL**: [New URL]
- **Current phase**: Phase 0 - Initialization

## Progress

### Completed
- [x] Project initialized

### In Progress
- [ ] Fetching site data

### Phase 1 - Analysis
- [ ] Firecrawl data fetched (old)
- [ ] Firecrawl data fetched (new)
- [ ] Visual analysis of design reference
- [ ] PRD generated
- [ ] Sitemap defined
- [ ] Content mapping complete

### Phase 2 - Execution
- [ ] Navigation component
- [ ] Footer component
- [ ] Home page
- [ ] [Additional pages from sitemap...]

## Notes
Project started: [timestamp]
```

### Step 4: Log Session Start

Add entry to `Memory/session-log.md`:

```markdown
## [Date] - Project Kickoff: [Client Name]

**Focus**: Full project initialization and Phase 1 start

### Project Details
- Old site: [URL]
- Design reference: [URL]

### Session Goals
- Initialize memory system
- Fetch site data via Firecrawl
- Begin Phase 1 analysis
```

### Step 5: Confirm Initialization

Output brief confirmation:
```
✓ Project Initialized: [Client Name]
  Old site: [URL]
  New design: [URL]

Memory system active. Starting data collection...
```

---

## PHASE 1: DATA COLLECTION & ANALYSIS (Autonomous)

### Step 6: Fetch Old Site Content (Comprehensive)

Mark work unit: "Fetch old site content"

**Use the fallback chain for comprehensive content extraction:**

#### Try Method 1: Playwright (Preferred)
```
1. Use Playwright MCP to navigate to the old site
2. Discover all pages:
   - Check for sitemap.xml
   - Extract all navigation links
   - Follow internal links
3. For each page:
   - Extract all text content
   - Note headings, paragraphs, lists
   - Capture images (URLs and alt text)
   - Save structured markdown to client/old/
4. Update Memory/content-inventory.json
```

#### Fallback Method 2: WebFetch
```
If Playwright unavailable or fails:
1. Use WebFetch for each discovered URL
2. Prompt to extract structured content
3. Save to client/old/
```

#### Fallback Method 3: Firecrawl
```
If above methods fail:
node scripts/firecrawl-fetch.mjs --url "[OLD_SITE_URL]" --target "old"
```

**Verify completeness before proceeding:**
- All navigation pages captured?
- Key pages (home, about, services, contact) extracted?
- Content inventory updated?

### Step 7: Capture Design Reference (Visual)

Mark work unit: "Capture design reference visuals"

**Use Playwright for visual capture (required):**

```
1. Navigate to design reference site with Playwright
2. For each key page:

   Desktop capture (1920x1080):
   - Take full-page screenshot
   - Save to client/new/screenshots/[page]-desktop.png

   Mobile capture (390x844):
   - Take full-page screenshot
   - Save to client/new/screenshots/[page]-mobile.png

3. Extract design tokens:
   - Colors (inspect computed styles)
   - Typography (fonts, sizes, weights)
   - Spacing patterns
   - Border radius, shadows

4. Note animations and interactions:
   - Hover effects
   - Scroll animations
   - Transitions

5. Save analysis to client/new/design-tokens.md
6. Update Memory/content-inventory.json
```

**If Playwright unavailable**, use WebFetch to at least capture content, but warn that screenshots are missing and visual cloning will be harder.

### Step 8: Read Project Instructions

Read these files to understand the full workflow:
- `prompt.md` - Project objectives and phases
- `CLAUDE.md` - Technical standards and instructions

### Step 9: Visual Analysis

Mark work unit: "Analyze design reference visuals"

Analyze the content in `client/new/`:
- Layout patterns and spacing
- Color palette

**TYPOGRAPHY (CRITICAL - THIS DEFINES THE DESIGN):**
- **Font families**: Identify exact fonts (check Google Fonts, Adobe Fonts, or inspect CSS)
- **Font sizes**: Document h1, h2, h3, h4, body, small for desktop AND mobile
- **Font weights**: Note weight for each heading level, body, buttons, nav
- **Line heights**: Capture for headings and body text
- **Letter spacing**: Especially for headings, navigation, buttons
- **Text transforms**: Note any uppercase, capitalize treatments

The typography MUST be implemented exactly as the design reference. This is non-negotiable.

- Animation patterns
- Component structure
- Navigation patterns
- Footer structure

Document findings in `Memory/architecture.md` AND create `client/new/design-tokens.md` with full typography specs.

### Step 10: Content Mapping Verification

Mark work unit: "Verify content mapping"

**CRITICAL: Ensure nothing is lost in migration**

Create `Memory/content-mapping.md`:

```markdown
# Content Mapping: [Client Name]

## Page-by-Page Mapping

| Old Site Page | Content Elements | New Design Section | Status |
|---------------|------------------|-------------------|--------|
| / (home) | Hero, Features, CTA | Home page | pending |
| /about | Company story, Team | About page | pending |
| ... | ... | ... | ... |

## Content Inventory Check

### Must-Have Content (from old site)
- [ ] Company name and tagline
- [ ] All service/product descriptions
- [ ] Team member info (if applicable)
- [ ] Contact information
- [ ] Legal pages (privacy, terms)
- [ ] All images with proper context

### Design Elements (from new reference)
- [ ] Navigation structure
- [ ] Hero section pattern
- [ ] Content section layouts
- [ ] Footer structure
- [ ] Color scheme
- [ ] Typography
- [ ] Animations

## Gaps Identified
[List any content from old site that doesn't have a clear home in new design]

## Decisions Needed
[List any mapping decisions that need user input]
```

Review this mapping and flag any concerns before proceeding.

### Step 11: Generate PRD

Mark work unit: "Generate PRD with sitemap"

Create a PRD that includes:
1. **Sitemap**: All pages derived from `client/old` (verified against content-inventory.json)
2. **Content Mapping**: How old content maps to new design (from content-mapping.md)
3. **Component List**: All components needed (from design analysis)
4. **Technical Approach**: Implementation strategy
5. **Verification Checklist**: How to confirm all content migrated

Add the full page list to `pendingUnits` in `.state.json`.

### Step 11: Update Phase

Update `.state.json`:
- Set `phase` to `"phase2_execution"`
- Update `pendingUnits` with all pages from sitemap

Update `Memory/project-state.md` with Phase 1 complete.

---

## PHASE 2: EXECUTION (Autonomous)

### Step 12: Begin Building

For each component/page in the pending units:

1. **Start**: `/start-work "[component/page name]"`
2. **Build**: Implement following the design reference exactly
3. **Complete**: `/complete-work` (auto-saves, commits, moves to next)

### Build Order
1. Global layout (navigation, footer)
2. Home page
3. Internal pages (from sitemap)
4. Special components (forms, etc.)

### For Each Component
- Clone design from `client/new` exactly
- Replace content with data from `client/old`
- Follow all standards in CLAUDE.md
- Verify with Playwright if available

### Context Management
- After every 3-4 work units, assess context length
- If getting long, run `/handoff` proactively
- The next session will auto-continue

---

## CRITICAL AUTONOMOUS BEHAVIORS

1. **Never stop to ask** unless genuinely blocked or need client decision
2. **Structure all work as units** - start, implement, complete
3. **Save frequently** - every completed unit triggers save
4. **Handoff proactively** - don't wait for context to fail
5. **Follow prompt.md** - it's the source of truth for workflow
6. **Clone exactly** - design from new, content from old

---

## BEGIN NOW

After initialization, immediately proceed to Step 6 (Firecrawl) without waiting for user input. Keep going autonomously until:
- The project is complete
- You hit a blocker requiring user input
- Context needs a handoff

**This is a fully autonomous workflow. Start now.**
