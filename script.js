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
