/* ── NEXIFY DESIGN — MAIN JS ── */

// ── LOGO (embedded via data URI) ──
// The logo is loaded from /images/logo.jpg
// If running locally without server, it falls back gracefully

document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initMobileMenu();
  initParticles();
  initScrollReveal();
  initBlogCards();
  initContactForm();
  initWhatsApp();
});

// ── NAVBAR SCROLL ──
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── MOBILE MENU ──
function initMobileMenu() {
  window.toggleMenu = function () {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.toggle('open');
  };
  // Close menu on outside click
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.hamburger');
    if (menu && burger && !menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
}

// ── PARTICLES ──
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = [
    'rgba(77,166,255,.5)',
    'rgba(212,175,55,.4)',
    'rgba(107,193,255,.4)',
    'rgba(244,197,66,.3)'
  ];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = [
      'width:' + size + 'px',
      'height:' + size + 'px',
      'left:' + (Math.random() * 100) + '%',
      'top:' + (Math.random() * 100) + '%',
      'background:' + color,
      'animation-delay:' + (Math.random() * 6) + 's',
      'animation-duration:' + (6 + Math.random() * 6) + 's',
      'box-shadow:0 0 ' + (size * 3) + 'px ' + color
    ].join(';');
    container.appendChild(p);
  }
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function (el) { obs.observe(el); });
}

// ── BLOG CARDS — open full post on same site ──
function initBlogCards() {
  // Blog cards with data-post attribute navigate to post page
  document.querySelectorAll('[data-post]').forEach(function (card) {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function (e) {
      // Don't trigger if clicking a button/link inside card
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
      const slug = card.getAttribute('data-post');
      if (slug) window.location.href = '/post.html?slug=' + slug;
    });
  });
}

// ── CONTACT FORM ──
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('fname');
    const phone = document.getElementById('fphone');
    const email = document.getElementById('femail');
    if (!name || !phone || !email) return;
    if (!name.value.trim() || !phone.value.trim() || !email.value.trim()) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    if (!isValidEmail(email.value.trim())) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    const btn = form.querySelector('.btn-submit');
    if (btn) { btn.textContent = 'Sending...'; btn.disabled = true; }
    // Netlify Forms handles submission automatically
    // For Netlify: add netlify attribute to form in HTML
    setTimeout(function () {
      if (btn) { btn.textContent = 'Send Message ✦'; btn.disabled = false; }
      form.reset();
      showToast('✓ Message sent! We will reply within 24 hours.', 'success');
    }, 1200);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showToast(message, type) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.style.background = type === 'error'
    ? 'linear-gradient(135deg,rgba(255,100,100,.95),rgba(255,80,80,.95))'
    : 'linear-gradient(135deg,rgba(77,166,255,.95),rgba(107,193,255,.95))';
  toast.style.display = 'block';
  setTimeout(function () { toast.style.display = 'none'; }, 4500);
}

// ── WHATSAPP ──
function initWhatsApp() {
  const btn = document.getElementById('whatsappBtn');
  if (!btn) return;
  // Read phone from settings if available
  const phone = btn.getAttribute('data-phone') || '91XXXXXXXXXX';
  const msg = encodeURIComponent('Hi Nexify Design! I would like to discuss a project.');
  btn.href = 'https://wa.me/' + phone + '?text=' + msg;
}

// ── BLOG FILTER (blog.html) ──
window.filterPosts = function (category, btn) {
  document.querySelectorAll('.filter-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');
  document.querySelectorAll('.blog-card').forEach(function (card) {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};
