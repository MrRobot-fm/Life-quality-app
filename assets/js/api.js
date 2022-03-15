import { inputSearch, errorStatus } from './app.js';
import get from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/get.js';

export const teleport = async function (city) {
  try {
    return await axios
      .get(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`)
      .then(response => {
        const dataTeleport = response;
        const dataCategories = get(response, 'data.categories', '');
        const summary = get(response, 'data.summary', '');
        const cityScoreData = get(response, 'data.teleport_city_score', '');
        return { dataTeleport, dataCategories, summary, cityScoreData };
      });
    console.log(response)
  } catch (err) {
    inputSearch.value = '';
    errorStatus.style.opacity = 1;
    errorStatus.innerText = `Error${err.response.status}. City not found. Please try again!`;
  }
};
