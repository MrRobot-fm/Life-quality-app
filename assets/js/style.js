import { value } from './createCategories.js';
import { footerContainer } from './app.js';

export const progressBarStyle = function (conversion, element) {
  value.style.width = `${conversion}%`;
  value.style.backgroundColor = element.color;
};

export const footerStyle = function () {
  footerContainer.style.display = 'block';
  footerContainer.style.marginTop = '10%';
};
