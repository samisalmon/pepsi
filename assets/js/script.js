function im(src) {
  document.querySelector("#p1").src = src;
}
function bg(col) {
  let sec = document.querySelector(".hero");
  sec.style.backgroundColor = col;
}

// Hamburger menu toggle with improvements
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.menu-overlay');
const body = document.body;

function openMenu() {
  navbar.classList.add('open');
  menuToggle.classList.add('open');
  overlay.classList.add('open');
  body.classList.add('menu-open');
  menuToggle.setAttribute('aria-expanded', 'true');
}
function closeMenu() {
  navbar.classList.remove('open');
  menuToggle.classList.remove('open');
  overlay.classList.remove('open');
  body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}
function toggleMenu() {
  if (navbar.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
}
if (menuToggle && navbar && overlay) {
  menuToggle.addEventListener('click', toggleMenu);
  menuToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  });
  overlay.addEventListener('click', closeMenu);
  // Close menu on nav link click (mobile)
  navbar.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) closeMenu();
    });
  });
}
