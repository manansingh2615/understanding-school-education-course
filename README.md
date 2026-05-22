# The Global School — Education Studies Course Platform

A self-contained, multi-user web application for a 110-day, 17-module graduate-level course in global school education. Built to be hosted on GitHub Pages, Netlify, Vercel, or any static web host — no server, no build step, no dependencies.

## Quick deploy

### GitHub Pages (5 minutes)
1. Create a new GitHub repository
2. Upload all 6 files from this folder to the repository root
3. Go to **Settings → Pages → Source: Deploy from branch → main / root**
4. Your site is live at `https://yourusername.github.io/your-repo-name`

### Netlify (2 minutes)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop this entire folder onto the Netlify dashboard
3. Your site is live immediately at a `.netlify.app` URL

### Vercel
```bash
npm i -g vercel
vercel  # run inside this folder
```

## File structure

```
index.html       App shell — auth screen, sidebar, all views
style.css        Complete stylesheet
app.js           All application logic — auth, routing, quiz engine, progress, admin
course-data.js   All 17 modules — schedules, readings, quizzes, assessments, optional
db.js            Database layer (localStorage now, Firebase-ready)
README.md        This file
```

## Course structure

- **17 modules** across **3 phases**, **110 study days**
- **Phase 1 — Foundations** (Days 1–49, 7 modules)
- **Phase 2 — Systems in Practice** (Days 50–87, 6 modules)
- **Phase 3 — Synthesis** (Days 88–110, 4 modules)

## Assessment model

**Tier A — On-site quiz:** Interactive multiple-choice quiz on the platform. 70% to pass. Auto-marks the module complete and unlocks the next.

**Tier B — Local assignment:** A written task displayed on screen (essay, policy memo, artifact audit, or roleplay case). Students write on their own device in Notion, Word, Obsidian, or any text editor. Four formats rotate across the course.

## Multi-user system

- Each user registers with email + password
- Passwords are SHA-256 hashed before storage — never stored in plain text
- Progress is tracked per-user in the browser's localStorage
- The account registered as `admin@globalschool.course` gets an Admin dashboard showing all enrolled users, progress, and quiz scores
- To change the admin email: edit the `ADMIN_EMAIL` constant at the top of `app.js`

## Upgrading to cross-device sync (Firebase)

Progress currently lives in localStorage — device-specific. To enable cross-device sync:

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password) and Firestore
3. Follow the commented-out Firebase implementation at the bottom of `db.js`
4. Replace the `DB` object with the Firebase version — nothing else in the codebase needs to change

## Customising the course

To edit or add modules, edit `course-data.js`. Each module follows this schema:

```javascript
{
  "id": "m01",
  "n": 1,
  "phase": 1,
  "days": "1–10",
  "title": "...",
  "sub": "Short subtitle...",
  "bigIdea": "Central framing idea displayed at top of module.",
  "hook": null,  // or { title, source, url, duration, purpose }
  "thinkers": [{ "name", "era", "claim" }],
  "schedule": [{ "day", "type", "title", "note", "url?" }],
  "readings": [{ "type", "title", "author", "year", "note", "url?", "searchPrompt?" }],
  "assessment": ["Tier label", "format", "title", "prompt text"],
  "optional": [{ "title", "author", "year", "note" }],
  "quiz": [{ "q", "opts": [], "ans": 0, "ex": "explanation" }]
}
```

## License

MIT — use freely, modify, and share.
