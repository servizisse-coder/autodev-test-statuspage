# Autodev Test - Status Page

This is a test project for Autodev, an autonomous development orchestrator.

## Project

A simple Next.js status page that shows system health and task progress.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- No CSS framework - use inline styles with a dark theme

## Conventions

- Use `app/` directory (App Router, not Pages)
- API routes go in `app/api/<name>/route.js`
- Export `GET` or `POST` handler functions from route files
- Keep styles inline (no separate CSS files)
- Use dark theme: background #0a0a0a, text #ededed, accent green #22c55e

## Build and Verify

```bash
npm run build    # Must pass with no errors
npm run dev      # Local dev server on port 3000
```

## Commit Convention

```
feat(<task_id>): <description>
fix(<task_id>): <description>
wip(<task_id>): partial progress
```

Always commit when done. If blocked, commit partial progress with `wip()`.
