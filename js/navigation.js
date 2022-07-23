const navigation = document.getElementById('navigation');
// modal variables
const menuModal = document.querySelector('.menu-modal-wrapper');
const modalCloseButton = document.querySelector('.close-menu-button');
const mainMenuButton = document.querySelector('.main-menu-button');
const modalHeader = document.querySelector('.header');
const tableComps = document.querySelector('.table-comps');
// navigation titles
const contentHeaderText = document.getElementById('contentHeaderText');
const aboutUsText = document.getElementById('aboutUsText');
const pdfTitle = document.getElementById('pdfTitle');
// selected navigation contents
const contentDisplay = document.getElementById('contentDisplay');
const aboutText = document.getElementById('about-text');
const pdfContent = document.querySelector('.pdf-content');

aboutUsText.addEventListener('click', () => {
  // this callback function adds about us active class
  contentHeaderText.classList.remove('active-menu-button');
  pdfTitle.classList.remove('active-menu-button');
  aboutUsText.classList.add('active-menu-button');

  // content display disappear here
  contentDisplay.style.display = 'none';
  
  // about text appear here
  aboutText.style.display = 'block';  

  // pdf content disappear here
  pdfContent.style.display = 'none';
});

contentHeaderText.addEventListener('click', () => {
  // this callback function removes about us active class
  contentHeaderText.classList.add('active-menu-button');
  aboutUsText.classList.remove('active-menu-button');
  pdfTitle.classList.remove('active-menu-button');

  // content display appear here
  contentDisplay.style.display = 'block';
  
  // about text disappear here
  aboutText.style.display = 'none';  

  // pdf content disappear here
  pdfContent.style.display = 'none';
});

pdfTitle.addEventListener('click', () => {
  // this callback function removes about us active class 
  pdfTitle.classList.add('active-menu-button');
  aboutUsText.classList.remove('active-menu-button');
  contentHeaderText.classList.remove('active-menu-button');

  // content display disappear here
  contentDisplay.style.display = 'none';
  
  // about text disappear here
  aboutText.style.display = 'none';  

  // pdf content appear here
  pdfContent.style.display = 'block';
});
/*
setTimeout(() => {
  navigation.style.opacity = '1';
  navigation.style.pointerEvents = 'all';
}, 2700);
*/
setTimeout(() => {
  navigation.classList.remove('dn');
  navigation.classList.add('db');
}, 2700);

// menu modal open
mainMenuButton.addEventListener('click', () => {
  menuModal.classList.add('menu-active');
  navigation.classList.remove('db');
  navigation.classList.add('dn');
  prefaceContent.style.display = 'none';
  modalCloseButton.style.pointerEvents = 'all';
  setTimeout(() => {
    modalHeader.classList.remove('dn');
    modalHeader.classList.add('df');
    tableComps.classList.remove('dn');
    tableComps.classList.add('df');
  }, 200);
});
// menu modal close
modalCloseButton.addEventListener('click', () => {
  if (menuModal.classList.contains('menu-active')) {
    menuModal.classList.remove('menu-active');
    navigation.classList.remove('dn');
    navigation.classList.add('db');
    modalHeader.classList.remove('df');
    modalHeader.classList.add('dn');
    tableComps.classList.remove('df');
    tableComps.classList.add('dn');
    if(headTitle.textContent == 'წინასიტყვაობა') {
      prefaceContent.style.display = 'block';
    }
  }
});
