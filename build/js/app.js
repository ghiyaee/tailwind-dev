const menuHam = document.querySelector('#ham-menu');
const menuOpen = document.querySelector('#menu')

const handelToggel = () => {
    menuOpen.classList.toggle('hidden');
}

const handelCloseToggel = () => {
    menuOpen.classList.toggle('hidden');
    // menuOpen.classList.toggle('flex');
};

menuHam.addEventListener('click', handelToggel);
menuOpen.addEventListener('click', handelCloseToggel);
