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


// Copy email to clipboard
const tel = document.getElementById('copy-tel');
const email = document.getElementById('copy-email');
const telTooltip = document.getElementById('tel-tooltip');
const emailTooltip = document.getElementById('email-tooltip');

tel.addEventListener('click', async () => {
  try {
    telTooltip.textContent = 'Copied!';
    navigator.clipboard.writeText('+34663014045');
  } catch (err) {
    console.log(err);
  }
});

tel.addEventListener('mouseout', () => {
  telTooltip.textContent = 'Copy';
})

email.addEventListener('click', async () => {
  try {
    emailTooltip.textContent = 'Copied!';
    navigator.clipboard.writeText('joan.sb@hotmail.com');
  } catch (err) {
    console.log(err);
  }
});

email.addEventListener('mouseout', () => {
  emailTooltip.textContent = 'Copy';
})