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
