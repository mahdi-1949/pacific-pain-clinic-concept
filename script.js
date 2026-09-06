const form = document.querySelector('#demo-form');
const toast = document.querySelector('.toast');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  toast.classList.add('show');
  form.reset();
  window.setTimeout(() => toast.classList.remove('show'), 3500);
});

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));