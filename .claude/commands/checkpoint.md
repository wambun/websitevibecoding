---
description: Save a named milestone checkpoint of current progress
---

# How to save a checkpoint

Save a named milestone checkpoint: $ARGUMENTS

This creates a snapshot of the current project state at a significant milestone.

Follow this systematic approach:

## 1. Validate Checkpoint Name

The checkpoint name should be provided as an argument. Examples:
- `navigation-complete`
- `homepage-done`
- `phase1-prd-approved`
- `pre-client-review`

If no name is provided, ask the user for a descriptive checkpoint name.

## 2. Read Current State

Read all memory files to capture current state:
- `Memory/project-state.md`
- `Memory/decisions.md`
- `Memory/architecture.md`
- `Memory/session-log.md`

## 3. Create Checkpoint File

Create a new file at `Memory/checkpoints/[checkpoint-name].md` with:

```markdown
# Checkpoint: [Name]

> Created: [timestamp]

## Project State at Checkpoint

[Copy relevant sections from project-state.md]

## Decisions Made Up to This Point

[Summary of key decisions]

## Architecture at This Point

[Summary of established patterns and components]

## Notes

[Any specific context about why this checkpoint was created]
```

## 4. Update Session Log

Add an entry to the session log noting the checkpoint:
```
### Checkpoint Created: [name]
[Brief description of what this milestone represents]
```

## 5. Confirm Checkpoint

Provide confirmation:
```
Checkpoint saved: Memory/checkpoints/[name].md

This checkpoint captures:
- [X] items completed
- [Y] key decisions
- [Z] established patterns

You can reference this checkpoint later to see the project state at this milestone.
```

**Use checkpoints for**:
- Before major refactors
- After completing a phase
- Before client reviews
- At any significant milestone worth preserving
