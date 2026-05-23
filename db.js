// ─────────────────────────────────────────────────────────────────────────────
// db.js  —  Database abstraction layer
//
// Currently uses localStorage. To switch to Firebase or Supabase, replace
// the DB object below with the commented-out Firebase implementation.
// The rest of the app only calls DB.* methods, so nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────────

const DB = {

  // ── Users ──────────────────────────────────────────────────────────────────

  async getUsers() {
    try {
      const raw = localStorage.getItem('gsc_users');
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  },

  async saveUsers(users) {
    localStorage.setItem('gsc_users', JSON.stringify(users));
  },

  async getUser(email) {
    const users = await this.getUsers();
    return users[email] || null;
  },

  async createUser(email, userData) {
    const users = await this.getUsers();
    if (users[email]) throw new Error('Email already registered.');
    users[email] = userData;
    await this.saveUsers(users);
  },

  // ── Progress ───────────────────────────────────────────────────────────────
  // Progress is stored per-user. Each user's progress is an object:
  // {
  //   [moduleId]: 'complete',          // module marked complete
  //   ['quiz_' + moduleId]: 85,        // quiz score percentage
  // }

  async getProgress(email) {
    try {
      const raw = localStorage.getItem('gsc_progress_' + email);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  },

  async saveProgress(email, progress) {
    localStorage.setItem('gsc_progress_' + email, JSON.stringify(progress));
  },

  // ── Auth helpers ────────────────────────────────────────────────────────────

  async hashPassword(password) {
    const encoded = new TextEncoder().encode(password + 'gsc_v1_salt');
    const buf = await crypto.subtle.digest('SHA-256', encoded);
    return Array.from(new Uint8Array(buf))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  },

  setSession(email) {
    sessionStorage.setItem('gsc_session', email);
  },

  getSession() {
    return sessionStorage.getItem('gsc_session');
  },

  clearSession() {
    sessionStorage.removeItem('gsc_session');
  },
};


// ─────────────────────────────────────────────────────────────────────────────
// FIREBASE IMPLEMENTATION (uncomment and replace DB above to enable)
//
// 1. Add to index.html <head>:
//    <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js"><\/script>
//    <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js"><\/script>
//    <script src="https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore-compat.js"><\/script>
//
// 2. Replace YOUR_* values with your Firebase project config
//
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
// };
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const firestore = firebase.firestore();
//
// const DB = {
//   async getUsers() { /* not needed with Firebase Auth */ return {}; },
//   async getUser(email) {
//     const doc = await firestore.collection('users').doc(email).get();
//     return doc.exists ? doc.data() : null;
//   },
//   async createUser(email, userData) {
//     await auth.createUserWithEmailAndPassword(email, userData.password);
//     await firestore.collection('users').doc(email).set({ name: userData.name, joinedAt: userData.joinedAt });
//   },
//   async getProgress(email) {
//     const doc = await firestore.collection('progress').doc(email).get();
//     return doc.exists ? doc.data() : {};
//   },
//   async saveProgress(email, progress) {
//     await firestore.collection('progress').doc(email).set(progress);
//   },
//   hashPassword: async (pw) => pw,  // Firebase handles this
//   setSession: (email) => sessionStorage.setItem('gsc_session', email),
//   getSession: () => sessionStorage.getItem('gsc_session'),
//   clearSession: () => sessionStorage.removeItem('gsc_session'),
// };
// ─────────────────────────────────────────────────────────────────────────────