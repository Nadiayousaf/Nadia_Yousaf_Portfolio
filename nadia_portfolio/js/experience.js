/* ========================================
   experience.js — Experience Section Data & Render
   ======================================== */

const experienceData = [
  {
    icon: '💻',
    period: '2025 – Present',
    role: 'Full Stack Python Developer',
    items: [
      'Python-based applications and full-stack solutions',
      'Modular architecture and clean code practices',
      'Responsive web interfaces with HTML, CSS, JS',
      'Debugging, testing, and performance improvements'
    ]
  },
  {
    icon: '🔷',
    period: '2024 – 2025',
    role: 'Python & OOP Specialization',
    items: [
      'Deep focus on core OOP principles and patterns',
      'Built structured Python apps with class hierarchies',
      'Applied debugging techniques and maintainable code',
      'Practiced data structures and algorithm design'
    ]
  },
  {
    icon: '🖥️',
    period: '2023 – Present',
    role: 'Computer Skills Foundation',
    items: [
      'Developed foundational programming knowledge',
      'Practiced problem-solving and logical thinking',
      'Built early programming projects',
      'Established technical and analytical understanding'
    ]
  }
];

function renderExperience() {
  const timeline = document.getElementById('timeline');

  experienceData.forEach((exp, i) => {
    const item = document.createElement('div');
    item.className = 'exp-item reveal';
    item.style.transitionDelay = `${i * 0.12}s`;

    item.innerHTML = `
      <div class="exp-dot">${exp.icon}</div>
      <div class="exp-card">
        <div class="exp-period">${exp.period}</div>
        <div class="exp-role">${exp.role}</div>
        <ul>
          ${exp.items.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `;

    timeline.appendChild(item);
  });
}

renderExperience();
