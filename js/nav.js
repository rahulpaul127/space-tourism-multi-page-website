const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('#primary-navigation');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.getAttribute('data-visible') === 'true';
    primaryNav.setAttribute('data-visible', isOpen ? 'false' : 'true');
    navToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.setAttribute('data-visible', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
