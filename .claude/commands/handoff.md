---
description: Graceful context handoff - save state for seamless continuation
---

# Context Handoff

Prepare for context transition (long session, context limits, or break).

Reason: $ARGUMENTS

## When to Use This

Use `/handoff` when:
- You notice responses getting slower (context filling up)
- Session has been running for a long time
- Before taking a break mid-work-unit
- Claude suggests context is getting long
- Proactively every 20-30 messages in complex work

## Steps

### 1. Assess Current State

Determine:
- What work unit is in progress?
- What specific task within that unit?
- What files are being modified?
- What decisions are pending?
- What's the exact next step?

### 2. Create Detailed Continuation State

Update `Memory/.state.json`:

```json
{
  "continuation": {
    "needed": true,
    "reason": "[Why handoff is happening]",
    "resumePrompt": "[Detailed prompt for continuation - see below]",
    "savedAt": "[Current timestamp]"
  },
  "progress": {
    "currentWorkUnit": "[Current unit if any]",
    ...
  }
}
```

### 3. Write Comprehensive Resume Prompt

The `resumePrompt` should be detailed enough that a fresh Claude can continue exactly where you left off:

```
Continue working on [Project Name].

CURRENT STATE:
- Work unit: [e.g., "Building Hero section for home page"]
- Specific task: [e.g., "Implementing the animation for the headline text"]
- Files modified: [List files touched this session]
- Files in progress: [Files being actively edited]

WHAT WAS JUST DONE:
- [Recent accomplishment 1]
- [Recent accomplishment 2]

EXACT NEXT STEP:
[Very specific next action, e.g., "Add the Framer Motion fadeIn animation to the h1 element in app/page.tsx line 45"]

CONTEXT NEEDED:
- [Any specific patterns to follow]
- [Relevant decisions made]
- [Dependencies or considerations]

PENDING DECISIONS:
- [Any unresolved questions]
```

### 4. Update Memory Files

**project-state.md**: Update with current progress and "In Progress" section
**session-log.md**: Add entry noting the handoff
**architecture.md**: Add any new patterns established

### 5. Git Commit Work-in-Progress

```bash
git add -A
git commit -m "WIP: [current work unit] - handoff checkpoint"
```

### 6. Output Handoff Package

```
═══════════════════════════════════════════════════════════════
  CONTEXT HANDOFF COMPLETE
═══════════════════════════════════════════════════════════════

Work Unit: [current unit]
Status: [in progress / paused]
Reason: [handoff reason]

All state saved to Memory/

TO CONTINUE:
1. Start a new conversation
2. Say: "Continue the project" or just send any message
3. The auto-memory system will load context automatically

Or copy this continuation prompt:
───────────────────────────────────────────────────────────────
[The detailed resumePrompt from above]
───────────────────────────────────────────────────────────────

Session Stats:
- Messages: [N]
- Work units completed: [N]
- Duration: [calculated from session start]

Ready to continue in new session.
═══════════════════════════════════════════════════════════════
```

### 7. Clear Continuation on Resume

Note: When `/resume` or auto-memory loads this state, it should:
- Display the continuation context prominently
- Clear `continuation.needed` after displaying
- Continue exactly where specified
