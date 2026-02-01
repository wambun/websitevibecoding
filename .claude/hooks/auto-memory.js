#!/usr/bin/env node

/**
 * Autonomous Memory System - Auto-Load Hook
 *
 * This hook runs on UserPromptSubmit and:
 * 1. Detects if this is a new/fresh session
 * 2. Loads memory context automatically
 * 3. Injects continuation state if needed
 * 4. Updates session tracking
 */

const fs = require('fs');
const path = require('path');

// Find project root by looking for Memory folder
function findProjectRoot() {
  let dir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, 'Memory'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  return process.env.CLAUDE_PROJECT_DIR || process.cwd();
}

const PROJECT_ROOT = findProjectRoot();
const MEMORY_DIR = path.join(PROJECT_ROOT, 'Memory');
const STATE_FILE = path.join(MEMORY_DIR, '.state.json');
const SESSION_MARKER = path.join(MEMORY_DIR, '.current-session');

function readState() {
  try {
    if (fs.existsSync(STATE_FILE)) {
      return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
    }
  } catch (e) {}
  return null;
}

function writeState(state) {
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
  } catch (e) {}
}

function readFile(filename) {
  try {
    const filepath = path.join(MEMORY_DIR, filename);
    if (fs.existsSync(filepath)) {
      return fs.readFileSync(filepath, 'utf8');
    }
  } catch (e) {}
  return null;
}

function generateSessionId() {
  return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function isNewSession() {
  // Check if session marker exists and is recent (within 5 minutes)
  try {
    if (fs.existsSync(SESSION_MARKER)) {
      const markerTime = fs.statSync(SESSION_MARKER).mtime.getTime();
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000;

      // If marker is recent, same session - update it
      if (now - markerTime < fiveMinutes) {
        fs.utimesSync(SESSION_MARKER, new Date(), new Date());
        return false;
      }
    }
  } catch (e) {}

  // New session - create/update marker
  try {
    fs.writeFileSync(SESSION_MARKER, new Date().toISOString());
  } catch (e) {}

  return true;
}

function getMemorySummary(state) {
  const projectState = readFile('project-state.md');
  const decisions = readFile('decisions.md');
  const architecture = readFile('architecture.md');
  const sessionLog = readFile('session-log.md');

  let summary = [];

  summary.push('═══════════════════════════════════════════════════════════════');
  summary.push('  AUTONOMOUS MEMORY SYSTEM - SESSION CONTEXT LOADED');
  summary.push('═══════════════════════════════════════════════════════════════');
  summary.push('');

  // Project info
  if (state?.project?.name) {
    summary.push(`PROJECT: ${state.project.name}`);
    summary.push(`CLIENT: ${state.project.client || 'Not set'}`);
    summary.push(`PHASE: ${state.project.phase || 'not_started'}`);
    summary.push('');
  }

  // Current work unit
  if (state?.progress?.currentWorkUnit) {
    summary.push('┌─ CURRENT WORK UNIT ─────────────────────────────────────────┐');
    summary.push(`│ ${state.progress.currentWorkUnit}`);
    summary.push('└─────────────────────────────────────────────────────────────┘');
    summary.push('');
  }

  // Continuation needed?
  if (state?.continuation?.needed) {
    summary.push('⚠️  CONTINUATION FROM PREVIOUS SESSION');
    summary.push(`Reason: ${state.continuation.reason}`);
    summary.push('');
    if (state.continuation.resumePrompt) {
      summary.push('Resume with:');
      summary.push(state.continuation.resumePrompt);
      summary.push('');
    }
  }

  // Completed units
  if (state?.progress?.completedUnits?.length > 0) {
    summary.push(`COMPLETED: ${state.progress.completedUnits.length} work units`);
    state.progress.completedUnits.slice(-5).forEach(unit => {
      summary.push(`  ✓ ${unit}`);
    });
    summary.push('');
  }

  // Pending units
  if (state?.progress?.pendingUnits?.length > 0) {
    summary.push('PENDING WORK UNITS:');
    state.progress.pendingUnits.slice(0, 5).forEach((unit, i) => {
      summary.push(`  ${i + 1}. ${unit}`);
    });
    summary.push('');
  }

  // Blockers
  if (state?.progress?.blockers?.length > 0) {
    summary.push('⚠️  BLOCKERS:');
    state.progress.blockers.forEach(blocker => {
      summary.push(`  - ${blocker}`);
    });
    summary.push('');
  }

  // Key decisions reminder
  if (decisions && decisions.includes('**Decision**:')) {
    summary.push('KEY DECISIONS MADE (see Memory/decisions.md for full context)');
    summary.push('');
  }

  summary.push('───────────────────────────────────────────────────────────────');
  summary.push('Memory files loaded. Use /save-memory before ending session.');
  summary.push('After completing each work unit, update Memory/.state.json');
  summary.push('═══════════════════════════════════════════════════════════════');

  return summary.join('\n');
}

function main() {
  const state = readState();
  const newSession = isNewSession();

  // Only output context for new sessions with active projects
  if (newSession && state?.project?.phase && state.project.phase !== 'not_started') {
    // Update session tracking
    state.session = {
      id: generateSessionId(),
      startedAt: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      messageCount: 1,
      workUnitsCompleted: 0
    };
    state.meta.totalSessions = (state.meta.totalSessions || 0) + 1;
    writeState(state);

    // Output memory context
    console.log(getMemorySummary(state));
  } else if (!newSession && state) {
    // Same session - just update activity and message count
    state.session.lastActivity = new Date().toISOString();
    state.session.messageCount = (state.session.messageCount || 0) + 1;

    // Every 10 messages, remind about saving
    if (state.session.messageCount > 0 && state.session.messageCount % 10 === 0) {
      console.log(`\n[Memory: ${state.session.messageCount} messages this session. Consider /save-memory if significant progress made.]\n`);
    }

    writeState(state);
  }
}

try {
  main();
} catch (error) {
  // Silent fail - don't interrupt the user
  if (process.env.DEBUG) {
    console.error(`Auto-memory error: ${error.message}`);
  }
}
