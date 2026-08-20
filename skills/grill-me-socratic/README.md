# Summary of grill-me-socratic

**grill-me-socratic** is a Claude Skill that interviews you about a plan, design, or interpretation using a Socratic approach, so you reach your own view before hearing Claude's.

## How It Works

For each open question, the skill lays out several distinct angles or tensions instead of narrowing it to a binary choice, and does not state Claude's own recommended answer in the same turn as the question. Only after you respond does it explicitly ask, yes/no, whether you want to hear Claude's opinion: it never volunteers it unprompted.

## Key Features

- **Judgment first, suggestion after**: separates forming your own view from seeing Claude's, instead of showing both at once
- **Multi-angle framing**: each question opens into considerations, not a forced choice
- **Explicit opt-in**: Claude's opinion is only given if you ask for it, one question at a time

## Installation Options

**Claude Code**: Copy `SKILL.md` to `~/.claude/skills/grill-me-socratic/SKILL.md`

**Claude Desktop/claude.ai**: Enable Code Execution and File Creation in Settings, create a new skill via Settings → Capabilities → Skills, then upload the zipped folder

The skill draws inspiration from a design principle about anchoring: seeing a suggestion before forming your own judgment biases the judgment toward it, whether the suggestion is right or wrong.
