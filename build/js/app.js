const menuHam = document.querySelector('#ham-menu');
const menuOpen = document.querySelector('#menuBar');

const handelToggel = () => {
  menuOpen.classList.toggle('hidden');
  menuHam.classList.toggle('open')
  menuOpen.classList.add('flex')

};

const handelCloseToggel = () => {
  menuOpen.classList.toggle('hidden');
  menuHam.classList.toggle('open');

};

menuHam.addEventListener('click', handelToggel);
menuOpen.addEventListener('click', handelCloseToggel);
