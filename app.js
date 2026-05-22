// ─────────────────────────────────────────────────────────────────────────────
// app.js — The Global School v2
// Auth · routing · module rendering · two-tier assessment · quiz engine · admin
// ─────────────────────────────────────────────────────────────────────────────

const ADMIN_EMAIL = 'admin@globalschool.course'; // Change to your email

const PHASE_LABELS = {
  1: 'Phase 1 · Foundations',
  2: 'Phase 2 · Systems in Practice',
  3: 'Phase 3 · Synthesis',
};

const TYPE_CLASS = {
  read: 'type-read', watch: 'type-watch', reflect: 'type-reflect',
  case: 'type-case', apply: 'type-apply', audit: 'type-audit',
  'quiz+assign': 'type-quiz', 'quiz+capstone': 'type-quiz',
};

const ASSESS_FMT_CLASS = {
  essay: 'fmt-essay', memo: 'fmt-memo', audit: 'fmt-audit', roleplay: 'fmt-roleplay',
};

// ── State ─────────────────────────────────────────────────────────────────────
let currentUser     = null;
let userProgress    = {};
let currentModuleId = null;
let quizState       = {};

// ── Init ──────────────────────────────────────────────────────────────────────
async function init() {
  const saved = DB.getSession();
  if (saved) {
    const user = await DB.getUser(saved);
    if (user) {
      currentUser  = { email: saved, name: user.name };
      userProgress = await DB.getProgress(saved);
      enterApp();
      return;
    }
  }
  hide('loading');
  show('auth-screen');
  setupAuthKeys();
}

// ── Auth ──────────────────────────────────────────────────────────────────────
function setupAuthKeys() {
  [['login-email','login-pw',null],['login-pw',null,doLogin],
   ['signup-name','signup-email',null],['signup-email','signup-pw',null],
   ['signup-pw',null,doSignup]].forEach(([id,next,fn]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      if (next) document.getElementById(next).focus();
      else if (fn) fn();
    });
  });
}

function showForm(name) {
  hide('form-login'); hide('form-signup');
  show('form-' + name);
  clearErr();
  const focus = name === 'login' ? 'login-email' : 'signup-name';
  document.getElementById(focus).focus();
}

function showErr(msg) {
  const el = document.getElementById('auth-error');
  el.textContent = msg; el.style.display = 'block';
}
function clearErr() {
  document.getElementById('auth-error').style.display = 'none';
}

async function doLogin() {
  clearErr();
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pw    = document.getElementById('login-pw').value;
  if (!email || !pw) return showErr('Please fill in all fields.');
  const user = await DB.getUser(email);
  if (!user) return showErr('No account found with that email address.');
  const hash = await DB.hashPassword(pw);
  if (user.passwordHash !== hash) return showErr('Incorrect password.');
  currentUser = { email, name: user.name };
  userProgress = await DB.getProgress(email);
  DB.setSession(email);
  enterApp();
}

async function doSignup() {
  clearErr();
  const name  = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const pw    = document.getElementById('signup-pw').value;
  if (!name || !email || !pw) return showErr('Please fill in all fields.');
  if (pw.length < 6) return showErr('Password must be at least 6 characters.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showErr('Please enter a valid email.');
  try {
    const hash = await DB.hashPassword(pw);
    await DB.createUser(email, { name, passwordHash: hash, joinedAt: new Date().toISOString() });
  } catch (err) { return showErr(err.message || 'Could not create account.'); }
  currentUser = { email, name };
  userProgress = {};
  DB.setSession(email);
  enterApp();
}

function doLogout() {
  currentUser = null; userProgress = {}; currentModuleId = null;
  DB.clearSession();
  hide('app-screen'); show('auth-screen'); showForm('login');
  ['login-email','login-pw'].forEach(id => document.getElementById(id).value = '');
}

// ── App entry ─────────────────────────────────────────────────────────────────
function enterApp() {
  hide('loading'); hide('auth-screen'); show('app-screen');
  if (currentUser.email === ADMIN_EMAIL) show('admin-btn');
  updateSidebar();
  renderDashboard();
  showView('dashboard');
}

// ── Views ─────────────────────────────────────────────────────────────────────
function showView(name) {
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active'); v.classList.add('hidden');
  });
  const el = document.getElementById('view-' + name);
  el.classList.remove('hidden'); el.classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'dashboard') { currentModuleId = null; renderDashboard(); updateSidebar(); }
  if (name === 'admin') renderAdmin();
}

// ── Progress ──────────────────────────────────────────────────────────────────
function isComplete(mid)  { return userProgress[mid] === 'complete'; }
function isUnlocked(mid)  {
  const idx = MODULES.findIndex(m => m.id === mid);
  if (idx === 0) return true;
  return isComplete(MODULES[idx - 1].id);
}
function completedCount() { return MODULES.filter(m => isComplete(m.id)).length; }
function quizPassedCount(){ return MODULES.filter(m => (userProgress['quiz_' + m.id] || 0) >= 70).length; }
async function saveProgress() { await DB.saveProgress(currentUser.email, userProgress); }

// ── Sidebar ───────────────────────────────────────────────────────────────────
function updateSidebar() {
  const done  = completedCount();
  const total = MODULES.length;
  const pct   = Math.round((done / total) * 100);
  document.getElementById('sb-prog-fill').style.width = pct + '%';
  document.getElementById('sb-prog-text').textContent  = done + ' of ' + total + ' modules complete';
  document.getElementById('sb-avatar').textContent     = (currentUser.name[0] || '?').toUpperCase();
  document.getElementById('sb-username').textContent   = currentUser.name;

  let html = ''; let lastPhase = 0;
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
      ${unlocked ? `onclick="showModule('${m.id}')"` : 'disabled'}
      title="Module ${m.n}: ${m.title}${done ? ' (complete)' : !unlocked ? ' (locked)' : ''}">
      <span class="sb-mod-num">${String(m.n).padStart(2,'0')}</span>
      <span class="sb-mod-label">${m.title}</span>
      <span class="sb-mod-icon">${icon}</span>
    </button>`;
  });
  document.getElementById('sb-nav').innerHTML = html;
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function renderDashboard() {
  const done  = completedCount();
  const total = MODULES.length;
  const days  = Math.round((done / total) * 110);
  document.getElementById('dash-greeting').textContent = 'Welcome back, ' + currentUser.name.split(' ')[0] + '.';
  document.getElementById('stat-done').textContent    = done;
  document.getElementById('stat-days').textContent    = days;
  document.getElementById('stat-quizzes').textContent = quizPassedCount();

  let html = ''; let lastPhase = 0;
  MODULES.forEach(m => {
    if (m.phase !== lastPhase) {
      if (lastPhase > 0) html += '</div>';
      html += `<div class="phase-header-row">${PHASE_LABELS[m.phase]}</div><div>`;
      lastPhase = m.phase;
    }
    const unlocked    = isUnlocked(m.id);
    const done        = isComplete(m.id);
    const statusLabel = done ? 'Complete' : unlocked ? 'Ready' : 'Locked';
    const statusCls   = done ? 'badge-complete' : unlocked ? 'badge-ready' : 'badge-locked';
    const rowCls      = 'mod-row' + (!unlocked ? ' locked' : '');
    html += `<div class="${rowCls}"
      ${unlocked ? `onclick="showModule('${m.id}')" role="button" tabindex="0"` : ''}>
      <div class="mod-row-num">${String(m.n).padStart(2,'0')}</div>
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

  const m         = MODULES.find(x => x.id === mid);
  const done      = isComplete(mid);
  const quizScore = userProgress['quiz_' + mid] || 0;
  const passed    = quizScore >= 70;

  let html = `
    <div class="mod-header">
      <div class="mod-eyebrow">${PHASE_LABELS[m.phase]} · Module ${String(m.n).padStart(2,'0')} · Days ${m.days}</div>
      <h1 class="mod-title">${m.title}</h1>
      <div class="mod-subtitle">${m.sub}</div>
    </div>`;

  // Big idea
  if (m.bigIdea) html += `
    <div class="big-idea">
      <div class="big-idea-label">Central Idea</div>
      ${m.bigIdea}
    </div>`;

  // Hook (RSAnimate / opening video — Module 01 only)
  if (m.hook) html += `
    <div class="hook-box">
      <div class="hook-label">⚡ Opening Hook</div>
      <div class="hook-title">${m.hook.title}</div>
      <div class="hook-source">${m.hook.source} · ${m.hook.duration}</div>
      ${m.hook.purpose ? `<div class="hook-note">${m.hook.purpose}</div>` : ''}
      <a class="hook-link" href="${m.hook.url}" target="_blank" rel="noopener">▶ Watch on YouTube ↗</a>
    </div>`;

  // Thinkers
  if (m.thinkers && m.thinkers.length > 0) {
    html += `<div class="sec-h">Key Thinkers</div><div class="thinkers-grid">`;
    m.thinkers.forEach(t => {
      html += `<div class="thinker-card">
        <div class="tk-era">${t.era}</div>
        <div class="tk-name">${t.name}</div>
        <div class="tk-claim">${t.claim}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // Schedule
  if (m.schedule && m.schedule.length > 0) {
    html += `<div class="sec-h">Week Schedule</div><div class="day-list">`;
    m.schedule.forEach(d => {
      const typeKey  = d.type.toLowerCase();
      const typeCls  = TYPE_CLASS[typeKey] || 'type-read';
      const typeLabel = d.type.charAt(0).toUpperCase() + d.type.slice(1);
      const titleHtml = d.url
        ? `<a href="${d.url}" target="_blank" rel="noopener">${d.title} ↗</a>`
        : d.title;
      html += `<div class="day-row">
        <div class="day-num">Day ${d.day}</div>
        <div class="day-type-badge ${typeCls}">${typeLabel}</div>
        <div class="day-body">
          <div class="day-title">${titleHtml}</div>
          ${d.note ? `<div class="day-note">${d.note}</div>` : ''}
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  // Readings
  if (m.readings && m.readings.length > 0) {
    html += `<div class="sec-h">Readings & Resources</div><div class="readings-list">`;
    m.readings.forEach(r => {
      const tagCls   = r.type === 'Primary' ? 'ri-primary' : 'ri-secondary';
      const titleHtml = r.url
        ? `<a href="${r.url}" target="_blank" rel="noopener">${r.title} ↗</a>`
        : r.title;
      html += `<div class="reading-row">
        <span class="ri-tag ${tagCls}">${r.type}</span>
        <div class="ri-body">
          <div class="ri-title">${titleHtml}</div>
          <div class="ri-meta">${r.author}${r.year ? ', ' + r.year : ''} · ${r.note}</div>
          ${r.searchPrompt ? `<div class="ri-search"><strong>Search prompt:</strong> "${r.searchPrompt}"</div>` : ''}
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  // Assessment — two-tier
  if (m.assessment) {
    const [tierLabel, fmt, aTitle, aPrompt] = m.assessment;
    const isA    = tierLabel.toLowerCase().startsWith('tier a');
    const boxCls = isA ? 'assess-tier-a' : 'assess-tier-b';
    const fmtCls = ASSESS_FMT_CLASS[fmt] || 'fmt-essay';
    const fmtLabel = { essay: 'Essay', memo: 'Policy Memo', audit: 'Artifact Audit', roleplay: 'Roleplay Case' }[fmt] || fmt;

    html += `<div class="assess-block">
      <div class="sec-h">Assessment</div>`;

    // Tier A = on-site quiz button always shown
    html += `<div class="assess-tier-a" style="margin-bottom:10px">
      <div class="assess-label">Tier A — On-Site Quiz</div>
      <div class="assess-title">Module knowledge check · 70% to pass · marks module complete</div>
    </div>`;

    // Tier B = local assignment
    html += `<div class="${boxCls}">
      <div class="assess-label">${tierLabel}</div>
      <div class="assess-format-badge ${fmtCls}">${fmtLabel}</div>
      <div class="assess-title">${aTitle}</div>
      <div class="assess-prompt">${escHtml(aPrompt)}</div>
      <div class="assess-device-note">Write and save this assignment locally on your own device (Notion, Word, Obsidian, or any text editor).</div>
    </div>
    </div>`;
  }

  // Optional
  if (m.optional && m.optional.length > 0) {
    html += `<div class="optional-block">
      <div class="optional-header">You may find interesting the following <span>Optional</span></div>`;
    m.optional.forEach(o => {
      html += `<div class="opt-item">
        <div class="opt-title">${o.title}</div>
        <div class="opt-author">${o.author} · ${o.year}</div>
        <div class="opt-note">${o.note}</div>
      </div>`;
    });
    html += `</div>`;
  }

  // Actions
  html += `<div class="mod-actions">`;
  if (m.quiz && m.quiz.length > 0) {
    html += `<button class="btn-quiz" onclick="startQuiz('${mid}')">
      ${passed ? '↺ Retake quiz' : '▶ Take quiz'}
      ${passed ? `<small style="opacity:.65;font-size:11px"> (${quizScore}%)</small>` : ''}
    </button>`;
  }
  if (!done) {
    html += `<button class="btn-complete" onclick="markComplete('${mid}')">Mark as complete</button>`;
  }
  html += `</div>`;
  if (done) {
    html += `<div class="complete-banner">✓ Module complete${passed ? ' · Quiz passed (' + quizScore + '%)' : ''}</div>`;
  }

  document.getElementById('module-content').innerHTML = html;
  showView('module');
}

async function markComplete(mid) {
  userProgress[mid] = 'complete';
  await saveProgress();
  updateSidebar();
  showModule(mid);
  showToast('Module marked complete!');
}

// ── Quiz engine ───────────────────────────────────────────────────────────────
function startQuiz(mid) {
  const m = MODULES.find(x => x.id === mid);
  if (!m || !m.quiz || m.quiz.length === 0) return;
  quizState = { mid, questions: [...m.quiz], current: 0, score: 0, answered: false };
  document.getElementById('quiz-back-btn').onclick = () => showModule(mid);
  renderQuizQuestion();
  showView('quiz');
}

function renderQuizQuestion() {
  const { questions, current, score } = quizState;
  if (current >= questions.length) { renderQuizScore(); return; }
  const q   = questions[current];
  const pct = Math.round((current / questions.length) * 100);
  document.getElementById('quiz-content').innerHTML = `
    <div class="quiz-prog-track">
      <div class="quiz-prog-fill" style="width:${pct}%"></div>
    </div>
    <div class="q-num">Question ${current + 1} of ${questions.length}</div>
    <div class="q-text">${q.q}</div>
    <div class="opts">
      ${q.opts.map((o, i) => `<button class="opt-btn" onclick="answerQ(${i})">${o}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quiz-feedback">${q.ex}</div>
    <div class="quiz-nav">
      <span class="quiz-score-note">Score: ${score}/${current}</span>
      <button class="quiz-next-btn hidden" id="quiz-next" onclick="nextQ()">
        ${current + 1 < questions.length ? 'Next →' : 'See results'}
      </button>
    </div>`;
}

function answerQ(i) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q    = quizState.questions[quizState.current];
  const opts = document.querySelectorAll('.opt-btn');
  opts[q.ans].classList.add('correct');
  if (i !== q.ans) opts[i].classList.add('wrong');
  else quizState.score++;
  opts.forEach(b => b.disabled = true);
  document.getElementById('quiz-feedback').style.display = 'block';
  document.getElementById('quiz-next').classList.remove('hidden');
}

function nextQ() {
  quizState.current++;
  quizState.answered = false;
  renderQuizQuestion();
}

async function renderQuizScore() {
  const { score, questions, mid } = quizState;
  const pct    = Math.round((score / questions.length) * 100);
  const passed = pct >= 70;
  const prev   = userProgress['quiz_' + mid] || 0;
  if (pct > prev) userProgress['quiz_' + mid] = pct;
  if (passed && !isComplete(mid)) userProgress[mid] = 'complete';
  await saveProgress();
  updateSidebar();
  const nextMod = MODULES[MODULES.findIndex(m => m.id === mid) + 1];
  document.getElementById('quiz-content').innerHTML = `
    <div class="score-card">
      <div class="score-icon">${passed ? '🎉' : '📚'}</div>
      <div class="score-headline">${passed ? 'Quiz passed!' : 'Keep studying'}</div>
      <div class="score-num">${score}/${questions.length}</div>
      <div class="score-label">${pct}%</div>
      <div class="${passed ? 'score-pass-msg' : 'score-fail-msg'}">
        ${passed ? '✓ 70% or above — module marked complete' : 'Below 70% — review the module and try again'}
      </div>
      <div class="score-btns">
        <button class="score-btn" onclick="startQuiz('${mid}')">Retake quiz</button>
        <button class="score-btn" onclick="showModule('${mid}')">Back to module</button>
        ${passed && nextMod ? `<button class="score-btn primary" onclick="showModule('${nextMod.id}')">Next: M${nextMod.n} →</button>` : ''}
        ${passed && !nextMod ? `<button class="score-btn primary" onclick="showView('dashboard')">Dashboard</button>` : ''}
      </div>
    </div>`;
}

// ── Admin ─────────────────────────────────────────────────────────────────────
async function renderAdmin() {
  const users  = await DB.getUsers();
  const emails = Object.keys(users);
  if (emails.length === 0) {
    document.getElementById('admin-table-content').innerHTML =
      '<div class="empty-state">No users enrolled yet.</div>';
    return;
  }
  const progressAll = await Promise.all(emails.map(e => DB.getProgress(e)));
  let rows = '';
  emails.forEach((email, i) => {
    const user  = users[email];
    const prog  = progressAll[i];
    const done  = MODULES.filter(m => prog[m.id] === 'complete').length;
    const qPass = MODULES.filter(m => (prog['quiz_' + m.id] || 0) >= 70).length;
    const pct   = Math.round((done / MODULES.length) * 100);
    const joined = user.joinedAt
      ? new Date(user.joinedAt).toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })
      : '—';
    rows += `<tr>
      <td><strong>${escHtml(user.name)}</strong></td>
      <td style="color:var(--ink3)">${escHtml(email)}</td>
      <td>${done} / ${MODULES.length}</td>
      <td>${qPass} / ${MODULES.length}</td>
      <td>
        <div class="prog-mini"><div class="prog-mini-fill" style="width:${pct}%"></div></div>
        <span style="font-size:12px;color:var(--ink3);margin-left:6px">${pct}%</span>
      </td>
      <td style="color:var(--ink3)">${joined}</td>
    </tr>`;
  });
  document.getElementById('admin-table-content').innerHTML = `
    <table class="admin-table">
      <thead><tr>
        <th>Name</th><th>Email</th><th>Modules done</th>
        <th>Quizzes passed</th><th>Progress</th><th>Joined</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

// ── Toast ─────────────────────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
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

document.addEventListener('DOMContentLoaded', init);
