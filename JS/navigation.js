const navigation = document.getElementById('navigation');
// modal variables
const menuModal = document.querySelector('.menu-modal-wrapper');
const modalCloseButton = document.querySelector('.close-menu-button');
const mainMenuButton = document.querySelector('.main-menu-button');

setTimeout(() => {
  navigation.style.display = 'block';
}, 700);

mainMenuButton.addEventListener('click', (e) => {
  menuModal.classList.add('menu-active');
  modalCloseButton.style.pointerEvents = 'all'
})

modalCloseButton.addEventListener('click', () => {
  if (menuModal.classList.contains("menu-active")) {
    menuModal.classList.remove("menu-active");
  }
})
