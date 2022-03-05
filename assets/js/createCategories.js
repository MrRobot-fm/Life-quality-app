import { div } from './app.js';

let createSection;
let createCategories;
let h2;
let spanCategoriesScore;
let progress;
let value;

export const create = function () {
  // Create element
  createSection = document.createElement('section');
  createCategories = document.createElement('div');
  h2 = document.createElement('span');
  spanCategoriesScore = document.createElement('span');
  progress = document.createElement('div');
  value = document.createElement('div');
  classList();
};

const classList = function () {
  createSection.classList.add('section_categories');
  createCategories.classList.add('categories');
  spanCategoriesScore.classList.add('percentage');
  value.classList.add('value');
  progress.classList.add('progressBar');
};

export const append = function (element, conversion, progress) {
  // Append element
  div.appendChild(createSection);
  createSection.appendChild(createCategories);
  const nameCategories = h2.append(element.name);
  createCategories.append(h2);
  const span2 = spanCategoriesScore.append(`${conversion}%`);
  createCategories.appendChild(progress);
  progress.appendChild(value);
  createCategories.append(spanCategoriesScore);
};

export { progress, value };
