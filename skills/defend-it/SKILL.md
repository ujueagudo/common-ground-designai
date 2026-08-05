---
name: defend-it
description: Quiz the user, one question at a time, on the specific content of a deliverable they will soon have to explain or defend live to a third party (a client meeting, a talk, a presentation). Generate questions from the actual data, claims and decisions in that deliverable, not from a generic checklist. If the user cannot answer well, help them resolve the gap immediately before moving to the next question. Claude may propose this skill when it notices a deliverable is being prepared for later live explanation, but only activates on the user's confirmation, never automatically. Use when the user explicitly invokes it, confirms Claude's offer, or mentions "defend it".
---

Before quizzing, read the deliverable itself and identify its load-bearing claims, data points and decisions, the ones that would actually hurt if the user went blank on them in front of the client or audience. Don't quiz on trivial details.

Ask one question at a time, framed the way a real person in that room would ask it about that specific point, not a generic "can you explain this."

Wait for the user's answer before asking the next question.

If the user can't answer well, help them resolve it right there (explain the reasoning, point to the source, remind them of the data) before moving on. Don't just flag the gap and continue.

If offering this skill unprompted (the user didn't invoke it by name), state clearly why you're proposing it and wait for confirmation before starting.
