// ─────────────────────────────────────────────────────────────────────────────
// app.js  —  Application logic
// Handles: auth, routing, rendering, quiz engine, progress tracking
// ─────────────────────────────────────────────────────────────────────────────

const ADMIN_EMAIL = 'admin@globalschool.course'; // Change this to your email

const PHASE_LABELS = {
  1: 'Phase 1 · Foundations',
  2: 'Phase 2 · Systems in practice',
  3: 'Phase 3 · Synthesis',
};

const TYPE_ICONS = {
  read:    '📖',
  watch:   '▶',
  reflect: '✍',
  quiz:    '✦',
  case:    '🔎',
  debate:  '⚖',
};

// ── App state ─────────────────────────────────────────────────────────────────
let currentUser = null;      // { email, name }
let userProgress = {};       // { [moduleId]: 'complete', ['quiz_'+id]: score }
let currentModuleId = null;
let quizState = {};

// ── Init ──────────────────────────────────────────────────────────────────────
async function init() {
  // Restore session if exists
  const savedEmail = DB.getSession();
  if (savedEmail) {
    const user = await DB.getUser(savedEmail);
    if (user) {
      currentUser = { email: savedEmail, name: user.name };
      userProgress = await DB.getProgress(savedEmail);
      enterApp();
      return;
    }
  }
  // No session — show auth
  hide('loading');
  show('auth-screen');
  setupAuthKeys();
}

// ── Auth ──────────────────────────────────────────────────────────────────────
function setupAuthKeys() {
  const fields = [
    ['login-email', 'login-pw', null],
    ['login-pw', null, doLogin],
    ['signup-name', 'signup-email', null],
    ['signup-email', 'signup-pw', null],
    ['signup-pw', null, doSignup],
  ];
  fields.forEach(([id, nextId, fn]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        if (nextId) document.getElementById(nextId).focus();
        else if (fn) fn();
      }
    });
  });
}

function showForm(name) {
  hide('form-login'); hide('form-signup');
  show('form-' + name);
  clearError();
  document.getElementById(name === 'login' ? 'login-email' : 'signup-name').focus();
}

function showError(msg) {
  const el = document.getElementById('auth-error');
  el.textContent = msg;
  el.style.display = 'block';
}
function clearError() {
  document.getElementById('auth-error').style.display = 'none';
}

async function doLogin() {
  clearError();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pw    = document.getElementById('login-pw').value;
  if (!email || !pw) return showError('Please fill in all fields.');

  const user = await DB.getUser(email);
  if (!user) return showError('No account found with that email address.');

  const hash = await DB.hashPassword(pw);
  if (user.passwordHash !== hash) return showError('Incorrect password.');

  currentUser = { email, name: user.name };
  userProgress = await DB.getProgress(email);
  DB.setSession(email);
  enterApp();
}

async function doSignup() {
  clearError();
  const name  = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const pw    = document.getElementById('signup-pw').value;

  if (!name || !email || !pw) return showError('Please fill in all fields.');
  if (pw.length < 6) return showError('Password must be at least 6 characters.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('Please enter a valid email address.');

  try {
    const hash = await DB.hashPassword(pw);
    await DB.createUser(email, {
      name,
      passwordHash: hash,
      joinedAt: new Date().toISOString(),
    });
  } catch (err) {
    return showError(err.message || 'Could not create account.');
  }

  currentUser = { email, name };
  userProgress = {};
  DB.setSession(email);
  enterApp();
}

function doLogout() {
  currentUser = null;
  userProgress = {};
  currentModuleId = null;
  DB.clearSession();
  hide('app-screen');
  show('auth-screen');
  showForm('login');
  document.getElementById('login-email').value = '';
  document.getElementById('login-pw').value = '';
}

// ── App entry ─────────────────────────────────────────────────────────────────
function enterApp() {
  hide('loading');
  hide('auth-screen');
  show('app-screen');

  if (currentUser.email === ADMIN_EMAIL) {
    show('admin-btn');
  }

  updateSidebar();
  renderDashboard();
  showView('dashboard');
}

// ── Views ─────────────────────────────────────────────────────────────────────
function showView(name) {
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
    v.classList.add('hidden');
  });
  const el = document.getElementById('view-' + name);
  el.classList.remove('hidden');
  el.classList.add('active');
  window.scrollTo(0, 0);

  if (name === 'dashboard') {
    currentModuleId = null;
    renderDashboard();
    updateSidebar();
  }
  if (name === 'admin') renderAdmin();
}

// ── Progress helpers ──────────────────────────────────────────────────────────
function isComplete(mid)  { return userProgress[mid] === 'complete'; }
function isUnlocked(mid)  {
  const idx = MODULES.findIndex(m => m.id === mid);
  if (idx === 0) return true;
  return isComplete(MODULES[idx - 1].id);
}
function completedCount() { return MODULES.filter(m => isComplete(m.id)).length; }
function quizPassedCount(){ return MODULES.filter(m => (userProgress['quiz_' + m.id] || 0) >= 70).length; }

async function persistProgress() {
  await DB.saveProgress(currentUser.email, userProgress);
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function updateSidebar() {
  const done  = completedCount();
  const total = MODULES.length;
  const pct   = Math.round((done / total) * 100);

  document.getElementById('sb-prog-fill').style.width = pct + '%';
  document.getElementById('sb-prog-text').textContent  = done + ' of ' + total + ' modules complete';
  document.getElementById('sb-avatar').textContent     = (currentUser.name[0] || '?').toUpperCase();
  document.getElementById('sb-username').textContent   = currentUser.name;

  let html = '';
  let lastPhase = 0;

  MODULES.forEach(m => {
    if (m.phase !== lastPhase) {
      html += `<div class="sb-phase-label">${PHASE_LABELS[m.phase] || 'Phase ' + m.phase}</div>`;
      lastPhase = m.phase;
    }
    const unlocked = isUnlocked(m.id);
    const done     = isComplete(m.id);
    const active   = currentModuleId === m.id ? 'active' : '';
    const locked   = !unlocked ? 'locked' : '';
    const icon     = done ? '✓' : !unlocked ? '🔒' : '';

    html += `<button class="sb-mod-btn ${active} ${locked}" role="listitem"
      ${unlocked ? `onclick="showModule('${m.id}')"` : 'disabled aria-disabled="true"'}
      aria-label="Module ${m.n}: ${m.title}${done ? ' (complete)' : !unlocked ? ' (locked)' : ''}">
      <span class="sb-mod-num">${m.n < 10 ? '0' + m.n : m.n}</span>
      <span class="sb-mod-label">${m.title}</span>
      <span class="sb-mod-icon" aria-hidden="true">${icon}</span>
    </button>`;
  });

  document.getElementById('sb-nav').innerHTML = html;
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function renderDashboard() {
  const done  = completedCount();
  const days  = Math.round((done / MODULES.length) * 110);

  document.getElementById('dash-greeting').textContent  = 'Welcome back, ' + currentUser.name.split(' ')[0] + '.';
  document.getElementById('stat-done').textContent      = done;
  document.getElementById('stat-days').textContent      = days;
  document.getElementById('stat-quizzes').textContent   = quizPassedCount();

  let html = '';
  let lastPhase = 0;

  MODULES.forEach(m => {
    if (m.phase !== lastPhase) {
      if (lastPhase > 0) html += '</div>';
      html += `<div class="phase-header-row">${PHASE_LABELS[m.phase] || 'Phase ' + m.phase}</div><div>`;
      lastPhase = m.phase;
    }

    const unlocked     = isUnlocked(m.id);
    const done         = isComplete(m.id);
    const statusLabel  = done ? 'Complete' : unlocked ? 'Ready' : 'Locked';
    const statusCls    = done ? 'badge-complete' : unlocked ? 'badge-ready' : 'badge-locked';
    const rowCls       = ['mod-row', !unlocked ? 'locked' : ''].filter(Boolean).join(' ');

    html += `<div class="${rowCls}"
      ${unlocked ? `onclick="showModule('${m.id}')" role="button" tabindex="0"` : 'aria-disabled="true"'}
      aria-label="Module ${m.n}: ${m.title}">
      <div class="mod-row-num">${m.n < 10 ? '0' + m.n : m.n}</div>
      <div class="mod-row-body">
        <div class="mod-row-title">${m.title}</div>
        <div class="mod-row-sub">${m.sub}</div>
      </div>
      <div class="mod-row-right">
        <div class="mod-row-days">Days ${m.days}</div>
        <div class="badge ${statusCls}">${statusLabel}</div>
      </div>
    </div>`;
  });

  if (lastPhase > 0) html += '</div>';
  document.getElementById('dash-mod-list').innerHTML = html;

  // Keyboard support for module rows
  document.querySelectorAll('.mod-row[role="button"]').forEach(row => {
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); row.click(); }
    });
  });
}

// ── Module view ───────────────────────────────────────────────────────────────
function showModule(mid) {
  if (!isUnlocked(mid)) return;
  currentModuleId = mid;
  updateSidebar();

  const m    = MODULES.find(x => x.id === mid);
  const done = isComplete(mid);
  const quizScore = userProgress['quiz_' + mid] || 0;
  const quizPassed = quizScore >= 70;

  let html = `
    <div class="mod-header">
      <div class="mod-eyebrow">${PHASE_LABELS[m.phase] || 'Phase ' + m.phase} · Module ${m.n} · Days ${m.days}</div>
      <h1 class="mod-title">${m.title}</h1>
      <div class="mod-subtitle">${m.sub}</div>
    </div>`;

  if (m.bigIdea) {
    html += `<div class="big-idea">${m.bigIdea}</div>`;
  }

  // Thinkers
  if (m.thinkers && m.thinkers.length > 0 && m.thinkers[0].era !== 'Plato to Chetty') {
    html += `<h2 class="section-h">Key thinkers</h2><div class="thinkers-grid">`;
    m.thinkers.forEach(t => {
      html += `<div class="thinker-card">
        <div class="tk-era">${t.era}</div>
        <div class="tk-name">${t.name}</div>
        <div class="tk-claim">${t.claim}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // Week schedule
  if (m.week && m.week.length > 0) {
    html += `<h2 class="section-h">Week schedule</h2><div class="day-list">`;
    m.week.forEach(d => {
      const icon    = TYPE_ICONS[d.type] || '·';
      const mainHtml = d.url
        ? `<a href="${d.url}" target="_blank" rel="noopener noreferrer">${d.main} ↗</a>`
        : d.main;
      html += `<div class="day-row">
        <div class="day-num">Day ${d.day}</div>
        <div class="day-icon" aria-hidden="true">${icon}</div>
        <div class="day-body">
          <div class="day-main">${mainHtml}</div>
          <div class="day-sub">${d.sub}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  // Readings
  if (m.readings && m.readings.length > 0) {
    html += `<h2 class="section-h">Readings &amp; resources</h2><div class="readings-list">`;
    m.readings.forEach(r => {
      const cls     = r.type === 'primary' ? 'ri-primary' : 'ri-secondary';
      const label   = r.type === 'primary' ? 'Primary' : 'Secondary';
      const titleHtml = r.url
        ? `<a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.title} ↗</a>`
        : r.title;
      html += `<div class="reading-row">
        <span class="ri-badge ${cls}">${label}</span>
        <div>
          <div class="ri-title">${titleHtml}</div>
          <div class="ri-note">${r.note}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  // Videos
  if (m.videos && m.videos.length > 0) {
    html += `<h2 class="section-h">Videos</h2><div class="videos-list">`;
    m.videos.forEach(v => {
      const titleHtml = v.url
        ? `<a href="${v.url}" target="_blank" rel="noopener noreferrer">${v.title} ↗</a>`
        : v.title;
      html += `<div class="video-row">
        <div class="vi-icon" aria-hidden="true">▶</div>
        <div class="vi-body">
          <div class="vi-title">${titleHtml}</div>
          <div class="vi-source">${v.source}</div>
        </div>
        <div class="vi-dur">${v.duration}</div>
      </div>`;
    });
    html += `</div>`;
  }


  // ── Hook (opening video — M01 only)
  if (m.hook) {
    html += `<div style="background:#fff8ed;border:1px solid rgba(184,134,11,.22);border-radius:12px;padding:14px 18px;margin-bottom:1.5rem">
      <div style="font-size:9px;letter-spacing:.12em;color:#b8860b;text-transform:uppercase;font-weight:600;margin-bottom:4px">⚡ Opening Hook</div>
      <div style="font-size:13px;font-weight:500;color:#1a1814;margin-bottom:2px">${m.hook.title}</div>
      <div style="font-size:11px;color:#8a8780;margin-bottom:6px">${m.hook.source} · ${m.hook.duration}</div>
      ${m.hook.purpose ? `<div style="font-size:12px;color:#4a4740;font-style:italic;margin-bottom:9px;line-height:1.55">${m.hook.purpose}</div>` : ''}
      <a href="${m.hook.url}" target="_blank" rel="noopener"
        style="display:inline-flex;align-items:center;gap:5px;font-size:12.5px;font-weight:500;color:#cc0000;padding:6px 12px;border:1px solid rgba(204,0,0,.25);border-radius:6px;text-decoration:none">
        ▶ Watch on YouTube ↗
      </a>
    </div>`;
  }

  // ── Tier B Assessment
  if (m.assessment) {
    const fmtLabels = {essay:'Essay',memo:'Policy Memo',audit:'Artifact Audit',roleplay:'Roleplay Case'};
    const fmtLabel  = fmtLabels[m.assessment.format] || m.assessment.format;
    const safePrompt = m.assessment.prompt
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    html += `<h2 class="section-h">Assessment</h2>
      <div style="background:#e8eef5;border-left:3px solid #2d5fa0;border-radius:0 8px 8px 0;padding:12px 16px;margin-bottom:10px">
        <div style="font-size:8.5px;letter-spacing:.12em;color:#2d5fa0;text-transform:uppercase;font-weight:600;margin-bottom:4px">Tier A — On-Site Quiz</div>
        <div style="font-size:13px;color:#1a1814">Module knowledge check · 70% to pass · auto-marks complete</div>
      </div>
      <div style="background:#fdf8ec;border-left:3px solid #b8860b;border-radius:0 8px 8px 0;padding:14px 18px;margin-bottom:1rem">
        <div style="font-size:8.5px;letter-spacing:.12em;color:#b8860b;text-transform:uppercase;font-weight:600;margin-bottom:4px">${m.assessment.tier}</div>
        <div style="display:inline-block;font-size:8.5px;padding:2px 8px;border-radius:8px;font-weight:600;text-transform:uppercase;background:#e8eef5;color:#2d5fa0;margin-bottom:8px">${fmtLabel}</div>
        <div style="font-size:13px;font-weight:500;color:#1a1814;margin-bottom:7px">${m.assessment.title}</div>
        <div style="font-size:12px;color:#4a4740;line-height:1.7;white-space:pre-line">${safePrompt}</div>
        <div style="margin-top:10px;font-size:11px;color:#8a8780">💾 Write and save locally on your own device — Notion, Word, Obsidian, or any text editor.</div>
      </div>`;
  }

  // ── Optional
  if (m.optional && m.optional.length > 0) {
    html += `<div style="margin-top:1.25rem;border-top:1px dashed rgba(26,24,20,.1);padding-top:.875rem">
      <div style="font-size:8.5px;letter-spacing:.12em;color:#8a8780;text-transform:uppercase;font-weight:500;margin-bottom:10px">
        You may find interesting the following
        <span style="background:#eeebe3;color:#8a8780;font-size:8.5px;padding:2px 7px;border-radius:8px;margin-left:6px;font-weight:400;letter-spacing:0">Optional</span>
      </div>`;
    m.optional.forEach(o => {
      html += `<div style="margin-bottom:10px">
        <div style="font-size:12.5px;font-weight:500;color:#1a1814;margin-bottom:1px">${o.title}</div>
        <div style="font-size:11px;color:#8a8780;margin-bottom:3px">${o.author} · ${o.year}</div>
        <div style="font-size:12px;color:#4a4740;line-height:1.5;font-style:italic">${o.note}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // Actions
  html += `<div class="mod-actions">`;
  if (m.quiz && m.quiz.length > 0) {
    html += `<button class="btn-quiz" onclick="startQuiz('${mid}')">
      ${quizPassed ? '↺ Retake quiz' : '▶ Take quiz'}
      ${quizPassed ? ' <small style="opacity:.7;font-size:11px">(' + quizScore + '%)</small>' : ''}
    </button>`;
  }
  if (!done) {
    html += `<button class="btn-complete" onclick="markComplete('${mid}')">Mark as complete</button>`;
  }
  html += `</div>`;

  if (done) {
    html += `<div class="complete-banner" role="status">
      ✓ Module complete${quizPassed ? ' · Quiz passed (' + quizScore + '%)' : ''}
    </div>`;
  }

  document.getElementById('module-content').innerHTML = html;
  showView('module');
}

async function markComplete(mid) {
  userProgress[mid] = 'complete';
  await persistProgress();
  updateSidebar();
  showModule(mid);
  showToast('Module marked complete!');
}

// ── Quiz engine ───────────────────────────────────────────────────────────────
function startQuiz(mid) {
  const m = MODULES.find(x => x.id === mid);
  if (!m || !m.quiz || m.quiz.length === 0) return;

  quizState = {
    mid,
    questions: [...m.quiz],
    current:   0,
    score:     0,
    answered:  false,
  };

  document.getElementById('quiz-back-btn').onclick = () => showModule(mid);
  renderQuizQuestion();
  showView('quiz');
}

function renderQuizQuestion() {
  const { questions, current, score } = quizState;

  if (current >= questions.length) {
    renderQuizScore();
    return;
  }

  const q   = questions[current];
  const pct = Math.round((current / questions.length) * 100);

  let html = `
    <div class="quiz-prog-track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
      <div class="quiz-prog-fill" style="width:${pct}%"></div>
    </div>
    <div class="q-num">Question ${current + 1} of ${questions.length}</div>
    <div class="q-text">${q.q}</div>
    <div class="opts" role="group" aria-label="Answer options">
      ${q.opts.map((opt, i) =>
        `<button class="opt-btn" onclick="answerQuestion(${i})">${opt}</button>`
      ).join('')}
    </div>
    <div class="quiz-feedback" id="quiz-feedback" aria-live="polite">${q.ex}</div>
    <div class="quiz-nav">
      <span class="quiz-score-note">Score so far: ${score}/${current}</span>
      <button class="quiz-next-btn hidden" id="quiz-next" onclick="nextQuestion()">
        ${current + 1 < questions.length ? 'Next →' : 'See results'}
      </button>
    </div>`;

  document.getElementById('quiz-content').innerHTML = html;
}

function answerQuestion(i) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q    = quizState.questions[quizState.current];
  const opts = document.querySelectorAll('.opt-btn');

  opts[q.ans].classList.add('correct');
  if (i !== q.ans) {
    opts[i].classList.add('wrong');
  } else {
    quizState.score++;
  }

  opts.forEach(btn => { btn.disabled = true; });
  document.getElementById('quiz-feedback').style.display = 'block';
  document.getElementById('quiz-next').classList.remove('hidden');
}

function nextQuestion() {
  quizState.current++;
  quizState.answered = false;
  renderQuizQuestion();
}

async function renderQuizScore() {
  const { score, questions, mid } = quizState;
  const pct    = Math.round((score / questions.length) * 100);
  const passed = pct >= 70;

  // Save best score
  const previous = userProgress['quiz_' + mid] || 0;
  if (pct > previous) {
    userProgress['quiz_' + mid] = pct;
  }
  // Auto-complete module if quiz passed
  if (passed && !isComplete(mid)) {
    userProgress[mid] = 'complete';
  }
  await persistProgress();
  updateSidebar();

  const nextMod = getNextModule(mid);

  document.getElementById('quiz-content').innerHTML = `
    <div class="score-card">
      <div class="score-icon" aria-hidden="true">${passed ? '🎉' : '📚'}</div>
      <div class="score-headline">${passed ? 'Quiz passed!' : 'Keep studying'}</div>
      <div class="score-num" aria-label="${pct}% score">${score}/${questions.length}</div>
      <div class="score-label">${pct}%</div>
      <div class="${passed ? 'score-pass-msg' : 'score-fail-msg'}">
        ${passed
          ? '✓ 70% or above — module marked complete'
          : 'Score below 70% — review the module and try again'}
      </div>
      <div class="score-btns">
        <button class="score-btn" onclick="startQuiz('${mid}')">Retake quiz</button>
        <button class="score-btn" onclick="showModule('${mid}')">Back to module</button>
        ${passed && nextMod
          ? `<button class="score-btn primary" onclick="showModule('${nextMod.id}')">
               Next: Module ${nextMod.n} →
             </button>`
          : passed
          ? `<button class="score-btn primary" onclick="showView('dashboard')">Dashboard</button>`
          : ''
        }
      </div>
    </div>`;
}

function getNextModule(mid) {
  const idx = MODULES.findIndex(m => m.id === mid);
  if (idx >= 0 && idx < MODULES.length - 1) return MODULES[idx + 1];
  return null;
}

// ── Admin ─────────────────────────────────────────────────────────────────────
async function renderAdmin() {
  const users = await DB.getUsers();
  const emails = Object.keys(users);

  if (emails.length === 0) {
    document.getElementById('admin-table-content').innerHTML =
      '<div class="empty-state">No users enrolled yet.</div>';
    return;
  }

  // Load all progress in parallel
  const progressAll = await Promise.all(emails.map(e => DB.getProgress(e)));

  let rows = '';
  emails.forEach((email, i) => {
    const user  = users[email];
    const prog  = progressAll[i];
    const done  = MODULES.filter(m => prog[m.id] === 'complete').length;
    const qPass = MODULES.filter(m => (prog['quiz_' + m.id] || 0) >= 70).length;
    const pct   = Math.round((done / MODULES.length) * 100);
    const joined = user.joinedAt ? new Date(user.joinedAt).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'}) : '—';

    rows += `<tr>
      <td><strong>${escHtml(user.name)}</strong></td>
      <td style="color:#8a8780">${escHtml(email)}</td>
      <td>${done} / ${MODULES.length}</td>
      <td>${qPass} / ${MODULES.length}</td>
      <td>
        <div class="prog-mini">
          <div class="prog-mini-fill" style="width:${pct}%"></div>
        </div>
        <span style="font-size:12px;color:#8a8780;margin-left:6px">${pct}%</span>
      </td>
      <td style="color:#8a8780">${joined}</td>
    </tr>`;
  });

  document.getElementById('admin-table-content').innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Name</th><th>Email</th>
          <th>Modules done</th><th>Quizzes passed</th>
          <th>Progress</th><th>Joined</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

// ── Toast ─────────────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

// ── Utilities ─────────────────────────────────────────────────────────────────
function show(id) { document.getElementById(id).classList.remove('hidden'); }
function hide(id) { document.getElementById(id).classList.add('hidden'); }
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

// ── Start ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);