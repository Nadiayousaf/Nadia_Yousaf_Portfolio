/* ========================================
   projects.js — Projects Section Data & Render
   ======================================== */

const projectsData = [
  {
    icon: '📦',
    title: 'SubscriptX',
    featured: true,
    stack: ['Python', 'OOP', 'Testing'],
    short: 'Modular OOP Python project with robust debugging and clean architecture.',
    desc: 'A fully modular Python project built around strong Object-Oriented Programming principles. Every component follows clean architecture, making the codebase highly maintainable and scalable.',
    features: [
      'Modular OOP design with reusable class hierarchy',
      'Comprehensive debugging and testing suite',
      'Clean, maintainable Python code structure',
      'Highlights advanced problem-solving expertise'
    ]
  },
  {
    icon: '🏥',
    title: 'Hospital Management System',
    featured: false,
    stack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    short: 'Full-stack web application for hospital management with responsive UI and CRUD operations.',
    desc: 'A complete full-stack web application built with Python and Flask on the backend. Features a responsive UI with CRUD functionality covering patient records, appointments, and staff management.',
    features: [
      'Full-stack architecture with Flask REST backend',
      'Responsive UI with modern HTML/CSS/JS',
      'Complete CRUD for patients, staff, appointments',
      'Clean database integration and form handling'
    ]
  }
];

function renderProjects() {
  const grid = document.getElementById('projGrid');

  projectsData.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'proj-card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.onclick = () => openModal(proj);

    card.innerHTML = `
      <div class="proj-top">
        ${proj.featured ? '<span class="proj-feat">★ Featured</span>' : ''}
        <div class="proj-icon">${proj.icon}</div>
        <div class="proj-title">${proj.title}</div>
        <div class="proj-stack">
          ${proj.stack.map(t => `<span class="stack-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="proj-body">
        <div class="proj-desc">${proj.short}</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

renderProjects();
