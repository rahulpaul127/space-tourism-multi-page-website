const main = document.getElementById('main-content');
const response = await fetch('./data.json');
const { technology } = await response.json();

function renderTechnology(index) {
  const tech = technology[index];

  main.innerHTML = `
    <div class="grid-container grid-container--technology flow">
      <h1 class="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

      <div class="number-indicators flex" role="tablist" aria-label="technology list">
        ${technology.map((t, i) => `
          <button aria-selected="${i === index ? 'true' : 'false'}" role="tab" data-index="${i}"><span class="number">${i + 1}</span><span class="sr-only">${t.name}</span></button>
        `).join('')}
      </div>

      <article class="technology-details flow">
        <header class="flow flow--space-small">
          <h2 class="uppercase ff-sans-cond letter-spacing-3">The terminology...</h2>
          <p class="fs-700 uppercase ff-serif">${tech.name}</p>
        </header>
        <p>${tech.description}</p>
      </article>

      <picture>
        <source media="(min-width: 45em)" srcset="${tech.images.portrait}">
        <img src="${tech.images.landscape}" alt="${tech.name}">
      </picture>
    </div>
  `;

  main.querySelectorAll('.number-indicators button').forEach((btn) => {
    btn.addEventListener('click', () => {
      renderTechnology(parseInt(btn.getAttribute('data-index'), 10));
    });
  });
}

renderTechnology(0);
