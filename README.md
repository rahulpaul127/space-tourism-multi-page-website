# Frontend Mentor - Space tourism website

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

| ![Desktop design](./design/desktop-design.webp) | ![Mobile design](./design/mobile-design.webp) |
| :--: | :--: |
| Desktop | Mobile |

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/space-tourism-multi-page-website-YJE1fOp1JY)
- Live Site URL: [GitHub Pages](https://rahulpaul127.github.io/space-tourism-multi-page-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (design tokens)
- CSS Flexbox & CSS Grid
- Mobile-first responsive workflow
- Vanilla JavaScript for tab interactivity
- Multi-page architecture (`index.html`, `destination.html`, `crew.html`, `technology.html`)

### Project structure

```
index.html          → Home (static HTML)
destination.html    → Destination tabs + planet animation
crew.html           → Crew tabs
technology.html     → Technology tabs
js/nav.js           → Mobile menu (all pages)
js/destination.js   → Destination tabs from data.json
js/crew.js          → Crew tabs from data.json
js/technology.js    → Technology tabs from data.json
data.json           → Content for dynamic sections
```

### What I learned

During this project, I gained significant experience in several key areas:

- **Multi-page architecture:** Each main section has its own HTML file with real URLs, while JavaScript only handles tab switching within Destination, Crew, and Technology.

- **Asynchronous Data Fetching:** I fetch and parse `data.json` with `async/await` on the pages that need dynamic tab content.

- **CSS animations:** Destination planets use a slow 2D `rotate` spin (`planet-rotate`, 90s loop) with `prefers-reduced-motion` respected via the global reduced-motion rules.

- **Advanced CSS Grid Layouts:** I utilized CSS Grid extensively, specifically relying on `grid-template-areas` to restructure complex layouts from mobile to desktop screens cleanly.

```css
@media (min-width: 45em) {
  .grid-container--destination {
    grid-template-areas: 
      '. title title .'
      '. image tabs .'
      '. image content .';
  }
}
```

- **Accessible Tab Interfaces:** I built interactive tabbed interfaces for the sub-pages (e.g., destinations, crew members) using proper accessibility attributes like `role="tablist"`, `role="tab"`, and `aria-selected` to ensure screen readers can understand the interactive state.

- **Design Systems with CSS Variables:** I set up a robust design system using CSS custom properties for typography, colors, and layout spacing, which made it extremely easy to maintain consistency across the entire application.

### Continued development

- **Accessibility Improvements:** Refine keyboard navigation and focus management when switching tabs.
- **Preloading Images:** Preload destination and crew images to reduce flicker on first tab click.

## Author

- Frontend Mentor - [@rahulpaul127](https://www.frontendmentor.io/profile/rahulpaul127)
- Twitter - [@rahulpaul127](https://x.com/rahulpaul127)
