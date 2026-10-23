const contactForm = document.getElementById('myForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.style.display = 'none';
  successMessage.style.display = 'block';
});