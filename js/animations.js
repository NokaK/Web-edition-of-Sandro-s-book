const loaderContainer = document.getElementById('loader-container');
const loader = document.getElementById('loader');
const playButtonLoaderWrapper = document.querySelector(
  '.play-button-loader-wrapper'
);
const lettersContainer = document.getElementById('letters-container');
const sorted_letters_container = document.getElementById(
  'sorted-letters-container'
);
const bigTitle = document.getElementById('big-title');
const startingButtonTitle = document.getElementById('starting-button-title');
const secondaryNavBar = document.getElementById('secondary-nav-bar');

window.addEventListener('load', () => {
  loaderContainer.style.transform = 'translateX(-100%)';
  loader.classList.add('loader-active');
  setTimeout(() => {
    loader.style.display = 'none';
    playButtonLoaderWrapper.classList.add('play-button-loader-wrapper-active');
    startingButtonTitle.classList.add('starting-button-title-active');
    lettersContainer.classList.add('letters-container-active');
    bigTitle.classList.add('big-title-active');
    headTitle.classList.add('title-active');
    loaderContainer.style.transform = 'translateX(-50%)';
    loaderContainer.style.transitionDelay = '0.5s';
    sorted_letters_container.classList.add('sorted-letters-container-active');
  }, 2000);
});

const hideElements = () => {
  sorted_letters_container.classList.remove('sorted-letters-container-active');
  bigTitle.classList.remove('big-title-active');
  playButtonLoaderWrapper.classList.remove('play-button-loader-wrapper-active');
  startingButtonTitle.classList.remove('starting-button-title-active');
  lettersContainer.classList.remove('letters-container-active');
};

playButtonLoaderWrapper.addEventListener('click', () => {
  hideElements();
  secondaryBackground.classList.add('active');
  secondaryNavBar.classList.add('secondary-nav-bar-active');
  loaderContainer.style.transform = 'translateX(-0%)';
  loaderContainer.style.transition = 'unset';
  setTimeout(() => {
    loaderContainer.style.transform = 'translateX(-85%)';
    loaderContainer.style.transition = 'transform 0.3s ease-in 0.2s';
  }, 2000);
});
