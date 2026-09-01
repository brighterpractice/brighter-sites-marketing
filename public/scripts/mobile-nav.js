const mobileNav = document.querySelector('.mobile-nav-details');
const mobileMenuButton = mobileNav?.querySelector('.mobile-menu-button');

const closeMobileNav = () => {
  if (!mobileNav?.open) return;

  mobileNav.removeAttribute('open');
  mobileMenuButton?.setAttribute('aria-label', 'Open navigation');
};

mobileNav?.addEventListener('toggle', () => {
  mobileMenuButton?.setAttribute(
    'aria-label',
    mobileNav.open ? 'Close navigation' : 'Open navigation',
  );
});

document.addEventListener('pointerdown', (event) => {
  if (!mobileNav?.open) return;

  if (event.target instanceof Node && !mobileNav.contains(event.target)) {
    closeMobileNav();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileNav();
    mobileMenuButton?.focus();
  }
});
