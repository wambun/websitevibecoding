# Autonomous Memory System v2

This folder contains the autonomous memory system that maintains context across sessions with minimal user intervention.

## How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                    AUTONOMOUS MEMORY FLOW                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   New Session                                                   │
│       │                                                         │
│       ▼                                                         │
│   ┌─────────────────┐                                          │
│   │ Auto-Memory Hook│ ──► Detects new session                  │
│   │ (on every msg)  │ ──► Loads .state.json                    │
│   └────────┬────────┘ ──► Injects context to Claude            │
│            │                                                    │
│            ▼                                                    │
│   ┌─────────────────┐                                          │
│   │ /start-work     │ ──► Defines atomic work unit             │
│   │ "Build header"  │ ──► Updates state tracking               │
│   └────────┬────────┘                                          │
│            │                                                    │
│            ▼                                                    │
│   ┌─────────────────┐                                          │
│   │ Implementation  │ ──► Claude works on the unit             │
│   │ Work            │                                          │
│   └────────┬────────┘                                          │
│            │                                                    │
│            ▼                                                    │
│   ┌─────────────────┐                                          │
│   │ /complete-work  │ ──► Auto-saves all memory                │
│   │                 │ ──► Git commits                          │
│   └────────┬────────┘ ──► Suggests next unit                   │
│            │                                                    │
│            ▼                                                    │
│   ┌─────────────────┐                                          │
│   │ Context Long?   │                                          │
│   │                 │                                          │
│   └────────┬────────┘                                          │
│      No    │    Yes                                            │
│       │    │     │                                              │
│       │    │     ▼                                              │
│       │    │  ┌─────────────────┐                              │
│       │    │  │ /handoff        │ ──► Saves detailed state     │
│       │    │  │                 │ ──► Creates resume prompt    │
│       │    │  └────────┬────────┘                              │
│       │    │           │                                        │
│       │    │           ▼                                        │
│       │    │     New Session ─────────────────────┐            │
│       │    │                                      │            │
│       ▼    ▼                                      │            │
│   ┌─────────────────┐                            │            │
│   │ Next Work Unit  │◄───────────────────────────┘            │
│   │                 │                                          │
│   └─────────────────┘                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Files

| File | Purpose | Auto-Updated |
|------|---------|--------------|
| `.state.json` | Machine-readable state (phase, units, continuation) | Yes |
| `.current-session` | Session marker (detects new sessions) | Yes |
| `project-state.md` | Human-readable progress checklist | On /complete-work |
| `decisions.md` | Key decisions and rationale | Manual |
| `architecture.md` | Established patterns and conventions | On /complete-work |
| `session-log.md` | Timestamped session history | On /save-memory |
| `checkpoints/` | Named milestone snapshots | On /checkpoint |

## Commands

### Project Lifecycle
```bash
/init-project "Client Name"    # Start new project, initialize tracking
```

### Work Unit Cycle
```bash
/start-work "Build navigation" # Begin trackable work unit
# ... do the work ...
/complete-work                 # Mark done, auto-save, commit, suggest next
```

### Memory Management
```bash
/save-memory                   # Manual save of all context
/checkpoint "phase1-done"      # Named milestone snapshot
/resume                        # Load all memory (usually auto-triggered)
/handoff                       # Graceful context transition
```

## Automatic Behaviors

1. **Session Detection**: Hook detects new sessions and auto-loads context
2. **Message Counter**: Every 10 messages, reminder to save if needed
3. **Stop Reminder**: When Claude stops, reminder to save memory
4. **Work Unit Tracking**: All work structured as atomic, saveable units

## Best Practices

1. **Always use work units** - Structure work as start → implement → complete
2. **Handoff proactively** - Don't wait for context to fail
3. **Trust the system** - Context will be preserved across sessions
4. **Check .state.json** - The source of truth for current state

## What Gets Preserved

- Current phase and progress
- All completed work units
- Pending work queue
- Key decisions and rationale
- Established patterns
- Exact continuation point (if handoff used)
- Session history and statistics
