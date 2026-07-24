/* =========================
   KP POWERTECH Unified Script
   ========================= */

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Save preference
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
// Load saved preference
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
});

// Quote modal functionality
const quoteBtn = document.getElementById('quoteBtn');
const quoteModal = document.getElementById('quoteModal');
const closeBtn = document.querySelector('.close');

quoteBtn.addEventListener('click', () => {
  quoteModal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
  quoteModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === quoteModal) {
    quoteModal.style.display = 'none';
  }
});

// Success popup after form submission
const quoteForm = document.querySelector('#quoteModal form');
const successPopup = document.getElementById('successPopup');

quoteForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent actual submission for demo
  quoteModal.style.display = 'none'; // close modal
  successPopup.style.display = 'block'; // show popup
  setTimeout(() => {
    successPopup.style.display = 'none'; // hide after animation
  }, 2000);
});

// WhatsApp bounce animation (optional subtle effect)
const whatsappBtn = document.getElementById('whatsappBtn');
window.addEventListener('load', () => {
  setTimeout(() => {
    whatsappBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
      whatsappBtn.style.transform = 'scale(1)';
    }, 500);
  }, 1000);
});
