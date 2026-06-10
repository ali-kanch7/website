// ── Navigation ──────────────────────────────────────
function toggleNav() {
  document.getElementById('navbar').classList.toggle('open');
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ── Contact Form ────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  // Form submits via mailto or Formspree (see README for setup)
  const msg = document.getElementById('form-msg');
  if (msg) {
    msg.style.display = 'block';
    e.target.reset();
    setTimeout(() => msg.style.display = 'none', 5000);
  }
}

// ── Scroll reveal ──────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.timeline-item, .skill-card, .cert-card, .edu-card, .blog-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
