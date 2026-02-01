---
description: Complete current work unit, auto-save, and prepare for next
---

# Complete Work Unit

Mark the current work unit as complete and save progress.

Optional notes: $ARGUMENTS

## Steps

### 1. Read Current State

Load `Memory/.state.json` to get current work unit.

### 2. Verify Completion

Before marking complete, verify:
- [ ] The component/feature is implemented
- [ ] No TypeScript/lint errors
- [ ] Basic functionality works
- [ ] Code follows project patterns

If not complete, do not proceed - finish the work first.

### 3. Update State - Mark Complete

Update `Memory/.state.json`:

```json
{
  "progress": {
    "currentWorkUnit": null,
    "completedUnits": [...existing, "[completed unit name]"],
    ...
  },
  "session": {
    "workUnitsCompleted": [increment by 1],
    "lastActivity": "[Current timestamp]"
  },
  "meta": {
    "totalWorkUnits": [increment by 1],
    "lastSave": "[Current timestamp]"
  }
}
```

### 4. Update Project State

Update `Memory/project-state.md`:
- Check off the completed item in the progress list
- Update "Last updated" timestamp
- Add any notes about what was built

### 5. Update Architecture (if applicable)

If this work unit established new patterns or created significant components, update `Memory/architecture.md`:
- Component location and purpose
- Any patterns used
- Integration notes

### 6. Log Any Decisions

If any decisions were made during this work unit, add them to `Memory/decisions.md`.

### 7. Git Commit

Create a git commit for this work unit:
```bash
git add -A
git commit -m "Complete: [work unit name]"
```

### 8. Determine Next Work Unit

Check `pendingUnits` in state for what's next. If there are pending units:
- Suggest the next logical work unit
- Ask if user wants to continue or take a break

### 9. Output Summary

```
✓ Work Unit Complete: [name]

Saved:
- Memory/.state.json updated
- Memory/project-state.md updated
- Git commit created

Progress: [X] of [Y] work units complete
Session: [N] units completed this session

Next suggested: [next pending unit]

Continue with next unit? Or use /save-memory to end session.
```

### 10. Auto-Continue (if appropriate)

If the user has been working smoothly and there's a clear next unit, suggest immediately starting it with `/start-work [next unit]`.
