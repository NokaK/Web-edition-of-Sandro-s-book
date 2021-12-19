const navigation = document.getElementById('navigation');
// modal variables
const menuModal = document.querySelector('.menu-modal-wrapper');
const modalCloseButton = document.querySelector('.close-menu-button');
const mainMenuButton = document.querySelector('.main-menu-button');

setTimeout(() => {
  navigation.style.display = 'block';
}, 1700);

// menu modal open
mainMenuButton.addEventListener('click', () => {
  menuModal.classList.add('menu-active');
  modalCloseButton.style.pointerEvents = 'all'
})
// menu modal close
modalCloseButton.addEventListener('click', () => {
  if (menuModal.classList.contains("menu-active")) {
    menuModal.classList.remove("menu-active");
  }
})
