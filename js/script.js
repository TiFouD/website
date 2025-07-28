// Wait for all page content to load before executing the script
document.addEventListener('DOMContentLoaded', () => {
  // --- Hamburger Menu Logic ---
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('header nav');
  const navLinks = document.querySelectorAll('header nav ul a');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  // Close the menu when a link is clicked (useful on mobile)
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
    });
  });

  // --- Smooth Scroll Logic ---
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  // --- Scroll Animation Logic ---

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.section-hidden');
  hiddenElements.forEach((el) => observer.observe(el));
});
