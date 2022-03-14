import { div, descriptionDiv, titleH2Summary } from './app.js';

export const createAndAppendSummary = function (teleportData, city) {
  // Create elements
  const cityScore = document.createElement('h3');
  const titleCat = document.createElement('div');
  const title = document.createElement('h2');
  const linkDiv = document.createElement('div');
  const link = document.createElement('a');

  // Set attribute
  link.setAttribute('href', `https://teleport.org/cities/${city}/`);
  link.setAttribute('target', '_blank');

  // Add classlist
  cityScore.classList.add('city_score');
  titleCat.classList.add('title_categories');
  linkDiv.classList.add('link_div');
  link.classList.add('link_info');

  // Insert or append elements
  descriptionDiv.insertAdjacentHTML('afterbegin', teleportData.summary);
  descriptionDiv.appendChild(cityScore);
  div.append(titleCat);
  titleCat.appendChild(title);
  descriptionDiv.appendChild(linkDiv);
  linkDiv.append(link);

  // Style elements
  titleH2Summary.textContent = `${city.toUpperCase().replace('-', ' ')}`;
  cityScore.textContent = `CITY SCORE: ${teleportData.cityScoreData.toFixed(1)}%`;
  title.textContent = 'LIFE SCORE QUALITY';
  link.textContent = `More info`;
};
