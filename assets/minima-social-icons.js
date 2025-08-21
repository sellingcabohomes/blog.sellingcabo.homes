document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav.site-nav');
  const checkbox = document.getElementById('nav-trigger');
  if (nav && checkbox) {
    checkbox.addEventListener('change', () => {
      nav.style.display = checkbox.checked ? 'block' : 'none';
    });
  }
});