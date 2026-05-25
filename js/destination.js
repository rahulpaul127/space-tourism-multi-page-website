const main = document.getElementById('main-content');
const response = await fetch('./data.json');
const { destinations } = await response.json();

function renderDestination(index) {
  const dest = destinations[index];

  main.innerHTML = `
    <div class="grid-container grid-container--destination flow">
      <h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>

      <div class="planet-visual">
        <picture class="planet-spin">
          <source srcset="${dest.images.webp}" type="image/webp">
          <img src="${dest.images.png}" alt="The ${dest.name}">
        </picture>
      </div>

      <div class="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
        ${destinations.map((d, i) => `
          <button aria-selected="${i === index ? 'true' : 'false'}" role="tab" data-index="${i}" class="uppercase ff-sans-cond text-light letter-spacing-2">${d.name}</button>
        `).join('')}
      </div>

      <article class="destination-info flow destination-info--fade">
        <h2 class="fs-800 uppercase ff-serif">${dest.name}</h2>
        <p>${dest.description}</p>

        <div class="destination-meta flex">
          <div>
            <h3 class="text-light fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. distance</h3>
            <p class="ff-serif uppercase">${dest.distance}</p>
          </div>
          <div>
            <h3 class="text-light fs-200 uppercase ff-sans-cond letter-spacing-3">Est. travel time</h3>
            <p class="ff-serif uppercase">${dest.travel}</p>
          </div>
        </div>
      </article>
    </div>
  `;

  main.querySelectorAll('.tab-list button').forEach((btn) => {
    btn.addEventListener('click', () => {
      renderDestination(parseInt(btn.getAttribute('data-index'), 10));
    });
  });
}

renderDestination(0);
