(() => {
  'use strict';
  const page = document.querySelector('.blog-page');
  if (!page || page.dataset.blogInitialized === 'true') return;
  page.dataset.blogInitialized = 'true';

  const menuButton = page.querySelector('.menu-toggle');
  const nav = page.querySelector('.nav-links');
  const year = page.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  function closeMenu() {
    nav?.classList.remove('open');
    if (menuButton) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    }
  }

  function ctaPosition(link) {
    if (link.closest('.site-header')) return 'header_navigation';
    if (link.closest('.site-footer')) return 'footer';
    if (link.closest('.blog-quote')) return 'bottom_cta';
    if (link.closest('.blog-prose')) return 'article_inline';
    return 'website_button';
  }

  // This is the only click handler: navigation and tracking share delegation.
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const toggle = event.target.closest('.menu-toggle');
    if (toggle && toggle === menuButton) {
      if (!nav) return;
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
      return;
    }

    const link = event.target.closest('a[href]');
    if (!link || !page.contains(link)) return;
    if (nav?.contains(link)) closeMenu();

    let destination;
    try {
      destination = new URL(link.href, window.location.href);
    } catch {
      return;
    }
    if (destination.protocol !== 'https:' ||
        !['wa.me', 'api.whatsapp.com', 'www.whatsapp.com'].includes(destination.hostname)) return;
    if (typeof window.gtag !== 'function') return;

    const pageType = page.dataset.pageType === 'blog_article' ? 'blog_article' : 'blog_index';
    window.gtag('event', 'whatsapp_click', {
      event_category: 'lead_generation',
      event_label: 'website_button',
      page_type: pageType,
      product_name: 'not_applicable',
      cta_position: ctaPosition(link),
      // The message query and all fragments are deliberately excluded.
      link_url: destination.origin + destination.pathname
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !nav?.classList.contains('open')) return;
    closeMenu();
    menuButton?.focus();
  });
  if (typeof window.matchMedia === 'function') {
    window.matchMedia('(max-width: 1000px)').addEventListener('change', closeMenu);
  }
})();
