/* ========================================
   skills.js — Skills Section Data & Render
   ======================================== */

const skillsData = [
  {
    icon: '🐍',
    name: 'Python',
    cat: 'Programming Language',
    pct: 92,
    level: 'Expert',
    grad: 'linear-gradient(135deg, #6A0DAD, #E75480)'
  },
  {
    icon: '#️⃣',
    name: 'C#',
    cat: 'Programming Language',
    pct: 72,
    level: 'Intermediate',
    grad: 'linear-gradient(135deg, #1565C0, #29B6F6)'
  },
  {
    icon: '☕',
    name: 'Java',
    cat: 'Programming Language',
    pct: 68,
    level: 'Intermediate',
    grad: 'linear-gradient(135deg, #E65100, #FFCA28)'
  },
  {
    icon: '🌐',
    name: 'HTML',
    cat: 'Markup Language',
    pct: 90,
    level: 'Expert',
    grad: 'linear-gradient(135deg, #E44D26, #F16529)'
  },
  {
    icon: '🎨',
    name: 'CSS',
    cat: 'Stylesheet Language',
    pct: 85,
    level: 'Advanced',
    grad: 'linear-gradient(135deg, #264DE4, #2965F1)'
  },
  {
    icon: '⚡',
    name: 'JavaScript',
    cat: 'Programming Language',
    pct: 78,
    level: 'Advanced',
    grad: 'linear-gradient(135deg, #F7DF1E, #F0A500)'
  },
  {
    icon: '🔷',
    name: 'OOP',
    cat: 'Design Paradigm',
    pct: 93,
    level: 'Expert',
    grad: 'linear-gradient(135deg, #FFC300, #FF5733)'
  },
  {
    icon: '🗂️',
    name: 'Data Structures',
    cat: 'Computer Science',
    pct: 85,
    level: 'Advanced',
    grad: 'linear-gradient(135deg, #6A0DAD, #9B59B6)'
  }
];

function renderSkills() {
  const grid = document.getElementById('skillsGrid');

  skillsData.forEach((skill, i) => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal';
    card.style.transitionDelay = `${i * 0.07}s`;
    card.style.setProperty('--grad', skill.grad);

    card.innerHTML = `
      <div class="skill-icon">${skill.icon}</div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-cat">${skill.cat}</div>
      <div class="skill-level-label">
        <span>Proficiency</span>
        <span>${skill.pct}%</span>
      </div>
      <div class="prog-bar">
        <div class="prog-fill" data-pct="${skill.pct}" style="background: ${skill.grad}"></div>
      </div>
      <span class="skill-badge">${skill.level}</span>
    `;

    grid.appendChild(card);
  });
}

renderSkills();
