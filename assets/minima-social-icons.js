document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav.site-nav');
  const checkbox = document.getElementById('nav-trigger');
  if (nav && checkbox) {
    checkbox.addEventListener('change', () => {
      nav.style.display = checkbox.checked ? 'block' : 'none';
    });
    // This is for cases where the URL changes but the page doesn't reload
    // e.g., using Jekyll's default `relative_url` filter on anchors
    // This makes sure the menu is closed when navigating
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        checkbox.checked = false;
        nav.style.display = 'none';
      });
    });
  }
});