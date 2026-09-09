

document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('a.row');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
  }

  
  rows.forEach((row) => {
    row.addEventListener('pointerdown', () => row.classList.add('is-pressed'));
    row.addEventListener('pointerup', () => row.classList.remove('is-pressed'));
    row.addEventListener('pointerleave', () => row.classList.remove('is-pressed'));
  });
});
