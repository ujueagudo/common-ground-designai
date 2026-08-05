# defend-it

A Claude Skill for the moment right before you have to explain or defend a deliverable live, in front of someone else: a client meeting, a talk, a presentation.

Ask Claude to run `defend-it` on the deliverable. It reads the actual content, picks out the claims and data points that would actually hurt if you went blank on them, and quizzes you one at a time. If you can't answer well, it helps you resolve the gap right there before moving on.

This is not the same as asking Claude to review a plan before you build it (that's a different kind of skill, sometimes called "grilling"). This one runs after the work is done, on content you may not have produced yourself step by step, right before you have to hold it in your own head in front of someone else.

Background on why this matters: [Autonomía según incertidumbre y coste de error](https://common-ground-designai.lovable.app/principios/autonomia), part of the Common Ground design principles.

## Install in Claude Code

Copy the `SKILL.md` file into `~/.claude/skills/defend-it/SKILL.md` on your machine, then start a new session. It's active as soon as the session starts.

## Install in Claude Desktop / claude.ai

1. Settings → Capabilities: turn on **Code Execution** and **File Creation** (skills need both).
2. Settings → Capabilities → Skills → **+** → **Create skill**.
3. Zip this folder (or just `SKILL.md`) and upload it. Claude reads it and shows a summary of what it does.

Custom skills are available on Pro, Max, Team and Enterprise plans.
