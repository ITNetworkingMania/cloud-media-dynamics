const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// This demo form validates the fields but does not send or store submissions.
// Connect a backend or form service before putting the website live.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = document.querySelector('#form-note');
    note.textContent = 'The form is working as a front-end demo, but it is not connected to an inbox yet. Add a form backend or email service before publishing.';
    note.classList.add('form-note-visible');
  });
}
