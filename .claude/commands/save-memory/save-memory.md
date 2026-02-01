---
description: Save current session context to Memory files for persistence
---

# How to save session context to Memory

Save the current session context to the Memory folder for future reference.

Follow this systematic approach:

## 1. Read Current Memory State

First, read all existing memory files to understand what's already captured:
- `Memory/project-state.md`
- `Memory/decisions.md`
- `Memory/architecture.md`
- `Memory/session-log.md`

## 2. Update Project State

Update `Memory/project-state.md` with:
- Current timestamp
- What phase the project is in
- Mark completed items in the checklist
- List what's currently in progress
- Note any active blockers
- Capture any recent client feedback

## 3. Log Decisions

If any significant decisions were made this session, add them to `Memory/decisions.md`:
- What was decided
- Why it was decided (context and rationale)
- What alternatives were considered

## 4. Update Architecture Notes

If any new patterns, components, or technical conventions were established, update `Memory/architecture.md`:
- New components created and their locations
- Patterns established (animation, styling, data flow)
- Any third-party integrations added

## 5. Add Session Log Entry

Add a new entry at the TOP of `Memory/session-log.md`:
- Today's date and a descriptive session title
- Approximate duration
- Main focus of the session
- What was accomplished
- Key decisions made
- Any blockers encountered
- What the next session should focus on

## 6. Confirm Save

After updating all relevant files, provide a brief summary of what was saved:
- Number of items completed
- Key decisions captured
- Recommendations for next session

**Note**: Be concise but specific. Include file paths when referencing components. The goal is to have enough context to seamlessly continue in a future session.
