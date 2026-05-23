# The Global School — Education Studies Platform

A self-contained, multi-user web application for a 110-day, 17-module graduate-level course in global school education. No server required. No build step. No dependencies. Deploy in under 5 minutes.

---

## File structure

```
index.html        App shell — all views and HTML structure
style.css         Complete stylesheet (typography, layout, components)
app.js            All application logic — auth, routing, module rendering, quiz engine, admin
course-data.js    All 17 modules — schedules, readings, quizzes, assessments, optional reading
db.js             Database layer — localStorage now, Firebase-ready for cross-device sync
README.md         This file
```

---

## Deploy in 5 minutes

### Option 1 — GitHub Pages (free, recommended)

1. Create a new repository at [github.com/new](https://github.com/new)
   - Name it anything (e.g. `globalschool`)
   - Set it to **Public**
2. Upload all 6 files to the repository root (drag and drop in the GitHub UI)
3. Go to **Settings → Pages → Source: Deploy from branch → Branch: main → Folder: / (root)**
4. Click **Save**
5. Your site is live at `https://yourusername.github.io/globalschool`

GitHub Pages is free for public repositories. Deployment takes ~60 seconds after the first push.

---

### Option 2 — Netlify (free, instant)

1. Go to [netlify.com](https://netlify.com) and sign in (or create a free account)
2. From the dashboard, click **Add new site → Deploy manually**
3. Drag and drop the entire folder onto the Netlify drop zone
4. Your site is live immediately at a `.netlify.app` URL
5. Optionally: connect a custom domain in **Site settings → Domain management**

---

### Option 3 — Vercel (free)

```bash
npm install -g vercel
cd /path/to/this/folder
vercel
```

Follow the prompts. Your site is live at a `.vercel.app` URL in under 2 minutes.

---

### Option 4 — Any static host

Upload all 6 files to the root of any static web host:
- Amazon S3 + CloudFront
- Google Cloud Storage
- Cloudflare Pages
- Render
- Surge.sh (`npm install -g surge && surge`)

The only requirement: the server must serve `index.html` as the root document.

---

## Admin access

The account registered with the email `admin@globalschool.course` automatically receives access to the Admin dashboard, which shows all enrolled users, their module progress, and quiz scores.

**To change the admin email:** open `app.js` and edit the `ADMIN_EMAIL` constant at the top of the file.

---

## User accounts & progress

- Each user registers with their own email and password
- Passwords are hashed before storage — never stored in plain text
- Progress (module completions, quiz scores) saves automatically in the browser's `localStorage`
- Progress is **device-specific** by default — see "Cross-device sync" below

---

## Cross-device sync (optional upgrade)

To enable progress to sync across devices, upgrade `db.js` to use Firebase:

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable **Authentication → Email/Password**
3. Enable **Firestore Database**
4. Copy your Firebase config
5. Open `db.js` and follow the commented-out Firebase implementation at the bottom of the file — replace the `DB` object with the Firebase version
6. Nothing else in the codebase needs to change

---

## Course structure

| Phase | Modules | Days | Focus |
|-------|---------|------|-------|
| Phase 1 — Foundations | M01–M07 | 1–49 | Philosophy, history, cognitive science, sociology |
| Phase 2 — Systems in Practice | M08–M13 | 50–87 | High-performing systems, alternatives, global cases |
| Phase 3 — Synthesis | M14–M17 | 88–110 | Inclusion, reform, technology, Indian education |

**17 modules · 110 study days · 123 quiz questions · 82 verified source links**

---

## Assessment model

Every module has a two-tier assessment:

- **Tier A — On-site quiz:** Multiple-choice quiz on the platform. 70% to pass. Auto-marks the module complete and unlocks the next module.
- **Tier B — Local assignment:** A written task (essay, policy memo, artifact audit, or roleplay case) displayed in full on the module page. Students write on their own device and save locally.

---

## Customising the course

To edit module content, readings, or quiz questions, edit `course-data.js`. Each module follows this schema:

```javascript
{
  "id": "m1",
  "n": 1,
  "phase": 1,
  "days": "1–10",
  "title": "...",
  "sub": "One-line subtitle",
  "bigIdea": "Central framing paragraph shown at top of module",
  "hook": null,  // or { title, source, url, duration, purpose } — M01 only
  "thinkers": [{ "name", "era", "claim" }],
  "week": [{ "day", "type", "main", "sub", "url?" }],
  "readings": [{ "type", "title", "note", "url?" }],
  "videos": [{ "title", "source", "duration", "url" }],
  "assessment": { "tier", "format", "title", "prompt" },
  "optional": [{ "title", "author", "year", "note" }],
  "quiz": [{ "q", "opts": [], "ans": 0, "ex": "explanation" }]
}
```

---

## License

MIT — use freely, modify, and share.
