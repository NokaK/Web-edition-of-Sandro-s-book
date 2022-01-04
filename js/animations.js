const loaderContainer = document.getElementById('loader-container');
const loader = document.getElementById('loader');
const playButtonLoaderWrapper = document.getElementById(
  'play-button-loader-wrapper'
);
const lettersContainer = document.getElementById('letters-container');
const sorted_letters_container = document.getElementById(
  'sorted-letters-container'
);
const bigTitle = document.getElementById('big-title');
const startingButtonTitle = document.getElementById('starting-button-title');

window.addEventListener('load', () => {
  loaderContainer.style.transform = 'translateX(-100%)';
  loader.style.fill = '#000';
  setTimeout(() => {
    loader.style.display = 'none';
    playButtonLoaderWrapper.style.display = 'block';
    startingButtonTitle.style.opacity = '1';
    lettersContainer.classList.add('letters-container-active');
    bigTitle.classList.add('big-title-active');
    loaderContainer.style.transform = 'translateX(-50%)';
    loaderContainer.style.transitionDelay = '0.5s';
    sorted_letters_container.style.opacity = '1';
  }, 2000);
});