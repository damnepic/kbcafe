# AI Coding Agent Rules (starter)

A starter rules file for AI coding agents (Claude Code, Cursor, and similar). Save it as the file your
tool reads (for example CLAUDE.md or .cursorrules) at the root of your project, then edit every
[bracket] to match your stack. A good rules file is the difference between an agent that fits your
codebase and one that reinvents it every session.

From KB Cafe — https://kbcafe.com/what-is-a-coding-agent

---

## Project

This is a [language] [type of app] using [framework] and [key libraries].
Package manager: [npm / pnpm / pip / cargo]. Run the app with `[command]`.

## How to work

- Match the style of the code already in the file you are editing. Do not introduce new patterns,
  libraries, or formatting unless asked.
- Make the smallest change that solves the task. Do not refactor unrelated code.
- Before claiming something works, run it: `[test command]` and `[build/lint command]`.
- If a change touches more than [N] files, outline the plan first and wait for confirmation.

## Conventions

- Indentation: [tabs / N spaces]. Quotes: [single / double]. Semicolons: [yes / no].
- Naming: [camelCase / snake_case] for variables, [PascalCase] for [components/classes].
- Imports: [order/grouping rule].

## Do not

- Do not commit secrets. Keys live in `.env`, which is gitignored.
- Do not edit generated files: [list, e.g. dist/, build/, lockfiles].
- Do not add a dependency without flagging it first.
- Do not weaken or delete tests to make them pass.

## Commands

- Install: `[command]`
- Dev server: `[command]`
- Test: `[command]`
- Build: `[command]`

---

Keep this file short and current. Agents read it every session, so stale rules cost you on every task.
Free to use and adapt. https://kbcafe.com
