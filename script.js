const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  if (!nav) return;
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));

const productNames = {
  'sliding-drawer-box': 'Sliding Drawer Box',
  'child-resistant-tube-box': 'Child-Resistant Tube Box',
  'magnetic-rigid-gift-box': 'Magnetic Rigid Gift Box',
  'hanging-vape-box': 'Hanging Vape Box',
  'windowed-hanging-vape-box': 'Windowed Hanging Vape Box',
  'cardboard-display-box': 'Cardboard Display Box',
  'custom-mylar-bags': 'Custom Mylar Bags'
};
const productSlug = window.location.pathname.split('/')[2];
const pageType = window.location.pathname.startsWith('/products/') && productNames[productSlug]
  ? 'product'
  : window.location.pathname.startsWith('/about') ? 'about' : 'homepage';
const pageProductName = pageType === 'product' ? productNames[productSlug] : 'not_applicable';

function whatsappCtaPosition(link) {
  if (link.classList.contains('whatsapp-float')) return 'floating_button';
  if (link.closest('.site-header')) return 'header_navigation';
  if (link.closest('.site-footer')) return 'footer';
  if (link.closest('.hero, .detail-hero')) return 'hero_button';
  if (link.closest('.products-section')) return 'product_section';
  if (link.closest('.custom-section')) return 'customization_section';
  if (link.closest('.faq-cta')) return 'faq_cta';
  if (link.closest('.quote-section, .detail-cta, .about-cta')) return 'bottom_cta';
  return 'website_button';
}

function trackWhatsAppClick(link, href, productName = pageProductName, ctaPosition = whatsappCtaPosition(link)) {
  if (typeof gtag !== 'function') return;
  const destination = new URL(href, window.location.href);
  // Exclude prefilled messages, query parameters and fragments from analytics.
  gtag('event', 'whatsapp_click', {
    event_category: 'lead_generation',
    event_label: link.classList.contains('whatsapp-float') ? 'floating_button' : 'website_button',
    page_type: pageType,
    product_name: productName,
    cta_position: ctaPosition,
    link_url: destination.origin + destination.pathname
  });
}

// One delegated handler covers existing links and product-generated WhatsApp actions.
document.addEventListener('click', (event) => {
  const link = event.target.closest?.('a');
  if (!link || !link.getAttribute('href')) return;

  if (link.hasAttribute('data-product') && link.getAttribute('href') === '#quote') {
    event.preventDefault();
    const product = link.dataset.product || 'Custom Packaging';
    const message = `Hello Misipackage, I'm interested in ${product}. I just viewed your website and would like to discuss a custom project. Can we chat?`;
    const whatsappUrl = `https://wa.me/8615919957110?text=${encodeURIComponent(message)}`;
    trackWhatsAppClick(link, whatsappUrl, product, 'product_section');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    return;
  }

  const destination = new URL(link.href);
  if (destination.hostname === 'wa.me' || destination.hostname === 'api.whatsapp.com' || destination.hostname === 'www.whatsapp.com') {
    trackWhatsAppClick(link, link.href);
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
