/* ========================================
   main.js — Theme Toggle, Scroll Reveal & Modal
   ======================================== */

/* ── THEME TOGGLE ── */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.querySelector('.theme-btn').textContent = isDark ? '🌙 Dark' : '☀ Light';
}

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate progress bars inside revealed elements
      entry.target.querySelectorAll('.prog-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.12 });

// Observe all elements with class .reveal
// Use MutationObserver to catch dynamically added elements too
function observeRevealElements() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Initial observe + re-observe after DOM settles
observeRevealElements();
setTimeout(observeRevealElements, 300);

/* ── MODAL ── */
function openModal(proj) {
  document.getElementById('modalContent').innerHTML = `
    <div style="font-size: 2.5rem; margin-bottom: 12px">${proj.icon}</div>
    <h3>${proj.title}</h3>
    <div class="modal-stack">
      ${proj.stack.map(t => `<span class="stack-tag">${t}</span>`).join('')}
    </div>
    <p class="modal-desc">${proj.desc}</p>
    <ul class="modal-features">
      ${proj.features.map(f => `<li>${f}</li>`).join('')}
    </ul>
  `;
  document.getElementById('modal').classList.add('open');
}

function closeModal(e) {
  const modal = document.getElementById('modal');
  if (!e || e.target === modal || e.currentTarget.classList.contains('modal-close')) {
    modal.classList.remove('open');
  }
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
