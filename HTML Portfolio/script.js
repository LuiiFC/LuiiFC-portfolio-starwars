// script.js
fetch('/api/projects')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('projects-container');
    projects.forEach(p => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p><strong>Tecnologias:</strong> ${p.technologies}</p>
        <a href="${p.link}" target="_blank">Ver Projeto →</a>
      `;
      container.appendChild(card);
    });
  });