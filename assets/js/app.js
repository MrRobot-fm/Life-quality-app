import { teleport } from './api.js';
import { createAndAppendSummary } from './createSummary.js';
import { create, append, progress } from './createCategories.js';

import { progressBarStyle, footerStyle } from './style.js';

const div = document.querySelector('.container_categories');
const articleContainer = document.querySelector('.article_container');
const descriptionDiv = document.querySelector('.summary_description');
const inputSearch = document.querySelector('.input_search');
const buttonSearch = document.querySelector('.button_search');
const titleH2Summary = document.querySelector('.title');
const mainContainer = document.querySelector('.main_container');
const errorStatus = document.querySelector('.error');
const footerContainer = document.querySelector('.footer_container');

const renderPage = async function (city) {
  const teleportData = await teleport(city);

  createAndAppendSummary(teleportData, city);

  teleportData.dataTeleport.data.categories.forEach(element => {
    // Create elements function
    create();

    // Categories scores conversion
    const conversion = element.score_out_of_10.toFixed(1) * 10;

    // Append elements function
    append(element, conversion, progress);

    // Progress bar style,  and
    progressBarStyle(conversion, element);

    footerStyle();
    // Clear input value
    inputSearch.value = '';

    // Transition animation function
    animationTransition();
  });
};

const animationTransition = function () {
  articleContainer.style.opacity = 1;
  div.style.opacity = 1;
  articleContainer.style.transform = 'translateX(0)';
  articleContainer.style.transition = 'all 1.5s';
  div.style.transform = 'translateX(0)';
  div.style.transition = 'all 1.5s';
};

const innerAndSubmitData = function () {
  articleContainer.style.opacity = 0;
  div.style.opacity = 0;
  articleContainer.style.transition = 'all 0.4s';
  div.style.transition = 'all 0.4s';
  errorStatus.style.opacity = 0;
  descriptionDiv.innerHTML = '';
  div.innerHTML = '';
  titleH2Summary.innerHTML = '';
  mainContainer.style.display = 'none';
  footerContainer.style.display = 'none';
  renderPage(inputSearch.value.toLowerCase().replace(' ', '-'));
};

buttonSearch.addEventListener('click', innerAndSubmitData);

export {
  div,
  descriptionDiv,
  titleH2Summary,
  footerContainer,
  inputSearch,
  errorStatus
};
