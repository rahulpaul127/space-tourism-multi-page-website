let siteData = null;

async function init() {
  const response = await fetch('./data.json');
  siteData = await response.json();
  
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const primaryNav = document.querySelector('#primary-navigation');
  
  navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === 'false') {
      primaryNav.setAttribute('data-visible', 'true');
      navToggle.setAttribute('aria-expanded', 'true');
    } else {
      primaryNav.setAttribute('data-visible', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('.primary-navigation li').forEach(li => {
    li.addEventListener('click', (e) => {
      e.preventDefault();
      const link = li.querySelector('a');
      const route = link.getAttribute('data-route');
      
      // Update Active State
      document.querySelectorAll('.primary-navigation li').forEach(l => l.classList.remove('active'));
      li.classList.add('active');
      
      // Close mobile menu
      primaryNav.setAttribute('data-visible', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
      
      navigate(route);
    });
  });

  // Initial load
  document.querySelector('.primary-navigation a[data-route="home"]').parentElement.classList.add('active');
  navigate('home');
}

function navigate(route) {
  const main = document.getElementById('main-content');
  document.body.className = route;
  
  if (route === 'home') {
    main.innerHTML = `
      <div class="grid-container grid-container--home">
        <div>
          <h1 class="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
          <span class="d-block fs-900 ff-serif text-white">Space</span></h1>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we'll give you a truly out of this world experience!</p>
        </div>
        <div>
          <a href="#" class="large-button uppercase ff-serif text-dark bg-white" id="explore-btn">Explore</a>
        </div>
      </div>
    `;
    document.getElementById('explore-btn').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.primary-navigation a[data-route="destination"]').click();
    });
  } 
  else if (route === 'destination') {
    renderDestination(0);
  }
  else if (route === 'crew') {
    renderCrew(0);
  }
  else if (route === 'technology') {
    renderTechnology(0);
  }
}

function renderDestination(index) {
  const dest = siteData.destinations[index];
  const main = document.getElementById('main-content');
  
  main.innerHTML = `
    <div class="grid-container grid-container--destination flow">
      <h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
      
      <picture>
        <source srcset="${dest.images.webp}" type="image/webp">
        <img src="${dest.images.png}" alt="The ${dest.name}">
      </picture>
      
      <div class="tab-list underline-indicators flex" role="tablist" aria-label="destination list">
        ${siteData.destinations.map((d, i) => `
          <button aria-selected="${i === index ? 'true' : 'false'}" role="tab" data-index="${i}" class="uppercase ff-sans-cond text-light letter-spacing-2">${d.name}</button>
        `).join('')}
      </div>
      
      <article class="destination-info flow">
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
  
  main.querySelectorAll('.tab-list button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      renderDestination(parseInt(e.currentTarget.getAttribute('data-index')));
    });
  });
}

function renderCrew(index) {
  const member = siteData.crew[index];
  const main = document.getElementById('main-content');
  
  main.innerHTML = `
    <div class="grid-container grid-container--crew flow">
      <h1 class="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
      
      <div class="dot-indicators flex" role="tablist" aria-label="crew member list">
        ${siteData.crew.map((c, i) => `
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
  
  main.querySelectorAll('.dot-indicators button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      renderCrew(parseInt(e.currentTarget.getAttribute('data-index')));
    });
  });
}

function renderTechnology(index) {
  const tech = siteData.technology[index];
  const main = document.getElementById('main-content');
  
  main.innerHTML = `
    <div class="grid-container grid-container--technology flow">
      <h1 class="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>
      
      <div class="number-indicators flex" role="tablist" aria-label="technology list">
        ${siteData.technology.map((t, i) => `
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
  
  main.querySelectorAll('.number-indicators button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      renderTechnology(parseInt(e.currentTarget.getAttribute('data-index')));
    });
  });
}

init();
