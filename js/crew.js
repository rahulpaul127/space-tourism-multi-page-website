const main = document.getElementById('main-content');
const response = await fetch('./data.json');
const { crew } = await response.json();

function renderCrew(index) {
  const member = crew[index];

  main.innerHTML = `
    <div class="grid-container grid-container--crew flow">
      <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

      <div class="dot-indicators flex" role="tablist" aria-label="crew member list">
        ${crew.map((c, i) => `
          <button aria-selected="${i === index ? 'true' : 'false'}" role="tab" data-index="${i}"><span class="sr-only">The ${c.role}</span></button>
        `).join('')}
      </div>

      <article class="crew-details flow">
        <header class="flow flow--space-small">
          <h2 class="fs-600 ff-serif uppercase">${member.role}</h2>
          <p class="fs-700 uppercase ff-serif">${member.name}</p>
        </header>
        <p>${member.bio}</p>
      </article>

      <picture>
        <source srcset="${member.images.webp}" type="image/webp">
        <img src="${member.images.png}" alt="${member.name}">
      </picture>
    </div>
  `;

  main.querySelectorAll('.dot-indicators button').forEach((btn) => {
    btn.addEventListener('click', () => {
      renderCrew(parseInt(btn.getAttribute('data-index'), 10));
    });
  });
}

renderCrew(0);
