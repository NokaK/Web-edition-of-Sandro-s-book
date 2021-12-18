const loaderContainer = document.getElementById('loader-container');
const loader = document.getElementById('loader');
const playButtonLoaderWrapper = document.getElementById(
  'play-button-loader-wrapper'
);
const halfTitle = document.querySelector('.half-title');
const lettersContainer = document.getElementById('letters-container');
const sorted_letters_container = document.getElementById(
  'sorted-letters-container'
);
const bigTitle = document.getElementById('big-title');

window.addEventListener('load', () => {
  loaderContainer.style.transform = 'translateX(-100%)';
  loader.style.fill = '#000';
  setTimeout(() => {
    loader.style.display = 'none';
    playButtonLoaderWrapper.style.display = 'block';
    // lettersContainer.style.display = "block";
    lettersContainer.classList.add('letters-container-active');
    // bigTitle.style.display = "block";
    bigTitle.classList.add('big-title-active');
    loaderContainer.style.transform = 'translateX(-50%)';
    loaderContainer.style.transitionDelay = '0.5s';
    sorted_letters_container.style.opacity = '1';
    // halfTitle.style.color = "#fff";
    halfTitle.style.animation = 'color-change 0.2s ease 0.7s forwards';
  }, 1000);
});
