#!/usr/bin/env node

/**
 * Memory Reminder Hook
 *
 * This hook outputs a reminder to save memory before ending a session.
 * It runs on Stop events to prompt Claude to save context.
 */

const reminder = `
---
MEMORY REMINDER: Before ending this session, consider running /save-memory to persist:
- Current project state and progress
- Key decisions made
- New patterns or components created
- Session log entry for continuity

This ensures the next session can seamlessly continue from here.
---
`;

console.log(reminder);
