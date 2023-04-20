// Menu dropdown handler
const menuButton = document.getElementById('menu');
const closeButton = document.getElementById('close');


// segui aquí (no funciona addEventListener)
menuButton.addEventListener('click', () => {
  console.log('lol')
  menuButton.style.display = 'none';
  closeButton.style.display = 'block';
})

closeButton.addEventListener('click', () => {
  closeButton.style.display = 'none';
  menuButton.style.display = 'block';
})
