const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
document.querySelectorAll('[data-product]').forEach(card => card.addEventListener('click', () => {
  const select = document.querySelector('#product-select');
  if (select) select.value = card.dataset.product;
}));
document.querySelector('#year').textContent = new Date().getFullYear();


