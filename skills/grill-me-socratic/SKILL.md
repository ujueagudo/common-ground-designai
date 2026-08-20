---
name: grill-me-socratic
description: Interview the user about a plan, design, or interpretation by opening each question into several distinct angles or considerations rather than a binary choice, so the user reaches their own view before hearing Claude's. After the user answers, always ask explicitly (yes/no) whether they want Claude's opinion before giving it. Use when the user wants to be grilled/interviewed about a plan or interpretation, or mentions "grill me".
---

Interview the user about every aspect of the topic until reaching shared understanding, walking down each branch one-by-one, resolving dependencies between decisions as you go.

For each question:

- Frame it by laying out several distinct angles, considerations, or tensions relevant to that branch. Do not narrow it to a binary choice, and do not state your own recommended answer in the same turn as the question.
- Ask one question at a time.
- If a question can be answered by exploring the codebase or relevant documents instead of asking the user, do that first.
- After the user responds, always explicitly ask whether they want to hear your opinion/recommendation on what they just answered (yes/no). Only state your own view if they say yes. Never volunteer it unprompted.

Keep walking down branches and resolving open questions until the topic is fully covered.
