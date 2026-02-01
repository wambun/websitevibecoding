---
description: Load all Memory files and resume work from where you left off
---

# How to resume work from Memory

Load all persistent memory and continue working on the project.

Follow this systematic approach:

## 1. Load All Memory Files

Read all memory files to restore context:
- `Memory/README.md` - Understand the memory system
- `Memory/project-state.md` - Current status and progress
- `Memory/decisions.md` - Previous decisions and rationale
- `Memory/architecture.md` - Established patterns and conventions
- `Memory/session-log.md` - History of previous sessions

## 2. Load Project Documentation

Also read key project files:
- `CLAUDE.md` - Project instructions and standards
- `prompt.md` - Project objectives and workflow
- `README.md` - Tech stack and structure

## 3. Understand Current State

From the memory files, identify:
- **Current Phase**: Where is the project in the workflow?
- **Last Session**: What was accomplished? What was the focus?
- **Next Steps**: What should be worked on next?
- **Active Blockers**: Are there any unresolved issues?
- **Key Decisions**: What constraints or choices affect current work?

## 4. Check Client Data

Verify the state of client data:
- `client/old/` - Source content
- `client/new/` - Design reference

## 5. Provide Resumption Summary

Present a brief summary:
```
## Session Resumption

**Project**: [Client name]
**Phase**: [Current phase]
**Last Session**: [Date] - [What was done]

### Ready to Continue
[What's next based on project-state.md]

### Key Context
- [Important decisions or patterns to remember]
- [Any blockers or notes from last session]
```

## 6. Wait for Direction

After presenting the summary, ask what the user wants to focus on this session, or proceed with the recommended next steps from the last session log.

$ARGUMENTS
