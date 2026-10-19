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

// Front-end demo: prepare an email draft. Replace the recipient before launch,
// or connect this form to a serverless endpoint / CRM to submit without an email app.
const form = document.querySelector('#inquiry-form');
const status = document.querySelector('#form-status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const fields = [
    ['Name', data.get('name')], ['Company', data.get('company')],
    ['Business email', data.get('email')], ['Country / region', data.get('country') || 'Not provided'],
    ['Packaging type', data.get('product')], ['Estimated quantity', data.get('quantity')],
    ['Project details', data.get('message')]
  ];
  const body = fields.map(([label, value]) => `${label}:\n${value}`).join('\n\n');
  const subject = encodeURIComponent(`MisiPackage B2B inquiry — ${data.get('company')}`);
  const recipient = 'YOUR-EMAIL@example.com'; // TODO: change to your real sales inbox
  status.textContent = 'Opening your email app with the inquiry draft. The website does not transmit or store form data yet.';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(body)}`;
});
