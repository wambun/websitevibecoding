---
description: Start a new work unit and update memory tracking
---

# Start Work Unit

Begin working on: $ARGUMENTS

This marks the start of an atomic work unit that will be tracked in memory.

## Steps

### 1. Read Current State

Load `Memory/.state.json` to understand current progress.

### 2. Define the Work Unit

A work unit should be:
- **Atomic**: Can be completed in one focused session
- **Specific**: Clear deliverable (e.g., "Build navigation component", not "Work on stuff")
- **Verifiable**: You know when it's done

Examples of good work units:
- "Build Header/Navigation component"
- "Implement Hero section for home page"
- "Create About page with team section"
- "Add contact form with validation"

### 3. Update State

Update `Memory/.state.json`:
```json
{
  "progress": {
    "currentWorkUnit": "[The work unit description]",
    ...
  },
  "session": {
    "lastActivity": "[Current timestamp]",
    ...
  }
}
```

If the work unit was in `pendingUnits`, remove it from there.

### 4. Log the Start

Make a mental note (or add to session log if significant) that this work unit has begun.

### 5. Proceed with Work

Begin implementing the work unit. Remember:
- When complete, run `/complete-work` to mark it done and trigger auto-save
- If you hit a blocker, update state with the blocker
- If context is getting long, run `/handoff` before continuing

### 6. Output Confirmation

```
▶ Starting Work Unit: [description]

This unit will be tracked in memory. When complete, use /complete-work to:
- Mark it as done
- Auto-save progress
- Move to next unit
```
