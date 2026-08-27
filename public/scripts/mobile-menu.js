const button = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('#mobile-navigation');

if (button instanceof HTMLButtonElement && menu instanceof HTMLElement) {
  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation');
    menu.hidden = true;
    document.body.classList.remove('mobile-menu-open');
  };

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';

    if (open) {
      closeMenu();
    } else {
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Close navigation');
      menu.hidden = false;
      document.body.classList.add('mobile-menu-open');
    }
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (button.getAttribute('aria-expanded') !== 'true') return;

    const target = event.target;

    if (!(target instanceof Node)) return;
    if (button.contains(target) || menu.contains(target)) return;

    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}
