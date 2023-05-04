// Get year for copyright
const copyright = document.getElementById('copyright');
const year = new Date().getFullYear();
copyright.setAttribute('style', 'white-space: pre');
copyright.textContent = `Made by Joan Serrano\nCopyright © ${year}`;

// Menu dropdown handler
const menuButton = document.getElementById('menu');
const closeButton = document.getElementById('close');
const menuDropdown = document.getElementById('dropdown');

menuButton.addEventListener('click', () => {
  menuButton.style.display = 'none';
  closeButton.style.display = 'block';
  menuDropdown.style.display = 'flex';
})

closeButton.addEventListener('click', () => {
  closeButton.style.display = 'none';
  menuButton.style.display = 'block';
  menuDropdown.style.display = 'none';
})

// Emailjs handler
function emailjs() {
  emailjs.init('6k3-Gl0ANeJNcqsaT');
};

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    console.log('submitted');
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form', this)
      .then(function() {
        console.log('SUCCESS!');
      }, function(error) {
        console.log('FAILED...', error);
      });
  });
}

emailjs();
