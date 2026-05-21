# The Global School — Education Studies Course Platform

A multi-user web application for a 110-day, 17-module self-directed course on global school education. Built to be hosted on GitHub Pages, Netlify, Vercel, or any static web host.

## What this is

A complete course platform with:
- User registration and login (email + password)
- Individual progress tracking per user
- Module unlock system (complete each module to advance)
- Quizzes with 70% pass threshold
- Admin dashboard to see all enrolled users

## Tech stack

Pure HTML, CSS, and vanilla JavaScript. No build step, no npm, no dependencies. Works in any modern browser.

**User data is stored in the browser's localStorage.** This means:
- Each user's progress is saved on the device they use
- If they clear their browser data, progress is lost
- If they switch devices, progress does not carry over
- This is fine for personal/small group use

## To host on GitHub Pages

1. Create a new GitHub repository (e.g. `global-school-course`)
2. Upload all files in this folder to the repository root
3. Go to Settings → Pages → Source: Deploy from branch → main / root
4. Your site will be live at `https://yourusername.github.io/global-school-course`

## To host on Netlify (recommended — easier)

1. Go to netlify.com and create a free account
2. Drag and drop this entire folder onto the Netlify dashboard
3. Your site is live instantly with a URL like `yoursite.netlify.app`
4. You can add a custom domain in Netlify settings

## To host on Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` inside this folder
3. Follow the prompts

## Admin access

The first account registered with the email `admin@globalschool.course` gets admin access and can see all enrolled users and their progress on the Admin dashboard.

You can change this email in `app.js` — look for `ADMIN_EMAIL` near the top of the file.

## Upgrading to a real database (for cross-device sync)

The current setup uses localStorage which is per-device. If you want users to log in from multiple devices, you need a backend. Options:

**Option A — Firebase (free tier is generous)**
1. Create a Firebase project at console.firebase.google.com
2. Enable Authentication (Email/Password) and Firestore
3. Replace the `DB` object in `db.js` with the Firebase implementation (commented out in that file)

**Option B — Supabase (open source Firebase alternative)**
Similar process — supabase.com has a free tier.

**Option C — Pocketbase**
Self-hostable, single binary. Good if you want full control.

## File structure

```
├── index.html       Main HTML shell — layout, auth screen, app screen
├── style.css        All styles
├── course-data.js   All 17 modules: titles, thinkers, week schedules, readings, videos, quizzes
├── db.js            Database abstraction (localStorage now, Firebase-ready)
├── app.js           All application logic: auth, routing, rendering, quiz engine
└── README.md        This file
```

## Customising the course

To add or edit modules, edit `course-data.js`. Each module follows this structure:

```javascript
{
  id: 'm1',
  n: 1,                    // module number
  title: 'The purpose of schooling',
  sub: 'Short subtitle...',
  days: '1–8',
  phase: 1,                // 1, 2, or 3
  bigIdea: 'The framing idea shown at top of module.',
  thinkers: [...],         // { name, era, claim }
  week: [...],             // { day, type, main, sub, url? }
  readings: [...],         // { type:'primary'|'secondary', title, note, url? }
  videos: [...],           // { title, source, duration, url }
  quiz: [...]              // { q, opts:[], ans:0, ex:'explanation' }
}
```

## License

MIT — use freely, modify, share.
