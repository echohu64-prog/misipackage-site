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

document.querySelectorAll('[data-product]').forEach(card => {
  card.addEventListener('click', (event) => {
    event.preventDefault();

    const product = card.dataset.product || 'Custom Packaging';

    const message = `Hello Misipackage, I'm interested in ${product}. I just viewed your website and would like to discuss a custom project. Can we chat?`;

    const whatsappUrl = `https://wa.me/8615919957110?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();


